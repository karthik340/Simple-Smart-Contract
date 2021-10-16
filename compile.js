const path = require('path');
const greetingsPath =path.resolve(__dirname,'contracts','Greetings.sol');
const fs = require('fs');
const solc = require('solc');
const source = fs.readFileSync(greetingsPath, 'utf8');
var input = {
    language: 'Solidity',
    sources: {
        'Greetings.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 
const output = JSON.parse(solc.compile(JSON.stringify(input)));
const interface = output.contracts['Greetings.sol'].Greeting.abi;
const bytecode = output.contracts['Greetings.sol'].Greeting.evm.bytecode.object;
module.exports = {
    interface,
    bytecode,
}