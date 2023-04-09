const { network } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
const { StoreImages } = require("../utils/uploadToPinata")

const DeployRandomIpfsNft = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId


let tokenUris
//programmitically get IPFS hashes of the images
if (process.env.UPLOAD_TO_PINATA == true) {
    tokenUris = await handleTokenUris()
}

let vrfCoordinatorV2Address, subscriptionId
if (developmentChains.includes(network.name)) {
    const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
    vrfCoordinatorV2Address = vrfCoordinatorV2Mock.address
    const tx = await vrfCoordinatorV2Mock.createSubscription()
    const txReceipt = await tx.wait(1)
    subscriptionId = txReceipt.events[0].args.subId
} else {
    vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2
    subscriptionId = networkConfig[chainId].subId
}

log("_________________________________________")
await storeImages("") = 

// const args = [
//     vrfCoordinatorV2Address,
//     subscriptionId,
//     networkConfig[chainId].gaslane,
//     networkConfig[chainId].callBackGasLimit,
//     // tokenUris
//     networkConfig[chainId].mintFee,
// ]

async function handleTokenUris() {
    tokenUris = []
    //store image in ipfs

    //store metadata in ipfs
    return tokenUris
}


}

module.exports = DeployRandomIpfsNft
