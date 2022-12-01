const Config = {
    Address: "0xFFAdeC74a097c9e4Cb682587DCCad51e671761CB",
    Abi: [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "num",
                    "type": "uint256"
                }
            ],
            "name": "isPrime",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "n",
                    "type": "uint256"
                }
            ],
            "name": "printFirstPrime",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "arr",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ]

}
export default Config;