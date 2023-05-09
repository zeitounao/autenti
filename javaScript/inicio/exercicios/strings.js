
let weight;
console.log(typeof weight);

 

let eliezer = {
    name: "eliezer",
    age:21,
    weight:19.5,
    isSubscribed:true,
};
console.log( eliezer);

console.log(eliezer.name, "de idade", eliezer.age, "pesa", eliezer.weight, "kg");
console.log(`${eliezer.name} de idade ${eliezer.age} pesa ${eliezer.weight} kg`);

let students
students=[eliezer,];

console.log(students[0]);

let john = {
    name: "john",
    age:23,
    weight:39.5,
    isSubscribed:true,
};

students=[eliezer,john,];
console.log(students);