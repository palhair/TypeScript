let strOrNumb: string | number 
if(Math.random() > 0.5) {
    strOrNumb = 5;
}else{
    strOrNumb = 'str'
}

if (typeof strOrNumb === 'string'){
    console.log(strOrNumb);
}else{
    console.log(strOrNumb);
}

let str2OrNumb: typeof strOrNumb;

const user = {
    name: 'Klod'
};

type keyOfUser = keyof typeof user;

enum Direction {
    Up,
    Down
}
type d = keyof typeof Direction;