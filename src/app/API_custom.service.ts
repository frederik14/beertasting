/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateBeerTastingInput = {
  id?: string | null;
  host: string;
};

export type ModelBeerTastingConditionInput = {
  host?: ModelStringInput | null;
  and?: Array<ModelBeerTastingConditionInput | null> | null;
  or?: Array<ModelBeerTastingConditionInput | null> | null;
  not?: ModelBeerTastingConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateBeerTastingInput = {
  id: string;
  host?: string | null;
};

export type DeleteBeerTastingInput = {
  id?: string | null;
};

export type CreateBeerInput = {
  id?: string | null;
  name: string;
  alcohol?: number | null;
  description?: string | null;
  beerBeerTastingId?: string | null;
};

export type ModelBeerConditionInput = {
  name?: ModelStringInput | null;
  alcohol?: ModelFloatInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelBeerConditionInput | null> | null;
  or?: Array<ModelBeerConditionInput | null> | null;
  not?: ModelBeerConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateBeerInput = {
  id: string;
  name?: string | null;
  alcohol?: number | null;
  description?: string | null;
  beerBeerTastingId?: string | null;
};

export type DeleteBeerInput = {
  id?: string | null;
};

export type CreateBeerRatingInput = {
  id?: string | null;
  userName: string;
  smell?: number | null;
  color?: number | null;
  branding?: number | null;
  taste?: number | null;
  description?: string | null;
  beerRatingBeerId?: string | null;
};

export type ModelBeerRatingConditionInput = {
  userName?: ModelStringInput | null;
  smell?: ModelFloatInput | null;
  color?: ModelFloatInput | null;
  branding?: ModelFloatInput | null;
  taste?: ModelFloatInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelBeerRatingConditionInput | null> | null;
  or?: Array<ModelBeerRatingConditionInput | null> | null;
  not?: ModelBeerRatingConditionInput | null;
};

export type UpdateBeerRatingInput = {
  id: string;
  userName?: string | null;
  smell?: number | null;
  color?: number | null;
  branding?: number | null;
  taste?: number | null;
  description?: string | null;
  beerRatingBeerId?: string | null;
};

export type DeleteBeerRatingInput = {
  id?: string | null;
};

export type ModelBeerTastingFilterInput = {
  id?: ModelIDInput | null;
  host?: ModelStringInput | null;
  and?: Array<ModelBeerTastingFilterInput | null> | null;
  or?: Array<ModelBeerTastingFilterInput | null> | null;
  not?: ModelBeerTastingFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelBeerFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  alcohol?: ModelFloatInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelBeerFilterInput | null> | null;
  or?: Array<ModelBeerFilterInput | null> | null;
  not?: ModelBeerFilterInput | null;
};

export type ModelBeerRatingFilterInput = {
  id?: ModelIDInput | null;
  userName?: ModelStringInput | null;
  smell?: ModelFloatInput | null;
  color?: ModelFloatInput | null;
  branding?: ModelFloatInput | null;
  taste?: ModelFloatInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelBeerRatingFilterInput | null> | null;
  or?: Array<ModelBeerRatingFilterInput | null> | null;
  not?: ModelBeerRatingFilterInput | null;
};

export type CreateBeerTastingMutation = {
  __typename: "BeerTasting";
  id: string;
  host: string;
  Beers: {
    __typename: "ModelBeerConnection";
    items: Array<{
      __typename: "Beer";
      id: string;
      name: string;
      alcohol: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBeerTastingMutation = {
  __typename: "BeerTasting";
  id: string;
  host: string;
  Beers: {
    __typename: "ModelBeerConnection";
    items: Array<{
      __typename: "Beer";
      id: string;
      name: string;
      alcohol: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBeerTastingMutation = {
  __typename: "BeerTasting";
  id: string;
  host: string;
  Beers: {
    __typename: "ModelBeerConnection";
    items: Array<{
      __typename: "Beer";
      id: string;
      name: string;
      alcohol: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBeerMutation = {
  __typename: "Beer";
  id: string;
  name: string;
  alcohol: number | null;
  description: string | null;
  BeerTasting: {
    __typename: "BeerTasting";
    id: string;
    host: string;
    Beers: {
      __typename: "ModelBeerConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  BeerRatings: {
    __typename: "ModelBeerRatingConnection";
    items: Array<{
      __typename: "BeerRating";
      id: string;
      userName: string;
      smell: number | null;
      color: number | null;
      branding: number | null;
      taste: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBeerMutation = {
  __typename: "Beer";
  id: string;
  name: string;
  alcohol: number | null;
  description: string | null;
  BeerTasting: {
    __typename: "BeerTasting";
    id: string;
    host: string;
    Beers: {
      __typename: "ModelBeerConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  BeerRatings: {
    __typename: "ModelBeerRatingConnection";
    items: Array<{
      __typename: "BeerRating";
      id: string;
      userName: string;
      smell: number | null;
      color: number | null;
      branding: number | null;
      taste: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBeerMutation = {
  __typename: "Beer";
  id: string;
  name: string;
  alcohol: number | null;
  description: string | null;
  BeerTasting: {
    __typename: "BeerTasting";
    id: string;
    host: string;
    Beers: {
      __typename: "ModelBeerConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  BeerRatings: {
    __typename: "ModelBeerRatingConnection";
    items: Array<{
      __typename: "BeerRating";
      id: string;
      userName: string;
      smell: number | null;
      color: number | null;
      branding: number | null;
      taste: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBeerRatingMutation = {
  __typename: "BeerRating";
  id: string;
  userName: string;
  Beer: {
    __typename: "Beer";
    id: string;
    name: string;
    alcohol: number | null;
    description: string | null;
    BeerTasting: {
      __typename: "BeerTasting";
      id: string;
      host: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    BeerRatings: {
      __typename: "ModelBeerRatingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smell: number | null;
  color: number | null;
  branding: number | null;
  taste: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBeerRatingMutation = {
  __typename: "BeerRating";
  id: string;
  userName: string;
  Beer: {
    __typename: "Beer";
    id: string;
    name: string;
    alcohol: number | null;
    description: string | null;
    BeerTasting: {
      __typename: "BeerTasting";
      id: string;
      host: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    BeerRatings: {
      __typename: "ModelBeerRatingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smell: number | null;
  color: number | null;
  branding: number | null;
  taste: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBeerRatingMutation = {
  __typename: "BeerRating";
  id: string;
  userName: string;
  Beer: {
    __typename: "Beer";
    id: string;
    name: string;
    alcohol: number | null;
    description: string | null;
    BeerTasting: {
      __typename: "BeerTasting";
      id: string;
      host: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    BeerRatings: {
      __typename: "ModelBeerRatingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smell: number | null;
  color: number | null;
  branding: number | null;
  taste: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetBeerTastingQuery = {
  __typename: "BeerTasting";
  id: string;
  host: string;
  Beers: {
    __typename: "ModelBeerConnection";
    items: Array<{
      __typename: "Beer";
      id: string;
      name: string;
      alcohol: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBeerTastingsQuery = {
  __typename: "ModelBeerTastingConnection";
  items: Array<{
    __typename: "BeerTasting";
    id: string;
    host: string;
    Beers: {
      __typename: "ModelBeerConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetBeerQuery = {
  __typename: "Beer";
  id: string;
  name: string;
  alcohol: number | null;
  description: string | null;
  BeerTasting: {
    __typename: "BeerTasting";
    id: string;
    host: string;
    Beers: {
      __typename: "ModelBeerConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  BeerRatings: {
    __typename: "ModelBeerRatingConnection";
    items: Array<{
      __typename: "BeerRating";
      id: string;
      userName: string;
      smell: number | null;
      color: number | null;
      branding: number | null;
      taste: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBeersQuery = {
  __typename: "ModelBeerConnection";
  items: Array<{
    __typename: "Beer";
    id: string;
    name: string;
    alcohol: number | null;
    description: string | null;
    BeerTasting: {
      __typename: "BeerTasting";
      id: string;
      host: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    BeerRatings: {
      __typename: "ModelBeerRatingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetBeerRatingQuery = {
  __typename: "BeerRating";
  id: string;
  userName: string;
  Beer: {
    __typename: "Beer";
    id: string;
    name: string;
    alcohol: number | null;
    description: string | null;
    BeerTasting: {
      __typename: "BeerTasting";
      id: string;
      host: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    BeerRatings: {
      __typename: "ModelBeerRatingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smell: number | null;
  color: number | null;
  branding: number | null;
  taste: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBeerRatingsQuery = {
  __typename: "ModelBeerRatingConnection";
  items: Array<{
    __typename: "BeerRating";
    id: string;
    userName: string;
    Beer: {
      __typename: "Beer";
      id: string;
      name: string;
      alcohol: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    smell: number | null;
    color: number | null;
    branding: number | null;
    taste: number | null;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateBeerTastingSubscription = {
  __typename: "BeerTasting";
  id: string;
  host: string;
  Beers: {
    __typename: "ModelBeerConnection";
    items: Array<{
      __typename: "Beer";
      id: string;
      name: string;
      alcohol: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBeerTastingSubscription = {
  __typename: "BeerTasting";
  id: string;
  host: string;
  Beers: {
    __typename: "ModelBeerConnection";
    items: Array<{
      __typename: "Beer";
      id: string;
      name: string;
      alcohol: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBeerTastingSubscription = {
  __typename: "BeerTasting";
  id: string;
  host: string;
  Beers: {
    __typename: "ModelBeerConnection";
    items: Array<{
      __typename: "Beer";
      id: string;
      name: string;
      alcohol: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBeerSubscription = {
  __typename: "Beer";
  id: string;
  name: string;
  alcohol: number | null;
  description: string | null;
  BeerTasting: {
    __typename: "BeerTasting";
    id: string;
    host: string;
    Beers: {
      __typename: "ModelBeerConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  BeerRatings: {
    __typename: "ModelBeerRatingConnection";
    items: Array<{
      __typename: "BeerRating";
      id: string;
      userName: string;
      smell: number | null;
      color: number | null;
      branding: number | null;
      taste: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBeerSubscription = {
  __typename: "Beer";
  id: string;
  name: string;
  alcohol: number | null;
  description: string | null;
  BeerTasting: {
    __typename: "BeerTasting";
    id: string;
    host: string;
    Beers: {
      __typename: "ModelBeerConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  BeerRatings: {
    __typename: "ModelBeerRatingConnection";
    items: Array<{
      __typename: "BeerRating";
      id: string;
      userName: string;
      smell: number | null;
      color: number | null;
      branding: number | null;
      taste: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBeerSubscription = {
  __typename: "Beer";
  id: string;
  name: string;
  alcohol: number | null;
  description: string | null;
  BeerTasting: {
    __typename: "BeerTasting";
    id: string;
    host: string;
    Beers: {
      __typename: "ModelBeerConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  BeerRatings: {
    __typename: "ModelBeerRatingConnection";
    items: Array<{
      __typename: "BeerRating";
      id: string;
      userName: string;
      smell: number | null;
      color: number | null;
      branding: number | null;
      taste: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBeerRatingSubscription = {
  __typename: "BeerRating";
  id: string;
  userName: string;
  Beer: {
    __typename: "Beer";
    id: string;
    name: string;
    alcohol: number | null;
    description: string | null;
    BeerTasting: {
      __typename: "BeerTasting";
      id: string;
      host: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    BeerRatings: {
      __typename: "ModelBeerRatingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smell: number | null;
  color: number | null;
  branding: number | null;
  taste: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBeerRatingSubscription = {
  __typename: "BeerRating";
  id: string;
  userName: string;
  Beer: {
    __typename: "Beer";
    id: string;
    name: string;
    alcohol: number | null;
    description: string | null;
    BeerTasting: {
      __typename: "BeerTasting";
      id: string;
      host: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    BeerRatings: {
      __typename: "ModelBeerRatingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smell: number | null;
  color: number | null;
  branding: number | null;
  taste: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBeerRatingSubscription = {
  __typename: "BeerRating";
  id: string;
  userName: string;
  Beer: {
    __typename: "Beer";
    id: string;
    name: string;
    alcohol: number | null;
    description: string | null;
    BeerTasting: {
      __typename: "BeerTasting";
      id: string;
      host: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    BeerRatings: {
      __typename: "ModelBeerRatingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smell: number | null;
  color: number | null;
  branding: number | null;
  taste: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBeerTasting(
    input: CreateBeerTastingInput,
    condition?: ModelBeerTastingConditionInput
  ): Promise<CreateBeerTastingMutation> {
    const statement = `mutation CreateBeerTasting($input: CreateBeerTastingInput!, $condition: ModelBeerTastingConditionInput) {
        createBeerTasting(input: $input, condition: $condition) {
          __typename
          id
          host
          Beers {
            __typename
            items {
              __typename
              id
              name
              alcohol
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBeerTastingMutation>response.data.createBeerTasting;
  }
  async UpdateBeerTasting(
    input: UpdateBeerTastingInput,
    condition?: ModelBeerTastingConditionInput
  ): Promise<UpdateBeerTastingMutation> {
    const statement = `mutation UpdateBeerTasting($input: UpdateBeerTastingInput!, $condition: ModelBeerTastingConditionInput) {
        updateBeerTasting(input: $input, condition: $condition) {
          __typename
          id
          host
          Beers {
            __typename
            items {
              __typename
              id
              name
              alcohol
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBeerTastingMutation>response.data.updateBeerTasting;
  }
  async DeleteBeerTasting(
    input: DeleteBeerTastingInput,
    condition?: ModelBeerTastingConditionInput
  ): Promise<DeleteBeerTastingMutation> {
    const statement = `mutation DeleteBeerTasting($input: DeleteBeerTastingInput!, $condition: ModelBeerTastingConditionInput) {
        deleteBeerTasting(input: $input, condition: $condition) {
          __typename
          id
          host
          Beers {
            __typename
            items {
              __typename
              id
              name
              alcohol
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBeerTastingMutation>response.data.deleteBeerTasting;
  }
  async CreateBeer(
    input: CreateBeerInput,
    condition?: ModelBeerConditionInput
  ): Promise<CreateBeerMutation> {
    const statement = `mutation CreateBeer($input: CreateBeerInput!, $condition: ModelBeerConditionInput) {
        createBeer(input: $input, condition: $condition) {
          __typename
          id
          name
          alcohol
          description
          BeerTasting {
            __typename
            id
            host
            Beers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          BeerRatings {
            __typename
            items {
              __typename
              id
              userName
              smell
              color
              branding
              taste
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBeerMutation>response.data.createBeer;
  }
  async UpdateBeer(
    input: UpdateBeerInput,
    condition?: ModelBeerConditionInput
  ): Promise<UpdateBeerMutation> {
    const statement = `mutation UpdateBeer($input: UpdateBeerInput!, $condition: ModelBeerConditionInput) {
        updateBeer(input: $input, condition: $condition) {
          __typename
          id
          name
          alcohol
          description
          BeerTasting {
            __typename
            id
            host
            Beers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          BeerRatings {
            __typename
            items {
              __typename
              id
              userName
              smell
              color
              branding
              taste
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBeerMutation>response.data.updateBeer;
  }
  async DeleteBeer(
    input: DeleteBeerInput,
    condition?: ModelBeerConditionInput
  ): Promise<DeleteBeerMutation> {
    const statement = `mutation DeleteBeer($input: DeleteBeerInput!, $condition: ModelBeerConditionInput) {
        deleteBeer(input: $input, condition: $condition) {
          __typename
          id
          name
          alcohol
          description
          BeerTasting {
            __typename
            id
            host
            Beers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          BeerRatings {
            __typename
            items {
              __typename
              id
              userName
              smell
              color
              branding
              taste
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBeerMutation>response.data.deleteBeer;
  }
  async CreateBeerRating(
    input: CreateBeerRatingInput,
    condition?: ModelBeerRatingConditionInput
  ): Promise<CreateBeerRatingMutation> {
    const statement = `mutation CreateBeerRating($input: CreateBeerRatingInput!, $condition: ModelBeerRatingConditionInput) {
        createBeerRating(input: $input, condition: $condition) {
          __typename
          id
          userName
          Beer {
            __typename
            id
            name
            alcohol
            description
            BeerTasting {
              __typename
              id
              host
              createdAt
              updatedAt
            }
            BeerRatings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          smell
          color
          branding
          taste
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBeerRatingMutation>response.data.createBeerRating;
  }
  async UpdateBeerRating(
    input: UpdateBeerRatingInput,
    condition?: ModelBeerRatingConditionInput
  ): Promise<UpdateBeerRatingMutation> {
    const statement = `mutation UpdateBeerRating($input: UpdateBeerRatingInput!, $condition: ModelBeerRatingConditionInput) {
        updateBeerRating(input: $input, condition: $condition) {
          __typename
          id
          userName
          Beer {
            __typename
            id
            name
            alcohol
            description
            BeerTasting {
              __typename
              id
              host
              createdAt
              updatedAt
            }
            BeerRatings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          smell
          color
          branding
          taste
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBeerRatingMutation>response.data.updateBeerRating;
  }
  async DeleteBeerRating(
    input: DeleteBeerRatingInput,
    condition?: ModelBeerRatingConditionInput
  ): Promise<DeleteBeerRatingMutation> {
    const statement = `mutation DeleteBeerRating($input: DeleteBeerRatingInput!, $condition: ModelBeerRatingConditionInput) {
        deleteBeerRating(input: $input, condition: $condition) {
          __typename
          id
          userName
          Beer {
            __typename
            id
            name
            alcohol
            description
            BeerTasting {
              __typename
              id
              host
              createdAt
              updatedAt
            }
            BeerRatings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          smell
          color
          branding
          taste
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBeerRatingMutation>response.data.deleteBeerRating;
  }
  async GetBeerTasting(id: string): Promise<GetBeerTastingQuery> {
    const statement = `query GetBeerTasting($id: ID!) {
        getBeerTasting(id: $id) {
          __typename
          id
          host
          Beers {
            __typename
            items {
              __typename
              id
              name
              alcohol
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBeerTastingQuery>response.data.getBeerTasting;
  }
  async ListBeerTastings(
    filter?: ModelBeerTastingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBeerTastingsQuery> {
    const statement = `query ListBeerTastings($filter: ModelBeerTastingFilterInput, $limit: Int, $nextToken: String) {
        listBeerTastings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            host
            Beers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBeerTastingsQuery>response.data.listBeerTastings;
  }
  async GetBeer(id: string): Promise<GetBeerQuery> {
    const statement = `query GetBeer($id: ID!) {
        getBeer(id: $id) {
          __typename
          id
          name
          alcohol
          description
          BeerTasting {
            __typename
            id
            host
            Beers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          BeerRatings {
            __typename
            items {
              __typename
              id
              userName
              smell
              color
              branding
              taste
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBeerQuery>response.data.getBeer;
  }
  async ListBeers(
    filter?: ModelBeerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBeersQuery> {
    const statement = `query ListBeers($filter: ModelBeerFilterInput, $limit: Int, $nextToken: String) {
        listBeers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            alcohol
            description
            BeerTasting {
              __typename
              id
              host
              createdAt
              updatedAt
            }
            BeerRatings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBeersQuery>response.data.listBeers;
  }
  async GetBeerRating(id: string): Promise<GetBeerRatingQuery> {
    const statement = `query GetBeerRating($id: ID!) {
        getBeerRating(id: $id) {
          __typename
          id
          userName
          Beer {
            __typename
            id
            name
            alcohol
            description
            BeerTasting {
              __typename
              id
              host
              createdAt
              updatedAt
            }
            BeerRatings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          smell
          color
          branding
          taste
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBeerRatingQuery>response.data.getBeerRating;
  }
  async ListBeerRatings(
    filter?: ModelBeerRatingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBeerRatingsQuery> {
    const statement = `query ListBeerRatings($filter: ModelBeerRatingFilterInput, $limit: Int, $nextToken: String) {
        listBeerRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userName
            Beer {
              __typename
              id
              name
              alcohol
              description
              createdAt
              updatedAt
            }
            smell
            color
            branding
            taste
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBeerRatingsQuery>response.data.listBeerRatings;
  }
  OnCreateBeerTastingListener: Observable<
    OnCreateBeerTastingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBeerTasting {
        onCreateBeerTasting {
          __typename
          id
          host
          Beers {
            __typename
            items {
              __typename
              id
              name
              alcohol
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateBeerTastingSubscription>;

  OnUpdateBeerTastingListener: Observable<
    OnUpdateBeerTastingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBeerTasting {
        onUpdateBeerTasting {
          __typename
          id
          host
          Beers {
            __typename
            items {
              __typename
              id
              name
              alcohol
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateBeerTastingSubscription>;

  OnDeleteBeerTastingListener: Observable<
    OnDeleteBeerTastingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBeerTasting {
        onDeleteBeerTasting {
          __typename
          id
          host
          Beers {
            __typename
            items {
              __typename
              id
              name
              alcohol
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteBeerTastingSubscription>;

  OnCreateBeerListener: Observable<OnCreateBeerSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateBeer {
        onCreateBeer {
          __typename
          id
          name
          alcohol
          description
          BeerTasting {
            __typename
            id
            host
            Beers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          BeerRatings {
            __typename
            items {
              __typename
              id
              userName
              smell
              color
              branding
              taste
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateBeerSubscription>;

  OnUpdateBeerListener: Observable<OnUpdateBeerSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBeer {
        onUpdateBeer {
          __typename
          id
          name
          alcohol
          description
          BeerTasting {
            __typename
            id
            host
            Beers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          BeerRatings {
            __typename
            items {
              __typename
              id
              userName
              smell
              color
              branding
              taste
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateBeerSubscription>;

  OnDeleteBeerListener: Observable<OnDeleteBeerSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBeer {
        onDeleteBeer {
          __typename
          id
          name
          alcohol
          description
          BeerTasting {
            __typename
            id
            host
            Beers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          BeerRatings {
            __typename
            items {
              __typename
              id
              userName
              smell
              color
              branding
              taste
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteBeerSubscription>;

  OnCreateBeerRatingListener: Observable<
    OnCreateBeerRatingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBeerRating {
        onCreateBeerRating {
          __typename
          id
          userName
          Beer {
            __typename
            id
            name
            alcohol
            description
            BeerTasting {
              __typename
              id
              host
              createdAt
              updatedAt
            }
            BeerRatings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          smell
          color
          branding
          taste
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateBeerRatingSubscription>;

  OnUpdateBeerRatingListener: Observable<
    OnUpdateBeerRatingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBeerRating {
        onUpdateBeerRating {
          __typename
          id
          userName
          Beer {
            __typename
            id
            name
            alcohol
            description
            BeerTasting {
              __typename
              id
              host
              createdAt
              updatedAt
            }
            BeerRatings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          smell
          color
          branding
          taste
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateBeerRatingSubscription>;

  OnDeleteBeerRatingListener: Observable<
    OnDeleteBeerRatingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBeerRating {
        onDeleteBeerRating {
          __typename
          id
          userName
          Beer {
            __typename
            id
            name
            alcohol
            description
            BeerTasting {
              __typename
              id
              host
              createdAt
              updatedAt
            }
            BeerRatings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          smell
          color
          branding
          taste
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteBeerRatingSubscription>;
}
