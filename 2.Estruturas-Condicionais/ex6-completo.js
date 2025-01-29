const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('insira sua idade para conferirmos se você pode votar ', (idade) => {
    // TODO: Log the answer in a database
    if (typeof number !== Number) {
        console.error("Você deve informar um número")
        rl.close();
        return
    }
    else if (idade<0) { 
        console.log(`${idade} anos? Nasceu no futuro fdp?!`)
    }
    else if (idade >= 16 && idade < 100) {
        console.log( `${idade} anos? Você estar apto a votar!`)

    } else if (idade < 16) {
        console.log( `${idade} anos? muito novo, vai ter que esperar mais um pouco campeão! `)

    } else if (idade > 100) {
       console.log( `${idade} anos?! nasceu na época de cristo meu brother? Preenche essa porra direito!`)

    }

    rl.close();
});