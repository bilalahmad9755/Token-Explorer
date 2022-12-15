var state = {
    provider: "",
    isPhantomInstalled: false,
    isPhantomProvider: false,
    walletPublicKey:'',
    connection: '',
    network: ''
}

async function setNetwork(_network)
{
    state.network = _network;
    return true;
}

async function connectPhantom()
{
    if(state.provider.isConnected)
    {
        await disconnect();
        console.log("Phantom Disconnected!");
        return "ConnectWallet";
    }
    else
    {
        await detectPhantom();
        await getProvider();
        await verifyProvider();
        await connectProvider();
        console.log(state.provider);
        console.log("Phantom Connected!");
        console.log("provider:", state.provider);
        console.log("wallet: ", state.walletPublicKey.toString());
        return state.walletPublicKey.toString();
    }
    
}
async function verifyProvider()
{
    state.isPhantomProvider = await state.provider?.isPhantom;
    console.log("Phantom Provider object: ", state.isPhantomProvider);
}
async function getProvider()
{
    state.provider = await window.phantom?.solana;
}
async function disconnect()
{
    await state.provider.disconnect();
}

async function detectPhantom()
{
    state.isPhantomInstalled = await window.phantom?.solana?.isPhantom;
}
async function connectProvider()
{
    if(await state.provider.isConnected)
    {
        console.log("Phantom Already Connected");
    }
    else
    {
        try
        {
            let connectionResponse = await state.provider.connect();
            console.log("connectionResponse:", connectionResponse);
            state.walletPublicKey = await state.provider.publicKey;
        }
        catch(Error)
        {
            console.log("Connection Failed!");
        }
    }
}

export {connectPhantom, state, setNetwork}
