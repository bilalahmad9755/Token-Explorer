import React from "react";
import { Button } from "react-bootstrap";
import {totalSupply} from "../blockchain/erc20Token";
import "../css/whitetxt.css";
function ERC20TotalSupply()
{
    const [supply, setSupply] = React.useState('');
    async function getSupply()
    {
        let _supply = await totalSupply();
        console.log(_supply);
        setSupply(_supply);
    }
    return(
        <div className="componentStyle">
            <h1 className="heading">Total Supply</h1>
        <p className="label">Total Supply: {supply}</p>
        <button className="button" onClick={getSupply}>TotalSupply</button>
        </div>
    );
}

export default ERC20TotalSupply