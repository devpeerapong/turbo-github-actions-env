import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

if (!process.env.SECRET_KEY) {
  throw new Error("SECRET_KEY NOT SET");
}

console.log({ SECRET_KEY: process.env.SECRET_KEY });

const config: CodegenConfig = {
  overwrite: true,
  schema: ["https://graphql.anilist.co"],
  generates: {
    "src/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
