import React from "react";
import "../css/stylenavbar.css";
import ERC20 from "./erc20";
import ERC721 from "./erc721";
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import Solana from "./solana";
class Navbar extends React.Component
{
    constructor(props)
        {
            super(props);
            this.state = {erc20:'ERC20', erc721:'ERC721', erc1155:'ERC1155', solana: "Solana"};
        }

    render()
    {
        return(
            <Router>
                <div className="stylenavbar">
                    <a href="./erc20">{this.state.erc20}</a>
                    <a href="./erc721">{this.state.erc721}</a>
                    <a href="./erc1155">{this.state.erc1155}</a>
                    <a href= "./solana">{this.state.solana}</a>
                </div>
                <div>
                <Routes>
                        <Route path="/ERC20" element={<ERC20/>} />    
                        <Route path="/ERC721" element={<ERC721/>} />
                        <Route path="/Solana" element={<Solana/>}/>
                        <Route path="/" element={<Solana/>}></Route>
                    </Routes>
                </div>
            </Router>
        )
    }
}
export default Navbar