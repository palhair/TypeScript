function genereateError(message: string): never {
    throw new Error(message);
}

function dumpError(): never {
    
    while(true) {}
}

function rec(): never {    
    return rec();
}

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction){
    switch (action){
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        default:
            const _: never = action;
            throw new Error('Нет такого action')
    }
}
//never помогает блокировать векту условий в которую мы никогда не должны попасть
function isString(x: string | number): boolean {
    if (typeof x === 'string'){
        return true;
    }else if (typeof x === 'number'){
        return false;
    } 
    genereateError('dfsd');
}