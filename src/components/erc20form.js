import React from "react";
import ERC20Transfer from "../hooks/erc20_transfer";
import ERC20TransferFrom from "../hooks/erc20_transferFrom";
import ERC20Approve from "../hooks/erc20_approve";
import ERC20TotalSupply from "../hooks/erc20_totalSupply";
import ERC20Allownce from "../hooks/erc20_allowance";
import ERC20BalanceOf from "../hooks/erc20_balanceOf";
class ERC20form extends React.Component
{
  render()
    {
        return(
          <React.Fragment>
          <ERC20Transfer></ERC20Transfer>
          <ERC20TransferFrom></ERC20TransferFrom>
          <ERC20Approve></ERC20Approve>
          <ERC20TotalSupply></ERC20TotalSupply>
          <ERC20Allownce></ERC20Allownce>
          <ERC20BalanceOf></ERC20BalanceOf>
          </React.Fragment>    
        );
    }
}

export default ERC20form