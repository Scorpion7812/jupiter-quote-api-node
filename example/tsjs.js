const {
    createJupiterApiClient,
    IndexedRouteMapResponse,
  } = require("../src/index");
  const { Connection, Keypair, VersionedTransaction } = require("@solana/web3.js");
  const { Wallet } = require("@project-serum/anchor");
  const bs58 = require("bs58");
  
  function inflateIndexedRouteMap(result) {
    const { mintKeys, indexedRouteMap } = result;
  
    return Object.entries(indexedRouteMap).reduce(
      (acc, [inputMintIndexString, outputMintIndices]) => {
        const inputMintIndex = Number(inputMintIndexString);
        const inputMint = mintKeys[inputMintIndex];
        if (!inputMint)
          throw new Error(`Could not find mint key for index ${inputMintIndex}`);
  
        acc[inputMint] = outputMintIndices.map((index) => {
          const outputMint = mintKeys[index];
          if (!outputMint)
            throw new Error(`Could not find mint key for index ${index}`);
  
          return outputMint;
        });
  
        return acc;
      },
      {}
    );
  }
  
  async function main() {
    const jupiterQuoteApi = createJupiterApiClient();
    const wallet = new Wallet(
      Keypair.fromSecretKey(Uint8Array.from([225,223,163,97,131,2,122,25,225,42,22,22,155,255,247,5,250,44,227,251,61,30,118,4,169,48,10,157,210,194,98,114,102,224,36,79,62,22,201,167,127,211,210,153,106,177,157,59,165,24,158,186,162,191,106,138,85,40,98,59,125,203,48,27]))
    );
  
    // Make sure that you are using your own RPC endpoint
    const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/yehpTnfyvFrb2Zq6osvH7UDsDV4ADdJg");
  
    // Get quote
    const quote = await jupiterQuoteApi.quoteGet({
      inputMint: "So11111111111111111111111111111111111111112",
      outputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      amount: 50000000,
      slippageBps: 100,
      onlyDirectRoutes: false,
      asLegacyTransaction: false,
    });
  
    if (!quote) {
      console.error("Unable to quote");
      return;
    }
  
    // Get serialized transaction
    const swapResult = await jupiterQuoteApi.swapPost({
      swapRequest: {
        quoteResponse: quote,
        userPublicKey: wallet.publicKey.toBase58(),
        dynamicComputeUnitLimit: true,
      },
    });
  
    console.dir(swapResult, { depth: null });
  
    // Submit transaction
    const swapTransactionBuf = Buffer.from(swapResult.swapTransaction, "base64");
    const transaction = VersionedTransaction.deserialize(swapTransactionBuf);
    console.log(transaction);
  
    // Sign the transaction
    transaction.sign([wallet.payer]);
  
    const rawTransaction = transaction.serialize();
    const txid = await connection.sendRawTransaction(rawTransaction, {
      skipPreflight: true,
      maxRetries: 2,
    });
    await connection.confirmTransaction(txid);
    console.log(`https://solscan.io/tx/${txid}`);
  
    // Get route map
    const result = await jupiterQuoteApi.indexedRouteMapGet();
    const routeMap = inflateIndexedRouteMap(result);
    console.log(Object.keys(routeMap).length);
  }
  
  main();
  