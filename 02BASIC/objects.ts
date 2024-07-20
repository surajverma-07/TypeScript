const User = {
    name:"suraj",
    email:"suraj@gmail.com",
    isActive:true 
}

//parameter type should be same fn({property} then while calling it should be fn({property}))
function createUser({name:string,isPaid:boolean = false}){}

createUser({name:"suraj",isPaid:false});

//return type checking 
function createCourse():{name:string,price:number}{
//   return ;//it is wrong 
    // return {};// it is also wrong
    return {name:"jay Shree Ram",price:1000};
}
createCourse();



export {}