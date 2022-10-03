type httpMethod = 'post' | 'get'


function fetchWithAuth(url: string, method: httpMethod) : 1 | -1{
 return 1;
}

type UserFields = {name: string, age: number, skills: string[]}

type Role = { id: number, name: string}

type UserWithRole = {
    user: UserFields,
    role: Role
}

let user: UserFields &  Role = {
    name: "flow",
    age: 88,
    skills: ['fff', 'eee'],
    id: 1
}



