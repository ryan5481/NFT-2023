// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract BasicNft is ERC721 {
    string public constant TOKEN_URI = "ipfs://QmcyD9tZKjFWmGhmnMnZkU1ETQrwQLgDytMCmyh5GUTzaJfilename=BitcoinApe4409.json";

    uint256 private s_tokenCounter;

    constructor() ERC721("Apes", "APE"){
        s_tokenCounter = 0;
    }

    function mintNft() public returns(uint256){ 
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenCounter = s_tokenCounter + 1;
        return s_tokenCounter;
    }

    function tokenURI(uint256 tokenId) public view returns(string memory){
        return TOKEN_URI;
    }
    function tokenCounter() public view returns(uint256){
        return s_tokenCounter;
    }
}

