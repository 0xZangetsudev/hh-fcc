const { task } = require("hardhat/config"); 

task("block-number", "Prints the current block number").setAction(
	// const blockTask = async function() => {}
	// async function blockTask() {}
	async (tasksArgs, hre) => {
	  const blockNumber = await hre.ethers.provider.getBlockNumber()
	  console.log(`Current blockNumber : ${blockNumber}`)
	});

module.exports = {}
