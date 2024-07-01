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
/**
 * 
 * @export
 * @interface PokemonDetailSprites
 */
export interface PokemonDetailSprites {
    [key: string]: string | any;
    /**
     * 
     * @type {string}
     * @memberof PokemonDetailSprites
     */
    frontDefault?: string;
}

/**
 * Check if a given object implements the PokemonDetailSprites interface.
 */
export function instanceOfPokemonDetailSprites(value: object): value is PokemonDetailSprites {
    return true;
}

export function PokemonDetailSpritesFromJSON(json: any): PokemonDetailSprites {
    return PokemonDetailSpritesFromJSONTyped(json, false);
}

export function PokemonDetailSpritesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PokemonDetailSprites {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'frontDefault': json['front_default'] == null ? undefined : json['front_default'],
    };
}

export function PokemonDetailSpritesToJSON(value?: PokemonDetailSprites | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'front_default': value['frontDefault'],
    };
}

