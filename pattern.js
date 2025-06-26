/*

+
++
+++


     +
    + +
   + + +
    + +
     +


*/

for(let i=1; i<= 3; i++){
    let str = ""
    
    for(let j= 3; j>=i; j--){
        str +=  ' '
    }

    for(let j= 1; j<=i; j++){
        str +=  ' +'
    }
    console.log(str)
}



