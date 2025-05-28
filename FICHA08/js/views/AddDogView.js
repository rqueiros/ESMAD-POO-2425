import * as Dog from "../models/DogModel.js";


document.querySelector("form").addEventListener("submit",(e)=> {
    e.preventDefault()

    const raca = document.querySelector("#raca").value
    const imagem = document.querySelector("#imagem").value
    const link = document.querySelector("#link").value

    

    try {
        Dog.init()
        Dog.add(raca, imagem, link)    
    } catch (error) {
        alert(error)
    }

    

})




