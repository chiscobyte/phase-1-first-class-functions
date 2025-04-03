function receivesAFunction(callback){
    return callback()
}

//returnsANamedFunction()
//namefunctiondivide
function divide(a, b){
    return (a/b);
}
 function returnsANamedFunction(){
    return (divide);
 }

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous!")
    }
}