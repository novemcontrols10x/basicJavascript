// promises // resolve || reject
let promise = new Promise((resolve, reject) => {
    // async logic 
    let gotMyBack = false
    if (gotMyBack) {
        resolve('your credit is recieved')
    } else {
        reject("he didn't gave my monay back")
    }
}).then((msg) => {
    console.log(msg)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('work is done finally')
})

// 

function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) =>  res.json() )
    .then((data) => { console.log(data) })
    .catch((err)=>{
        console.log(err)
    })
}

getData()


