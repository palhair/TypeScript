

interface IForm {
    name: string;
    password: string;
    
}

const from: IForm = {
    name: 'Lord',
    password: '123'
    
}

const fromValidation: ValidationType = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'Должен быть длиннее 5 символов'},
    
}

type Validation<Type> = {
    [Property in keyof Type]-?:  {
        isValid: true
    } | {
        isValid: false;
        errorMessage: string;
    }
} 


type ValidationType = Validation<IForm>;
