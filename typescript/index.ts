interface User {
    id: number;
    pw: string;
    name: string;
    age: number;
}

const admin: Pick<User, "id" & "pw"> = {
    id: 0,
    pw: 'asd'
}