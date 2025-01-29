const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somaAte(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

rl.question('Informe um número: ', (numero) => {
    const n = parseInt(numero, 10);
    
    if (isNaN(n)) {
        console.log("Por favor, insira um número válido.");
    } 
    else if (n < 0) {
        console.log("Por favor, insira um número positivo.");
        rl.close();
        return
    } else {
        const resultado = somaAte(n);
        console.log(`A soma de todos os números de 1 até ${n} é: ${resultado}`);
    }

    rl.close();
});
