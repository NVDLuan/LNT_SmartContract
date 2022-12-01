import Web3 from 'web3';
export function getContractInstance(abi, address) {
    return new Web3().eth.Contract(abi, address);

}

export async function isPrime(instance, num) {
    return await instance.methods.isPrime(num).call();
}

export async function printFirstPrime(instance, n) {
    return await instance.methods.printFirstPrime(n).call();
}

