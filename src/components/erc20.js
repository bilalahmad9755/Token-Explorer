import React from "react";
import ImportForm from "./importForm";
import ERC20form from "./erc20form";
import ConnectMetamask from "../subComp/connectMetamask";
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
                <ConnectMetamask></ConnectMetamask>
                <ImportForm></ImportForm>
                <ERC20form></ERC20form>
                </div>
                </React.Fragment>
        
        );
    }
}

export default ERC20