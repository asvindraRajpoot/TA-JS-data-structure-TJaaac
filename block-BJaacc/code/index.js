// 1. Define a variable named `students` and assign a blank object to it.
let students={};

// 2. Add a key of the value of variable `studentName` in the object created above with the value of your name.
let keyvalue="studentName";
students[keyvalue]='asvindra rajpoot';
// 3. Using `console.log` log the value of `studentName` key from the `students` object
console.log(students[keyvalue]);
// 4. Add a another key of the value of variable `batch` in the object with the value of 16.
let keyvalue2='batch';
students[keyvalue2]=16;
// 5. Using `console.log` log the value of `batch` key from the `students` object
console.log(students[keyvalue2]);
// 6. Add another key in the object with the value of the variable `isAdult`. The value of the key should be `true/false`
let keyvalue3='isAdult';
age=18;
students[keyvalue3]= age>18 ?true:false;

// 7. Using `console.log` print the value of `isAdult` key from the `students` object
console.log(students[keyvalue3]);
// 8. Add a another key of `42` to the object with a value of `The answer to the meaning of life`.
students['42']=`The answer to the meanning of life`;
// 9. Using `console.log` print the value of key `42` from the `students` object
console.log(students[42]);

// 10. Check the length of object named `students`.
console.log(length.students);


// 11. Can you define a key of `let or var` in any object? Reason.
`yes we define any key name of any keyword because key name is a string so it can be anyhting`
// 12. Delete the `isAdult` property from the object `students`. Also, print the object before or after deleting the property
delete students[keyvalue3];
// 13. Update the value of the key batch in the object `students` and print it using `console.log`
students[keyvalue2]=67;
console.log(students[keyvalue2]);