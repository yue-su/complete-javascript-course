let firstName = 'yue';
console.log(firstName);



// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJohn = 92;
// var heightJohn = 1.95;

// let bmiMark = massMark / heightMark^2;
// let bmiJohn = massJohn / heightJohn^2;

// console.log(bmiMark);
// console.log(bmiJohn);

// let result = bmiMark > bmiJohn;
// console.log(`Is mark's bmi larger than John's? ` + result);



// let years = new Array(1000,2000,3000);
// console.log(years);

// years[0] = 2500;
// console.log(years);

// years[years.length - 1] = 3500;
// console.log(years);


let bills = new Array(124, 48, 268);

function tips(bill) {
    if (bill < 50) {
        console.log (`The tips is ` + Math.floor(bill * 0.2));
    } else if (bill >= 50 && bill <= 200) {
        console.log (`The tips is ` + bill * 0.15);
    } else {
        console.log (`The tips is ` + bill * 0.10);
    }
}

tips(33);
tips(73);
tips(222);

