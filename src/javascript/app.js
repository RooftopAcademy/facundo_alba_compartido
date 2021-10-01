

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
    if(localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"))
        addShoppingCart()
    }
})

cards.addEventListener("click", e =>{
    addCart(e)
})
items.addEventListener("click", e => {
    btnAccion(e)
})

const fetchData = async() => {
    try{
        const res= await fetch("../../api.json")
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

const addCart = e =>{
    if(e.target.classList.contains("btn-comprar")){
        setCart(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCart = objeto =>{
    const producto ={
        id: objeto.querySelector(".btn-comprar").dataset.id,
        title: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("p").textContent,
        cantidad: 1
    }
    if (cart.hasOwnProperty(producto.id)){
        producto.cantidad = cart[producto.id].cantidad + 1
    }
    cart[producto.id] = {...producto}
    addShoppingCart()
}
const addShoppingCart = () =>{
    items.innerHTML = ""
    Object.values(cart).forEach(product => {
        templateShoppingCart.querySelector("th").textContent = product.id
        templateShoppingCart.querySelectorAll("td")[0].textContent = product.title
        templateShoppingCart.querySelectorAll("td")[1].textContent = product.cantidad
        templateShoppingCart.querySelector(".btn-info").dataset.id = product.id
        templateShoppingCart.querySelector(".btn-danger").dataset.id = product.id
        templateShoppingCart.querySelector("span").textContent = product.cantidad * product.precio
    
        const clone = templateShoppingCart.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    addFooter()

    localStorage.setItem("cart", JSON.stringify(cart))
}

const addFooter = () => {
    footer.innerHTML = ""
    if(Object.keys(cart).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5">No se agregaron productos al carrito</th>
        `
        return
    }
    const nCantidad = Object.values(cart).reduce((acumulador, {cantidad}) => acumulador + cantidad, 0)
    const nPrecio = Object.values(cart).reduce((acumulador,{cantidad, precio}) => acumulador + cantidad * precio, 0)
    
    templateFooter.querySelectorAll("td")[0].textContent = nCantidad
    templateFooter.querySelector("span").textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnDelete = document.getElementById("vaciar-carrito")
    btnDelete.addEventListener("click", () => {
        cart = {}
        addShoppingCart()
    })

}

const btnAccion = e => {
    //Aumentar cantidad
    if(e.target.classList.contains("btn-info")){
        console.log(cart[e.target.dataset.id])
        const producto = cart[e.target.dataset.id]
        producto.cantidad++
        cart[e.target.dataset.id] = {...producto}
        addShoppingCart()
    }
    //disminuir cantidad
    if(e.target.classList.contains("btn-danger")){
        console.log(cart[e.target.dataset.id])
        const producto = cart[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad === 0){
            delete cart[e.target.dataset.id]
        }
        addShoppingCart()
    }
    e.stopPropagation()

}
