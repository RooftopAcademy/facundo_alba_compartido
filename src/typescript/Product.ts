export class Product{
    readonly id: number
    readonly name: string
    readonly description: string
    readonly price: number
    readonly stock: number
    constructor(id: number, name: string, description: string, price: number, stock: number){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.stock = stock
    }
    

}