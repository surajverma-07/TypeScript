let score: number | string = 7;
score = 77;
score = "7";

type UserType = {
    name: string;
    id: number;
    email: string;
}
type AdminType = {
    username: string;
    id: number;
}

let login: UserType | AdminType = {
    name: "suraj",
    id: 232,
    email: "jayshreeram@ram.ji"
}

login = { username: "suraj", id: 7 }

function getDbId(id: number | string) {
    console.log(`DataBase id =  ${id}`);
}
getDbId(7);
getDbId("16");

function getDbId1(id: number | string) {
    // id.toLowerCase();//it gives error coz id could be number
    //we need to narrow down 
    if (typeof id === "string") {
        id.toLowerCase();
    }
}

//array union 
const data: number[] = [23, 435, 546, 3];
const data1: string[] = ["23", "435", "546", "3"];
//mix not allowed like that it either be array of numbers or array of string
// const data2: string[]|number[]=[323,2,4,'5'];
const data2: string[] | number[] = [323, 2, 4];
const data3: string[] | number[] = ["jay", "shree", "ram"];

//to implement array containing multiple type we have this syntax
const data4: (string | number | boolean)[] = [1, "7", true];

//constant assignment 
let pi: 3.14 = 3.14;
// pi=3.1;//can't do that
pi = 3.14;//this is fine 

let branch: "cse" | "mech" | "etc" | "civil";
branch = "cse";
// branch="it";//can't assign another value whilch is not mentioned
export { }