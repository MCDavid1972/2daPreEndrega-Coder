
//Programa Principal
let  nombre = prompt("Ingrese su Nombre ")
let edad = prompt("Ingrese su edad")
let sexo = prompt(" Ingrese F (Femenimno) o M (Masculino) ").toLowerCase() 
let pesoIng = Number(prompt("Ingrese su Peso "))
let alturaIng = Number(prompt(" Ingrese su Altura en Metros "))

///
let distanciaIng = Number(prompt(" Ingrese la distancia en Kms Recorrida")) 
alert( "Ingrese su tiempo en Horas/Minutos/Segundos" )
let horasIng = Number(prompt(" Ingrese las Hs "))
let minutosIng = Number(prompt(" Ingrese los  Minutos "))
let segundosIng = Number(prompt(" Ingrese los Segundos "))
 
// se agrego una clase y un metodo (Clase Carrera)
class carrera{
    constructor( hora, minutos, segundos, distancia){
      this.hora = Number(hora)
      this.minutos = Number(minutos)
      this.segundos = Number(segundos)
      this.distancia = Number(distancia)
  
    }
    //metodo calculo de ritmo
  ritmo(){
    let minutosH = this.hora * 60  // Pasaje  de Hora a Minutos
    let minutoS = this.segundos / 60  //Pasaje de Segundo a Minutos
    let tiempoM = this.minutos + minutosH + minutoS
    let ritmoM = tiempoM / this.distancia
    let ritmoS =(ritmoM - Math.floor(ritmoM)) * 60
    return(" Su Ritmo es : " + Math.floor(ritmoM) +":"+ Math.floor(ritmoS))
  }
  }
  //Calculo de ritmopor el metodo
  const carrera1 = new carrera( horasIng, minutosIng, segundosIng, distanciaIng)
  console.log("-----------Ritmo------------------")
  console.log(carrera1.ritmo())
  console.log("---------------------------------")  

console.log("-----------IMC------------------")
console.log(nombre + ": Tu IMC es " + calculoImc(pesoIng , alturaIng))
alert( nombre + ": Tu indice de masa corporal es: "  + calculoImc(pesoIng , alturaIng)) 

//Estimacion de tiempo en una distancia determinada
let distanciaP = Number(prompt(" ¿Para que distancia quiere estimar su tiempo? (KMs) "))// diastancia a estimar tiempo

console.log("-----------Prediccion de Carrera------")
console.log(predicciondeCarrera(horasIng, minutosIng, segundosIng, distanciaIng, distanciaP))
console.log("-------------------------------") 

let fcRep = Number(prompt("Ingrese su Frecuencia Cardiaca en  reposo"))
///Zonas de Entrenamiento
console.log("-------ZONAS DE ENTRENAMIENTO------------------")
if ( sexo= "m"){
    let fcMax = (208 - ( 0.7 * edad))
    for (i = 50; i <= 100; i+= 10){
        let fzona = ((fcMax - fcRep) * (i / 100)) + fcRep
        console.table("Zona "+ i + "%  Frec. Cardiaca = " + fzona.toFixed(2))
        console.log("-------------------------")
    }

}else if( sexo = f){
    let fcMax = (208 - ( 0.8 * edad))
    for (i = 50; i <= 100; i+= 10){
        let fzona = ((fcMax - fcRep) * (i / 100)) + fcRep
        console.table("Zona "+ i + "%  Frec. Cardiaca = " + fzona.toFixed(2))
        console.log("-------------------------")
    }
}






//Calculo de IMC
function calculoImc(peso, altura){
  let imc = peso / (altura **=2)
  imc = imc.toFixed(2)
  return imc
} 

function predicciondeCarrera(hora,minutos, segundos, distancia, distancia2 ) {
  let minutosH = hora * 60  // Pasaje  de Hora a Minutos
  let minutoS = segundos / 60  //Pasaje de Segundo a Minutos
  let tiempoM = minutos + minutosH + minutoS
  // se aplocan dos formulas dependiendo si la distancia a estimar es  < 21k o >21k
  if ( distancia2 <= 21 ){
      let tiempoEstimado = tiempoM * ((distancia2/distancia) ** 1.06)
      let tiempoEstimadoH = Math.floor(tiempoEstimado /60)
      let tiempoEstimadoM = Math.floor(tiempoEstimado % 60)
      let tiempoEstimadoS = Math.floor(((tiempoEstimado % 60) - tiempoEstimadoM) * 60)
        
      return "Tiempo Estimado en " + distancia2 + "Km  es "+ tiempoEstimadoH + ":" + tiempoEstimadoM + ":" +tiempoEstimadoS
  }else if( distancia2 > 21 ){
      let tiempoEstimado = tiempoM * ((distancia2/distancia) ** 1.06)// Formula de estimacion de tiempo de carrera
      let tiempoEstimadoH = Math.floor(tiempoEstimado /60)
      let tiempoEstimadoM = Math.floor(tiempoEstimado % 60)
      let tiempoEstimadoS = Math.floor(((tiempoEstimado % 60) - tiempoEstimadoM) * 60)
        
      return "Tiempo Estimado en " + distancia2 + "Km  es "+ tiempoEstimadoH + ":" + tiempoEstimadoM + ":" +tiempoEstimadoS
  }else{

      return "Distancia No Valida" 
  } 

}// fin prediccion de carrera */






class CarrerasInsc{
  constructor(id, distancia, precio, cupo){
      this.id = id,
      this.distancia = distancia,
      this.precio = precio,
      this.cupo = cupo
  }
  bajaCupos(){
      this.cupo = this.cupo - 1
      console.log(`Quedan ${this.cupo} cupos para la carrera de ${this.distancia} km `)
  }

}
solicitarDatos()
//Array con articulos (Distancia)
function solicitarDatos(){
    /// Ejemp distancia: 5 km o 10km 
    cantidad = Number(prompt("Ingrese las cantidad de Carreras a Cargar (de 1 a 4)"))
    cuposDistancias  = []
   for(i =1; i <= cantidad; i++){
    let id = i
    let dist = (prompt(`ingrese la distancia de la ${i} ° Carrera`))
    let precio = Number(prompt(`ingrese el precio de la ${i} ° Carrera`))
    let cupoInic = Number(prompt(`ingrese el cupo de la ${i} ° Carrera`))
    newdistancia = new CarrerasInsc(id, dist, precio, cupoInic)
    console.log(newdistancia)
   cuposDistancias.push(newdistancia)
   }
   console.log(cuposDistancias)
}

const carrito = []


let carrerasDisponibles = " Exiten estas Carreras \n"

function CarritoAdd(){
  for (i of cuposDistancias){
     carrerasDisponibles += "\n " + i.id + "--" + i.distancia + " Km a un costo de $ "+ i.precio +  " y quedan " + i.cupo + " cupos"
  }
  carrerasDisponibles += '\n Ingrese el numero de items que desea agregar a su carrito de compra. Para finalizar ingrese presione 99'
  
  let respuesta = Number(prompt(carrerasDisponibles))

 // validacion de que sea numero
  while (isNaN(respuesta)){
      alert("Por favor Ingrese solo numeros")
      respuesta = Number(prompt(carrerasDisponibles))
  }
  while (respuesta != 99){// validacion por el numero 99
      switch (respuesta-1) {
          case 0:
              carrito.push(cuposDistancias[0])
              alert( `Agregamos a tu carrito el producto  ${cuposDistancias[0].distancia}`)
              cuposDistancias[0].bajaCupos()
              break
          case 1:
              carrito.push(cuposDistancias[1])
              alert( `Agregamos a tu carrito el producto  ${cuposDistancias[1].distancia}`)
              cuposDistancias[1].bajaCupos()
              break
          case 2:
              carrito.push(cuposDistancias[2])
              alert( `Agregamos a tu carrito el producto  ${cuposDistancias[2].distancia}`)
              cuposDistancias[2].bajaCupos()
              break 
          case 3:
              carrito.push(cuposDistancias[3])
              alert( `Agregamos a tu carrito el producto  ${cuposDistancias[3].distancia}`)
              cuposDistancias[3].bajaCupos()
              break    
          default:
              alert("No tenemos este producto")
              break
      }
      respuesta = Number(prompt(carrerasDisponibles))
  }

      alert("Carrito cerrado")
      mostrarCarrito()
}

let artCarrito = "Estas Incripciones"
let precioCarrito =   0

function mostrarCarrito(){
  for (itemCarrito of carrito){
      artCarrito += `\n - ${itemCarrito.distancia}`
      precioCarrito += itemCarrito.precio
  }
  alert(`Ud tiene  \n ${artCarrito} \n por un total de ${precioCarrito}`)

} 

CarritoAdd()