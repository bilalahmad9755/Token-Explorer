import React from "react";
import {approve} from "../blockchain/erc20Token";
import {Button} from "react-bootstrap";
import "../css/whitetxt.css";

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
export default ERC20Approve