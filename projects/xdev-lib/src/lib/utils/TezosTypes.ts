export enum HardwareDeviceType {
    LedgerNanoS = 0,
    TrezorT = 1
}

export interface KeyStore {
    publicKey: string;
    privateKey: string;
    publicKeyHash: string;
    seed: string;
    derivationPath?: string;
    storeType: StoreType;
}
export enum StoreType {
    Mnemonic = 0,
    Fundraiser = 1,
    Hardware = 2
}

/**
 * Output of operation signing.
 */
export interface SignedOperationGroup {
    bytes: Buffer;
    signature: string;
}
