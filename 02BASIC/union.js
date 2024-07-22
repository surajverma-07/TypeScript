var score = 7;
score = 77;
score = "7";
var login = {
    name: "suraj",
    id: 232,
    email: "jayshreeram@ram.ji"
};
login = { username: "suraj", id: 7 };
function getDbId(id) {
    console.log("DataBase id =  ".concat(id));
}
getDbId(7);
getDbId("16");
function getDbId1(id) {
    // id.toLowerCase();//it gives error coz id could be number
    //we need to narrow down 
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array union 
var data = [23, 435, 546, 3];
var data1 = ["23", "435", "546", "3"];
//mix not allowed like that it either be array of numbers or array of string
// const data2: string[]|number[]=[323,2,4,'5'];
var data2 = [323, 2, 4];
var data3 = ["jay", "shree", "ram"];
//to implement array containing multiple type we have this syntax
var data4 = [1, "7", true];


