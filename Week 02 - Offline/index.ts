import { HDNodeWallet, Wallet } from "ethers";

export function deriveEthereumWallet(
  seed: Buffer,
  derivationPath: string
): Wallet {
  const privateKey = deriveEthereumPrivateKey(seed, derivationPath);
  const wallet = new Wallet(privateKey);
  
  // Log the Ethereum address
  console.log(`Ethereum Address: ${wallet.address}`);
  
  // Get public key using HDNode
  const hdNode = HDNodeWallet.fromSeed(seed).derivePath(derivationPath);
  console.log(`Public Key: ${hdNode.publicKey}`);

  return wallet;
}

export function deriveEthereumPrivateKey(
  seed: Buffer,
  derivationPath: string
): string {
  const hdNode = HDNodeWallet.fromSeed(seed);
  const child = hdNode.derivePath(derivationPath);
  return child.privateKey;
}

const seed = Buffer.from("your-seed-here", "hex");
const derivationPath = "m/44'/60'/0'/0/0"; // Standard Ethereum derivation path
deriveEthereumWallet(seed, derivationPath);
