import React from "react";
import '../css/label.css';
import '../css/componentStyle.css';
import '../css/heading.css';
import { mintSPLtoken } from "../blockchain/SPLtoken";

function MintTokens()
{
    const [token, setToken] = React.useState('');
    const [to, setTo] = React.useState('');
    const [amount, setAmount] = React.useState('');

    async function updateTo(event)
    {
        setTo(event.target.value);
    }
    async function updateAmount(event)
    {
        setAmount(event.target.value);
    }
    async function updateToken(event)
    {
        setToken(event.target.value);
    }
    async function submitForm(event)
    {
        event.preventDefault();
        await mintSPLtoken(token, to, amount);
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Mint Tokens</h1>
            <form onSubmit={submitForm}>
            <label className="label">Token Address</label>
                <input className="input" type="text" value={token} onChange={updateToken}/>
                <br/>
                <label className="label">Mint To</label>
                <input className="input" type="text" value={to} onChange={updateTo}/>
                <br/>
                <label className="label">Amount:</label>
                <input className="input" type="text" value={amount} onChange={updateAmount}/>
                <br/>
                <button className="button" type="submit">Mint Tokens</button>
            </form>
            <br/>
        </div>
    );
}

export default MintTokens