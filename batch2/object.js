// // // // // //  object , this 

// // // // // // let obj = {
// // // // // //     key : value
// // // // // // }



// // // // let user = {
// // // //     name:"shubham",
// // // //     "full name":"shubham verma",
// // // //     age:50,
// // // //     isStudent:true,
// // // //     address:{
// // // //         state:"punjab",
// // // //         city:'mohali'
// // // //     },
// // // //     hobbies:["painting","swimming","sleeping"]
// // // // }

// // // // // console.log(user.hasOwnProperty("salery"))

// // // // // console.log(Object.freeze(user)) 
// // // // // console.log(Object.seal(user))
// // // // // // can edit but cant add / dlt
// // // // // user.name = "avinash" 


// // // // // console.log(user)
// // // // // freeze he object cant edit / add / delete
// // // // // console.log(Object.values(user))
// // // // // console.log(Object.entries(user))
// // // // // console.log(Object.keys(user))


// // // // // // console.log(user["full name"])


// // // // // const obj1 = {
// // // // //     num1:0,
// // // // //     num2 : 1,
// // // // // }
// // // // // const obj2 = {
// // // // //     num2 : 2,
// // // // //     num3 : 3
// // // // // }


// // // // // const obj3 = Object.assign(obj1,obj2)

// // // // // console.log(obj3)

// // // // // key, enteries, value, freeze , seal, hasownprop


// // // let arr = [["name","avinash"],["age","60"]]

// // // let obj = Object.fromEntries(arr)

// // // console.log(obj);


// // // this property


// // const user = {
// //     name:'subham',
// //     age:22,
// //     greet: function(){
// //         console.log('hello', this.name)
// //         console.log(this)
// //     },
// //     hello: ()=>{
// //         console.log("hello from array " , this.name)
// //         console.log(this)
// //     }
// // }

// // user.hello()


// const cart = {
//     item : ["phone", "laptop"],
//     show: function(){
//         this.item.forEach((i)=>console.log(i.toUpperCase()))
//     }

// }

// cart.show()




/*
 create a user object
 access properties
 update the values
 create some methods in the object and don nesting
 object which has some value num1 and num2 and make arithmetic method on them
 object of employee
 const employee = {
 name:'verma",
 salery:36000,
 hike:fn(){
 }
 
 }

 employee.hike(5000)
 employee.salery 36000+5000

*/