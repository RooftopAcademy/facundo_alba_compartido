
export default () => {
    const views = `
    <div class="principal">
          <div class="banner-text">
            <h4>#1 Food Delivery Service since 2010</h3>
            <h1>We delivery your favoryte food <br> fresh & fast in<span> <select>
              <option>New York</option>
              <option>Chicago</option>
              <option>Houston</option>
              <option>Philadelphia</option>
              <option>San Diego</option>
              <option>Miami</option>
            </select></span> </h1>
            <div>
              <a href="#" class="button">What do you want to eat?</a>
            </div>
          </div>
        </div>
    <div class="cards">
          <a href="#/products" class="card-box">
            <img src="https://cartzilla.createx.studio/img/food-delivery/category/01.jpg">
            <div class="card-box-header">
              <h3>Burgers & Fries</h3>
            
            </div>
          </a>
          <a href="/paginas/products.html" class="card-box">
            <img alt="" src="https://cartzilla.createx.studio/img/food-delivery/category/02.jpg">
            <div class="card-box-header">
              <h3>Noodles</h3>
            
            </div>
          </a>
          <a href="/paginas/products.html" class="card-box">
            <img src="https://cartzilla.createx.studio/img/food-delivery/category/03.jpg">
            <h3>Sushi & Rolls</h3>
            
          </a>
          <a href="/paginas/products.html" class="card-box">
            <img src="https://cartzilla.createx.studio/img/food-delivery/category/04.jpg">
            <h3>Pizza & Pasta</h3>
            
          </a>
          <a href="/paginas/products.html" class="card-box">
            <img src="https://cartzilla.createx.studio/img/food-delivery/category/05.jpg">
            <h3>Coffe & Desserts</h3>
            
          </a>
          <a href="/paginas/products.html" class="card-box">
            <img src="https://cartzilla.createx.studio/img/food-delivery/category/06.jpg">
            <h3>Healthy & Food</h3>
            
          </a>
          <nav class="navegacion"></nav>
        </div>
    `;
    const divElemment = document.createElement('div')
    divElemment.innerHTML = views
    return divElemment
}