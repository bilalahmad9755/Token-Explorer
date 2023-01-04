import React from "react";
import {transfer} from "../blockchain/solTransfer";
import "../css/whitetxt.css";
import "../css/input.css";
import "../css/componentStyle.css";
import "../css/button.css";
import "../css/heading.css";
import "../css/label.css";
function SOLtransfer()
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
    async function submitForm(event)
    {
        event.preventDefault();
        console.log(to);
        console.log(amount);
        await transfer(to, amount);
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Send Coin</h1>
            <form onSubmit={submitForm}>
                <label className="label">To:</label>
                <input className='input' type="text" value={to} onChange={updateTo}/>
                <br/>
                <label className="label">Amount:</label>
                <input className='input' type="text" value={amount} onChange={updateAmount}/>
                <br/>
                <button className='button' type="submit">Transfer SOL</button>
            </form>
            <br/>
        </div>
    );
}
export default SOLtransfer