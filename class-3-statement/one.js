//let input=require('prompt-sync')();

//let a=parseInt(input("Enter First Number:"))
//let b=parseInt(input("Enter Second Number:"))
//console.log(a+b)
let input=require('prompt-sync')();

let num=parseInt(input("Enter First Number:"))
if(num>=100 && num<=999){
    console.log("three digit number")
}
else{
    console.log("this not")
}
