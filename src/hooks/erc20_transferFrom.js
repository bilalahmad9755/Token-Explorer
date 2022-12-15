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
        <div>
            <form onSubmit={submitForm}>
                <label className="whitetxt">From:</label>
                <input className='form-control' type="text" value={from} onChange={updateFrom}/>
                <label className="whitetxt">To:</label>
                <input className='form-control' type="text" value={to} onChange={updateTo}/>
                <label  className="whitetxt">Amount:</label>
                <input className='form-control' type="text" value={amount} onChange={updateAmount}/>
                <Button variant='info' type="submit">TransferFrom</Button>
            </form>
        </div>
    );
}
export default ERC20TransferFrom