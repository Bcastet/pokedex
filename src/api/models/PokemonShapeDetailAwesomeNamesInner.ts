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
import type { AbilityDetailPokemonInnerPokemon } from './AbilityDetailPokemonInnerPokemon';
import {
    AbilityDetailPokemonInnerPokemonFromJSON,
    AbilityDetailPokemonInnerPokemonFromJSONTyped,
    AbilityDetailPokemonInnerPokemonToJSON,
} from './AbilityDetailPokemonInnerPokemon';

/**
 * 
 * @export
 * @interface PokemonShapeDetailAwesomeNamesInner
 */
export interface PokemonShapeDetailAwesomeNamesInner {
    /**
     * 
     * @type {string}
     * @memberof PokemonShapeDetailAwesomeNamesInner
     */
    awesomeName: string;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonShapeDetailAwesomeNamesInner
     */
    language: AbilityDetailPokemonInnerPokemon;
}

/**
 * Check if a given object implements the PokemonShapeDetailAwesomeNamesInner interface.
 */
export function instanceOfPokemonShapeDetailAwesomeNamesInner(value: object): value is PokemonShapeDetailAwesomeNamesInner {
    if (!('awesomeName' in value) || value['awesomeName'] === undefined) return false;
    if (!('language' in value) || value['language'] === undefined) return false;
    return true;
}

export function PokemonShapeDetailAwesomeNamesInnerFromJSON(json: any): PokemonShapeDetailAwesomeNamesInner {
    return PokemonShapeDetailAwesomeNamesInnerFromJSONTyped(json, false);
}

export function PokemonShapeDetailAwesomeNamesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PokemonShapeDetailAwesomeNamesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'awesomeName': json['awesome_name'],
        'language': AbilityDetailPokemonInnerPokemonFromJSON(json['language']),
    };
}

export function PokemonShapeDetailAwesomeNamesInnerToJSON(value?: PokemonShapeDetailAwesomeNamesInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'awesome_name': value['awesomeName'],
        'language': AbilityDetailPokemonInnerPokemonToJSON(value['language']),
    };
}
