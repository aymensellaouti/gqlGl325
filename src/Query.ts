import { GraphQLError } from "graphql";

export const Query = {
  hello: () => "Hello GL3  !!!",
  users: (parent, { id }, { db }, info) => db.users,
  user: (parent, { id }, { db }, info) => {
    const user = db.users.find((user) => user.id == id);
    if (!user) {
      throw new GraphQLError(`Element with id '${id}' not found.`, {
        extensions: {
          http: {
            status: 404,
          },
        },
      });
    }
    return user;
  },
  workers: (parent, { isWorking = false }, { db }, info) =>
    db.users.filter((user) => user.isWorking == isWorking),
  roles: (parent, params, { db }, info) => db.roles,
}; 
