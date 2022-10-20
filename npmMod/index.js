import chalk from 'chalk';
console.log(chalk.blue('Hello world!'));
import validator from 'validator';
const res = validator.isEmail('foo@bar.com')
console.log(res?chalk.green.inverse(res):chalk.red(res));