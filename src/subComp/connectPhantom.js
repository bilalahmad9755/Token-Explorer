import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {connectPhantom} from "../blockchain/solanaConnect";
import '../css/componentStyle.css';
function ConnectPhantom(){

    const [connectedWallet, setWallet] = useState('ConnectWallet');
    async function connect(event)
    {
        const wallet = await connectPhantom();
        setWallet(wallet);
    }
        return (
        <div className="componentStyle">
            <Button variant="info" onClick={connect}>{connectedWallet}</Button> 
        </div>
        );   
    }

export default ConnectPhantom
