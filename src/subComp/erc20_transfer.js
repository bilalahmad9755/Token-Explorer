import React from "react";
import {transfer} from "../blockchain/erc20Token";
import { Button } from "react-bootstrap";
import "../css/whitetxt.css";

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
export default ERC20Transfer