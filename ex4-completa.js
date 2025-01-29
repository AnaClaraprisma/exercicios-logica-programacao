const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('coloque um numero ', (number) => {
    if (typeof number !== Number) {
        console.error("Você deve informar um número")
        rl.close();
        return
    }

//ultilize if else 
if (number > 0) {
 console.log(`${number} é positivo`)
}else if (number < 0) {
    console.log(`${number} é negativo`)
}else{
    console.log(`${number} é zero`)
}
 
  rl.close();
});