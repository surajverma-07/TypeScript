//How to check type in parameter

function getFiveMul(num:number){
    return num*5;
}
getFiveMul(20);
//mandatory to give type in parameter () to utilise typescript in better way so that it can provide type error or handle wrong type of input 
function getUpper(name:string){
    return name.toUpperCase();
}

let signUp = (name:string,email:string,isAuthorized:boolean = false) =>{
    return "Jay Shree Ram";
}//false is default value now if call signUp("suraj","suraj@gamil.com") it won't give error that is default value is used

// console.log(getUpper(5));
console.log(getUpper("suraj"));

// About Returning type 
function getFiveSum(num:number):number{
    return num+5;

    // return "suraj";
    //without allocating fn():type it is allow but after it gives the error that return type is not a string which helps 
}
getFiveSum(20);

let arrowExample = (str:string):string=>{
    return "";
}

// function giveNumber(num:number):boolean{
//     if(num<0){
//         return false;
//     }else{
//         return 100;
//     }
// }//we can't decide type earlier if we have more than one data type to be return 

// const heros = ["mahi","kohli","suraj"];
const heros = [7,18,7];
//in map function ts automatically fetch wheather array is a collection of number , string or any other data type
//but for return string we have to do additional checking  
heros.map((hero):string=>{
    // return 7;
    return `hero is ${hero}`;
})

function consoleError(errorMsg:string):void{
  console.log(errorMsg);
}

function handleError(errorMsg:string):never{
  throw new Error(errorMsg);
}
consoleError("error");
handleError("error");


export {}