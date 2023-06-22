//Que 1

const readlineSync = require('readline-sync');
const userInput = readlineSync.question("Enter any single digit number: ");

switch (userInput) {
    case "1":
        console.log('One');
        break;
    case "2":
        console.log('Two');
        break;
    case "3":
        console.log('Three');
        break;
    case "4":
        console.log('Four');
        break;
    case "5":
        console.log('Five');
        break;
    case "6":
        console.log('Six');
        break;
    case "7":
        console.log('Seven');
        break;
    case "8":
        console.log('Eight');
        break;
    case "9":
        console.log('Nine');
        break;
    case "0":
        console.log('Zero');
        break;
    default:
        console.log('Invalid Input!');
}


//Que 2
const input = readlineSync.question("Enter any number between 1 to 7 : ");
function weekday(x)
{
    if (x > 7 || x < 0) 
    {
        throw new Error(`Please enter a valid value`);
    }
    const days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[x-1];
}
console.log(weekday(input));

