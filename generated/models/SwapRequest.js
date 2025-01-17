"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API v6
 * The core of [jup.ag](https://jup.ag). Easily get a quote and swap through Jupiter API.  ### Rate Limit The rate limit is 50 requests / 10 seconds. If you need a higher rate limit, feel free to contact us on [#developer-support](https://discord.com/channels/897540204506775583/910250162402779146) on Discord.  ### API Wrapper - Typescript [@jup-ag/api](https://github.com/jup-ag/jupiter-quote-api-node)  ### Data types - Public keys are base58 encoded strings - raw data such as Vec<u8\\> are base64 encoded strings
 *
 * The version of the OpenAPI document: 6.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapRequestToJSON = exports.SwapRequestFromJSONTyped = exports.SwapRequestFromJSON = exports.instanceOfSwapRequest = void 0;
var runtime_1 = require("../runtime");
var QuoteResponse_1 = require("./QuoteResponse");
/**
 * Check if a given object implements the SwapRequest interface.
 */
function instanceOfSwapRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "userPublicKey" in value;
    isInstance = isInstance && "quoteResponse" in value;
    return isInstance;
}
exports.instanceOfSwapRequest = instanceOfSwapRequest;
function SwapRequestFromJSON(json) {
    return SwapRequestFromJSONTyped(json, false);
}
exports.SwapRequestFromJSON = SwapRequestFromJSON;
function SwapRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'userPublicKey': json['userPublicKey'],
        'wrapAndUnwrapSol': !(0, runtime_1.exists)(json, 'wrapAndUnwrapSol') ? undefined : json['wrapAndUnwrapSol'],
        'useSharedAccounts': !(0, runtime_1.exists)(json, 'useSharedAccounts') ? undefined : json['useSharedAccounts'],
        'feeAccount': !(0, runtime_1.exists)(json, 'feeAccount') ? undefined : json['feeAccount'],
        'prioritizationFeeLamports': !(0, runtime_1.exists)(json, 'prioritizationFeeLamports') ? undefined : json['prioritizationFeeLamports'],
        'computeUnitPriceMicroLamports': !(0, runtime_1.exists)(json, 'computeUnitPriceMicroLamports') ? undefined : json['computeUnitPriceMicroLamports'],
        'asLegacyTransaction': !(0, runtime_1.exists)(json, 'asLegacyTransaction') ? undefined : json['asLegacyTransaction'],
        'restrictIntermediateTokens': !(0, runtime_1.exists)(json, 'restrictIntermediateTokens') ? undefined : json['restrictIntermediateTokens'],
        'useTokenLedger': !(0, runtime_1.exists)(json, 'useTokenLedger') ? undefined : json['useTokenLedger'],
        'destinationTokenAccount': !(0, runtime_1.exists)(json, 'destinationTokenAccount') ? undefined : json['destinationTokenAccount'],
        'dynamicComputeUnitLimit': !(0, runtime_1.exists)(json, 'dynamicComputeUnitLimit') ? undefined : json['dynamicComputeUnitLimit'],
        'quoteResponse': (0, QuoteResponse_1.QuoteResponseFromJSON)(json['quoteResponse']),
    };
}
exports.SwapRequestFromJSONTyped = SwapRequestFromJSONTyped;
function SwapRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'userPublicKey': value.userPublicKey,
        'wrapAndUnwrapSol': value.wrapAndUnwrapSol,
        'useSharedAccounts': value.useSharedAccounts,
        'feeAccount': value.feeAccount,
        'prioritizationFeeLamports': value.prioritizationFeeLamports,
        'computeUnitPriceMicroLamports': value.computeUnitPriceMicroLamports,
        'asLegacyTransaction': value.asLegacyTransaction,
        'restrictIntermediateTokens': value.restrictIntermediateTokens,
        'useTokenLedger': value.useTokenLedger,
        'destinationTokenAccount': value.destinationTokenAccount,
        'dynamicComputeUnitLimit': value.dynamicComputeUnitLimit,
        'quoteResponse': (0, QuoteResponse_1.QuoteResponseToJSON)(value.quoteResponse),
    };
}
exports.SwapRequestToJSON = SwapRequestToJSON;
