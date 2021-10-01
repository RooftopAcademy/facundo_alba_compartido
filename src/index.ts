import "./css/estilos.css"


import router from "./typescript/router/index.routes"
router(window.location.hash)
window.addEventListener("hashchange", () => {
    router(window.location.hash)
})