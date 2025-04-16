

export const Person = {
    __resolveType(obj) {
        if(obj.roles) {
            return "User"
        } else if (obj.codeForceNickname) {
          return "ProblemSolver";
        }
    }
}