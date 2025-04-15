import { DB } from "./db/db";

export const User = {
    roles: (user, { id }, context, info) => {
        return user.roles.map(
            (roleId) => DB.roles.find(role => role.id == roleId)
        )
    }
}