import React from "react";
import {createSPLtoken} from "../blockchain/SPLtoken";
import "../css/whitetxt.css";
import "../css/input.css";
import "../css/componentStyle.css";
import "../css/button.css";
import "../css/heading.css";
import "../css/label.css";
function CreateToken()
{
    const [Token, setToken] = React.useState('No Token Created yet!');
    const [decimals, setDecimals] = React.useState('');
    const [mintAuthority, setMintAuthority] = React.useState('');
    const [freezeAuthority, setFreezeAuthority] = React.useState('');

    function updateDecimals(event)
    {
        setDecimals(event.target.value);
    }
    function updateMintAuthority(event)
    {
        setMintAuthority(event.target.value);
    }
    function updateFreezeAuthority(event)
    {
        setFreezeAuthority(event.target.value);
    }
    async function submitForm(event)
    {
        event.preventDefault();
        const _tokenAddress = await createSPLtoken(decimals, mintAuthority, freezeAuthority);
        setToken(("Token Address: " + _tokenAddress));
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Create SPL Token</h1>
            <form onSubmit={submitForm}>
                <label className="label">Decimals:</label>
                <input className="input" type="text" value={decimals} onChange={updateDecimals}/>
                <br/>
                <label className="label">Mint Authority:</label>
                <input className="input" type="text" value={mintAuthority} onChange={updateMintAuthority}/>
                <br/>
                <label className="label">Freeze Authority:</label>
                <input className="input" type="text" value={freezeAuthority} onChange={updateFreezeAuthority}/>
                <br/>
                <button className="button" type="submit">Create SPL Token</button>
                <p className="label">{Token}</p>
            </form>
            <br/>
        </div>
    );
}
export default CreateToken