import React from "react";
import {createSPLtoken} from "../blockchain/SPLtoken";

function TransferToken()
{
    const [token, setToken] = React.useState('');
    const [to, setTo] = React.useState('');
    const [amount, setAmount] = React.useState('');

    function updateToken(event)
    {
        setToken(event.target.value);
    }

    function updateTo(event)
    {
        setTo(event.target.value);
    }

    function updateAmount(event)
    {
        setAmount(event.target.value);
    }
    async function submitForm(event)
    {
        event.preventDefault();
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Transfer Token</h1>
            <form onSubmit={submitForm}>
                <label className="label">Token:</label>
                <input className="input" type="text" value={token} onChange={updateToken}/>
                <br/>
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
export default TransferToken