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
        
        document.write("Adding " + chooseNumber + " to " + number + " gives you " + add);
        
        return undefined;
        
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

//Inheritance


document.write("</br>");
document.write("</br>");

function toWeirdCase(string){
    // Every odd index character is lowercase
    // every even index character is uppercase (0 is even)
    var words = string.split(" ");
    var transformedWords = [];
    var word;
    
    for (var i = 0; i < words.length; i++) {
        word = "";
        for (var j = 0; j < words[i].length; j++) {
            if (j % 2 === 0) {
                word += words[i][j].toUpperCase();
            } else {
                word += words[i][j].toLowerCase();
            }
        }
        transformedWords.push(word);
    }
    
    return transformedWords.join(" ");
    

    
    /*
  var newString = string.split(" ");
  var sumString = "";
  for (var i = 0; i < newString.length; i++) {
      if(i > 0) {
          sumString += " ";
      }
      for (var j = 0; j < newString[i].length; j++) {
          if( j % 2 === 0) {
              sumString += newString[i][j].toUpperCase();
          } else{
              sumString += newString[i][j].toLowerCase();
          }
      }
   } 
    return sumString;
    */
}
