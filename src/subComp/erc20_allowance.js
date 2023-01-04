import React from "react";
import { Button } from "react-bootstrap";
import {allowance} from "../blockchain/erc20Token";
import "../css/whitetxt.css";
function ERC20Allowance()
{
    const [owner, setOwner] = React.useState('');
    const [spender, setSpender] = React.useState('');
    const [_allowance, setAllowance] = React.useState('');

    async function getAllowance(event)
    {
        event.preventDefault();
        let _approval = await allowance(owner, spender);
        console.log(_approval);
        setAllowance(_approval);
    }
    function updateOwner(event)
    {
        setOwner(event.target.value);
    }
    function updateSpender(event)
    {
        setSpender(event.target.value);
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Allowance</h1>
            <form onSubmit={getAllowance}>
                <label className="label">Owner:</label>
                <input className="input" type='text' value={owner} onChange={updateOwner}/>
                <br/>
                <label className="label">Spender:</label>
                <input className="input" type='text' value={spender} onChange={updateSpender}/>
                <br/>
                <button className="button" type="submit">Allowance</button>
            </form>
            <br/>
            <p className="label">Allowance {_allowance}</p>
            <br/>

        </div>
    );
}

export default ERC20Allowance