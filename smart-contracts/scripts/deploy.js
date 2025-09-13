
const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying ECommerceMarketplace contract...");
  
  const ECommerceMarketplace = await ethers.getContractFactory("ECommerceMarketplace");
  const marketplace = await ECommerceMarketplace.deploy();
  
  await marketplace.deployed();
  
  console.log("ECommerceMarketplace deployed to:", marketplace.address);
  
  // Save deployment info
  const fs = require('fs');
  const deploymentInfo = {
    contractAddress: marketplace.address,
    network: network.name,
    deployedAt: new Date().toISOString()
  };
  
  fs.writeFileSync(
    './deployment-info.json',
    JSON.stringify(deploymentInfo, null, 2)
  );
  
  console.log("Deployment info saved to deployment-info.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
