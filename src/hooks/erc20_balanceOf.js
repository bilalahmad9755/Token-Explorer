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
        <div>
            <form onSubmit={getBalance}>
                <label className="whitetxt">Owner:</label>
                <input className="form-control" type='text' value={owner} onChange={updateOwner}/>
                <Button type="submit" variant='info'>Balance</Button>
                <p className="whitetxt">Balance: {balance}</p>
            </form>
        </div>
    );
}

export default ERC20BalanceOf