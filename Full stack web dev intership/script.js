// var x = 10
// var y = 15
// var z = x+y
// console.log(z)
// var name = 'Soumyajit is a developer'
// console.log(name)
// console.log(name.length)

// if(x>=45){
//     console.log("inside if block")
// }else{
//     console.log("inside else block")
// }

// for (var x=0; x<=10; x++ ) {
    
//     console.log(x=x+1)
// }

// var x = prompt('Enter a number from 1 to 3')
// console.log(typeof(x))
// var y = parseInt(x)
// console.log(typeof(y))
// switch (y) {
//     case 1:
//         console.log('1st case is executed')
//         break;
// 5
//     case 2:
//         console.log('2nd case is executed')
//         break;

//     case 3:
//         console.log('3rd case is executed')
//         break;

//     default:
//         console.log('enter a value from 1 to 3')
//         break;
// }


// var name = "soumyajit"
// console.log(name[5])

// var arr = [1,2,3,4,5,6]
// arr[0] = 57
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.push(89)
// console.log(arr)
// arr.unshift(90)
// console.log(arr)
// arr.pop()
// console.log(arr)

// var car = {
//     name: 'Lamborgini XS',
//     YOM: 2008,
//     airbags: true,
//     brandName: 'Lamborgini'
// }
// car.noOfSeats = 4
// car.cityOfManf = 'Sydney'
// console.log(car)
// delete car.brandName

// car.brandName = "Lambokini"

// console.log(car.brandName);

// var x = 10
// var y = 34
// function add(x,y){
//     console.log(x,y,x+y);
    
// }
// add(7,8)

// var heading = document.getElementById("heading")

var btn = document.getElementById("btn")
btn.addEventListener("focus",()=>{
    heading.style.color = "red"
})


// function add(){
//     return function ret(){
//         console.log("returned");
        
//     }
// }

// var x = add()
// x()

// setTimeout(function (){
//     console.log("set timeout running");
//     },3000)


var x = () => {
    console.log("arrow");
}
x()

// Template Litral
// var first_name = "Soumyajit"
// var last_name = "Bera"
// var name = `My name is ${first_name} ${last_name}`
// console.log(name);

// Destructuring
// var arr = [100,200]
// var [first,second] = arr
// console.log(second,first);
// var arr = [100,200,300,400,500]
// var total = 0
// for(var item of arr){
//     total = total + item 
// }
// console.log(total);

// let a = 10
// console.log(a);

// // const and let has block scope

// const b = 78
// console.log(b);

//Hoisting


let name = "soumyajit"

for(const alphabet of name){
    console.log(alphabet);
    
}
console.log(name.includes("S"));

let arr5 = [50,49,67,56,90]
arr5.forEach((ele)=>{
    console.log(ele);
})

let arr7 = arr5.map((item)=>{
    return item*2
})
console.log(arr5);
console.log(arr7);
