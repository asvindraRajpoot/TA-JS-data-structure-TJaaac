// 1. Create an array named numbers and store 5 number values in it
let numbers =[6,9,10.7,-9,7880];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum=0;
for(let item of numbers){
    sum+=item;
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let avg=0;
for(let item of numbers){
    sum+=item;
}
console.log(sum/numbers.length);
// 4. Find the highest number in the array and print it to the console using console.log()
let highestNumber=0;
for(let i=0;i<numbers.length;i++){
    highestNumber=numbers[i];
    for(let j=0;j<numbers.length;j++){
        if(highestNumber>numbers[j]){
            highestNumber=highestNumber;
        }
        else{
            highestNumber=numbers[j];
        }

}
console.log(highestNumber);

     
}
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestNumber=0;
for(let i=0;i<numbers.length;i++){
    lowestNumber=numbers[i];
    for(let j=0;j<numbers.length;j++){
        if(lowestNumber<numbers[j]){
            lowestNumber=lowestNumber;
        }
        else{
            lowestNumber=numbers[j];
        }

}
console.log(lowestNumber);

     
}

// 6. Find the even numbers in the array and print them to the console using console.log()
let evenNumbers=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        evenNumbers++;
        console.log(` All Even Numbers:${numbers[i]}`);
       
    }
}
console.log(evenNumbers);
// 7. Find the odd numbers in the array and print them to the console using console.log()
let oddNumbers=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2!==0){
        oddNumbers++;
        console.log(` All Odd Numbers:${numbers[i]}`);
       
    }
}
console.log(oddNumbers);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divbyfiveNumbers=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%5===0){
        divbyfiveNumbers++;
        console.log(` Div by 5 All Numbers:${numbers[i]}`);
       
    }
}
console.log(divbyfiveNumbers);
// 9. Log all the element of the array one by one
console.log(`All Numbers in array: ${numbers}`);

// 10. Find all the number in the array that is divisible by 3
let divbythreeNumbers=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%3===0){
        divbythreeNumbers++;
        console.log(` Div by 3 All Numbers:${numbers[i]}`);
       
    }
}
console.log(divbythreeNumbers);