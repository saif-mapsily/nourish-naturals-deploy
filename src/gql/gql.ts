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
    "query FilteredProductItemList($slugs: [ID!], $gte: Float, $lte: Float, $sortBy: OrderDirection!, $after: String) {\n  products(\n    first: 10\n    channel: \"default-channel\"\n    filter: {categories: $slugs, price: {gte: $gte, lte: $lte}}\n    sortBy: {direction: $sortBy, field: NAME}\n    after: $after\n  ) {\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}": types.FilteredProductItemListDocument,
    "fragment ProductCategory on Category {\n  id\n  slug\n  name\n  backgroundImage {\n    url\n    alt\n  }\n}": types.ProductCategoryFragmentDoc,
    "query ProductCategoryList {\n  categories(first: 10) {\n    edges {\n      node {\n        ...ProductCategory\n      }\n    }\n  }\n}": types.ProductCategoryListDocument,
    "query ProductDetails($slug: String!) {\n  product(slug: $slug, channel: \"default-channel\") {\n    id\n    slug\n    name\n    description\n    seoTitle\n    seoDescription\n    rating\n    thumbnail(size: 1024, format: WEBP) {\n      url\n      alt\n    }\n    collections {\n      id\n      slug\n      name\n    }\n    category {\n      id\n      name\n    }\n    variants {\n      ...VariantDetails\n    }\n    pricing {\n      priceRange {\n        start {\n          gross {\n            amount\n            currency\n          }\n        }\n        stop {\n          gross {\n            amount\n            currency\n          }\n        }\n      }\n    }\n  }\n}": types.ProductDetailsDocument,
    "query ProductListByCategory($slugs: [String!]) {\n  categories(filter: {slugs: $slugs}, first: 10) {\n    edges {\n      node {\n        products(first: 10, channel: \"default-channel\") {\n          edges {\n            node {\n              ...ProductListItem\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductListByCategoryDocument,
    "query ProductListByCollection($slug: String!) {\n  collection(slug: $slug, channel: \"default-channel\") {\n    name\n    description\n    products(first: 10) {\n      edges {\n        node {\n          ...ProductListItem\n        }\n      }\n    }\n  }\n}": types.ProductListByCollectionDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  slug\n  rating\n  variants {\n    weight {\n      value\n      unit\n    }\n    pricing {\n      price {\n        gross {\n          amount\n        }\n      }\n      priceUndiscounted {\n        gross {\n          amount\n        }\n      }\n    }\n  }\n  thumbnail(size: 1024, format: WEBP) {\n    url\n    alt\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductListItemBySlug($slug: String!) {\n  product(slug: $slug, channel: \"default-channel\") {\n    ...ProductListItem\n  }\n}": types.ProductListItemBySlugDocument,
    "fragment VariantDetails on ProductVariant {\n  id\n  name\n  sku\n  quantityAvailable\n  quantityLimitPerCustomer\n  weight {\n    unit\n    value\n  }\n  media {\n    id\n    url\n    alt\n  }\n  pricing {\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n    priceUndiscounted {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n}": types.VariantDetailsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FilteredProductItemList($slugs: [ID!], $gte: Float, $lte: Float, $sortBy: OrderDirection!, $after: String) {\n  products(\n    first: 10\n    channel: \"default-channel\"\n    filter: {categories: $slugs, price: {gte: $gte, lte: $lte}}\n    sortBy: {direction: $sortBy, field: NAME}\n    after: $after\n  ) {\n    edges {\n      node {\n        ...ProductListItem\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}"): typeof import('./graphql').FilteredProductItemListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductCategory on Category {\n  id\n  slug\n  name\n  backgroundImage {\n    url\n    alt\n  }\n}"): typeof import('./graphql').ProductCategoryFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductCategoryList {\n  categories(first: 10) {\n    edges {\n      node {\n        ...ProductCategory\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductCategoryListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductDetails($slug: String!) {\n  product(slug: $slug, channel: \"default-channel\") {\n    id\n    slug\n    name\n    description\n    seoTitle\n    seoDescription\n    rating\n    thumbnail(size: 1024, format: WEBP) {\n      url\n      alt\n    }\n    collections {\n      id\n      slug\n      name\n    }\n    category {\n      id\n      name\n    }\n    variants {\n      ...VariantDetails\n    }\n    pricing {\n      priceRange {\n        start {\n          gross {\n            amount\n            currency\n          }\n        }\n        stop {\n          gross {\n            amount\n            currency\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductDetailsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductListByCategory($slugs: [String!]) {\n  categories(filter: {slugs: $slugs}, first: 10) {\n    edges {\n      node {\n        products(first: 10, channel: \"default-channel\") {\n          edges {\n            node {\n              ...ProductListItem\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductListByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductListByCollection($slug: String!) {\n  collection(slug: $slug, channel: \"default-channel\") {\n    name\n    description\n    products(first: 10) {\n      edges {\n        node {\n          ...ProductListItem\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductListByCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  slug\n  rating\n  variants {\n    weight {\n      value\n      unit\n    }\n    pricing {\n      price {\n        gross {\n          amount\n        }\n      }\n      priceUndiscounted {\n        gross {\n          amount\n        }\n      }\n    }\n  }\n  thumbnail(size: 1024, format: WEBP) {\n    url\n    alt\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductListItemBySlug($slug: String!) {\n  product(slug: $slug, channel: \"default-channel\") {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductListItemBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment VariantDetails on ProductVariant {\n  id\n  name\n  sku\n  quantityAvailable\n  quantityLimitPerCustomer\n  weight {\n    unit\n    value\n  }\n  media {\n    id\n    url\n    alt\n  }\n  pricing {\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n    priceUndiscounted {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n}"): typeof import('./graphql').VariantDetailsFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
