import { Injectable } from "@angular/core";
import { GraphQLAPI, graphqlOperation } from "@aws-amplify/api-graphql";
import { Observable } from 'rxjs';
import { Amplify } from '@aws-amplify/core';

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

export type ModelBeerTastingConditionInput = {
  host?: ModelStringInput | null;
  and?: Array<ModelBeerTastingConditionInput | null> | null;
  or?: Array<ModelBeerTastingConditionInput | null> | null;
  not?: ModelBeerTastingConditionInput | null;
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

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
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

export type ModelBeerTastingFilterInput = {
  id?: ModelIDInput | null;
  host?: ModelStringInput | null;
  and?: Array<ModelBeerTastingFilterInput | null> | null;
  or?: Array<ModelBeerTastingFilterInput | null> | null;
  not?: ModelBeerTastingFilterInput | null;
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

export type ListBeerTastingsQuery = {
  __typename: "ModelBeerTastingConnection";
  items: Array<{
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

@Injectable({
  providedIn: "root"
})
export class TastingsService {

  OnCreateBeerListener: Observable<OnCreateBeerSubscription> = GraphQLAPI.graphql(Amplify,
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
  ) as unknown as Observable<OnCreateBeerSubscription>;

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
    const response = (await GraphQLAPI.graphql(Amplify,
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBeerTastingsQuery>response.data.listBeerTastings;
  }

  OnCreateBeerTastingListener: Observable<
  OnCreateBeerTastingSubscription
  > = GraphQLAPI.graphql(Amplify,
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
  ) as unknown as Observable<OnCreateBeerTastingSubscription>;

  OnUpdateBeerTastingListener: Observable<
  OnUpdateBeerTastingSubscription
  > = GraphQLAPI.graphql(Amplify,
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
  ) as unknown as Observable<OnUpdateBeerTastingSubscription>;

  OnDeleteBeerTastingListener: Observable<
  OnDeleteBeerTastingSubscription
  > = GraphQLAPI.graphql(Amplify,
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
  ) as unknown as Observable<OnDeleteBeerTastingSubscription>;
}