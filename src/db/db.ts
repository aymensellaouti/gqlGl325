export const DB = {
  users: [
    {
      id:1,
      name: "aymen sellaouti",
      age: 42,
      isWorking: true,
      roles: 1
    },
    {
      name: "skander sellaouti",
      age: 6,
      isWorking: false,
      role: 2
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
};