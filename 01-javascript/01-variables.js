// Int edad = 10; TIPADO
// NO TIPADO
var edad = 10;
var edadString = "10";
var sueldo = 1.234;
var casado = false;
var hijos = null;
var dato;
var fechaNacimiento = new Date();

var adrian = {
    "nombre": "Vicente",
    'segundoNombre': 'Adrian',
    apellidoPaterno: `Eguez`,
    apellidoMaterno: 'Sarzosa',
    edad: 29,
    casado: false,
    hijo: null,
    mascotas: {
        nombre: "Cachetes"
    }
}; // object


console.log("edad", typeof edad);
console.log("edadString", typeof edadString);
console.log("sueldo", typeof sueldo);
console.log("casado", typeof casado); // boolean
console.log("hijos", typeof hijos); // object
console.log("dato valor", dato); // undefined
console.log("dato tipo", typeof dato); // undefined
console.log("fechaNacimiento", typeof fechaNacimiento); // object



