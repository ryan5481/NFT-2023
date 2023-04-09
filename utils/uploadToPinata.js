const pinataSdk = require("@pinata/sdk")
const req = require("express/lib/request")
const path = require("path")
const fs = require("fs")

const StoreImages = async (imagesFilePath) => {
    const fullImagesPath = path.resolve(imagesFilePath)
    const files = fs.readdirSync(fullImagesPath)
}

module.exports = StoreImages
