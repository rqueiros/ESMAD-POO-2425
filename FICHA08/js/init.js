// Importar classe Dog
import DogModel from "./models/DogModel.js";

let dogs = [];  // array de objetos

export function init() {
    
    let dog = new DogModel('Border Collie','img\\BorderCollie.jpg', '' );
    dogs.push(dog)

    dog = new DogModel('Bulldoge Frances', 'img\\BulldogeFrances.jpg', '' );
    dogs.push(dog)
    
    dog = new DogModel('Bull Terrier', 'img\\BullTerrier.jpg', '' );
    dogs.push(dog)
    
    dog = new DogModel('Doberman', 'img\\Doberman.jpg', '' );
    dogs.push(dog)

    dog = new DogModel('Golden Retriever', 'img\\GoldenRetriever.jpg',  '' );
    dogs.push(dog)

    dog = new DogModel('Pastor Alemão', 'img\\PastorAlemao.jpg', '' );
    dogs.push(dog)

    dog = new DogModel('Pastor Australiano',  'img\\PastorAustraliano.jpg', '' );
    dogs.push(dog)

    return dogs;

}