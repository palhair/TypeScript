
// tuples

const skills: [number, string]  = [1, 'Dev'];
const id = skills[0];
const skillName = skills[1];

skills.push('dfdfdf'); //push не ограничен
//const nowork = skills[2];
skills.pop();

const [idd, skill] = skills;

const arr: [number, string, ...boolean[]] = [1, 'ffee', false, true];