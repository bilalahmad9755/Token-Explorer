import React from "react";
import Select from 'react-select'
import {setNetwork} from '../blockchain/solanaConnect';
import '../css/menu.css';
import '../css/componentStyle.css';
function SelectNetwork()
{
    const [selectedNetwork, setSelectedNetwork] = React.useState('Select Network');
    async function selectNetwork(event)
    {
        console.log(event.label);
        setSelectedNetwork(event.value);
        console.log("selected network is: ", event.label);
        await setNetwork(event.value);
    }
    const networks= 
    [
        {value: 'https://api.mainnet-beta.solana.com', label: 'Mainnet'},
        {value: 'http://127.0.0.1:8899', label: 'LocalHost'},
        {value: 'https://api.testnet.solana.com', label: 'Testnet'}
    ]
    return(
        <div>
            <Select className="menu" placeholder = {selectedNetwork} options = {networks} onChange={selectNetwork}/>
        </div>
    );    
}

export default SelectNetwork;
