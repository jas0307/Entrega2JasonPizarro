
alert("Bienvenido a Colegio X ")
let first = prompt("Ingresa nombre")
let lastName = prompt("Ingresa apellido")
alert("Bienvenido"+" " + first +" " + lastName + " a inventario de colegio X")



const Inmueble = function(item,nombre,marca,stock,precio,lugar,observacion){
this.item=item
this.nombre=nombre
this.marca=marca
this.stock=stock
this.precio=precio
this.lugar=lugar
this.observacion=observacion

}
//Inventario inicial
let bien1 = new Inmueble (0,"pc","acer",5,350000,"sala de computacion","sin observación")
let bien2 = new Inmueble (1,"pc","lenovo",4,450000,"sala de profesores","pc 2 sin pantalla")
let bien3 = new Inmueble (2,"escritorio","ikea",5,100000,"sala de computacion","sin observación")
let bien4 = new Inmueble (3,"escritorio","ikea",4,100000,"sala de profesores","2 con rayones")
let bien5 = new Inmueble (4,"laptop","hp",5,350000,"sala de computacion","1 pantalla quebrada")
let bien6 = new Inmueble (5,"libro matematicas","santillana",40,35000,"biblioteca","3 libros sin portada")
let bien7 = new Inmueble (6,"libro ciencias","editorial planeta",39,32000,"biblioteca","1 libro roto")

let inventario = [bien1,bien2,bien3,bien4,bien5,bien6,bien7]

console.log("Comandos consola: function agregarProducto(),function nuevoStock(),function nuevoPrecio(),function nuevaObservacion(),function filtrarInventario()")
console.log("Inventario Actual")
console.table(inventario)


function menu(){
   alert("Bienvenido al menu")
   let op1 = parseInt(prompt("Seleccion opcion:\n 1 Filtrar inventario \n 2 Agregar producto \n 3 Agregar/Quitar Stock(admite signos negativos) \n 4 Cambiar Precio \n 5 Cambiar Observacion \n 6 Salir \n"))
   switch (op1) {
    case 1:
      console.log("Opción 1 seleccionada");
      filtrarInventario()
      break;
    case 2:
      console.log("Opción 2 seleccionada");
      agregarProducto()
      break;
    case 3:
      console.log("Opción 3 seleccionada");
      nuevoStock()
      break;
    case 4:
      console.log("Opción 4 seleccionada");
      nuevoPrecio()
      break;
    case 5:
      console.log("Opción 5 seleccionada");
      nuevaObservacion()
      break;
    case 6:
        alert("Adios")
        break;
    default:
      console.log("Opción no válida");
      break;
  }
}

function filtrarInventario(){ //funcion para filtrar
let palabraClave = prompt("ingresa el inmueble que deseas buscar").trim().toUpperCase()
let resultado = inventario.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))

if(resultado.length > 0){
    let mensaje = "Resultados de la búsqueda:\n"
    for (let i = 0; i < resultado.length; i++) {
      mensaje += ` Item: ${resultado[i].item}\n Nombre: ${resultado[i].nombre}\n Marca: ${resultado[i].marca}\n Stock: ${resultado[i].stock}\n Precio: ${resultado[i].precio}\n Lugar: ${resultado[i].lugar}\n Observacion: ${resultado[i].observacion}\n`;
       alert(mensaje);
    }
console.table(resultado)}
else{
alert("no se encontro ninguna coincidencia con "+ palabraClave)}

menu()
}

function agregarProducto(){//funcion para agregar nuevo producto

let ultimoItem = inventario[inventario.length - 1].item
let item = ultimoItem +1 //aumenta al siguiente item creado
let nombre = prompt ("ingresa nombre del inmueble").trim()
let marca = prompt ("ingresa la marca del inmueble").trim()
let stock = parseInt(prompt("ingresa cantidad"))
let precio = parseInt(prompt("ingresa precio del inmueble"))
let lugar = prompt ("ingresa en que lugar se encuentra").trim()
let observacion = prompt ("ingresa observacion").trim()

if(isNaN(precio)|| isNaN(stock)|| isNaN(item) || nombre ==="" || marca ===""|| lugar ===""|| observacion ===""){
alert("porfavor ingresa valores validos")
return}
let producto = new Inmueble(item,nombre,marca,stock,precio,lugar,observacion);
inventario.push(producto)

let nprod = "Nuevo item creado: \n";
    nprod += ` Item: ${inventario[item].item}\n Nombre: ${inventario[item].nombre}\n Marca: ${inventario[item].marca}\n Stock: ${inventario[item].stock}\n Precio: ${inventario[item].precio}\n Lugar: ${inventario[item].lugar}\n Observacion: ${inventario[item].observacion}\n`;
     alert(nprod);
     console.table(inventario)
     menu()
}


function nuevoStock(){//funcion para agregar nuevo stock
    console.log("Inventario Actual")
    console.table(inventario)
    for (let i = 0; i < inventario.length; i++) {
        let obj = inventario[i];
        let mesj =
          "Item: " + obj.item + "\n" +
          "Nombre: " + obj.nombre + "\n" +
          "Marca: " + obj.marca + "\n" +
          "Stock: " + obj.stock + "\n" +
          "Precio: " + obj.precio + "\n" +
          "Lugar: " + obj.lugar + "\n" +
          "Observación: " + obj.observacion;
      
        alert("Información del objeto " + i + ":\n" + mesj);}
    let valor1 = parseInt(prompt("ingresa item "))
    let valor2 = parseInt(prompt("ingresa cantidad "))
    if(isNaN(valor1)|| isNaN(valor2)|| valor1 <= 0 ){
        alert("porfavor ingresa valores validos")
        return}
    
    let stock2 = inventario[valor1].stock
    let suma = stock2 + valor2
    if(suma > 0 ){        
        inventario[valor1].stock = suma
        console.log(suma)
        console.log("Nuevo Stock")
        let nprod = "Nuevo Stock: \n";
    nprod += ` Item: ${inventario[valor1].item}\n Nombre: ${inventario[valor1].nombre}\n Marca: ${inventario[valor1].marca}\n Stock: ${inventario[valor1].stock}\n Precio: ${inventario[valor1].precio}\n Lugar: ${inventario[valor1].lugar}\n Observacion: ${inventario[valor1].observacion}\n`;
     alert(nprod);
        console.table(inventario)}
     else{
            alert("No queda stock")
        }
    
        menu()
}

function nuevoPrecio(){//funcion para agregar nuevo precio a item anterior
    console.log("Inventario Actual")
    console.table(inventario)
    for (let i = 0; i < inventario.length; i++) {
        let obj = inventario[i];
        let mesj =
          "Item: " + obj.item + "\n" +
          "Nombre: " + obj.nombre + "\n" +
          "Marca: " + obj.marca + "\n" +
          "Stock: " + obj.stock + "\n" +
          "Precio: " + obj.precio + "\n" +
          "Lugar: " + obj.lugar + "\n" +
          "Observación: " + obj.observacion;
      
        alert("Información del objeto " + i + ":\n" + mesj);}
    let valor1 = parseInt(prompt("ingresa item "))
    let valor2 = parseInt(prompt("ingresa cantidad "))
    if(isNaN(valor1)|| isNaN(valor2)|| valor1 <= 0 || valor2 < 0){
        alert("porfavor ingresa valores validos")
        return}

    inventario[valor1].precio = valor2
    console.log(valor2)
    console.log("Nuevo precio")
    console.table(inventario)
}

function nuevaObservacion(){//funcion para agregar nueva informacion
    console.log("Inventario Actual")
    console.table(inventario)
    for (let i = 0; i < inventario.length; i++) {
        let obj = inventario[i];
        let mesj =
          "Item: " + obj.item + "\n" +
          "Nombre: " + obj.nombre + "\n" +
          "Marca: " + obj.marca + "\n" +
          "Stock: " + obj.stock + "\n" +
          "Precio: " + obj.precio + "\n" +
          "Lugar: " + obj.lugar + "\n" +
          "Observación: " + obj.observacion;
      
        alert("Información del objeto " + i + ":\n" + mesj);}
    let valor1 = parseInt(prompt("ingresa item "))
    let valor2 = prompt("ingresa nueva Observacion ")
    if(valor2 ==="" ){
        alert("porfavor ingresa datos validos")
        return}
 
    inventario[valor1].observacion = valor2
    console.log(valor2)
    console.log("Nueva Observacion")
    console.table(inventario)
}
menu()