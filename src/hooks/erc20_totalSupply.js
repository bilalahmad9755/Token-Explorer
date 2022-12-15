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
        <div>
        <p className="whitetxt">Total Supply: {supply}</p>
        <Button variant="info" onClick={getSupply}>TotalSupply</Button>
        </div>
    );
}

export default ERC20TotalSupply