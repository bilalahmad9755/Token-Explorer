
import React from "react";
import {transferFrom, transfer, totalSupply, balanceOf, approve, allowance, } from "../blockchain/erc20Token";
import {Button} from "react-bootstrap";
import "../css/whitetxt.css";

function ERC20Allowance()
{
    const [owner, setOwner] = React.useState('');
    const [spender, setSpender] = React.useState('');
    const [_allowance, setAllowance] = React.useState('');

    async function getAllowance(event)
    {
        event.preventDefault();
        let _approval = await allowance(owner, spender);
        console.log(_approval);
        setAllowance(_approval);
    }
    function updateOwner(event)
    {
        setOwner(event.target.value);
    }
    function updateSpender(event)
    {
        setSpender(event.target.value);
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Allowance</h1>
            <form onSubmit={getAllowance}>
                <label className="label">Owner:</label>
                <input className="input" type='text' value={owner} onChange={updateOwner}/>
                <br/>
                <label className="label">Spender:</label>
                <input className="input" type='text' value={spender} onChange={updateSpender}/>
                <br/>
                <button className="button" type="submit">Allowance</button>
            </form>
            <br/>
            <p className="label">Allowance {_allowance}</p>
            <br/>

        </div>
    );
}

function ERC20Approve()
{
    const [spender, setSpender] = React.useState('');
    const [amount, setAmount] = React.useState('');
    function updateSpender(event)
    {
        setSpender(event.target.value);
    }
    function updateAmount(event)
    {
        setAmount(event.target.value);
    }
    function submitForm(event)
    {
        approve(spender, amount);
        event.preventDefault();
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Approve</h1>
            <form onSubmit={submitForm}>
                <label className="label">Spender:</label>
                <input className="input" type="text" value={spender} onChange={updateSpender}/>
                <label className="label">Amount:</label>
                <input className="input" type="text" value={amount} onChange={updateAmount}/>
                <button className="button" type="submit">Approve</button>
            </form>
            <br/>
        </div>
    );
}


function ERC20BalanceOf()
{
    const [owner, setOwner] = React.useState('');
    const [balance, setBalance] = React.useState('');

    async function getBalance(event)
    {
        event.preventDefault();
        let _balance = await balanceOf(owner);
        setBalance(_balance);
    }
    function updateOwner(event)
    {
        setOwner(event.target.value);
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Balance</h1>
            <form onSubmit={getBalance}>
                <label className="label">Owner:</label>
                <input className="input" type='text' value={owner} onChange={updateOwner}/>
                <button className="button" type="submit">Balance</button>
                <p className= "label" >Balance: {balance}</p>
            </form>
            <br/>
        </div>
    );
}
function ERC20TotalSupply()
{
    const [supply, setSupply] = React.useState('');
    async function getSupply()
    {
        let _supply = await totalSupply();
        console.log(_supply);
        setSupply(_supply);
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Total Supply</h1>
        <p className="label">Total Supply: {supply}</p>
        <button className="button" onClick={getSupply}>TotalSupply</button>
        </div>
    );
}

function ERC20Transfer()
{
    const [to, setTo] = React.useState('');
    const [amount, setAmount] = React.useState('');
    function updateTo(event)
    {
        setTo(event.target.value);
    }
    function updateAmount(event)
    {
        setAmount(event.target.value);
    }
    function submitForm(event)
    {
        transfer(to, amount);
        event.preventDefault();
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Transfer</h1>
            <form onSubmit={submitForm}>
                <label className="label">To:</label>
                <input className="input" type="text" value={to} onChange={updateTo}/>
                <br/>
                <label className="label">Amount:</label>
                <input className="input" type="text" value={amount} onChange={updateAmount}/>
                <br/>
                <button className="button" type="submit">Transfer</button>
            </form>
            <br/>
        </div>
    );
}

function ERC20TransferFrom()
{
    const [to, setTo] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [from, setFrom] = React.useState('');
    function updateTo(event)
    {
        setTo(event.target.value);
    }
    function updateAmount(event)
    {
        setAmount(event.target.value);
    }
    function updateFrom(event)
    {
        setFrom(event.target.value);
    }
    function submitForm(event)
    {
        transferFrom(to, from, amount);
        event.preventDefault();
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">TransferFrom</h1>
            <form onSubmit={submitForm}>
                <label className="label"> From:</label>
                <input className='input' type="text" value={from} onChange={updateFrom}/>
                <label className="label"> To:</label>
                <input className='input' type="text" value={to} onChange={updateTo}/>
                <label  className="label"> Amount:</label>
                <input className='input' type="text" value={amount} onChange={updateAmount}/>
                <button className="button" type="submit"> TransferFrom</button>
            </form>
            <br/>
        </div>
    );
}
export {ERC20Allowance, ERC20Approve, ERC20BalanceOf, ERC20TotalSupply, ERC20Transfer, ERC20TransferFrom}