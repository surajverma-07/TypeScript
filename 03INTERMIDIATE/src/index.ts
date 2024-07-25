class User {
    email:string;
    name:string;
    readonly city:string="Raipur";
     
    constructor(email:string,name:string){
        this.email = email;
        this.name= name;
    }
}

const suraj = new User("suraj@gmail.com","Suraj Kuamr Verma");
// suraj.city = "durg";