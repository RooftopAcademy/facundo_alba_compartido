class User{
    constructor(){
        this._id = Number
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

}