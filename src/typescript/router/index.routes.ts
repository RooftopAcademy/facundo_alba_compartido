 import Home from "../controllers/home"
 import Product from "../controllers/product"
 
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
            return console.log("PROFILE")

        case "#/products":
            return content.appendChild(Product())

        default:
            return console.log("404")
    }
}
export default(router)