import {module1} from "./module1";
import {module2} from "./module2";

console.log(module1("MODULE1"));
console.log(module2("MODULE2"));

(window as any).alert("SUCCESS");
