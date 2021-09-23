class User{
    constructor(){
        this._id = Number
        this._name = String
        this._email = String
        this._password = String
        this._email = String
        this.password = String
    }

    get id(){
        return this._id
    }
    set id(n){
        if(typeof n == Number){
            this._name = n
        } 
    }
    get name(){
        return this._name
    }
    set name(n){
        if(typeof n == String){
            this._name = n
        } 
    }
    get email(){
        return this._email
    }
    set email(n){
        if(typeof n == String){
            this._email = n
        } 
    }
    get password(){
        return this._password
    }
    set password(n){
        if(typeof n == String){
            this._password = n
        } 
    }

}