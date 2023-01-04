import React from "react";
import ERC20Transfer from "../subComp/erc20_transfer";
import ERC20TransferFrom from "../subComp/erc20_transferFrom";
import ERC20Approve from "../subComp/erc20_approve";
import ERC20TotalSupply from "../subComp/erc20_totalSupply";
import ERC20Allownce from "../subComp/erc20_allowance";
import ERC20BalanceOf from "../subComp/erc20_balanceOf";
class ERC20form extends React.Component
{
  render()
    {
        return(
          <React.Fragment>
          <ERC20Transfer></ERC20Transfer>
          <br/>
          <ERC20TransferFrom></ERC20TransferFrom>
          <br/>
          <ERC20Approve></ERC20Approve>
          <br/>
          <ERC20TotalSupply></ERC20TotalSupply>
          <br/>
          <ERC20Allownce></ERC20Allownce>
          <br/>
          <ERC20BalanceOf></ERC20BalanceOf>
          </React.Fragment>    
        );
    }
}

export default ERC20form