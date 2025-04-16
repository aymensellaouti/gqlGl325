import { createPubSub, createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";
import { Query } from "./Query";
import { User } from "./User";
import { DB } from "./db/db";
import { renderGraphiQL } from "@graphql-yoga/render-graphiql";
import { Person } from "./Person";
import { Mutation } from "./Mutation";
import { Subscription } from "./Subscription";

const fs = require("fs");
const path = require("path");
const pubSub = createPubSub();

export const schema = createSchema({
  typeDefs: fs.readFileSync(
    path.join(__dirname, "./../schema/schema.graphql"),
    "utf-8"
  ),
  resolvers: {
    Query,
    User,
    Person,
    Mutation,
    Subscription 
  },
});
function main() {
  const yoga = createYoga({
    schema,
    context: { db: DB, pubSub },
    renderGraphiQL,
  });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
}
main();
