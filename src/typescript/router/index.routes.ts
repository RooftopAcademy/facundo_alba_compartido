 import Home from "../controllers/home"
 import Product from "../controllers/product"
 import Cart from "../controllers/cart"
 import Profile from "../controllers/profile"
 
 let content :any = document.getElementById("root")
 
 
 const router = (route : string) =>{
 content.innerHTML = ''
    switch(route){
        case "":{
            return content.appendChild(Home())
        }
        case "#/": {
            return content.appendChild(Home())
        }    
        case "#/categories":{
            return content.appendChild(Home())
        }
        case "#/location":
            return console.log("LOCATION")
        case "#/profile":
            return content.appendChild(Profile())

        case "#/products":
            return content.appendChild(Product())

        case "#/shoppingcart":
            return content.appendChild(Cart())    

        default:
            return console.log("404")
    }
}
export default(router)