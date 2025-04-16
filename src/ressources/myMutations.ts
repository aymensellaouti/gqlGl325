const mutation = `
	mutation addUserMutation($input: addUserInput){
        addUser(input: $input) {
    id
  }
`

const inputVariable = `{"input": {"name": "new user", "age": 25, "isWorking": true, "roles": [1]}}`;