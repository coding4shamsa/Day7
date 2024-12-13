//Script mode
'use script';
let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log("I can drive");


//function declaration

function logger(){
    console.log('my name is jones');


}
logger();
logger();
logger();
logger();

//function with parameter

function firstprocess(apples, fruits){
    console.log(apples, fruits);
    const juice = "juice with &{apples} apples and &{fruits} fruits";
    return juice;
}

//invoke function
const appleJuice = firstprocess(5, 7);
console.log(appleJuice);

//function declarations vs experations

function calAge(birthYear){
    const age = 2024 - birthYear;
    return age;

}

const age2 = calAge(1994);


//function experations

const calAge2 = function(birthYear){
    
    return 2025 - birthYear;;
}

const age3 = calAge2(1994);
console.log(age2, age3);

//aarrow functions

const calAge4 = birthYear => 2022 - birthYear;
const age5 = calAge4(1999);
console.log(age5);

const calAge6 = (birthYear, firtsName) =>{
    const year = 2027 - birthYear;
    const retires = 50 - year;

    return '${firtsName} retires in ${retires} year';
}

console.log(calAge6(1999, 'jaamac'));
console.log(calAge6(1997, 'ali'));