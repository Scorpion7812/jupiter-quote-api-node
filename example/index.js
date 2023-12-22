"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var index_1 = require("../src/index");
var web3_js_1 = require("@solana/web3.js");
var anchor_1 = require("@project-serum/anchor");
var bs58_1 = require("bs58");
function inflateIndexedRouteMap(result) {
    var mintKeys = result.mintKeys, indexedRouteMap = result.indexedRouteMap;
    return Object.entries(indexedRouteMap).reduce(function (acc, _a) {
        var inputMintIndexString = _a[0], outputMintIndices = _a[1];
        var inputMintIndex = Number(inputMintIndexString);
        var inputMint = mintKeys[inputMintIndex];
        if (!inputMint)
            throw new Error("Could no find mint key for index ".concat(inputMintIndex));
        acc[inputMint] = outputMintIndices.map(function (index) {
            var outputMint = mintKeys[index];
            if (!outputMint)
                throw new Error("Could no find mint key for index ".concat(index));
            return outputMint;
        });
        return acc;
    }, {});
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var jupiterQuoteApi, wallet, connection, quote, swapResult, swapTransactionBuf, transaction, rawTransaction, txid, result, routeMap;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jupiterQuoteApi = (0, index_1.createJupiterApiClient)();
                    wallet = new anchor_1.Wallet(web3_js_1.Keypair.fromSecretKey(bs58_1.default.decode(process.env.PRIVATE_KEY || "")));
                    connection = new web3_js_1.Connection("https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/");
                    return [4 /*yield*/, jupiterQuoteApi.quoteGet({
                            inputMint: "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
                            outputMint: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
                            amount: 35281,
                            slippageBps: 100,
                            onlyDirectRoutes: false,
                            asLegacyTransaction: false,
                        })];
                case 1:
                    quote = _a.sent();
                    if (!quote) {
                        console.error("unable to quote");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, jupiterQuoteApi.swapPost({
                            swapRequest: {
                                quoteResponse: quote,
                                userPublicKey: wallet.publicKey.toBase58(),
                                dynamicComputeUnitLimit: true,
                            },
                        })];
                case 2:
                    swapResult = _a.sent();
                    console.dir(swapResult, { depth: null });
                    swapTransactionBuf = Buffer.from(swapResult.swapTransaction, "base64");
                    transaction = web3_js_1.VersionedTransaction.deserialize(swapTransactionBuf);
                    console.log(transaction);
                    // sign the transaction
                    transaction.sign([wallet.payer]);
                    rawTransaction = transaction.serialize();
                    return [4 /*yield*/, connection.sendRawTransaction(rawTransaction, {
                            skipPreflight: true,
                            maxRetries: 2,
                        })];
                case 3:
                    txid = _a.sent();
                    return [4 /*yield*/, connection.confirmTransaction(txid)];
                case 4:
                    _a.sent();
                    console.log("https://solscan.io/tx/".concat(txid));
                    return [4 /*yield*/, jupiterQuoteApi.indexedRouteMapGet()];
                case 5:
                    result = _a.sent();
                    routeMap = inflateIndexedRouteMap(result);
                    console.log(Object.keys(routeMap).length);
                    return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
main();
