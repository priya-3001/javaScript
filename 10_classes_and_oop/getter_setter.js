class User{
    constructor(email, pwd){
        this.email = email
        this.pwd = pwd
    }

    get email(){
        return this.email.toUpperCase();
    }

    set email(value){
        this.email = value;
    }
}

const user1 = new User("user1@gmail.com", "abcd")
console.log(user1.email);
