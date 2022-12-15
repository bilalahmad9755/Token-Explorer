import {state} from "./solanaConnect";
const web3 = require("@solana/web3.js");
const splToken  = require('@solana/spl-token');
const buffer = require("buffer");

window.Buffer = buffer.Buffer;


const TokenProgram = new web3.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
async function createSPLtoken(_decimals, _mintAuthority, _freezeAuthority)
{
    const newKey = web3.Keypair.generate();
    const mintAddress = newKey.publicKey;
    const connection = new web3.Connection(state.network, "confirmed");
    const blockhash = (await connection.getLatestBlockhash()).blockhash;
    const mintAuthority = new web3.PublicKey(_mintAuthority);
    const decimals = Number(_decimals);
    const freezeAuthority = new web3.PublicKey(_freezeAuthority); 
    const feePayer = new web3.PublicKey(state.walletPublicKey.toString());
    const minRent = await splToken.getMinimumBalanceForRentExemptMint(connection);
    const lamports = Number(minRent);
    const createAccountTx = new web3.Transaction().add
    (web3.SystemProgram.createAccount(
        {
        fromPubkey: state.walletPublicKey,
        newAccountPubkey: mintAddress,
        lamports: lamports,
        space: splToken.MINT_SIZE,
        programId: TokenProgram,
        }
    ));
    const createTokenTx = new web3.Transaction().add
    (
        splToken.createInitializeMint2Instruction
        (
            mintAddress,
            decimals,
            mintAuthority,
            freezeAuthority,
            TokenProgram
        )
    );
        createAccountTx.recentBlockhash = blockhash;
        createAccountTx.feePayer = feePayer;
        createTokenTx.recentBlockhash = blockhash;
        createTokenTx.feePayer = feePayer;
        createAccountTx.sign(newKey);
        await state.provider.signAndSendTransaction(createAccountTx);
        await state.provider.signAndSendTransaction(createTokenTx);
        return mintAddress.toString();
}

async function mintSPLtoken(_address, _to, _amount)
{
    const mintAddress = new web3.PublicKey(_address);
    const connection = new web3.Connection(state.network, "confirmed");
    const blockhash = (await connection.getLatestBlockhash()).blockhash;
    const feePayer = new web3.PublicKey(state.walletPublicKey.toString());
    const minRent = await splToken.getMinimumBalanceForRentExemptMint(connection);
    const mintTo = new web3.PublicKey(_to);
    const associatedAddress = await splToken.getAssociatedTokenAddress(
        mintAddress,
        mintTo,
        false,
        splToken.TOKEN_PROGRAM_ID,
        splToken.ASSOCIATED_TOKEN_PROGRAM_ID
    );
    let account, createAssociatedTx;
    try 
    {
        account = await splToken.getAccount(connection, associatedAddress, 'confirmed', splToken.TOKEN_PROGRAM_ID);
        console.log('account exists!');
        console.log(account);
        const mintTx = new web3.Transaction().add(
            splToken.createMintToInstruction(
                mintAddress,
                associatedAddress,
                feePayer,
                _amount,
                [],
                splToken.TOKEN_PROGRAM_ID
            )
        );
        console.log('Associated Address: ', associatedAddress.toString());
        mintTx.recentBlockhash = blockhash;
        mintTx.feePayer = feePayer;
        console.log('trying minting now!');
        await state.provider.signAndSendTransaction(mintTx);
        return (true);

    } catch (error) 
    {
        if (error instanceof splToken.TokenAccountNotFoundError || error instanceof splToken.TokenInvalidAccountOwnerError) 
        {
            // create associated account...
            createAssociatedTx = new web3.Transaction().add(
                splToken.createAssociatedTokenAccountInstruction(
                state.walletPublicKey,
                associatedAddress,
                state.walletPublicKey,
                mintAddress,
                splToken.TOKEN_PROGRAM_ID,
                splToken.ASSOCIATED_TOKEN_PROGRAM_ID
            ));
            createAssociatedTx.recentBlockhash = blockhash;
            createAssociatedTx.feePayer = feePayer;
            await state.provider.signAndSendTransaction(createAssociatedTx);

            console.log('associated account created!');
            // mint tokens in associated account created above...
            const mintTx = new web3.Transaction().add(
                splToken.createMintToInstruction(
                    mintAddress,
                    associatedAddress,
                    feePayer,
                    _amount,
                    [],
                    splToken.TOKEN_PROGRAM_ID
                )
            );
            console.log('Associated Address generated: ', associatedAddress.toString());
            mintTx.recentBlockhash = blockhash;
            mintTx.feePayer = feePayer;
            await state.provider.signAndSendTransaction(mintTx);
        }
        else
        {
            console.log(error);
        }
    }
}

async function getTokenInfo(_tokenAddress)
{
    const connection = new web3.Connection(state.network, "confirmed");
    const tokenAddress = new web3.PublicKey(_tokenAddress);
    splToken.getMint(connection, tokenAddress, 'confirmed', splToken.TOKEN_PROGRAM_ID);
}

export {createSPLtoken, mintSPLtoken}
