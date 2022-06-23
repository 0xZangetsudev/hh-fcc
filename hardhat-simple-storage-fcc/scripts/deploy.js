// imports  
// 
//
const {ethers,run,network } = require("hardhat");
 
// async main                            
async function main() {                                                                                                                                                                                            
        const SimpleStorageFactory = await ethers.getContractFactory(
                "SimpleStorage"
        )
        console.log("Deploying contract...")
        const simpleStorage = await SimpleStorageFactory.deploy()
        await simpleStorage.deployed()
	console.log(simpleStorage.address);
	console.log(network.config);

	if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
		await simpleStorage.deployTransaction.wait(6)
		await verify(simpleStorage.address, []
		)}

	const currentValue = await simpleStorage.retrieve(); 
	console.log(currentValue);
}

async function verify(contractAddress, args) {
	console.log("Verifying contract...")
	try {
		await run("verify:verify", {
	address:contractAddress, 
	constructorArgs:args
		})
	} catch (e) {
		if (e.message.toLowerCase().includes("already verified")) {
			console.log("Already Verified!")
		} else {
			console.log(e)
		}
}
}
// main 
main()    
        .then(() => process.exit(0))
        .catch((error) => {
                console.error(error);
                process.exit(1);
        });

