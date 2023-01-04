import React from "react";
import {createSPLtoken} from "../blockchain/SPLtoken";
import '../css/createNFT.css';
function CreateNFT()
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
        <div className="createNFT">
            <h1 className="heading">Create NFT</h1>
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
export default CreateNFT