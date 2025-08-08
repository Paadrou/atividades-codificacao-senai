const { default: chalk } = require('chalk');
const soma = require('./utils/soma');
const sub = require('./utils/subtracao');
const mult = require('./utils/multiplicacao');

// const a = Number(process.argv[2]);
// const b = Number(process.argv[3]);

const a = 10;
const b = 4;


console.log(chalk.green('tw'), chalk.magenta('insanity'));

console.log("Soma:", soma(a, b));
console.log("Subtração:", sub(a, b));
console.log("Multiplicação:", mult(a, b));

