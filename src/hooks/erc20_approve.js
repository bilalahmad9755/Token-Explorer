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
        <div>
            <form onSubmit={submitForm}>
                <label className="whitetxt">Spender:</label>
                <input className="form-control" type="text" value={spender} onChange={updateSpender}/>
                <label className="whitetxt">Amount:</label>
                <input className="form-control" type="text" value={amount} onChange={updateAmount}/>
                <Button variant="info" type="submit">Approve</Button>
            </form>
        </div>
    );
}
export default ERC20Approve