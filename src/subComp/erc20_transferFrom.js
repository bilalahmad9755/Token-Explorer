import React from "react";
import {transferFrom} from "../blockchain/erc20Token";
import {Button} from "react-bootstrap";
import "../css/whitetxt.css";
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
export default ERC20TransferFrom
