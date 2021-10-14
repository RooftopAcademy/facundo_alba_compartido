const cards = document.getElementById("cards")
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", ()=>{
    fetchData()

})

const fetchData = async() => {
    try{
        const res= await fetch("../../data/store.json")
        const data = await res.json()
        addStores(data)
        
    } catch(error){
        console.log(error)
    }
}


const addStores= data =>{
    data.forEach(store => {
        templateCard.querySelector('h3').textContent = store.storeName
        templateCard.querySelector("h5").textContent = store.description
        templateCard.getElementById("img").setAttribute("src", store.urlImage)
        templateCard.getElementById("img-logo").setAttribute("src", store.urlLogo)
        

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
    
}