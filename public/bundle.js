/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/estilos.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/estilos.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS RESET*/\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  letter-spacing: 0.03em;\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n.padre {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n.header {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n/*NAVIGATION*/\r\n.nav {\r\n  height: 100px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.logo {\r\n  width: 140px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.bar-btn {\r\n  font-size: 25px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n.nav-menu {\r\n  align-items: center;\r\n  color: #fff;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 0;\r\n  top: 100px;\r\n  background: rgba(0, 0, 0, 0.95);\r\n  text-align: center;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n}\r\n.nav-menu li {\r\n  display: none;\r\n  line-height: 30px;\r\n  margin: 50px 0;\r\n  transition: all 0.5s;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  font-weight: bolder;\r\n}\r\n\r\n.nav-menu :hover {\r\n  font-weight: bolder;\r\n  color: rgb(248, 8, 8);\r\n  transition: 0.3s;\r\n}\r\n#check {\r\n  display: none;\r\n}\r\n#check:checked ~ .nav-menu {\r\n  height: 100vh;\r\n}\r\n#check:checked ~ .nav-menu li {\r\n  display: block;\r\n}\r\n\r\n.icon {\r\n  margin-right: 30px;\r\n  display: flex;\r\n  flex: 1 1 auto;\r\n}\r\n.icon a {\r\n  text-align: right;\r\n  font-size: 15px;\r\n  color: #000;\r\n  padding: 0 0px;\r\n}\r\n.icon a:hover {\r\n  color: rosybrown;\r\n}\r\n\r\n\r\n.principal {\r\n  margin-top: 10px;\r\n  background: url(https://cartzilla.createx.studio/img/food-delivery/hero-bg.jpg);\r\n  background-attachment: local;\r\n  background-size: cover;\r\n  background-position: center;\r\n  min-height: 400px;\r\n}\r\n.principal2 {\r\n  margin-top: 10px;\r\n  background: url(https://cartzilla.createx.studio/img/food-delivery/category/pt-bg.jpg);\r\n  background-position: center;\r\n  background-attachment: local;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  min-height: 400px;\r\n}\r\n\r\n.banner-text {\r\n  padding: 0 10px;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n.banner-text h1 {\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\n.banner-text span {\r\n  color: rgb(214, 60, 14);\r\n}\r\n.banner-text h4 {\r\n  font-size: 16px;\r\n}\r\n.banner-text2 h2 {\r\n  padding: 0 50px;\r\n  text-align: left;\r\n  color: #fff;\r\n}\r\n\r\n.button {\r\n  margin-right: 40px;\r\n  padding: 10px 30px;\r\n  background-color: #fe3638;\r\n  color: seashell;\r\n  border-radius: 5px;\r\n}\r\n.button:hover {\r\n  background-color: #fff;\r\n  color: rgb(248, 8, 8);\r\n  transition: 0.5s;\r\n}\r\n.container {\r\n  margin-top: 20px;\r\n  width: 100vw;\r\n  display: flex;\r\n  text-align: center;\r\n  flex-flow: column nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.cards {\r\n  flex: 1 1 auto;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n.card-box {\r\n  color: #000;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n  margin: 10px;\r\n  text-align: center;\r\n  min-height: 325px;\r\n  width: 400px;\r\n  height: 460px;\r\n}\r\n.card-box-header {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.card-box img {\r\n  width: 400px;\r\n  height: 300px;\r\n}\r\n.card-body{\r\n  margin: 10px;\r\n  text-align: left;\r\n}\r\n.card-description{\r\n  margin-top:10px;\r\n  color:rgb(100, 97, 97)\r\n}\r\n.card-price{\r\n  margin-top: 10px;\r\n}\r\n\r\n.navegacion {\r\n  background: #70a3c4;\r\n  flex: 1 1 100%;\r\n}\r\n\r\n.product-detail {\r\n  background-color: #70a3c4;\r\n  width: 32%;\r\n  font-size: 18px;\r\n  padding: 33px;\r\n  min-height: 250px;\r\n  border-radius: 22px;\r\n  position: absolute;\r\n  left: 34%;\r\n  top: 50%;\r\n  display: none;\r\n}\r\n.product-detail-conten {\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-evenly;\r\n}\r\n.product-detail-image {\r\n  background-color: salmon;\r\n  width: 280px;\r\n  height: 200px;\r\n}\r\n.product-detail-description {\r\n  color: #fff;\r\n}\r\n.information {\r\n  margin-top: 10px;\r\n  color: #000;\r\n}\r\n.description {\r\n  margin-top: 10px;\r\n}\r\n.box-price {\r\n  font-weight: bold;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n}\r\n.price-1 {\r\n  text-decoration: line-through;\r\n}\r\n#close {\r\n  position: absolute;\r\n  right: 3px;\r\n  top: 1px;\r\n}\r\n.btn{\r\n  border: 0;\r\n  line-height: 2.5;\r\n  padding: 0 20px;\r\n  font-size: 1rem;\r\n  text-align: center;\r\n  color: #fff;\r\n  text-shadow: 1px 1px 1px #000;\r\n  border-radius: 10px;\r\n  background-image: linear-gradient(\r\n    to top left,\r\n    rgba(0, 0, 0, 0.2),\r\n    rgba(0, 0, 0, 0.2) 30%,\r\n    rgba(0, 0, 0, 0)\r\n  );\r\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),\r\n    inset -2px -2px 3px rgba(0, 0, 0, 0.6);\r\n}\r\n.btn:hover{\r\n    background-color: rgb(153, 144, 144);\r\n}\r\n.btn:active{\r\n  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),\r\n    inset 2px 2px 3px rgba(0, 0, 0, 0.6);\r\n}\r\n.btn-favorite{\r\n    margin-top:30px ;\r\n    background-color: rgba(220, 0, 0, 1);\r\n}\r\n.btn-add-cart{\r\n    background-color: green;\r\n}\r\n.cart-shopping{\r\n  background-color:rgb(230, 230, 230);\r\n}\r\n.btn-comprar{\r\n  background-color: rgb(41, 121, 47);\r\n}\r\n.btn-danger{\r\n  background-color: rgb(214, 60, 14);\r\n}\r\n.publicidad {\r\n  background: #ffea85;\r\n}\r\n.footer {\r\n  height: 50px;\r\n  background: #000;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.pie {\r\n  background: #000;\r\n  width: 35%;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .logo {\r\n    margin-left: 50px;\r\n  }\r\n  .nav {\r\n    height: 100px;\r\n  }\r\n  .bar-btn {\r\n    display: none;\r\n  }\r\n  .nav-menu {\r\n    position: relative;\r\n    height: 100px;\r\n    top: 0;\r\n    background: none;\r\n    transition: none;\r\n    text-align: center;\r\n    margin-right: 50px;\r\n  }\r\n  .nav-menu li {\r\n    color: rgb(0, 0, 0);\r\n    display: inline-block;\r\n    line-height: 100px;\r\n    margin: 0 20px;\r\n    transition: none;\r\n  }\r\n  .nav-menu li a {\r\n    font-size: 12px;\r\n    transition: none;\r\n  }\r\n\r\n  .banner-text h1 {\r\n    font-size: 300%;\r\n    margin-bottom: 30px;\r\n  }\r\n  .banner-text h4 {\r\n    font-size: 200%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/estilos.css"],"names":[],"mappings":"AAAA,aAAa;AACb;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;AACA;EACE,WAAW;EACX,aAAa;EACb,wBAAwB;AAC1B;;AAEA,aAAa;AACb;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,WAAW;EACX,SAAS;EACT,UAAU;EACV,+BAA+B;EAC/B,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,cAAc;AAChB;AACA;EACE,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;;;AAGA;EACE,gBAAgB;EAChB,+EAA+E;EAC/E,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,sFAAsF;EACtF,2BAA2B;EAC3B,4BAA4B;EAC5B,4BAA4B;EAC5B,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,wBAAwB;EACxB,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,wCAAwC;EACxC,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,eAAe;EACf;AACF;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,UAAU;EACV,eAAe;EACf,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,aAAa;AACf;AACA;EACE,aAAa;EACb,cAAc;EACd,6BAA6B;AAC/B;AACA;EACE,wBAAwB;EACxB,YAAY;EACZ,aAAa;AACf;AACA;EACE,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;AACV;AACA;EACE,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,6BAA6B;EAC7B,mBAAmB;EACnB;;;;;GAKC;EACD;0CACwC;AAC1C;AACA;IACI,oCAAoC;AACxC;AACA;EACE;wCACsC;AACxC;AACA;IACI,gBAAgB;IAChB,oCAAoC;AACxC;AACA;IACI,uBAAuB;AAC3B;AACA;EACE,mCAAmC;AACrC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,kBAAkB;IAClB,aAAa;IACb,MAAM;IACN,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;EACpB;EACA;IACE,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;EAClB;EACA;IACE,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;EACA;IACE,eAAe;EACjB;AACF","sourcesContent":["/* CSS RESET*/\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  letter-spacing: 0.03em;\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n.padre {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n.header {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n/*NAVIGATION*/\r\n.nav {\r\n  height: 100px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.logo {\r\n  width: 140px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.bar-btn {\r\n  font-size: 25px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n.nav-menu {\r\n  align-items: center;\r\n  color: #fff;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 0;\r\n  top: 100px;\r\n  background: rgba(0, 0, 0, 0.95);\r\n  text-align: center;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n}\r\n.nav-menu li {\r\n  display: none;\r\n  line-height: 30px;\r\n  margin: 50px 0;\r\n  transition: all 0.5s;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  font-weight: bolder;\r\n}\r\n\r\n.nav-menu :hover {\r\n  font-weight: bolder;\r\n  color: rgb(248, 8, 8);\r\n  transition: 0.3s;\r\n}\r\n#check {\r\n  display: none;\r\n}\r\n#check:checked ~ .nav-menu {\r\n  height: 100vh;\r\n}\r\n#check:checked ~ .nav-menu li {\r\n  display: block;\r\n}\r\n\r\n.icon {\r\n  margin-right: 30px;\r\n  display: flex;\r\n  flex: 1 1 auto;\r\n}\r\n.icon a {\r\n  text-align: right;\r\n  font-size: 15px;\r\n  color: #000;\r\n  padding: 0 0px;\r\n}\r\n.icon a:hover {\r\n  color: rosybrown;\r\n}\r\n\r\n\r\n.principal {\r\n  margin-top: 10px;\r\n  background: url(https://cartzilla.createx.studio/img/food-delivery/hero-bg.jpg);\r\n  background-attachment: local;\r\n  background-size: cover;\r\n  background-position: center;\r\n  min-height: 400px;\r\n}\r\n.principal2 {\r\n  margin-top: 10px;\r\n  background: url(https://cartzilla.createx.studio/img/food-delivery/category/pt-bg.jpg);\r\n  background-position: center;\r\n  background-attachment: local;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  min-height: 400px;\r\n}\r\n\r\n.banner-text {\r\n  padding: 0 10px;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n.banner-text h1 {\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\n.banner-text span {\r\n  color: rgb(214, 60, 14);\r\n}\r\n.banner-text h4 {\r\n  font-size: 16px;\r\n}\r\n.banner-text2 h2 {\r\n  padding: 0 50px;\r\n  text-align: left;\r\n  color: #fff;\r\n}\r\n\r\n.button {\r\n  margin-right: 40px;\r\n  padding: 10px 30px;\r\n  background-color: #fe3638;\r\n  color: seashell;\r\n  border-radius: 5px;\r\n}\r\n.button:hover {\r\n  background-color: #fff;\r\n  color: rgb(248, 8, 8);\r\n  transition: 0.5s;\r\n}\r\n.container {\r\n  margin-top: 20px;\r\n  width: 100vw;\r\n  display: flex;\r\n  text-align: center;\r\n  flex-flow: column nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.cards {\r\n  flex: 1 1 auto;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n.card-box {\r\n  color: #000;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n  margin: 10px;\r\n  text-align: center;\r\n  min-height: 325px;\r\n  width: 400px;\r\n  height: 460px;\r\n}\r\n.card-box-header {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.card-box img {\r\n  width: 400px;\r\n  height: 300px;\r\n}\r\n.card-body{\r\n  margin: 10px;\r\n  text-align: left;\r\n}\r\n.card-description{\r\n  margin-top:10px;\r\n  color:rgb(100, 97, 97)\r\n}\r\n.card-price{\r\n  margin-top: 10px;\r\n}\r\n\r\n.navegacion {\r\n  background: #70a3c4;\r\n  flex: 1 1 100%;\r\n}\r\n\r\n.product-detail {\r\n  background-color: #70a3c4;\r\n  width: 32%;\r\n  font-size: 18px;\r\n  padding: 33px;\r\n  min-height: 250px;\r\n  border-radius: 22px;\r\n  position: absolute;\r\n  left: 34%;\r\n  top: 50%;\r\n  display: none;\r\n}\r\n.product-detail-conten {\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-evenly;\r\n}\r\n.product-detail-image {\r\n  background-color: salmon;\r\n  width: 280px;\r\n  height: 200px;\r\n}\r\n.product-detail-description {\r\n  color: #fff;\r\n}\r\n.information {\r\n  margin-top: 10px;\r\n  color: #000;\r\n}\r\n.description {\r\n  margin-top: 10px;\r\n}\r\n.box-price {\r\n  font-weight: bold;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n}\r\n.price-1 {\r\n  text-decoration: line-through;\r\n}\r\n#close {\r\n  position: absolute;\r\n  right: 3px;\r\n  top: 1px;\r\n}\r\n.btn{\r\n  border: 0;\r\n  line-height: 2.5;\r\n  padding: 0 20px;\r\n  font-size: 1rem;\r\n  text-align: center;\r\n  color: #fff;\r\n  text-shadow: 1px 1px 1px #000;\r\n  border-radius: 10px;\r\n  background-image: linear-gradient(\r\n    to top left,\r\n    rgba(0, 0, 0, 0.2),\r\n    rgba(0, 0, 0, 0.2) 30%,\r\n    rgba(0, 0, 0, 0)\r\n  );\r\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),\r\n    inset -2px -2px 3px rgba(0, 0, 0, 0.6);\r\n}\r\n.btn:hover{\r\n    background-color: rgb(153, 144, 144);\r\n}\r\n.btn:active{\r\n  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),\r\n    inset 2px 2px 3px rgba(0, 0, 0, 0.6);\r\n}\r\n.btn-favorite{\r\n    margin-top:30px ;\r\n    background-color: rgba(220, 0, 0, 1);\r\n}\r\n.btn-add-cart{\r\n    background-color: green;\r\n}\r\n.cart-shopping{\r\n  background-color:rgb(230, 230, 230);\r\n}\r\n.btn-comprar{\r\n  background-color: rgb(41, 121, 47);\r\n}\r\n.btn-danger{\r\n  background-color: rgb(214, 60, 14);\r\n}\r\n.publicidad {\r\n  background: #ffea85;\r\n}\r\n.footer {\r\n  height: 50px;\r\n  background: #000;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.pie {\r\n  background: #000;\r\n  width: 35%;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .logo {\r\n    margin-left: 50px;\r\n  }\r\n  .nav {\r\n    height: 100px;\r\n  }\r\n  .bar-btn {\r\n    display: none;\r\n  }\r\n  .nav-menu {\r\n    position: relative;\r\n    height: 100px;\r\n    top: 0;\r\n    background: none;\r\n    transition: none;\r\n    text-align: center;\r\n    margin-right: 50px;\r\n  }\r\n  .nav-menu li {\r\n    color: rgb(0, 0, 0);\r\n    display: inline-block;\r\n    line-height: 100px;\r\n    margin: 0 20px;\r\n    transition: none;\r\n  }\r\n  .nav-menu li a {\r\n    font-size: 12px;\r\n    transition: none;\r\n  }\r\n\r\n  .banner-text h1 {\r\n    font-size: 300%;\r\n    margin-bottom: 30px;\r\n  }\r\n  .banner-text h4 {\r\n    font-size: 200%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/estilos.css":
/*!*****************************!*\
  !*** ./src/css/estilos.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_estilos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./estilos.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/estilos.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_estilos_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_estilos_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_estilos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_estilos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/typescript/controllers/cart.ts":
/*!********************************************!*\
  !*** ./src/typescript/controllers/cart.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
    var views = "\n    \n    ";
    var divElemment = document.createElement('div');
    divElemment.innerHTML = views;
    return divElemment;
});


/***/ }),

/***/ "./src/typescript/controllers/home.ts":
/*!********************************************!*\
  !*** ./src/typescript/controllers/home.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
    var views = "\n    <div class=\"principal\">\n          <div class=\"banner-text\">\n            <h4>#1 Food Delivery Service since 2010</h3>\n            <h1>We delivery your favoryte food <br> fresh & fast in<span> <select>\n              <option>New York</option>\n              <option>Chicago</option>\n              <option>Houston</option>\n              <option>Philadelphia</option>\n              <option>San Diego</option>\n              <option>Miami</option>\n            </select></span> </h1>\n            <div>\n              <a href=\"#\" class=\"button\">What do you want to eat?</a>\n            </div>\n          </div>\n        </div>\n    <div class=\"cards\">\n          <a href=\"#/products\" class=\"card-box\">\n            <img src=\"https://cartzilla.createx.studio/img/food-delivery/category/01.jpg\">\n            <div class=\"card-box-header\">\n              <h3>Burgers & Fries</h3>\n            \n            </div>\n          </a>\n          <a href=\"/paginas/products.html\" class=\"card-box\">\n            <img alt=\"\" src=\"https://cartzilla.createx.studio/img/food-delivery/category/02.jpg\">\n            <div class=\"card-box-header\">\n              <h3>Noodles</h3>\n            \n            </div>\n          </a>\n          <a href=\"/paginas/products.html\" class=\"card-box\">\n            <img src=\"https://cartzilla.createx.studio/img/food-delivery/category/03.jpg\">\n            <h3>Sushi & Rolls</h3>\n            \n          </a>\n          <a href=\"/paginas/products.html\" class=\"card-box\">\n            <img src=\"https://cartzilla.createx.studio/img/food-delivery/category/04.jpg\">\n            <h3>Pizza & Pasta</h3>\n            \n          </a>\n          <a href=\"/paginas/products.html\" class=\"card-box\">\n            <img src=\"https://cartzilla.createx.studio/img/food-delivery/category/05.jpg\">\n            <h3>Coffe & Desserts</h3>\n            \n          </a>\n          <a href=\"/paginas/products.html\" class=\"card-box\">\n            <img src=\"https://cartzilla.createx.studio/img/food-delivery/category/06.jpg\">\n            <h3>Healthy & Food</h3>\n            \n          </a>\n          <nav class=\"navegacion\"></nav>\n        </div>\n    ";
    var divElemment = document.createElement('div');
    divElemment.innerHTML = views;
    return divElemment;
});


/***/ }),

/***/ "./src/typescript/controllers/product.ts":
/*!***********************************************!*\
  !*** ./src/typescript/controllers/product.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
    var views = "\n\n    <section class=\"container\">\n    <div class=\"cards\" >\n      <div class=\"product-detail\" id=\"window\">\n        <div id=\"close\"><a href=\"javascript:close()\"><img src=\"../images/error.png\" ></a></div>\n      </div>\n      <a href=\"javascript:open()\" class=\"card-box\">\n        <img src=\"https://cartzilla.createx.studio/img/food-delivery/restaurants/01.jpg\">\n       \n        <div class=\"information\">\n          <h3 class=\"title\">Combo 1</h3>\n        <h5 class=\"description\">Burgers, Salads, French fries, Drinks</h5>\n        </div>\n        <div class=\"box-price\">\n         \n          <span class=\"price-1\">$510</span>\n          <span class=\"price-2\">$490</span>\n        \n        </div>\n      </a>\n      <a href=\"../paginas/products.html\" class=\"card-box\">\n        <img alt=\"\" src=\"https://cartzilla.createx.studio/img/food-delivery/restaurants/02.jpg\">\n        <div class=\"card-box-logo\" >\n        </div>\n        <h3 class=\"title\">Kentucky Fried Chicken</h3>\n        <h5 class=\"description\">Fried chicken, Burgers, Salads, French fries, Drinks</h5>\n        \n        \n    </a>\n      <a href=\"../paginas/products.html\" class=\"card-box\">\n        <img src=\"https://cartzilla.createx.studio/img/food-delivery/restaurants/03.jpg\">\n        <div class=\"card-box-logo\">\n        </div>\n        <h3 class=\"title\">Burger King</h3>\n        <h5 class=\"description\">Burgers, Salads, French fries, Drinks</h5>\n        \n      </a>\n      <a href=\"../paginas/products.html\" class=\"card-box\">\n        <img src=\"https://cartzilla.createx.studio/img/food-delivery/restaurants/04.jpg\">\n        <div class=\"card-box-logo\">\n        </div>\n        <h3 class=\"title\">Logan's Roadhouse</h3>\n        <h5 class=\"description\">Grill, Steaks, Burgers, Salads, French fries, Drinks</h5>\n        \n      </a>\n      <a href=\"../paginas/products.html\" class=\"card-box\">\n        <img src=\"https://cartzilla.createx.studio/img/food-delivery/restaurants/05.jpg\">\n        <div class=\"card-box-logo\">\n        </div>\n        <h3 class=\"title\">Carrabba's</h3>\n        <h5 class=\"description\">Grill, Steaks, Burgers, Salads, French fries, Drinks</h5>\n        \n      </a>\n      <a href=\"../paginas/products.html\" class=\"card-box\">\n        <img src=\"https://cartzilla.createx.studio/img/food-delivery/restaurants/06.jpg\">\n        <div class=\"card-box-logo\">\n        </div>\n        <h3 class=\"title\">Bonefish Grill</h3>\n        <h5 class=\"description\">Grill, Fish, Burgers, Salads, French fries, Drinks</h5>\n        \n      </a>\n      <a href=\"../paginas/products.html\" class=\"card-box\">\n        <img src=\"https://cartzilla.createx.studio/img/food-delivery/restaurants/07.jpg\">\n        <div class=\"card-box-logo\">\n        </div>\n        <h3 class=\"title\">Domino's Pizza</h3>\n        <h5 class=\"description\">Pizza, Burgers, Salads, French fries, Drinks</h5>\n        \n      </a>\n      <a href=\"../paginas/products.html\" class=\"card-box\">\n        <img src=\"https://cartzilla.createx.studio/img/food-delivery/restaurants/08.jpg\">\n        <div class=\"card-box-logo\">\n        </div>\n        <h3 class=\"title\">Hardee's</h3>\n        <h5 class=\"description\">Burgers, Salads, French fries, Drinks</h5>\n        \n        \n      </a>\n      <a href=\"../paginas/products.html\" class=\"card-box\">\n        <img src=\"https://cartzilla.createx.studio/img/food-delivery/restaurants/09.jpg\">\n        <div class=\"card-box-logo\">\n        </div>\n        <h3 class=\"title\">Ruth's Chris Steak House</h3>\n        <h5 class=\"description\">Grill, Steaks, Burgers, Salads, French fries, Drinks</h5>\n        \n      </a>\n    ";
    var divElemment = document.createElement('div');
    divElemment.innerHTML = views;
    return divElemment;
});


/***/ }),

/***/ "./src/typescript/controllers/profile.ts":
/*!***********************************************!*\
  !*** ./src/typescript/controllers/profile.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
    var views = "\n   \n      \n    ";
    var divElemment = document.createElement('div');
    divElemment.innerHTML = views;
    return divElemment;
});


/***/ }),

/***/ "./src/typescript/router/index.routes.ts":
/*!***********************************************!*\
  !*** ./src/typescript/router/index.routes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controllers_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/home */ "./src/typescript/controllers/home.ts");
/* harmony import */ var _controllers_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/product */ "./src/typescript/controllers/product.ts");
/* harmony import */ var _controllers_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/cart */ "./src/typescript/controllers/cart.ts");
/* harmony import */ var _controllers_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/profile */ "./src/typescript/controllers/profile.ts");




var content = document.getElementById("root");
var router = function (route) {
    content.innerHTML = '';
    switch (route) {
        case "": {
            return content.appendChild((0,_controllers_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
        }
        case "#/": {
            return content.appendChild((0,_controllers_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
        }
        case "#/categories": {
            return content.appendChild((0,_controllers_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
        }
        case "#/location":
            return console.log("LOCATION");
        case "#/profile":
            return content.appendChild((0,_controllers_profile__WEBPACK_IMPORTED_MODULE_3__["default"])());
        case "#/products":
            return content.appendChild((0,_controllers_product__WEBPACK_IMPORTED_MODULE_1__["default"])());
        case "#/shoppingcart":
            return content.appendChild((0,_controllers_cart__WEBPACK_IMPORTED_MODULE_2__["default"])());
        default:
            return console.log("404");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_estilos_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/estilos.css */ "./src/css/estilos.css");
/* harmony import */ var _typescript_router_index_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typescript/router/index.routes */ "./src/typescript/router/index.routes.ts");


(0,_typescript_router_index_routes__WEBPACK_IMPORTED_MODULE_1__["default"])(window.location.hash);
window.addEventListener("hashchange", function () {
    (0,_typescript_router_index_routes__WEBPACK_IMPORTED_MODULE_1__["default"])(window.location.hash);
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map