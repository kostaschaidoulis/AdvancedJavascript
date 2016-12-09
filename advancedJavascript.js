// Function Expression

var calculate = function (input, cost) {
    //this === window
    
    var check;
    
    if (input === "island") {
        check = true;
    } else {
        check = false;
    }
    
    if (check) {
        return (cost * 0.13) + cost;
    } else {
        return (cost * 0.23) + cost;
   }
};

/*
var obj = {
    someFn: function () {
        // this === obj
        console.log(this.name);
    },
    name: "Matt"
};

obj.someFn.call({});
*/

var things = [];

var message = function (calculate) {
    var cost = calculate("island", 1200);
    document.write("The cost of the product whith tax is " + cost);
}

message(calculate);

document.write("</br>");

//Using Function Expressions with Array.

var numbers = [1, 5, 2, 7, 10];

var add = numbers.map(function(number){
    return "</br>" + (number + 1);
});

document.write(add);

document.write("</br>");

//Return Functions from Functions

var numbers1 = [2, 4, 5, 10 ];
var numbers2 = [5, 39, 20, 15];

function totalInArrays(numbers1, numbers2) {
    var total = 0;
    for (var i = 0; i < numbers1.length; i++) {
        total += numbers1[i] + numbers2[i];
    }
    
    if(total <= 100) {
        return function() {
            document.write("Your sum is below or 100");
        };
    } else {
        return function() {
            document.write("Your sum is above 100");
        };
    };
    
}

var total = totalInArrays(numbers1,numbers2);
total();

document.write("</br>");

//Closures

function addNumberToNumber(number){
    
    
    return function(chooseNumber) {
        
        var add = chooseNumber + number;
        
        return document.write("Adding " + chooseNumber + " to " + number + " gives you " + add);;
        
    }
    
}

var adding = addNumberToNumber(5);
adding(3);

document.write("</br>");

function addEvenOrOdd(number) {
    var count = 0;  
    
     if(number % 2 === 0) {
         
        return  function (addNumber) {
            
             count++;
            
             var total = 0;
             
             total =  addNumber + number + count;
             
             if(total % 2 === 0) {
                 
                 return function() {
                     
                     document.write("The total of two numbers is even " + total);
                     
                 };
                 
             } else {
                 
                 return function() {
                     
                     document.write("The total of two numbers is odd " + total);
                     
                 }
             }
         };
         
       } else if(number % 2 !== 0) {
           
         return function (addNumber) {
             
             var total = 0;
             
             count++
             
             total = addNumberumber + number + count;
             
            if(total % 2 === 0) {
                 
                 return function() {
                     
                     document.write("The total of two numbers is even " + total);
                     
                 };
                 
             } else {
                 
                 return function() {
                     
                     document.write("The total of two numbers is odd " + total);
                     
                 }
             }
         };
           
     };
}

var evenOrOdd = addEvenOrOdd(4);
var total = evenOrOdd(1);
total();

document.write("</br>");

//Objects

//Simpple object creation & Manipulation

var car = {
    seats: 4,
    wheels: 4,
    passengers: 5,
    extras: ["Air Condition", "20inch alloy rims", "Bang & Olafusean sound system"],
    horn: function(sound){
        document.write(sound);
    },
    ecu: {
        abs: "Electonic disk anti-block system",
        est: "Electronic stability control"
    },
    createPart: function(name, type, job){this[name] = {
        type: type, job: job
    };}
}

//Using for .. in in an object to find if a property exist in object.
console.log("seats" in car);

document.write("</br>");
document.write(car.extras[1]);
document.write("</br>");
document.write(car.ecu.abs);
document.write("</br>");
car.horn("Biiip!");
car.extras.push("Backet seats");
document.write("</br>");
document.write(car.extras[3]);
document.write("</br>");
car.createPart("navigation", "Electronic", "Car navigation system");
document.write(car.navigation.type);
document.write("</br>");

//Enumeration

for(key in car) {
    if (car.hasOwnProperty(key)) {
       document.write(key + " "); 
    }
}

Object.keys(car).forEach

//Object creation and Manipulation with examples

function Car(brand, make, speed) {
    if (this instanceof Car) {
       this.brand = brand;
       this.make = make;
       this.speed = speed;
    } else {
        return new Car();
    }
}

Car.prototype = {
    accelerate: function () {
        console.log(parseInt(this.speed) + 5);
    },
    brake: function() {
        console.log(parseInt(this.speed) - 5);
    }
};

function Person(){
    if(this instanceof Person){
        this.name = prompt();
        this.address = prompt();
        this.age = prompt();
        this.phone = prompt();
    } else {
        return new Person();
    }
}

Person.prototype = {
    info: function() {
        console.log("Your info are: " + this.name + " " + this.address + " " + this.age + " " + this.phone);
    }
}

function Employee() {
    if(this instanceof Employee) {
        this.name = prompt();
        this.empNumber = prompt();
        this.shiftNumber = function() {
            var number = prompt();
            number = parseInt(number);
            if (!isNaN(number)) {
                number = number; 
            } else {
               number = console.log("You enter invalid data");
            }
            return console.log(number);
        };
     } else {
        return new Employee();     
     }
}



function EssayScore() {
    if(this instanceof EssayScore) {
        this.grammar = function() {
            var score = prompt();
            score = parseInt(score);
            if(!isNaN(score) && score > 0 && score <= 30) {
                score = score;
            } else {
                score = console.log("Not a Number !");
            }
            return score;
        };
        this.spelling = function() {
            var score = prompt();
            score = parseInt(score);
            if(!isNaN(score) && score > 0 && score <= 20) {
                score = score;
            } else {
                score = console.log("Not a Number !");
            }
            return score;
        };
        this.length = function() {
            var score = prompt();
            score = parseInt(score);
            if(!isNaN(score) && score > 0 && score <= 30) {
                score = score;
            } else {
                score = console.log("Not a Number !");
            }
            return score;
        };
        this.content = function() {
            var score = prompt();
            score = parseInt(score);
            if(!isNaN(score) && score > 0 && score <= 20) {
                score = score;
            } else {
                score = console.log("Not a Number !");
            }
            return score;
        };
    } else {
        return new EssayScore();
    }
}

EssayScore.prototype = {
    totalScore: function () {
        var total = 0;
        total = this.grammar() + this.content() + this.length() + this.spelling();
        return total;
    }
}


var kostasScore = EssayScore();
console.log(kostasScore.totalScore());
