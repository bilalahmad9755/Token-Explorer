import React from "react";
import { ERC20Approve, ERC20Transfer, ERC20TotalSupply, ERC20Allowance, ERC20TransferFrom, ERC20BalanceOf } from "../subComp/erc20";
import {Grid} from '@mui/material';
class ERC20form extends React.Component
{
  render()
    {
        return(
          <React.Fragment>
          <Grid container gap = {3}>
          <ERC20Transfer></ERC20Transfer>
          <br/>
          <ERC20TransferFrom></ERC20TransferFrom>
          <br/>
          <ERC20Approve></ERC20Approve>
          <br/>
          <ERC20TotalSupply></ERC20TotalSupply>
          <br/>
          <ERC20Allowance></ERC20Allowance>
          <br/>
          <ERC20BalanceOf></ERC20BalanceOf>
          </Grid>
          </React.Fragment>    
        );
    }
}

export default ERC20form