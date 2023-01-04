import React from "react";
import ConnectPhantom from "../subComp/connectPhantom";
import SOLtransfer from "../subComp/SOLtransfer";
import SelectNetwork from "../subComp/selectNetwork";
import CreateToken from "../subComp/createToken";
import MintTokens from "../subComp/mintTokens";
import SPLtokenInfo from "../subComp/tokenInfo";
import TransferToken from "../subComp/transferToken";
import CreateNFT from "../subComp/createNFT";
import {Grid} from '@mui/material';
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
                <Grid container gap={3}>
                    <SOLtransfer></SOLtransfer>
                    <CreateToken></CreateToken>
                    <MintTokens></MintTokens>
                    <SPLtokenInfo></SPLtokenInfo>
                    <TransferToken></TransferToken>
                </Grid>

                <br/>
                <h1 style={headingStyle}> Solana </h1>
                <br/>
                <CreateNFT></CreateNFT>
                </div>
                </React.Fragment>
        
        );
    }
}

export default Solana