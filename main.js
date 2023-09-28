
const Inmueble = function(nombre,marca,stock,precio,lugar,observacion){
this.nombre=nombre
this.stock=stock
this.precio=precio
this.lugar=lugar
this.observacion=observacion
this.marca=marca
}

let bien1 = new Inmueble ("pc","acer",5,350000,"sala de computacion","sin observación")
let bien2 = new Inmueble ("pc","lenovo",4,450000,"sala de profesores","pc 2 sin pantalla")
let bien3 = new Inmueble ("escritorio","ikea",5,100000,"sala de computacion","sin observación")
let bien4 = new Inmueble ("escritorio","ikea",4,100000,"sala de profesores","2 con rayones")
let bien5 = new Inmueble ("laptop","hp",5,350000,"sala de computacion","1 pantalla quebrada")
let bien6 = new Inmueble ("libro matematicas","santillana",40,35000,"biblioteca","3 libros sin portada")
let bien7 = new Inmueble ("libro ciencias","editorial planeta",39,32000,"biblioteca","1 libro roto")

let inventario = [bien1,bien2,bien3,bien4,bien5,bien6,bien7]

function filtrarInventario(){
let palabraClave = prompt("ingresa el inmueble que deseas buscar").trim().toUpperCase()
let resultado = inventario.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))

if(resultado.length > 0){
console.table(resultado)}
else{
alert("no se encontro ninguna coincidencia con "+ palabraClave)}
}

function agregarProducto(){

let nombre = prompt ("ingresa nombre del inmueble").trim()
let marca = prompt ("ingresa la marca del inmueble").trim()
let stock = parseInt(prompt("ingresa cantidad"))
let precio = parseInt(prompt("ingresa precio del inmueble"))
let lugar = prompt ("ingresa en que lugar se encuentra").trim()
let observacion = prompt ("ingresa en que lugar se encuentra").trim()

if(isNaN(precio)|| isNaN(stock) || nombre ==="" || marca ===""|| lugar ===""|| observacion ===""){
alert("porfavor ingresa valores validos")
return}
let producto = new Inmueble(nombre,marca,stock,precio,lugar,observacion);
inventario.push(producto)
console.table(inventario)
}