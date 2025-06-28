let arr = [9,3,5,6,3,2,4,6,8]
let traget = 2

for(let i=0; i<=arr.length-1; i++){
    if( arr[i] === traget){
        console.log('index of 2 is ',i)
        break;
    }
}