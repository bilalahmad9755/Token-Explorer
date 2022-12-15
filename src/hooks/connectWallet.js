import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {connectWallet} from "../blockchain/erc20Token";
import "bootstrap/dist/css/bootstrap.min.css";
function ConnectWallet(){

    const [connectedWallet, setWallet] = useState('ConnectWallet');
    async function connect(event)
    {
        let _connectedWallet = await connectWallet();
        console.log(_connectedWallet);
        setWallet(_connectedWallet);
    }
        return (
        <div> 
            <Button variant="info" onClick={connect}>{connectedWallet}</Button> 
        </div>
        );
    
}

export default ConnectWallet