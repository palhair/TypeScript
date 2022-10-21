type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
    customers?: Modifier,
    project: Modifier,
    adminPanel?: Modifier
}

type ModifierToAccess<Type> = {
    +readonly[Property in keyof Type as `canAccess${string & Property}`]-?: boolean;
}

type ModifierToAccess2<Type> = {
    +readonly[Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccessadminPanel' >]-?: boolean;
}

type UserAccess2 = ModifierToAccess<UserRoles>;
type UserAccess3 = ModifierToAccess2<UserRoles>;

type UserAccess1 = {
    customers?: boolean,
    project?: boolean,
    admin?: boolean
}