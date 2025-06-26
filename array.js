
// // // // console.log(arr.length)

// // // // arr.push(5)

// // // //push, pop, unshift, shift

// // // let sum = 0

// // // arr.forEach(item => sum = sum + item)

// // // console.log(sum)


// // // filter , map, reduce,splice, slice, find, sort, include




// // let arr = [1,2,3, 4, 5]
// // let arr2 = [1, 2, 3, 5, 43, 5, 4, 2, 4, 566, 6, 8, 5, 3, 2,]

// // // slice  : its return the sub part of our array
// // const newarr = arr.slice(3,4)
// // // console.log(newarr) // its doesn't includes starting index, but includes last index
// // // console.log(arr)

// // // splice  : add, remove , update in the array

// // arr.splice(1,2,6,7) // 

// // console.log(arr)//


// // //  console.log(arr2.sort((a,b)=>b-a))

// // // console.log(arr.includes(2))
// // // console.log(arr.find(item => item > 2))






// // // const evenNum2 = arr.filter((item)=>(
// // //      item % 2 === 0
// // // ))

// // // &&



// // // console.log(evenNum2)



// // // find out the user whos age is higher then 18
// // // obj.filter(item => item.age > 18)




// // const newRR = arr.map((item) => {
// //    return item ** 2
// // }).filter((item)=>{
// //     return item > 9
// // })



// // console.log(newRR)


// const obj = [
//     { name: 'abc', age: 17 },
//     { name: 'def', age: 56 },
//     { name: 'ghi', age: 25 },
//     { name: 'jkl', age: 18 }
// ]

// let arr = [1, 2, 3, 4, 5]

// // let target = 3
// // for(let i=0; i<=arr.length-1; i++){
//     //     if(arr[i] === 3){
//         //         console.log(i)
//         //     }
//         // }
        
//         // reduce (cb,10)
//         // (acc,curr)=>{
//             // logice
// // }

// console.log(arr.reduce((acc,curr)=>{
//     return acc + curr
// },10))

// /*

// [1,2,3,4,5].reduce(()=>{},10)


//     2.(res, curr)=>{
//         return  curr + res
//         }

//         1 + 0 = 1
//         2 + 1 = 3
//         3 + 3 = 6
//         4 + 6 = 10
//         5 + 10 = 15

        
//         */
       
//        // [2,4,3,7,5,3,9] even => square => sum
// // shallow copy and deep copy in array
// ///find out user whos age is bt 20 to 30 and print out thir name in upper case

// // let fruites = ['aaple', 'carrot', 'orange']
// // remove the odd from the list and add 'papaya'

// // searching
// // [2,4,3,7,5,3,9] find out the location of target which is 5
// // [2,4,3,7,5,3,9] find the index of 5 
//  ['Aa', 'aA'] 


// arr.reverse()

let arr = [ 'C','a', 'b', 'A', 'a', 'b']



console.log(arr.sort())