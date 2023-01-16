import store from '../redux/store';
import { connectMetamask, disconnectMetamask, metamaskInstalled } from '../redux/slice';
export async function connectDisconnect()
{
    // metamask is installed...
    if (typeof window.ethereum !== 'undefined') 
    {
        var state = store.getState();
        // wallet not connected...
        if(!state.redux.metamask.isConnected)
        {
        let provider = await window.ethereum;
        await provider.request({ method: 'eth_requestAccounts' });
        store.dispatch(connectMetamask({payload: provider.selectedAddress}));
        store.dispatch(metamaskInstalled({payload: true}));
        }
        else // wallet connected, we want to disconnect the wallet...
        {
            store.dispatch(disconnectMetamask());
        }
    }
    else
    {
        // metamask is not installed...
        store.dispatch(metamaskInstalled({payload: false}));
    }
}