//Que 1
let a =Math.floor(Math.random() * 10);
console.log("Ans 1: Random number between 0 to 9 = "+ a);

// Que 2
let dice =Math.floor(Math.random() * 6 + 1);
console.log("Ans 2: After rolling Dice = "+ dice);

// Que 3
let dice1 =Math.floor(Math.random() * 6 + 1);
let dice2 =Math.floor(Math.random() * 6 + 1);
function addDice (x,y)
{
    return x+y;
}
let sum = addDice(dice1,dice2); 
console.log("Ans 3: After addding two Dice = "+ sum);

//Que4
function generateRandomTwoDigitNumber()
{
    return Math.floor(Math.random() * 90 + 10);
}

function averageOfNumbers(sum,count)
{
    let avg = sum/count;
    return avg;
}

function sumOfNumbers(numbers)
{
    let sum = 0;
    for (let i =0 ; i<numbers.length; i++)
    {
        sum += numbers[i];
    }
    return sum; 
}

function main(){
    const numbers = [];
    const count = 5;
    function arrayOfNumbers ()
    {
        for ( let i = 0; i<count; i++)
        {
        numbers.push(generateRandomTwoDigitNumber());
        }
    }

    arrayOfNumbers();

    sum = sumOfNumbers(numbers);

    avg = averageOfNumbers(sum,count);

    console.log("Ans 4:\n\tSum of five two digit Numbers is :"+ sum);
    console.log("\tAvg of five two digit Numbers is :"+ avg);

}

main();