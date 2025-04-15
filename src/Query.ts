import { DB } from "./db/db";

export const Query = {
  hello: () => "Hello GL3  !!!",
  users: () => DB.users,
  workers: (parent, { isWorking = false }, context, info) =>
    DB.users.filter((user) => user.isWorking == isWorking),
  roles: () => DB.roles       
}; 
