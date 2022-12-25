var Web3 = require('web3');
var web3 = new Web3("https://eth-goerli.public.blastapi.io");


async function main(){
    // web3.eth.getBlockNumber().then(console.log);
    //
    // web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);

    let tx = {
        to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
        value: '1000000000',
        gas: 2000000
    }

    let signedTransaction = await web3.eth.accounts.signTransaction(tx, '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318');

    console.log(signedTransaction)
    console.log(signedTransaction.rawTransaction)

    web3.eth.sendSignedTransaction(signedTransaction.rawTransaction).on('receipt', console.log);
}

main()
