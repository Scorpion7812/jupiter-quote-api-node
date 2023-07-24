/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter Api v5
 * Jupiter quote and swap API
 *
 * The version of the OpenAPI document: 5.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IndexedRouteMapResponse
 */
export interface IndexedRouteMapResponse {
    /**
     * All the mints that are indexed to match in indexedRouteMap
     * @type {Array<string>}
     * @memberof IndexedRouteMapResponse
     */
    mintKeys?: Array<string>;
    /**
     * All the possible route and their corresponding output mints
     * @type {{ [key: string]: Array<number>; }}
     * @memberof IndexedRouteMapResponse
     */
    indexedRouteMap?: { [key: string]: Array<number>; };
}

/**
 * Check if a given object implements the IndexedRouteMapResponse interface.
 */
export function instanceOfIndexedRouteMapResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IndexedRouteMapResponseFromJSON(json: any): IndexedRouteMapResponse {
    return IndexedRouteMapResponseFromJSONTyped(json, false);
}

export function IndexedRouteMapResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexedRouteMapResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mintKeys': !exists(json, 'mintKeys') ? undefined : json['mintKeys'],
        'indexedRouteMap': !exists(json, 'indexedRouteMap') ? undefined : json['indexedRouteMap'],
    };
}

export function IndexedRouteMapResponseToJSON(value?: IndexedRouteMapResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mintKeys': value.mintKeys,
        'indexedRouteMap': value.indexedRouteMap,
    };
}
