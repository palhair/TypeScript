type A = Awaited<Promise<string>>;
type A2 = Awaited<Promise<Promise<string>>>;

interface IMenu {
    name: string;
    url: string;
}

async function getMenu(): Promise<IMenu[]> {
    return[{name:'df', url: 'fsd'}];
}

type R = Awaited<ReturnType<typeof getMenu>>;
type tt = ReturnType<typeof getMenu>;

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
    return [await x];
}

async function getArray2<T>(x: T): Promise<T[]> {//старая неполня типизация
    return [await x];
}