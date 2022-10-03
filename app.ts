
//типизация функций
function getFullName(userEntity: {firstName: string, surName:string}): string{
    return `${userEntity.firstName} ${userEntity.surName}`;
}

const getFullNameArrow = (firstName: string, surName: string): string => {
    return `${firstName} ${surName}`;
}

 


const user = {
    firstName: 'Ralf',
    surName: 'Ringer', 
    city: 'London', 
    age: 97,
    skills: {
        dev: true,
        devops: true
    }
}

console.log(getFullName(user));
//типизация объекта
let info: {
    officeId: number;
    isOpened: boolean;
    contacts :{
        phone: string;
        email: string;
        address: {
            city: string;
        }
    }
} = {
	"officeId": 45,
	"isOpened": false,
	"contacts": {
		"phone": "+79100000000",
		"email": "my@email.ru",
		"address": {
			"city": "Москва"
		}
	}
}

// типизация массива

const skills: string[]  = ['Dev', "DevOps", 'Testing'];

for (const skill of skills) {
    console.log(skill.toLocaleLowerCase());
}


const res = skills
.filter((s: string) => s !== 'DevOps')
.map(s => s + '! ')
.reduce((a, b) => a + b);
console.log(res);


