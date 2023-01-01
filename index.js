const axios = require('axios')

const ALCHEMY_URL = 'https://eth-goerli.g.alchemy.com/v2/hdcwkypzqyQGrVDq2H3t9ZLC9oUzwsRN'

async function getBlockByNumber() {
    const req = {
            jsonrpc: "2.0",
            method: "eth_getBlockByNumber",
            params: [
            "0xb443", // block 46147
            false  // retrieve the full transaction object in transactions array
            ]
        }
    const response = await axios.post(ALCHEMY_URL, req)
    
    console.log(response.data.result)
}
// getBlockByNumber()

async function blockNumber() {
    const req = {
        jsonrpc: "2.0",
        method: "eth_blockNumber",
        params: []
    }

    const response = await axios.post(ALCHEMY_URL,req)
    console.log(response.data.result)
}
blockNumber()
