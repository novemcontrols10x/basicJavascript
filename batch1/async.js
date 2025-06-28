// callback  old school
// prmosis
// async-await


// function greet(name,cb){
//     console.log('hi', name)
//     cb()
// }

// function  bye(){
//     console.log('bye')
// }


// greet('avinash',bye)


//web api
//setinterval , settimout


// let timer = setTimeout(() => {
//     console.log('hello')
// }, 2000);

// clearTimeout(timer)

// let count = 0
// let interval = setInterval(()=>{
//     console.log(count)
//     count++

//     if(count == 5){
//         clearInterval(interval)
//         console.log("stopped")
//     }

// },1000)

//setinval (  cb , ms )

//  make a function that console table of param that is passed each entry aftere each second 


// function fetchData(cb){
//     setTimeout(()=>{
//         console.log('Data Fetched') // api calling
//         cb()
//     },2000)
// }

// function processData(){
//     console.log('processed')
// }

// fetchData(processData)



function fn1 (cb){
    setTimeout(()=>{
        console.log('step 1 ')
        cb()
    },1000)
}

function fn2(cb){
     setTimeout(()=>{
        console.log('step 2 ')
        cb()
    },1000)
}

function fn3(cb){
     setTimeout(()=>{
        console.log('step 3 ')
        cb()
    },1000)
}

fn1(()=>{
    fn2(()=>{
        fn3(()=>{
            console.log('all done')
        })
    })
})


