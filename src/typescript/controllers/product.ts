export default () => {
    const views = `

    <section class="container">
    <div class="cards" >
      <div class="product-detail" id="window">
        <div id="close"><a href="javascript:close()"><img src="../images/error.png" ></a></div>
      </div>
      <a href="javascript:open()" class="card-box">
        <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/01.jpg">
       
        <div class="information">
          <h3 class="title">Combo 1</h3>
        <h5 class="description">Burgers, Salads, French fries, Drinks</h5>
        </div>
        <div class="box-price">
         
          <span class="price-1">$510</span>
          <span class="price-2">$490</span>
        
        </div>
      </a>
      <a href="../paginas/products.html" class="card-box">
        <img alt="" src="https://cartzilla.createx.studio/img/food-delivery/restaurants/02.jpg">
        <div class="card-box-logo" >
        </div>
        <h3 class="title">Kentucky Fried Chicken</h3>
        <h5 class="description">Fried chicken, Burgers, Salads, French fries, Drinks</h5>
        
        
    </a>
      <a href="../paginas/products.html" class="card-box">
        <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/03.jpg">
        <div class="card-box-logo">
        </div>
        <h3 class="title">Burger King</h3>
        <h5 class="description">Burgers, Salads, French fries, Drinks</h5>
        
      </a>
      <a href="../paginas/products.html" class="card-box">
        <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/04.jpg">
        <div class="card-box-logo">
        </div>
        <h3 class="title">Logan's Roadhouse</h3>
        <h5 class="description">Grill, Steaks, Burgers, Salads, French fries, Drinks</h5>
        
      </a>
      <a href="../paginas/products.html" class="card-box">
        <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/05.jpg">
        <div class="card-box-logo">
        </div>
        <h3 class="title">Carrabba's</h3>
        <h5 class="description">Grill, Steaks, Burgers, Salads, French fries, Drinks</h5>
        
      </a>
      <a href="../paginas/products.html" class="card-box">
        <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/06.jpg">
        <div class="card-box-logo">
        </div>
        <h3 class="title">Bonefish Grill</h3>
        <h5 class="description">Grill, Fish, Burgers, Salads, French fries, Drinks</h5>
        
      </a>
      <a href="../paginas/products.html" class="card-box">
        <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/07.jpg">
        <div class="card-box-logo">
        </div>
        <h3 class="title">Domino's Pizza</h3>
        <h5 class="description">Pizza, Burgers, Salads, French fries, Drinks</h5>
        
      </a>
      <a href="../paginas/products.html" class="card-box">
        <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/08.jpg">
        <div class="card-box-logo">
        </div>
        <h3 class="title">Hardee's</h3>
        <h5 class="description">Burgers, Salads, French fries, Drinks</h5>
        
        
      </a>
      <a href="../paginas/products.html" class="card-box">
        <img src="https://cartzilla.createx.studio/img/food-delivery/restaurants/09.jpg">
        <div class="card-box-logo">
        </div>
        <h3 class="title">Ruth's Chris Steak House</h3>
        <h5 class="description">Grill, Steaks, Burgers, Salads, French fries, Drinks</h5>
        
      </a>
    `;
    const divElemment = document.createElement('div')
    divElemment.innerHTML = views
    return divElemment
}