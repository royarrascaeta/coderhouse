//Base de datos simulada
const users = [
  {
    "id": 3,
    "nombre": "John Graham",
    "edad": 27,
    "genero": "Masculino"
  },
  {
    "id": 5,
    "nombre": "Matthew Howell",
    "edad": 25,
    "genero": "Masculino"
  },
  {
    "id": 1,
    "nombre": "Clementine Bauch",
    "edad": 32,
    "genero": "Femenino"
  },
  {
    "id": 2,
    "nombre": "Marie Lebsack",
    "edad": 19,
    "genero": "Femenino"
  },
  {
    "id": 7,
    "nombre": "Dennis Schulist",
    "edad": 21,
    "genero": "Masculino"
  }
]

//Función que ordena el arreglo por edad, de menor a mayor
const ordenarEdad = (arr) =>{
  let newUsers1 = [...arr];
  return newUsers1.sort((a, b) => a.edad - b.edad)
}

//Función que ordena el arreglo por id, de menor a mayor
const ordenarId = (arr) =>{
  let newUsers2 = [...arr];
  return newUsers2.sort((a, b) => a.id - b.id)
}

//Función que filtra por género
const filtrarGenero = (arr, genero) =>{
  return arr.filter(el => el.genero == genero)
}

//Función que filtra los usuarios con 30 o más años}
const filtrarEdad = (arr) =>{
  return arr.filter(el => el.edad >= 30)
}

//Ejecución del código, los datos se mostrarán en consola
//Mostramos la base de datos original
console.log("Base de datos:\n", users)

//Llamamos a la función ordenarEdad y le pasamos el array como parámetro
console.log("Ordenar por edad:\n", ordenarEdad(users))

//Llamamos a la función ordenarId y le pasamos el array como parámetro
console.log("Ordenar por id:\n", ordenarId(users))

//Llamamos a la función filtrarGenero y le pasamos el array como parámetro 1, y el género a filtrar como parámetro 2
console.log("Filtrar por género:\n", filtrarGenero(users, "Masculino"))

//Llamamos a la función filtrarEdad y le pasamos el array como parámetro
console.log("Filtrar por edad: \n", filtrarEdad(users))