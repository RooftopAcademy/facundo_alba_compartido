/*Actividad del dia 20-09*/ 
(()=> {
    const $fetch = document.getElementById("fetch")
    $fragment = document.createDocumentFragment()
    fetch('https://jsonplaceholder.typicode.com/users')
    /*.then((res)=>{
        console.log(res)
        return res.ok ? res.json() : Promise.reject(res)    
    })*/ 
    .then((res) => (res.ok ? res.json(): Promise.reject(res)))
    .then(json => {
        console.log(json)
        json.forEach((el) => {
            const $li = document.createElement("li")
            $li.innerHTML = `${el.name} --${el.email}--${el.phone}`
            $fragment.appendChild($li)
        });
        $fetch.appendChild($fragment)
    })
    .catch( err => {
        console.log(err)
        let message = err.statusText || "Ocurrio un error"
        $fetch.innerHTML = `error ${err.status}: ${message}`
    }).finally(() => 
    console.log("Esto se ejecutara independientemente del resultado de la promesa fetch")
    )

})()