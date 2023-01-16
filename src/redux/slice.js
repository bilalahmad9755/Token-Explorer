import { createSlice } from '@reduxjs/toolkit'
import appState from './state';

export const reduxSlice = createSlice({
  name: 'redux',
  initialState: appState,

  reducers: {
    connectMetamask: (state, action) => 
    {
      state.metamask.address = action.payload.payload;
      state.metamask.isConnected = true;
    },
    disconnectMetamask: (state, action) =>
    {
      state.metamask.isConnected = false;
      state.metamask.address = 'connectWallet';
    },
    metamaskInstalled: (state, action) =>
    {
      state.metamask.isInstalled = action.payload.payload; 
    },
    importERC20: (state, action) =>
    {
      state.erc20Token.address = action.payload.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {connectMetamask, disconnectMetamask, metamaskInstalled, importERC20} = reduxSlice.actions;
export default reduxSlice.reducer;
