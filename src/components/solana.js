import React from "react";
import ConnectPhantom from "../hooks/connectPhantom";
import SOLtransfer from "../hooks/SOLtransfer";
import SelectNetwork from "../hooks/selectNetwork";
import CreateToken from "../hooks/createToken";
import MintTokens from "../hooks/mintTokens";
import "../css/styleerc20.css";
class Solana extends React.Component
{
    
    render()
    {
        const headingStyle = 
        {
            color : '#61dafb',
        }
        
        return (
            <React.Fragment>
                <div className="styleerc20"> 
                <h1 style={headingStyle}> Solana </h1>
                <ConnectPhantom></ConnectPhantom>
                <br/>
                <SelectNetwork></SelectNetwork>
                <br/>
                <SOLtransfer></SOLtransfer>
                <br/>
                <CreateToken></CreateToken>
                <br/>
                <MintTokens></MintTokens>
                </div>
                </React.Fragment>
        
        );
    }
}

export default Solana