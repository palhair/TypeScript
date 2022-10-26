class User {
    constructor(public id: number, public name: string){ }
}

function getData(id: number){
    return new User(id, 'Klod');
}

type RT = ReturnType<typeof getData>;
type RT2 = ReturnType<() => void>;
type RT3 = ReturnType<<T>() => T>;
type RT4 = ReturnType<<T extends string>() => T>;

type PT = Parameters<typeof getData>;
type firstArg = PT[0];

type CP = ConstructorParameters<typeof User>[1];
type IT = InstanceType<typeof User>