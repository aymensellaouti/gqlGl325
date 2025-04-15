import { GraphQLError } from "graphql";
import { DB } from "./db/db";

export const Query = {
  hello: () => "Hello GL3  !!!",
  users: () => DB.users,
  user: (parent, { id }, context, info) => {
    const user = DB.users.find(user => user.id == id);
    if (!user) {
      throw new GraphQLError(`Element with id '${id}' not found.`, {
        extensions: {
          http: {
            status: 404
          }
        }
      });
    }
    return user;
  } ,
  workers: (parent, { isWorking = false }, context, info) =>
    DB.users.filter((user) => user.isWorking == isWorking),
  roles: () => DB.roles       
}; 
