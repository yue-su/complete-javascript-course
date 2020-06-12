// let firstName = 'yue';
// console.log(firstName);



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

/*****************************
* CODING CHALLENGE 3


 let bills = new Array(124, 48, 268);

 function tips(bill) {
     let percentage;
     if (bill < 50) {
         percentage = .2;
     } else if (bill >= 50 && bill <= 200) {
         percentage = .15;
     } else {
         percentage = .1;
     }

     return percentage * bill;
}

let tipsTopay = [tips(bills[0]),tips(bills[1]),tips(bills[2])];
console.log(tipsTopay);

let totalTopay = [
    bills[0] + tipsTopay[0],
    bills[1] + tipsTopay[1],
    bills[2] + tipsTopay[2],
];
console.log(totalTopay);

*/

/*****************************
* Objects and methods

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
var y = 'job';
console.log(john[y] + john[x]);

*/

/*****************************
* CODING CHALLENGE 4


let Mark = {
    name: 'Mark',
    mass: 110,
    height: 1.99,
    calcBmi: function() {
        this.bmi = this.mass / this.height^2;
        return this.bmi;
    }
};

let John = {
    name: 'John',
    mass: 92,
    height: 1.95,
    calcBmi: function() {
        this.bmi = this.mass / this.height^2;
        return this.bmi;
    }
}

console.log(Mark.calcBmi() > John.calcBmi());

if (John.calcBmi() > Mark.calcBmi()) {
    console.log(John.name + ` has a higher BMI of ` + John.bmi);
} else if (John.calcBmi() < Mark.calcBmi()){
    console.log(Mark.name + ` has a higher BMI of ` + Mark.bmi);
} else {
    console.log(`Same bmi`);
}

*/


/*****************************
* CODING CHALLENGE 5
*/


const john = {
    fullName: 'john Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function (){
        this.tips = [];
        this.total = [];
        for (let i=0; i < this.bills.length; i++) {
            let percentage;
            let bill = this.bills[i];
            if (bill < 50) { percentage = .2}
            else if (bill>=50 && bill<=200) {percentage= .15}
            else {percentage = .1}
            this.tips.push(bill*percentage);
            this.total.push(bill + bill * percentage); 
        }       
    }   
}

const mark = {
    fullName: 'Mark Smith',
    bills: [77, 375, 110, 45],
    calcTips: function (){
        this.tips = [];
        this.total = [];
        for (let i=0; i < this.bills.length; i++) {
            let percentage;
            let bill = this.bills[i];
            if (bill < 100) { percentage = .2}
            else if (bill>=100 && bill<=300) {percentage= .1}
            else {percentage = .25}
            this.tips.push(bill*percentage);
            this.total.push(bill + bill * percentage); 
        }      
    }   
}

const average = function(arr) {
    let tipsTotal = 0;    // need to declare with a value;
    let averageTips = 0;
    for(let i=0; i<arr.tips.length; i++) {
        tipsTotal = tipsTotal + arr.tips[i];
    }
    averageTips = tipsTotal / arr.tips.length;
    return averageTips;
}

john.calcTips();
mark.calcTips();
console.log(average(mark));
console.log(average(john));