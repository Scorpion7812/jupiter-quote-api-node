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
exports.PlatformFeeToJSON = exports.PlatformFeeFromJSONTyped = exports.PlatformFeeFromJSON = exports.instanceOfPlatformFee = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PlatformFee interface.
 */
function instanceOfPlatformFee(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfPlatformFee = instanceOfPlatformFee;
function PlatformFeeFromJSON(json) {
    return PlatformFeeFromJSONTyped(json, false);
}
exports.PlatformFeeFromJSON = PlatformFeeFromJSON;
function PlatformFeeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'feeBps': !(0, runtime_1.exists)(json, 'feeBps') ? undefined : json['feeBps'],
    };
}
exports.PlatformFeeFromJSONTyped = PlatformFeeFromJSONTyped;
function PlatformFeeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'feeBps': value.feeBps,
    };
}
exports.PlatformFeeToJSON = PlatformFeeToJSON;
