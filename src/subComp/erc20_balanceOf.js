import React from "react";
import {balanceOf} from "../blockchain/erc20Token";
import {Button} from "react-bootstrap";
import "../css/whitetxt.css";
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

export default ERC20BalanceOf