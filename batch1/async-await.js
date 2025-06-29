// async js 
// js  basic
/*
fn
method
async
callbacck
promises
async-await

*/

// function sayHello (name){
//     console.log('hello',name)
// }

// sayHello('aviansh')


// function (){
//  async data// await
// }



// async function myfunction(){
//     let result =  await getdata()
//     console.log(result)
// }


function delay() {
    return new Promise(res => {
        setTimeout(() => {
            res('hello from delay')
        }, 200)
    })
}

//  async function greet(){


//     console.log('hello 1')
//     let response = await delay()
//     console.log(response)
//     console.log('hello 2')


// }

// greet()

// exceptional handling using try catch

async function getdata() {

    try {
        const res = await (await fetch('https://indian-quotes-api.vercel.app/api/quotes/random'))
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

getdata()



// read about dom// 
/*

selector tools
update dom element using js

*/