
let str = "Hello P201"

console.log(typeof str)

str=45
console.log(typeof str)

str=true
console.log(typeof str)

let num = 45

str = "45";
let check = num==str;
let result =str+num;

console.log(result)
console.log(typeof result)

let n3=null
console.log(typeof n3)
console.log(n3)

// let n1 = prompt("1-ci ededi daxil edin:")
// let n2 = prompt("2-ci ededi daxil edin:")
// n1 = Number(n1);
// n2 = Number(n2);


// console.log(typeof n1)
// console.log(n1)

// check = n2>n1;

// console.log(`${n2}>${n1}=${check}`)








// let name = prompt("Adinizi daxil edin")
// let surname = prompt("Soyadinizi daxil edin")


// var check = confirm("Yasiniz 16-dan yuxaridirmi?")

// console.log(check)

// let fullName =  `${name} ${surname}`
// console.log(fullName)


if(10>100)
    console.log("yes")
else 
    console.log("no")


    str = "Hello"
    for(let i=0;i<str.length;i++){
        console.log(str[i])
    }

let arr = [45,"salam",false]

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

for (let i of arr) {
    console.log(i)
}


let car = {
    brand:"Mercedes",
    model: "E200",
    price:55000
}

for (const key in car) {
        console.log(key)
}

// let input;
// let inputCheck=true;
// do{
// input = prompt("eded daxil edin");
    


// if(isNaN(input))
//     inputCheck=false;
// }
// while(!inputCheck)

// console.log(`result: ${input}`)

console.log(isNaN(str))


// mySum(45,10,"30","YAZI",10);

// let mySum = function (...numbers){
  
//     let sum=0;
//     for(let i=0;i<numbers.length;i++){
//         if(!isNaN(numbers[i])){
//             sum+=Number(numbers[i])
//         }
//     }

//     console.log(sum)
// }

function sum(...numbers){
  
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(!isNaN(numbers[i])){
            sum+=Number(numbers[i])
        }
    }

    return 95
}

result = sum(45,10,"30","YAZI",10);
console.log(result);


let myFunc =(num1,num2)=>num1+num2;
console.log(myFunc(10,15))



function show(fullname,name,surname){

    console.log(fullname(name,surname))
}

function makeFullName(name,surname){
    return `${name} ${surname}`
}


show(makeFullName,"Hikmet","Abbasov")

function SumEven(numbers){
    let sum=0;

    for(let i=0;i<numbers.length;i++){
        let num = numbers[i]
        if(!isNaN(num)){
            num = Number(num)

            if(num%2==0){
                sum+=num
            }
        }
    }

    return sum
}

result = SumEven(["salam",34,10,-3,-8,80,"sag ol"])

console.log(result)



function GetNum(){
    let num = prompt("Enter a number");
    if(isNaN(num)){
        num= 0;
    }
    else {
        num=Number(num)
    }

    return num;
}


function SumDigits(num){
    let sum=0;

    while(num!=0){
        sum+=num%10;
        num = (num-num%10)/10;
    }

    return sum;
}

let number = GetNum();
result  =SumDigits(number);
console.log(result)


function FindCount(numbers){
    let counter=0;
    for(let i=0;i<numbers.length;i++){
        if(SumDigits(numbers[i])>10){
            counter++;
        }
    }

    return counter
}


result = FindCount([444,54,13,67,99])

console.log(result)


// Verilmis arrayin icerisinde nece ededin reqemlerinin 
// ceminin 10-den boyuk oldugunu tapan function


