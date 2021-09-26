class Category{
    constructor(){
        this._name = String
        this._id = Number 
    }

    get name(){
        return this._name
    }
    set name(n){
        if(typeof n == "string"){
            this._name = n
        } 
    }
    get id(){
        return this._id
    }
    set id(n){
        if(typeof n === Number){
            this._name = n
        } 
    }
}