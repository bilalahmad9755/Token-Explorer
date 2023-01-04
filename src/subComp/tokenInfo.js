import React from "react";
import '../css/label.css';
import '../css/componentStyle.css';
import '../css/heading.css';
import { getTokenInfo } from "../blockchain/SPLtoken";

function SPLtokenInfo()
{
    const [address, setAddress] = React.useState('');
    const [info, setInfo] = React.useState('');
    const [mintAuthority, setMintAuthority] = React.useState('');
    const [freezeAuthority, setFreezeAuthority] = React.useState('');
    const [initialised, setInitialised] = React.useState('');
    const [supply, setSupply] = React.useState('');

    async function updateAddress(event)
    {
        setAddress(event.target.value);
    }
    async function submitForm(event)
    {
        event.preventDefault();
        const info = await getTokenInfo(address);
        setMintAuthority(info.mintAuthority.toString().slice(30,));
        setFreezeAuthority(info.freezeAuthority.toString().slice(30,));
        setSupply(info.supply.toString());
        setInitialised(info.isInitialized.toString());
        setInfo(info);
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Token Info</h1>
            <form onSubmit={submitForm}>
            <label className="label">Token Address</label>
            <input className="input" type="text" value={address} onChange={updateAddress}/>
            <br/>
            <button className="button" type="submit">Mint Tokens</button>
            </form>
            <br/>
            <p className="label">Decimals:{info.decimals}</p>
            <p className="label">Mint Authority:{mintAuthority}</p>
            <p className="label">FreezeAuthority: {freezeAuthority}</p>
            <p className="label">isInitialised: {initialised}</p>
            <p className="label">Supply: {supply}</p>
        </div>
    );
}

export default SPLtokenInfo
