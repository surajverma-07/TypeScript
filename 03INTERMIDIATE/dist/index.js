"use strict";
// class User {
//    public email:string;//by default public
//     private name:string;
//    private readonly city:string="Raipur";
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name= name;
//     }
// }
// const suraj = new User("suraj@gmail.com","Suraj Kuamr Verma");
// suraj.city = "durg";
// suraj.#name  // it's not acccessable bcz it is declare as a private member
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Raipur";
        this.course_count = 1;
        this.emp_count = 1;
    }
    deleteToken() {
        console.log("Token Deleted Successfully ");
    }
    // Getter and Setter Methods are use to get or set private member/var of the class because they are not accessable outside the class
    get getEmail() {
        return `Your Email is =  ${this.email}`;
    }
    set SetCourse(course_count) {
        if (course_count <= 1) {
            throw new Error("Course Can not be less than 1");
        }
        this.course_count = course_count;
    }
}
class AndroidUser extends User {
    CourseCount() {
        // return this.course_count; can't access private member 
        let androidCount = this.emp_count / 2; //protected can be used in extended user
    }
}
const suraj = new User("suraj@gmail.com", "Suraj Kumar Verma");
