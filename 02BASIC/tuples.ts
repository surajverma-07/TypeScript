//user can send data in any order 
let user: (string | number)[] = ["suraj", 7];
let user1: (string | number)[] = [7, "suraj"];

// but in API calls we need specificly order of data like [string , int , boolean]
let user2: [string, number, boolean];
user2 = ["suraj", 7, true];//it is fine 
// user2.push("suraj",7,true);

// user2 = [7,"suraj",true];//we can't do that 

let rgb: [number, number, number] = [255, 234, 222];
// let rgb1:[number,number,number] = [255,234,222,3];//give error


type User11 = [number, string];
const newUser: User11 = [112, "example@google.com"];

newUser[1] = "jayShreeRam";
// newUser[0]="can't do "

// bug fixed now we are not able to do
// newUser.push(false);