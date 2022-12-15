import { send } from "process";
import {connectPhantom, state} from "./solanaConnect";
const web3 = require("@solana/web3.js");
const buffer = require("buffer");
window.Buffer = buffer.Buffer;
async function transfer(_to, _amount)
{
  console.log("Executing SOL Transfer Function");
  const connection = new web3.Connection(state.network, "confirmed");
  console.log("connection", connection);
  const blockhash = (await connection.getLatestBlockhash()).blockhash;
  console.log("blockHash: ", blockhash);
  const feePayer = new web3.PublicKey(state.walletPublicKey.toString());
  let transaction = new web3.Transaction();
  transaction.add(
    web3.SystemProgram.transfer({
      fromPubkey: state.walletPublicKey,
      toPubkey: _to,
      lamports: _amount * (10 ** 9)
    })
  );
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = feePayer;
  const {signature} = await state.provider.signAndSendTransaction(transaction);
  console.log("signature", signature);
  console.log("tranaction signature: ", transaction.signature);
  return true;
}

export {transfer}
