"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveEthereumWallet = deriveEthereumWallet;
exports.deriveEthereumPrivateKey = deriveEthereumPrivateKey;
const ethers_1 = require("ethers");
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
function deriveEthereumPrivateKey(seed, derivationPath) {
    const hdNode = ethers_1.HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    return child.privateKey;
}
const seed = Buffer.from("your-seed-here", "hex");
const derivationPath = "m/44'/60'/0'/0/0"; // Standard Ethereum derivation path
deriveEthereumWallet(seed, derivationPath);
