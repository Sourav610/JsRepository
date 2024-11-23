class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    set password(val){
        this._password = val;
    }
    get password(){
        return `${this._password}`
    }

    get email(){
        return this.email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }
}

const hitesh = new User("h@hitesh.ai", "123")
console.log(hitesh.password); 