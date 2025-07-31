//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);
console.log(nuevoDiv);


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const nuevoDiv2 = document.createElement("div");
const nuevoP = document.createElement("p");
nuevoDiv2.appendChild(nuevoP);
document.body.appendChild(nuevoDiv2);
console.log(nuevoDiv2);


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
//loop con javascript.

const nuevoDiv3 = document.createElement("div");

for (let i = 1; i <= 6, i++;) {
    const nuevoP2 = document.createElement("p");
    nuevoP2.textContent = 'Párrafo número ${i}';
    nuevoDiv3.appendChild(nuevoP2);
};

document.body.appendChild(nuevoDiv3);
console.log(nuevoDiv3);


//2.4 Inserta dinamicamente con javascript en un html una p con el 
//texto 'Soy dinámico!'.

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

//2.6 Basandote en el siguiente array crea una lista ul > li con 
//los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
//.fn-insert-here