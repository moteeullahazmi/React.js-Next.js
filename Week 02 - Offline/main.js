"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveEthereumWallet = deriveEthereumWallet;
exports.deriveEthereumPrivateKey = deriveEthereumPrivateKey;
exports.getEthereumWallet = getEthereumWallet;
const ethers_1 = require("ethers");
// Derive Ethereum wallet (private and public key pair)
function deriveEthereumWallet(seed, derivationPath) {
    const privateKey = deriveEthereumPrivateKey(seed, derivationPath);
    const wallet = new ethers_1.Wallet(privateKey);
    // Log the Ethereum address
    console.log(`Ethereum Address: ${wallet.address}`);
    // Get public key using HDNode
    const hdNode = ethers_1.HDNodeWallet.fromSeed(seed).derivePath(derivationPath);
    console.log(`Public Key: ${hdNode.publicKey}`);
    return wallet;
}
// Derive the Ethereum private key based on seed and derivation path
function deriveEthereumPrivateKey(seed, derivationPath) {
    const hdNode = ethers_1.HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    return child.privateKey;
}
/**
 * Validate an Ethereum private key and derive wallet
 */
function getEthereumWallet(privateKey) {
    let wallet;
    try {
        wallet = new ethers_1.Wallet(privateKey);
    }
    catch (_a) {
        throw new Error("Invalid Ethereum private key");
    }
    // Display Ethereum wallet information
    console.log(`Ethereum Address: ${wallet.address}`);
    // Wallet object doesn't directly expose publicKey, so this is omitted here
    return wallet;
}
// Example usage
const seed = Buffer.from("your-seed-here", "hex");
const derivationPath = "m/44'/60'/0'/0/0"; // Standard Ethereum derivation path
deriveEthereumWallet(seed, derivationPath);
