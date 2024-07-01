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
import type { StatSummary } from './StatSummary';
import {
    StatSummaryFromJSON,
    StatSummaryFromJSONTyped,
    StatSummaryToJSON,
} from './StatSummary';

/**
 * 
 * @export
 * @interface PokemonStat
 */
export interface PokemonStat {
    /**
     * 
     * @type {number}
     * @memberof PokemonStat
     */
    baseStat: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonStat
     */
    effort: number;
    /**
     * 
     * @type {StatSummary}
     * @memberof PokemonStat
     */
    stat: StatSummary;
}

/**
 * Check if a given object implements the PokemonStat interface.
 */
export function instanceOfPokemonStat(value: object): value is PokemonStat {
    if (!('baseStat' in value) || value['baseStat'] === undefined) return false;
    if (!('effort' in value) || value['effort'] === undefined) return false;
    if (!('stat' in value) || value['stat'] === undefined) return false;
    return true;
}

export function PokemonStatFromJSON(json: any): PokemonStat {
    return PokemonStatFromJSONTyped(json, false);
}

export function PokemonStatFromJSONTyped(json: any, ignoreDiscriminator: boolean): PokemonStat {
    if (json == null) {
        return json;
    }
    return {
        
        'baseStat': json['base_stat'],
        'effort': json['effort'],
        'stat': StatSummaryFromJSON(json['stat']),
    };
}

export function PokemonStatToJSON(value?: PokemonStat | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'base_stat': value['baseStat'],
        'effort': value['effort'],
        'stat': StatSummaryToJSON(value['stat']),
    };
}
