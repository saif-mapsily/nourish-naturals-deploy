/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "fragment ProductCategory on Category {\n  id\n  slug\n  name\n  description\n  backgroundImage {\n    url\n    alt\n  }\n}": types.ProductCategoryFragmentDoc,
    "query ProductCategoryList {\n  categories(first: 10) {\n    edges {\n      node {\n        ...ProductCategory\n      }\n    }\n  }\n}": types.ProductCategoryListDocument,
    "query ProductListByCategory($slugs: [String!]) {\n  categories(filter: {slugs: $slugs}, first: 10) {\n    edges {\n      node {\n        name\n        products(first: 10, channel: \"default-channel\") {\n          edges {\n            node {\n              ...ProductListItem\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductListByCategoryDocument,
    "query ProductListByCollection($slug: String!) {\n  collection(slug: $slug, channel: \"default-channel\") {\n    name\n    description\n    products(first: 10) {\n      edges {\n        node {\n          ...ProductListItem\n        }\n      }\n    }\n  }\n}": types.ProductListByCollectionDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  slug\n  pricing {\n    priceRange {\n      start {\n        gross {\n          amount\n          currency\n        }\n      }\n      stop {\n        gross {\n          amount\n          currency\n        }\n      }\n    }\n  }\n  category {\n    id\n    name\n  }\n  thumbnail(size: 1024, format: WEBP) {\n    url\n    alt\n  }\n}": types.ProductListItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductCategory on Category {\n  id\n  slug\n  name\n  description\n  backgroundImage {\n    url\n    alt\n  }\n}"): typeof import('./graphql').ProductCategoryFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductCategoryList {\n  categories(first: 10) {\n    edges {\n      node {\n        ...ProductCategory\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductCategoryListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductListByCategory($slugs: [String!]) {\n  categories(filter: {slugs: $slugs}, first: 10) {\n    edges {\n      node {\n        name\n        products(first: 10, channel: \"default-channel\") {\n          edges {\n            node {\n              ...ProductListItem\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductListByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductListByCollection($slug: String!) {\n  collection(slug: $slug, channel: \"default-channel\") {\n    name\n    description\n    products(first: 10) {\n      edges {\n        node {\n          ...ProductListItem\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductListByCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  slug\n  pricing {\n    priceRange {\n      start {\n        gross {\n          amount\n          currency\n        }\n      }\n      stop {\n        gross {\n          amount\n          currency\n        }\n      }\n    }\n  }\n  category {\n    id\n    name\n  }\n  thumbnail(size: 1024, format: WEBP) {\n    url\n    alt\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
