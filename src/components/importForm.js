import React from "react";
import {importToken} from "../blockchain/erc20Token";
import { Button } from "react-bootstrap";
import "../css/whitetxt.css";

class ImportForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        // connecting to web3js
        importToken(this.state.value);
      }    
    render()
    {
        const inputStyle = 
        {
            height: 25,
            width: 300,
        }
        return(
          <div>
            <form onSubmit={this.handleSubmit}>
            <label className="whitetxt">
          Token Address:
          <input className="form-control" placeholder="Token Address..." style={inputStyle} type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Button variant="info" type="submit" value="Import Token">Import Token</Button>
      </form>
      </div>
      );
    }
}

export default ImportForm