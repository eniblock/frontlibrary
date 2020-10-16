/**
 * This file is not meant for public use. It hides libsodium-wrappers from the Typescript transpiler.
 */
import Sodiumsumo from 'libsodium-wrappers-sumo';

export const rand = async (length) => {
    await Sodiumsumo.ready;
    return Sodiumsumo.randombytes_buf(length);
};

export const salt = async () => {
    return rand(Sodiumsumo.crypto_pwhash_SALTBYTES);
};

export const nonce = async () => {
    return rand(Sodiumsumo.crypto_box_NONCEBYTES);
};

export const keys = async (seed) => {
    await Sodiumsumo.ready;
    return Sodiumsumo.crypto_sign_seed_keypair(seed, '');
};

export const pwhash = async (passphrase, saltVal) => {
    await Sodiumsumo.ready;
    return Sodiumsumo.crypto_pwhash(Sodiumsumo.crypto_box_SEEDBYTES, passphrase, saltVal,
        4, 33554432, Sodiumsumo.crypto_pwhash_ALG_ARGON2I13);
};

export const close = async (message, nonceVal, key) => {
    await Sodiumsumo.ready;
    return Sodiumsumo.crypto_secretbox_easy(message, nonceVal, key);
};

export const open = async (nonceAndCipherText, key) => {
    await Sodiumsumo.ready;

    const nonceVal = nonceAndCipherText.slice(0, Sodiumsumo.crypto_secretbox_NONCEBYTES);
    const ciphertext = nonceAndCipherText.slice(Sodiumsumo.crypto_secretbox_NONCEBYTES);

    return Sodiumsumo.crypto_secretbox_open_easy(ciphertext, nonceVal, key);
};

export const sign = async (message, key) => {
    await Sodiumsumo.ready;
    return Sodiumsumo.crypto_sign_detached(message, key);
};
