
function imparPar(numero){
    if (numero%2 == 1) {
        console.log(`${numero} é ímpar`)
        return
    }

    if (numero%2 == -1) {
        console.log(`${numero} é ímpar e negativo`)
    }

    else if(numero%2 == 0) {
        console.log(`${numero} é par`)
    }

    else if(numero%2 == -0) {
        console.log(`${numero} é par e negativo`)}
    

}
imparPar(-120)