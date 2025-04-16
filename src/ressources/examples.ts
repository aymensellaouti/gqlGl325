export const queryWithInterface = `
query queryWithInterfaces{
  persons {
    id
    name
    age
    ... on User {
      isWorking
      roles {
        designation
      }
    }
    ... on ProblemSolver {
      level
      codeForceNickname
    }
  }
}`;