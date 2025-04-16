export const Mutation = {
  addUser: (parent, { input }, { db, pubSub }, info) => {
    const usersLength = db.users.length;
    if (!usersLength) {
      input.id = 1;
    } else {
      input.id = db.users[usersLength - 1].id + 1;
    }
    pubSub.publish("addedUser", { user: input });
    db.users.push(input);
    return input;
  },
};