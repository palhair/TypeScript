interface Data {
    group: number;
    name: string;
}

const data: Data[] = [
    {group: 1, name: 'a'},
    {group: 1, name: 'b'},
    {group: 2, name: 'c'},
]

interface IGroup<T> {
    [key: string]: T[]

}

type Key = number | string;

function group<T extends Record<Key, any>, K extends keyof T> (arrObj: T[], key: K): IGroup<T>{
    let groupObj: IGroup<T> = {};
    arrObj.forEach(obj => {
        
        let keyGroup = obj[key];
        if(Array.isArray(groupObj[keyGroup])){

            groupObj[keyGroup].push(obj);
        }else{
            groupObj[keyGroup] = [obj];
        }
    });
    
    return groupObj;
}

let res = group(data, 'group');


function print<T extends Record<Key, any>> (res: IGroup<T>): void{
    for (let i in res){
        console.log(res[i]);
    }
}
print(res);