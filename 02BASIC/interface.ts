interface User {
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    // startTrial:() => string
    startTrial():string
    getCoupon(couponname:string,value:number):number
}

const suraj:User = {
    dbId:77,
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
