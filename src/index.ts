import "./css/estilos.css"


import router from "./css/router/index.routes"
router(window.location.hash)
window.addEventListener("hashchange", () => {
    router(window.location.hash)
})
