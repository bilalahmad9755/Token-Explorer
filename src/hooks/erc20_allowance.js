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
        <div>
            <form onSubmit={getAllowance}>
                <label className="whitetxt">Owner:</label>
                <input className="form-control" type='text' value={owner} onChange={updateOwner}/>
                <label className="whitetxt">Spender:</label>
                <input className="form-control" type='text' value={spender} onChange={updateSpender}/>
                <Button variant="info" type="submit">Allowance</Button>
                <p className="whitetxt">Allowance {_allowance}</p>
            </form>
        </div>
    );
}

export default ERC20Allowance