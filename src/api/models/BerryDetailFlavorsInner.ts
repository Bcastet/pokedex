/* tslint:disable */
/* eslint-disable */
/**
 * PokéAPI
 * All the Pokémon data you\'ll ever need in one place, easily accessible through a modern free open-source RESTful API.  ## What is this?  This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.  We\'ve covered everything from Pokémon to Berry Flavors.  ## Where do I start?  We have awesome [documentation](https://pokeapi.co/docs/v2) on how to use this API. It takes minutes to get started.  This API will always be publicly available and will never require any extensive setup process to consume.  Created by [**Paul Hallett**(]https://github.com/phalt) and other [**PokéAPI contributors***](https://github.com/PokeAPI/pokeapi#contributing) around the world. Pokémon and Pokémon character names are trademarks of Nintendo.     
 *
 * The version of the OpenAPI document: 2.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { BerryDetailFlavorsInnerFlavor } from './BerryDetailFlavorsInnerFlavor';
import {
    BerryDetailFlavorsInnerFlavorFromJSON,
    BerryDetailFlavorsInnerFlavorFromJSONTyped,
    BerryDetailFlavorsInnerFlavorToJSON,
} from './BerryDetailFlavorsInnerFlavor';

/**
 * 
 * @export
 * @interface BerryDetailFlavorsInner
 */
export interface BerryDetailFlavorsInner {
    /**
     * 
     * @type {number}
     * @memberof BerryDetailFlavorsInner
     */
    potency: number;
    /**
     * 
     * @type {BerryDetailFlavorsInnerFlavor}
     * @memberof BerryDetailFlavorsInner
     */
    flavor: BerryDetailFlavorsInnerFlavor;
}

/**
 * Check if a given object implements the BerryDetailFlavorsInner interface.
 */
export function instanceOfBerryDetailFlavorsInner(value: object): value is BerryDetailFlavorsInner {
    if (!('potency' in value) || value['potency'] === undefined) return false;
    if (!('flavor' in value) || value['flavor'] === undefined) return false;
    return true;
}

export function BerryDetailFlavorsInnerFromJSON(json: any): BerryDetailFlavorsInner {
    return BerryDetailFlavorsInnerFromJSONTyped(json, false);
}

export function BerryDetailFlavorsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BerryDetailFlavorsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'potency': json['potency'],
        'flavor': BerryDetailFlavorsInnerFlavorFromJSON(json['flavor']),
    };
}

export function BerryDetailFlavorsInnerToJSON(value?: BerryDetailFlavorsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'potency': value['potency'],
        'flavor': BerryDetailFlavorsInnerFlavorToJSON(value['flavor']),
    };
}
