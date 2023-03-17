import chalk from 'chalk';
import {get30DaysAgo , get6MonthsAgo, get1YearAgo} from "./date.js"

const log = console.log;

// Combine styled and normal strings
//log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
//log(chalk.blue.bgRed.bold('Hello world!'));

//log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles of the same type even (color, underline, background)
//log(chalk.green(
//	'I am a green line ' +
//	chalk.blue.underline.bold('with a blue substring') +
//	' that becomes green again!'
//));

log(chalk.blue(get30DaysAgo()));
log(chalk.red(get6MonthsAgo()));
log(chalk.yellow(get1YearAgo()));