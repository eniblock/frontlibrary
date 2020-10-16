/*eslint no-bitwise: 0*/
/**
 * These two lines allow us to interface with Ledgerjs and use their transport layer code
 */
import TransportU2F from '@ledgerhq/hw-transport-u2f';
import App from '@obsidiansystems/hw-app-xtz';
import { localForger } from '@taquito/local-forging';
import {HardwareDeviceType, KeyStore, SignedOperationGroup, StoreType} from './TezosTypes';
import {TezosMessageUtils} from './TezosMessageUtils';
import {CryptoUtils} from './CryptoUtils';


/**
 * Current solution to keep global instance of Ledgerjs transport object for signing use.
 */
class TransportInstance {
    static transport = null;
    static async getInstance(): TransportU2F {
        if (this.transport === null) {
            this.transport = await TransportU2F.create();
        }
        return this.transport;
    }
}

export class TezosLedgerWallet {

    tezosMessageUtils = new TezosMessageUtils();
    cryptoUtils = new CryptoUtils();


    unlockAddress = async (deviceType: HardwareDeviceType, derivationPath: string): Promise<KeyStore> => {
        if (deviceType !== HardwareDeviceType.LedgerNanoS) {
            throw new Error('Unsupported hardware device');
        }

        const hexEncodedPublicKey = await this.getTezosPublicKey(derivationPath);
        // We slice off a byte to make sure we have a 64 bits coming in from the ledger package
        const publicKeyBytes = Buffer.from(hexEncodedPublicKey, 'hex').slice(1);
        const publicKey = this.tezosMessageUtils.readKeyWithHint(publicKeyBytes, 'edpk');
        const publicKeyHash = this.tezosMessageUtils.computeKeyHash(publicKeyBytes, 'tz1');

        return { publicKey: publicKey, privateKey: '', publicKeyHash: publicKeyHash, seed: '', storeType: StoreType.Hardware };
    }

    /**
     * Given a BIP44 derivation path for Tezos, get the Tezos Public Key
     *
     * @param derivationPath BIP44 Derivation Path
     */
    getTezosPublicKey = async (derivationPath: string): Promise<string> => {
        const transport = await TransportInstance.getInstance();
        const xtz = new App(transport);
        const result = await xtz.getAddress(derivationPath, true);
        const hexEncodedPublicKey = result.publicKey;

        return hexEncodedPublicKey;
    }

    /**
     * Given a BIP44 derivation path for Tezos, and the hex encoded, watermarked Tezos Operation, sign using the ledger
     *
     * @param derivationPath BIP44 Derivation Path
     * @param watermarkedOpInHex Operation
     */
    signTezosOperation = async (derivationPath: string, watermarkedOpInHex: string): Promise<Buffer> => {
        const transport = await TransportInstance.getInstance();
        const xtz = new App(transport);
        const result = await xtz.signOperation(derivationPath, watermarkedOpInHex);
        const hexEncodedSignature = result.signature;
        const signatureBytes = Buffer.from(hexEncodedSignature, 'hex');

        return signatureBytes;
    }

    initLedgerTransport = () => {
        TransportInstance.transport = null;
    }

    /**
     * Signs a forged operation
     * @param {string} forgedOperation Forged operation group returned by the Tezos client (as a hex string)
     * @param {KeyStore} keyStore Key pair along with public key hash
     * @param {string} derivationPath BIP44 Derivation Path if signed with hardware, empty if signed with software
     * @returns {SignedOperationGroup} Bytes of the signed operation along with the actual signature
     */
    signOperationGroup = async (forgedOperation: string, keyStore: KeyStore, derivationPath: string): Promise<SignedOperationGroup> => {
        const watermark = '03';
        const watermarkedForgedOperationBytesHex = watermark + forgedOperation;

        let opSignature: Buffer;
        switch (keyStore.storeType) {
            case StoreType.Hardware:
                opSignature = await this.signTezosOperation(derivationPath, watermarkedForgedOperationBytesHex);
                break;
            default:
                const hashedWatermarkedOpBytes = this.cryptoUtils.simpleHash(Buffer.from(watermarkedForgedOperationBytesHex, 'hex'), 32);
                const privateKeyBytes = this.tezosMessageUtils.writeKeyWithHint(keyStore.privateKey, 'edsk');

                opSignature = await this.cryptoUtils.signDetached(hashedWatermarkedOpBytes, privateKeyBytes);
        }

        const hexSignature: string = this.tezosMessageUtils.readSignatureWithHint(opSignature, 'edsig').toString();
        const signedOpBytes = Buffer.concat([Buffer.from(forgedOperation, 'hex'), Buffer.from(opSignature)]);

        return { bytes: signedOpBytes, signature: hexSignature.toString()};
    }

    decode = async (unsignedPart) => {
        const decoded = await localForger.parse(unsignedPart);
        return decoded;
    }
    toHexString = (byteArray) => {
        return Array.from(byteArray, (byte: any) => {
            return ('0' + (byte & 0xFF).toString(16)).slice(-2);
        }).join('');
    }
}
