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


// type User = {
//     name:string;
//     email:string;
//     isActive:boolean;
// }

// //we can declare a type (user defained ) and use like this 
// function createUser(user:User):User{
//     // return {};
//     return user;
// }

// // createUser({});//gives an error bcz we have to provide proper type of it
// createUser({name:"suraj",email:"suraj",isActive:true});


type User = {
    readonly _id: string;//it is not modified once declared bcz of readonly property
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: number;// ? means it is optional to pass or not 
}

let user: User = {
    _id: "3434q5",
    name: "suraj",
    email: "suraj@gmail.com",
    isActive: true,
    creditCard: 42342 //not neccessary to provide it's an optional property of the object 
}

user.name = "suraj kumar verma ";
// user._id="3432r";//we can't overwrite the value of _id because it is readonly 

type cardNumber = {
    cardnumber:string;
}
type cardExpired = {
    cardexpired:boolean;
}
type cardDetails = cardNumber & cardExpired & {
    cardDate:string;
};

function cardDetailsInput (carddetails:cardDetails):cardDetails{
  return carddetails;
}

cardDetailsInput({cardexpired:true,cardnumber:"jayshreeram",cardDate:"34-34-3423"});



export { }