export const DB = {
  users: [
    {
      id: 1,
      name: "aymen sellaouti",
      age: 42,
      isWorking: true,
      roles: [1],
    },
    {
      id: 2,
      name: "skander sellaouti",
      age: 6,
      isWorking: false,
      roles: [2],
    },
  ],
  roles: [
    {
      id: 1,
      designation: "admin",
      methods: ["GET", "PUT", "POST", "DELETE"],
    },
    {
      id: 2,
      designation: "user",
      methods: ["GET"],
    },
  ],
  problemSolvers: [
    {
      id: 1,
      name: "orzdevinwang",
      age: 30,
      level: "Legendary Grandmaster",
      codeForceNickname: "orzdevinwang",
    },
    {
      id: 2,
      name: "Tourist",
      age: 30,
      level: "Legendary Grandmaster",
      codeForceNickname: "Tourist",
    },
  ],
};