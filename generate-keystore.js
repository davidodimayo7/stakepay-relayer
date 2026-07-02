const { ethers } = require("ethers");
const fs = require("fs");

async function main() {
  const wallet = ethers.Wallet.createRandom();
  const json = await wallet.encrypt("K9mP2qR7sT4vX1zB8nL5wC3dF6gH0jQ");
  fs.mkdirSync("config/keys", { recursive: true });
  fs.writeFileSync("config/keys/local-signer.json", json);
  console.log("New relayer address:", wallet.address);
}

main();
