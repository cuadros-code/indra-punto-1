
const validarPaquetes = ( paquetes= [], tamanoCamion = 0 ) => {
  let ordenar = []
  ordenar = paquetes.sort()

  for (let i = 0; i < ordenar.length; i++ ) {
    for (let j = 0; j < ordenar.length; j++) {
        if (i != j && (ordenar[i] + ordenar[j]) == (tamanoCamion - 30)) {
            console.log([ordenar[j], ordenar[i]])
            return
        }
    }
  }
}


let paquetes = [ 10, 60, 40, 35, 20 ]
let tamanoCamion = 90

validarPaquetes( paquetes, tamanoCamion )