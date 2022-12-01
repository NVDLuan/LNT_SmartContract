import web3 from 'web3';
export function getContractInstance(abi, address) {
    let contract = new web3.eth.Contract(abi, address);
    return contract;
}

export async function isPrime(instance, num) {
    return await instance.methods.isPrime(num).call();
}

export async function printFirstPrime(instance, n) {
    return await instance.methods.printFirstPrime(n).call();
}

