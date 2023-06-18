//1 type guard

function sum(a:number|string, b:number|string){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    }else if(typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    }else{
        console.log("Imposivel de realitar a soma!")
    }
}

sum(10,10)
sum("10","10")
sum("10", 50)