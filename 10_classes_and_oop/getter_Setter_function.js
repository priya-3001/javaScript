function User(email, pwd){
    this._email = email;
    this._pwd = pwd;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    });

 }
const user1 = new User("priya@gmail.com", "password123")
console.log(user1.email); // PRIYA@GMAIL.COM

// Setter called here:
user1.email = "newuser@gmail.com";
console.log(user1.email); // NEWUSER@GMAIL.COM 