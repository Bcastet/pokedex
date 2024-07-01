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


import * as runtime from '../runtime';
import type {
  MoveBattleStyleDetail,
  MoveDetail,
  MoveLearnMethodDetail,
  MoveMetaAilmentDetail,
  MoveMetaCategoryDetail,
  MoveTargetDetail,
  PaginatedMoveBattleStyleSummaryList,
  PaginatedMoveLearnMethodSummaryList,
  PaginatedMoveMetaAilmentSummaryList,
  PaginatedMoveMetaCategorySummaryList,
  PaginatedMoveSummaryList,
  PaginatedMoveTargetSummaryList,
} from '../models/index';
import {
    MoveBattleStyleDetailFromJSON,
    MoveBattleStyleDetailToJSON,
    MoveDetailFromJSON,
    MoveDetailToJSON,
    MoveLearnMethodDetailFromJSON,
    MoveLearnMethodDetailToJSON,
    MoveMetaAilmentDetailFromJSON,
    MoveMetaAilmentDetailToJSON,
    MoveMetaCategoryDetailFromJSON,
    MoveMetaCategoryDetailToJSON,
    MoveTargetDetailFromJSON,
    MoveTargetDetailToJSON,
    PaginatedMoveBattleStyleSummaryListFromJSON,
    PaginatedMoveBattleStyleSummaryListToJSON,
    PaginatedMoveLearnMethodSummaryListFromJSON,
    PaginatedMoveLearnMethodSummaryListToJSON,
    PaginatedMoveMetaAilmentSummaryListFromJSON,
    PaginatedMoveMetaAilmentSummaryListToJSON,
    PaginatedMoveMetaCategorySummaryListFromJSON,
    PaginatedMoveMetaCategorySummaryListToJSON,
    PaginatedMoveSummaryListFromJSON,
    PaginatedMoveSummaryListToJSON,
    PaginatedMoveTargetSummaryListFromJSON,
    PaginatedMoveTargetSummaryListToJSON,
} from '../models/index';

export interface MoveAilmentListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface MoveAilmentRetrieveRequest {
    id: string;
}

export interface MoveBattleStyleListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface MoveBattleStyleRetrieveRequest {
    id: string;
}

export interface MoveCategoryListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface MoveCategoryRetrieveRequest {
    id: string;
}

export interface MoveLearnMethodListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface MoveLearnMethodRetrieveRequest {
    id: string;
}

export interface MoveListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface MoveRetrieveRequest {
    id: string;
}

export interface MoveTargetListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface MoveTargetRetrieveRequest {
    id: string;
}

/**
 * 
 */
export class MovesApi extends runtime.BaseAPI {

    /**
     * Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
     * List move meta ailments
     */
    async moveAilmentListRaw(requestParameters: MoveAilmentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedMoveMetaAilmentSummaryList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move-ailment/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedMoveMetaAilmentSummaryListFromJSON(jsonValue));
    }

    /**
     * Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
     * List move meta ailments
     */
    async moveAilmentList(requestParameters: MoveAilmentListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedMoveMetaAilmentSummaryList> {
        const response = await this.moveAilmentListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
     * Get move meta ailment
     */
    async moveAilmentRetrieveRaw(requestParameters: MoveAilmentRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MoveMetaAilmentDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling moveAilmentRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move-ailment/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MoveMetaAilmentDetailFromJSON(jsonValue));
    }

    /**
     * Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
     * Get move meta ailment
     */
    async moveAilmentRetrieve(requestParameters: MoveAilmentRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MoveMetaAilmentDetail> {
        const response = await this.moveAilmentRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
     * List move battle styles
     */
    async moveBattleStyleListRaw(requestParameters: MoveBattleStyleListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedMoveBattleStyleSummaryList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move-battle-style/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedMoveBattleStyleSummaryListFromJSON(jsonValue));
    }

    /**
     * Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
     * List move battle styles
     */
    async moveBattleStyleList(requestParameters: MoveBattleStyleListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedMoveBattleStyleSummaryList> {
        const response = await this.moveBattleStyleListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
     * Get move battle style
     */
    async moveBattleStyleRetrieveRaw(requestParameters: MoveBattleStyleRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MoveBattleStyleDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling moveBattleStyleRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move-battle-style/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MoveBattleStyleDetailFromJSON(jsonValue));
    }

    /**
     * Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
     * Get move battle style
     */
    async moveBattleStyleRetrieve(requestParameters: MoveBattleStyleRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MoveBattleStyleDetail> {
        const response = await this.moveBattleStyleRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Very general categories that loosely group move effects.
     * List move meta categories
     */
    async moveCategoryListRaw(requestParameters: MoveCategoryListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedMoveMetaCategorySummaryList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move-category/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedMoveMetaCategorySummaryListFromJSON(jsonValue));
    }

    /**
     * Very general categories that loosely group move effects.
     * List move meta categories
     */
    async moveCategoryList(requestParameters: MoveCategoryListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedMoveMetaCategorySummaryList> {
        const response = await this.moveCategoryListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Very general categories that loosely group move effects.
     * Get move meta category
     */
    async moveCategoryRetrieveRaw(requestParameters: MoveCategoryRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MoveMetaCategoryDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling moveCategoryRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move-category/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MoveMetaCategoryDetailFromJSON(jsonValue));
    }

    /**
     * Very general categories that loosely group move effects.
     * Get move meta category
     */
    async moveCategoryRetrieve(requestParameters: MoveCategoryRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MoveMetaCategoryDetail> {
        const response = await this.moveCategoryRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Methods by which Pokémon can learn moves.
     * List move learn methods
     */
    async moveLearnMethodListRaw(requestParameters: MoveLearnMethodListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedMoveLearnMethodSummaryList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move-learn-method/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedMoveLearnMethodSummaryListFromJSON(jsonValue));
    }

    /**
     * Methods by which Pokémon can learn moves.
     * List move learn methods
     */
    async moveLearnMethodList(requestParameters: MoveLearnMethodListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedMoveLearnMethodSummaryList> {
        const response = await this.moveLearnMethodListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Methods by which Pokémon can learn moves.
     * Get move learn method
     */
    async moveLearnMethodRetrieveRaw(requestParameters: MoveLearnMethodRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MoveLearnMethodDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling moveLearnMethodRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move-learn-method/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MoveLearnMethodDetailFromJSON(jsonValue));
    }

    /**
     * Methods by which Pokémon can learn moves.
     * Get move learn method
     */
    async moveLearnMethodRetrieve(requestParameters: MoveLearnMethodRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MoveLearnMethodDetail> {
        const response = await this.moveLearnMethodRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
     * List moves
     */
    async moveListRaw(requestParameters: MoveListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedMoveSummaryList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedMoveSummaryListFromJSON(jsonValue));
    }

    /**
     * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
     * List moves
     */
    async moveList(requestParameters: MoveListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedMoveSummaryList> {
        const response = await this.moveListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
     * Get move
     */
    async moveRetrieveRaw(requestParameters: MoveRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MoveDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling moveRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MoveDetailFromJSON(jsonValue));
    }

    /**
     * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
     * Get move
     */
    async moveRetrieve(requestParameters: MoveRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MoveDetail> {
        const response = await this.moveRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
     * List move targets
     */
    async moveTargetListRaw(requestParameters: MoveTargetListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedMoveTargetSummaryList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move-target/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedMoveTargetSummaryListFromJSON(jsonValue));
    }

    /**
     * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
     * List move targets
     */
    async moveTargetList(requestParameters: MoveTargetListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedMoveTargetSummaryList> {
        const response = await this.moveTargetListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
     * Get move target
     */
    async moveTargetRetrieveRaw(requestParameters: MoveTargetRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MoveTargetDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling moveTargetRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/move-target/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MoveTargetDetailFromJSON(jsonValue));
    }

    /**
     * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
     * Get move target
     */
    async moveTargetRetrieve(requestParameters: MoveTargetRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MoveTargetDetail> {
        const response = await this.moveTargetRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
