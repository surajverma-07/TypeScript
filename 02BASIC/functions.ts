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
export {}