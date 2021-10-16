// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Greeting
{
    string public message;
    
    constructor (string memory initialMessage) 
    {
        message=initialMessage;
    }
    
    function setMessage(string memory newmessage) public
    {
        message=newmessage;
    }
    
}
