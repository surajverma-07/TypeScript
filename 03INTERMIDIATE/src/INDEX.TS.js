var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "Raipur";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var suraj = new User("suraj@gmail.com", "Suraj Kuamr Verma");
// suraj.city = "durg";
// suraj.#name  // it's not acccessable bcz it is declare as a private member
