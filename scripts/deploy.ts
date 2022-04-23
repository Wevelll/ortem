import { ethers } from "hardhat";

async function main() {
  const OrtemFactory = await ethers.getContractFactory("Ortem");
  const Ortem = await OrtemFactory.deploy();

  await Ortem.deployed();

  console.log("Contract deployed to:", Ortem.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
