import React from "react";
import ImportForm from "./importForm";
import ERC20form from "./erc20form";
import ConnectWallet from "../subComp/connectWallet";
import "../css/styleerc20.css";
class ERC20 extends React.Component
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
                <h1 style={headingStyle}> ERC20 Token </h1>
                <ConnectWallet></ConnectWallet>
                <ImportForm></ImportForm>
                <ERC20form></ERC20form>
                </div>
                </React.Fragment>
        
        );
    }
}

export default ERC20