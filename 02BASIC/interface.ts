interface User {
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    // startTrial:() => string
    startTrial():string
    getCoupon(couponname:string,value:number):number
}
//reopening of the interface we doesn't need to edit above 1 instead this reopening update the actual one
interface User{
    githubId:string 
}

//Inheritance in interface
interface Admin extends User{
    role: "admin" | "learner"
}

// const suraj:User = {
const suraj:Admin = {
    dbId:77,
    role:"admin",
    githubId:"jayshreeram",
    email:"suraj@suraj.com",
    userId:23844,
    // startTrial:()=>{return "suraj"}
    startTrial:()=>("suraj: trial started"),
    getCoupon:(name:"HIT100",val:10) => {
        return 7;
    }
}

suraj.email = "suraj@iamsuraj.com"
// suraj.dbId = 34; //it's a read only
