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
exports.QuoteResponseToJSON = exports.QuoteResponseFromJSONTyped = exports.QuoteResponseFromJSON = exports.instanceOfQuoteResponse = void 0;
var runtime_1 = require("../runtime");
var PlatformFee_1 = require("./PlatformFee");
var RoutePlanStep_1 = require("./RoutePlanStep");
var SwapMode_1 = require("./SwapMode");
/**
 * Check if a given object implements the QuoteResponse interface.
 */
function instanceOfQuoteResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "inputMint" in value;
    isInstance = isInstance && "inAmount" in value;
    isInstance = isInstance && "outputMint" in value;
    isInstance = isInstance && "outAmount" in value;
    isInstance = isInstance && "otherAmountThreshold" in value;
    isInstance = isInstance && "swapMode" in value;
    isInstance = isInstance && "slippageBps" in value;
    isInstance = isInstance && "priceImpactPct" in value;
    isInstance = isInstance && "routePlan" in value;
    return isInstance;
}
exports.instanceOfQuoteResponse = instanceOfQuoteResponse;
function QuoteResponseFromJSON(json) {
    return QuoteResponseFromJSONTyped(json, false);
}
exports.QuoteResponseFromJSON = QuoteResponseFromJSON;
function QuoteResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'inputMint': json['inputMint'],
        'inAmount': json['inAmount'],
        'outputMint': json['outputMint'],
        'outAmount': json['outAmount'],
        'otherAmountThreshold': json['otherAmountThreshold'],
        'swapMode': (0, SwapMode_1.SwapModeFromJSON)(json['swapMode']),
        'slippageBps': json['slippageBps'],
        'platformFee': !(0, runtime_1.exists)(json, 'platformFee') ? undefined : (0, PlatformFee_1.PlatformFeeFromJSON)(json['platformFee']),
        'priceImpactPct': json['priceImpactPct'],
        'routePlan': (json['routePlan'].map(RoutePlanStep_1.RoutePlanStepFromJSON)),
        'contextSlot': !(0, runtime_1.exists)(json, 'contextSlot') ? undefined : json['contextSlot'],
        'timeTaken': !(0, runtime_1.exists)(json, 'timeTaken') ? undefined : json['timeTaken'],
    };
}
exports.QuoteResponseFromJSONTyped = QuoteResponseFromJSONTyped;
function QuoteResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'inputMint': value.inputMint,
        'inAmount': value.inAmount,
        'outputMint': value.outputMint,
        'outAmount': value.outAmount,
        'otherAmountThreshold': value.otherAmountThreshold,
        'swapMode': (0, SwapMode_1.SwapModeToJSON)(value.swapMode),
        'slippageBps': value.slippageBps,
        'platformFee': (0, PlatformFee_1.PlatformFeeToJSON)(value.platformFee),
        'priceImpactPct': value.priceImpactPct,
        'routePlan': (value.routePlan.map(RoutePlanStep_1.RoutePlanStepToJSON)),
        'contextSlot': value.contextSlot,
        'timeTaken': value.timeTaken,
    };
}
exports.QuoteResponseToJSON = QuoteResponseToJSON;
