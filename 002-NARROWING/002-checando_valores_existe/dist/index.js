//checando se o valor exister
//usando o operdo ? o segundo argumento se torna opcional
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log('Porfavor, defina uma operaçao');
    }
}
operations([2, 5, 8], "multiply");
operations([5, 10, 20]);
