
class Product{
    consructor(){
        this.id = Number
        this._name = String
        this._description = String
        this.price = Number
        this.stock = Number
    }
get id(){
    return this.id
}
set id(n){
    if(typeof n == Number){
        this._name = n
    } 
}
get name(){
    return this._name
}
set name(n) {
    if(typeof n == "string"){
        this._name = n
    } 
}

set description(n){
    this._description = n
}

}