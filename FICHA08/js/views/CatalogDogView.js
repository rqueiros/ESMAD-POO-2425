// Importa modulo init.js
//import * as data from "../models/DogModel.js";
import * as data from "../init.js";
// declara array 
let dogs = []
// invoca função init (módulo init.js) para preencher array de objetos com tasks pré-definidas
dogs = data.init();


renderCatalog(dogs);


// EXIBIR O CATÁLOGO DE CAES
function renderCatalog(dogs = []) {
    let result = "";
    // percorre todas as instancias de caes
    for (const dog of dogs) {
        result += generateCard(dog);    
    }
    // Atribuição de todos os cards gerados ao elemento com id myCatalog
    document.querySelector("#myCatalog").innerHTML = result;


    // CLICAR NO BOTÃO VER MAIS
    const btnsSeeMore = document.getElementsByClassName("view");
    for (const button of btnsSeeMore) {
        button.addEventListener("click", () => {
            location.href = "https://en.wikipedia.org/wiki/Dog";
        });
    }
}

// GERAR CARD de um dog
function generateCard(dog) {
let result = ` 
      <div class="col">
          <div class="card  bg-light mx-3" style="widht: 200px; ">
              <img src="${dog.imagem}" class="card-img-top" style="height: 300px;">
              <div class="card-body">
                  <h5 class="card-title">${dog.raca}</h5>
                  <button id="${dog.raca}" class="btn btn-primary view">Ver mais</button>
              </div>    
          </div>
      </div>
      `;

return result;
}


