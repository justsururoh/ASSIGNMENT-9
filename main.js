let user = "toyosi"

console.log("my name is " + user);

let num = 30
let dip = 20

console.log(num + dip);


function hello(name) {
    console.log("hello" + name);  
}

hello(" sururat")

 
// write a function that takes three numbers and return the largest. (if else statement is important here)

function largestNumber(a,b,c) {
    if (c > a && c > b) {
        console.log(c);  
    } else if (b > a) {
        console.log(b);   
    } else {
        console.log(a); 
    }
}
largestNumber(100,200,300)