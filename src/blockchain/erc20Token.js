import contract_abi from "../abi/erc20.json";
const Web3 = require("web3");
var state = 
{
    tokenAddress: '',
    tokenContract: '',
    walletAddress: '',
    provider: '',
    web3: '',
}
async function connectWallet()
{
    if (typeof window.ethereum !== 'undefined') 
    {
        console.log('MetaMask is installed!');
        try
        {
            state.provider = await window.ethereum;
            // console.log("provider instance: ", state.provider);
            let _accounts = await state.provider.request({ method: 'eth_requestAccounts' });
            state.walletAddress = _accounts[0];
            await initializeWeb3();
        }
        catch(Error)
        {
            console.log("metamask connection failed!");
            return false;
        }
        return state.walletAddress;
    }
    else
    {
        console.log("Metamask is not installed!");
        return false;
    }
}

async function initializeWeb3()
{
    try
    {
        state.web3 = await new Web3(state.provider);
        return true;
    }
    catch(Error)
    {
        console.log("web3 initialization failed!")
        return false;
    }
    
}
async function initializeContract()
{state.tokenContract = await new state.web3.eth.Contract(contract_abi, state.tokenAddress);}

async function importToken(_tokenAddress)
{
    state.tokenAddress = _tokenAddress;
    if(state.tokenAddress === '')
    {
        console.log("No address found!");
        return false;
    }
    try
    {
        await initializeContract();
        console.log("Contract Initialization Successful!");
        return true;
    }
    catch(Error)
    {
        console.log("Contract Initialization Failed!");
        return false;
    }

}
async function transfer(_to, _amount)
{
    try
    {
        let _success = await state.tokenContract.methods.transfer(_to, parseInt(_amount)).send({from: state.walletAddress});
        console.log("Transfer: ", _success);
    }
    catch(Error)
    {
        console.log("Transfer Failed!");
    }
}
async function transferFrom(_to, _from, _amount)
{
    try
    {
        let _success = await state.tokenContract.methods.transferFrom(_from, _to, parseInt(_amount)).send({from: state.walletAddress});
        console.log("TransferFrom: ", _success);
    }
    catch(Error)
    {
        console.log("TransferFrom Failed!");
    }
    
}
async function approve(_spender, _amount)
{
    try
    {
        let _success = await state.tokenContract.methods.approve(_spender, parseInt(_amount)).send({from: state.walletAddress});
        console.log("Approve Successful: ", _success);
    }
    catch(Error)
    {
        console.log("Approve Failed!");
    }
}
async function totalSupply()
{
    try
    {
        let _totalSupply = await state.tokenContract.methods.totalSupply().call();
        return _totalSupply;
    }
    catch(Error)
    {
        console.log("Failed to get TotalSupply!");
    }
}
async function allowance(_owner, _spender)
{
    try
    {
        let _allowance = await state.tokenContract.methods.allowance(_owner, _spender).call();
        return _allowance;
    }
    catch(Error)
    {
        console.log("Allowance Failed!");
    }
}

async function balanceOf(_user)
{
    let _balance = await state.tokenContract.methods.balanceOf(_user).call();
    return _balance;
}

export {importToken, transfer, transferFrom, approve, totalSupply, allowance, balanceOf, connectWallet}