function prepararBolo(calbackMassaPronta, callbackBoloPronto) {
console.log("Batendo a massa...");
console.log("Massa indo ao forno...");
calbackMassaPronta();
console.log("Preparando recheio...");
console.log("Recheio pronto..;");
callbackBoloPronto
}

function meuBoloEstaPronto () {
    console.log("Bolo pronto");
}


prepararBolo(() => console.log("Massa pronta"), meuBoloEstaPronto);

setTimeout(() => console.log("Pronto!"), 1000);
    
