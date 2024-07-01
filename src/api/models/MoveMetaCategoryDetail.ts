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
import type { MoveMetaCategoryDescription } from './MoveMetaCategoryDescription';
import {
    MoveMetaCategoryDescriptionFromJSON,
    MoveMetaCategoryDescriptionFromJSONTyped,
    MoveMetaCategoryDescriptionToJSON,
} from './MoveMetaCategoryDescription';
import type { AbilityDetailPokemonInnerPokemon } from './AbilityDetailPokemonInnerPokemon';
import {
    AbilityDetailPokemonInnerPokemonFromJSON,
    AbilityDetailPokemonInnerPokemonFromJSONTyped,
    AbilityDetailPokemonInnerPokemonToJSON,
} from './AbilityDetailPokemonInnerPokemon';

/**
 * 
 * @export
 * @interface MoveMetaCategoryDetail
 */
export interface MoveMetaCategoryDetail {
    /**
     * 
     * @type {number}
     * @memberof MoveMetaCategoryDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof MoveMetaCategoryDetail
     */
    name: string;
    /**
     * 
     * @type {Array<MoveMetaCategoryDescription>}
     * @memberof MoveMetaCategoryDetail
     */
    descriptions: Array<MoveMetaCategoryDescription>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof MoveMetaCategoryDetail
     */
    moves: Array<AbilityDetailPokemonInnerPokemon>;
}

/**
 * Check if a given object implements the MoveMetaCategoryDetail interface.
 */
export function instanceOfMoveMetaCategoryDetail(value: object): value is MoveMetaCategoryDetail {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('descriptions' in value) || value['descriptions'] === undefined) return false;
    if (!('moves' in value) || value['moves'] === undefined) return false;
    return true;
}

export function MoveMetaCategoryDetailFromJSON(json: any): MoveMetaCategoryDetail {
    return MoveMetaCategoryDetailFromJSONTyped(json, false);
}

export function MoveMetaCategoryDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoveMetaCategoryDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'descriptions': ((json['descriptions'] as Array<any>).map(MoveMetaCategoryDescriptionFromJSON)),
        'moves': ((json['moves'] as Array<any>).map(AbilityDetailPokemonInnerPokemonFromJSON)),
    };
}

export function MoveMetaCategoryDetailToJSON(value?: Omit<MoveMetaCategoryDetail, 'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'descriptions': ((value['descriptions'] as Array<any>).map(MoveMetaCategoryDescriptionToJSON)),
        'moves': ((value['moves'] as Array<any>).map(AbilityDetailPokemonInnerPokemonToJSON)),
    };
}
