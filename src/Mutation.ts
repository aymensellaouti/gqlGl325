export const Mutation = {
    addUser: (parent, {input}, { db }, info) => {
        const usersLength = db.users.length;
        if (!usersLength) {
            input.id = 1;
        } else {
            input.id = db.users[usersLength-1].id + 1;
        }
        db.users.push(input);
        return input;
    }
}