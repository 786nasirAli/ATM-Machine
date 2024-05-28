#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;

let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    {
     name: "pin",
     message: "Enter your pin",
     type: "number",

    }
); 

if(pinAnswer.pin === myPin){
    console.log("your pin is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select your option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
    
        



}]);

if(operationAns.operation ==="withdraw" ){
    let amountAns = await inquirer.prompt
    ([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        }
    ])
    if(amountAns.amount<= myBalance){
        let balance = myBalance - amountAns.amount;
        console.log(`The remaining balance is ${balance}`);

    }
     else{
        console.log("you have insufficients balace");
     }
     
}
else if(operationAns.operation === "fast cash") {
    let FastcashAns = await inquirer.prompt([
        {
         name: "amount",
         type: "list",
         choices: ["1000", "3000", "5000", "15000"]

        }
]);
    if(FastcashAns.amount<= myBalance){
        let balance2 = myBalance -FastcashAns.amount;
        console.log(`The remaining balance is ${balance2}`);
    }
    else{
        console.log("you have insufficients balance");
    }
}else if(operationAns.operation === "check balance"){
    console.log(myBalance)
}


else{
    console.log("your pin is wrong")
}  

}