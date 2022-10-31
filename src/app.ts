import run, { a, type MyType2 } from "./module/app2" ;
import running from "./module/app2" ;
import * as all from "./module/app2" ;
import {Test as Cl} from "./module/app2" ;
import {MyType as T} from "./module/app2" ;
import {type MyType} from "./module/app2" ;

running();
console.log(a);
run();
console.log(all.a);
new Cl();
