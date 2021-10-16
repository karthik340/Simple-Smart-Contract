const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile.js')
const provider = new HDWalletProvider(
    'Password of ethereum account',
    'Api to connect to rinkeby network'
);
const web3 = new Web3(provider)
let accounts;
const deploy = async () => {
    accounts=await web3.eth.getAccounts();
    console.log('attempting to deplot from account ',accounts[0])
    const result = await new web3.eth.Contract(interface)
    .deploy({data:'0x'+bytecode,arguments:['Hello World']})
    .send({gas:'1000000',from:accounts[0]});
    console.log('contract deployed to',result.options.address);
}
deploy();