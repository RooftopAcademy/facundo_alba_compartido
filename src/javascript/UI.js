class Product{
    constructor(id, name, description, price, stock){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
}

class UI{
    addProduct(product){
      const productList = document.getElementById("product-list");
      const element = document.createElement("div");
      element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
            <strong> Product id </strong>: ${product.id}
            <strong> Product Name </strong>: ${product.name}
            <strong> Product Description </strong>: ${product.description}
            <strong> Product Price </strong>: ${product.price}
            <strong> Product Stock </strong>: ${product.stock}
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
      `
      productList.appendChild(element);
    }
    resertForm(){
        document.getElementById("product-form").reset();
    }

    deleteProduct(element){
        if (element.name === "delete"){
            console.log(element.parentElement.parentElement.parentElement.remove())
            this.showMessage("Product Deleted Successfully", "info")
        }
    }
    showMessage(message, ccsClass){
        const div = document.createElement("div");
        div.className = `alert alert-${ccsClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //Showing in DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove()
        },3000)
    }
}
//DOM Event

document.getElementById("product-form").addEventListener("submit", function(e){
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;

    const product = new Product(id, name, description, price, stock);

    const ui = new UI();
    if(id === "" || name ==="" || description === "" || price === "" || stock === ""){
        return ui.showMessage("Complete Fields Please", "danger");
    }

    ui.addProduct(product);
    ui.resertForm();
    ui.showMessage("Product Added Succesfully", "success");

    e.preventDefault();
})

document.getElementById("product-list").addEventListener("click",function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})