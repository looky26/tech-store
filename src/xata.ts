// Generated by Xata Codegen 0.29.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "products",
    columns: [
      { name: "name", type: "string" },
      { name: "ratings", type: "int" },
      { name: "available", type: "bool" },
      { name: "quantity", type: "int" },
      { name: "wishlist", type: "bool" },
      { name: "images", type: "file[]" },
      { name: "category", type: "link", link: { table: "categories" } },
      { name: "productdescription", type: "text" },
      { name: "specification", type: "text" },
      { name: "brand", type: "link", link: { table: "brands" } },
      { name: "price", type: "int" },
      { name: "slug", type: "string", unique: true },
    ],
  },
  {
    name: "categories",
    columns: [
      { name: "name", type: "string" },
      { name: "image", type: "file[]" },
    ],
    revLinks: [{ column: "category", table: "products" }],
  },
  {
    name: "brands",
    columns: [{ name: "name", type: "string" }],
    revLinks: [{ column: "brand", table: "products" }],
  },
  {
    name: "accounts",
    columns: [
      { name: "name", type: "string" },
      { name: "email", type: "string" },
      { name: "gender", type: "string" },
      { name: "birthday", type: "string" },
      { name: "phoneNumber", type: "string" },
      { name: "userId", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Products = InferredTypes["products"];
export type ProductsRecord = Products & XataRecord;

export type Categories = InferredTypes["categories"];
export type CategoriesRecord = Categories & XataRecord;

export type Brands = InferredTypes["brands"];
export type BrandsRecord = Brands & XataRecord;

export type Accounts = InferredTypes["accounts"];
export type AccountsRecord = Accounts & XataRecord;

export type DatabaseSchema = {
  products: ProductsRecord;
  categories: CategoriesRecord;
  brands: BrandsRecord;
  accounts: AccountsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://looky26-s-workspace-2dj0cs.eu-west-1.xata.sh/db/xata-techstore",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
