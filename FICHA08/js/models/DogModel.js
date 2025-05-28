let dogs;

// CARREGAR DOGS DA LOCALSTORAGE
export function init() {
  dogs = localStorage.dogs ? JSON.parse(localStorage.dogs) : [];
}

// LISTAR DOGS
export function getDogs() {
    return dogs
}

// ADICIONAR DOG
export function add(raca, imagem, link) {
  if (dogs.some((dog) => dog.link === link)) {
    throw Error(`Dog with name "${link}" already exists!`);
  } else {
    dogs.push(new Dog(raca, imagem, link));
    localStorage.setItem("dogs", JSON.stringify(dogs));
  }
  
}


export default class Dog {
    raca= '';
    imagem='';
    link= '';

    constructor(raca, imagem, link) {
        this.raca = raca;
        this.imagem= imagem;
        this.link = link;
    }

}