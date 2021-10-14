

const cards = document.getElementById("cards")
const items = document.getElementById("items")
const footer = document.getElementById("footer")
const templateCard = document.getElementById("template-card").content
const templateFooter = document.getElementById("template-footer").content
const templateShoppingCart = document.getElementById("template-shopping-cart").content
const fragment = document.createDocumentFragment()
let cart = {}

document.addEventListener("DOMContentLoaded", ()=>{
    fetchData()
    
})



const fetchData = async() => {
    try{
        const res= await fetch("/data/api.json")
        const data = await res.json()
        addProducts(data)
        
    } catch(error){
        console.log(error)
    }
}

const addProducts = data =>{
    data.forEach(product => {
        templateCard.querySelector('h5').textContent = product.title
        templateCard.querySelector("p").textContent = product.precio
        templateCard.querySelector("img").setAttribute("src", product.url)
        templateCard.querySelector(".btn").dataset.id = product.id

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
    
}







