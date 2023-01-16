import React from "react";
import { useSelector } from "react-redux";
import {importToken} from "../blockchain/erc20Token";
import { Button } from "react-bootstrap";
import "../css/whitetxt.css";

function ImportForm()
{
  const [inputAddress, setInputAddress] = React.useState('');
  var address = useSelector(state => state.redux.erc20Token.address);

  function handleChange(event) {
    setInputAddress(event.target.value);
  }

  function submit(event) 
  {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    importToken(inputAddress);
  }

      const inputStyle = 
      {
        height: 25,
        width: 300,
      }
      return(
      <div>
        <form onSubmit={submit}>
          <label className="whitetxt">
            Token Address:
            <input className="form-control" style={inputStyle} onChange={handleChange} />
          </label>
          <Button variant="info" type="submit" value="Import Token">Import Token</Button>
          <br/>
          <Button variant="info">{address}</Button>
          <br/>
          <p></p>
        </form>
      </div>
      );
    }
export default ImportForm