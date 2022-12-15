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
        <div>
            <form onSubmit={submitForm}>
                <label className="whitetxt">To:</label>
                <input className="form-control" type="text" value={to} onChange={updateTo}/>
                <label className="whitetxt">Amount:</label>
                <input className="form-control" type="text" value={amount} onChange={updateAmount}/>
                <Button variant='info' type="submit">Transfer</Button>
            </form>
        </div>
    );
}
export default ERC20Transfer