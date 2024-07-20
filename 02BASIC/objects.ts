// const User = {
//     name:"suraj",
//     email:"suraj@gmail.com",
//     isActive:true 
// }

// //parameter type should be same fn({property} then while calling it should be fn({property}))
// function createUser({name:string,isPaid:boolean = false}){}

// createUser({name:"suraj",isPaid:false});

// //return type checking 
// function createCourse():{name:string,price:number}{
// //   return ;//it is wrong 
//     // return {};// it is also wrong
//     return {name:"jay Shree Ram",price:1000};
// }
// createCourse();


type User = {
    name:string;
    email:string;
    isActive:boolean;
}

//we can declare a type (user defained ) and use like this 
function createUser(user:User):User{
    // return {};
    return user;
}

// createUser({});//gives an error bcz we have to provide proper type of it
createUser({name:"suraj",email:"suraj",isActive:true});





export {}