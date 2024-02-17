// console.log("hello world");

// var a=10;
// console.log(a);

// const pi=3.14;
// console.log(pi);

// var b="yup";
// console.log(b);

// var c=a+pi;
// console.log("sum= ",c);

// var d=a-pi;
// console.log("diff= ",d);

// var n=a%pi;
// console.log("modulus= ",n);

// var i=25;
// console.log(i);

// if(a>pi)
// {
// console.log("big= ",a);
// };
// if(pi>a)
// {
//     console.log("big= ",pi);
// }else{
//     console.log("big= ",a)
// };


// if(a>i)
// {

//     console.log("big= ",a)

// }else if(pi>a){
//     console.log("big= ",pi)

// }else{
//     console.log("big= ",i)
// };

// var i=1;
// while(i<10)
// {
//     console.log(i);
//     i++;
// }
// var i=0;
// do{
//     i++;
//     console.log(i);
// }while(i<5);
// for(i=0;i<5;i++)
// {
//     console.log(i);
// }
var initial_balance = 2000;
console.log("Select the option you want");

while(1) {
    console.log("1.DEPOSIT");
    console.log("2.WITHDRAW");
    console.log("3.BALANCE");
    choice = prompt("Enter your choice:")
    choice = Number(choice)


    console.log(choice);

    switch (choice) {
        case 1: Deposit();
            break
        case 2: Withdraw();
            break
        case 3: Balance();
            break

        default: console.log("invalid choice");
            break;
    }

}
function Deposit() {
    var amount = prompt("Enter the amount you want to insert:")
    amount = Number(amount)
    initial_balance = initial_balance + amount;
    console.log("balance amount:", initial_balance)
}
function Withdraw() {
    var cash = prompt("Enter the amount you want to withdraw:")
    cash = Number(cash)
    console.log("amount withdarwn");
    initial_balance = initial_balance - cash;
    console.log("balance amount:", initial_balance)
}
function Balance() {
    console.log("Current balance:", initial_balance);
}