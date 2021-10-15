const cards = document.getElementById("cards")
const items = document.getElementById("items")
const footer = document.getElementById("footer")
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", ()=>{
    fetchData()
    
})



const fetchData = async() => {
    try{
        const res= await fetch("../../data/products.json")
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
        templateCard.querySelector(".btn-cart").dataset.id = product.id
        templateCard.getElementById("description").textContent = product.description

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
    
}



