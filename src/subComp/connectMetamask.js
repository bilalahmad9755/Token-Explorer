import React from "react";
import { Button } from "react-bootstrap";
import { connectDisconnect } from "../blockchain/metamask";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux';
function ConnectMetamask()
{
    var address = useSelector((state) => state.redux.metamask.address);

    async function connect()
    {
        await connectDisconnect();
    }
    
    return (
    <div> 
        <Button variant="info" onClick={connect}>{address}</Button>
    </div>
    );
    
}

export default ConnectMetamask