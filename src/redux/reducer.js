import { connectMetamask, connectPhantom, disconnectMetamask, disconnectPhantom } from "./actions";
import { CONNECT_METAMASK_WALLET, CONNECT_PHANTOM_WALLET, DISCONNECT_METAMASK_WALLET, DISCONNECT_PHANTOM_WALLET } from './actionTypes';
import {appState} from './state';
import { getProvider } from "../blockchain/metamask.js";

export const reducer = async (state = appState, action) => 
{
    switch(action.type)
    {
        case CONNECT_METAMASK_WALLET:
        {
            let _provider = await getProvider();
            return {...state, ...state.metamask.provider = _provider}
        }
        default:  return appState;
    }
}