class Customer {
    constructor(){
        this._userName = String
    }

    get userName(){
        return this._userName
    }
    set userName(n){
        if(typeof n == "string"){
            this._userName = n
        } 
    }
}