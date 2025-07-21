// OOP in JavaScript - Users & Admins Example

console.log("=== Factory Function ===");
function createUser(username, email) {
    return {
        username,
        email,
        login() {
            console.log(`${this.username} logged in with email: ${this.email}`);
        }
    };
}

const user1 = createUser("john_doe", "john@example.com");
user1.login();


console.log("\n=== Constructor Function + new ===");
function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.login = function () {
    console.log(`${this.username} logged in with email: ${this.email}`);
};

const user2 = new User("jane_doe", "jane@example.com");
user2.login();


console.log("\n=== Class Syntax ===");
class UserClass {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        console.log(`${this.username} logged in with email: ${this.email}`);
    }
}

const user3 = new UserClass("mark_smith", "mark@example.com");
user3.login();


console.log("\n=== Inheritance - Constructor Function ===");
function Admin(username, email, role) {
    User.call(this, username, email); // call parent constructor
    this.role = role;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.deleteUser = function (user) {
    console.log(`${this.username} (admin) deleted user: ${user.username}`);
};

const admin1 = new Admin("admin_john", "admin@example.com", "superadmin");
admin1.login();
admin1.deleteUser(user2);


console.log("\n=== Inheritance - Class + extends ===");
class AdminClass extends UserClass {
    constructor(username, email, role) {
        super(username, email);
        this.role = role;
    }

    deleteUser(user) {
        console.log(`${this.username} (admin) deleted user: ${user.username}`);
    }
}

const admin2 = new AdminClass("admin_jane", "admin.jane@example.com", "moderator");
admin2.login();
admin2.deleteUser(user3);
