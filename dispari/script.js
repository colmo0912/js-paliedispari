
//utente scegli un numero da uno a 5 tramite un prompt

var sceltaNumeroUtente =parseInt(prompt("scegli un numero da 1 a 5"));

// console.log(sceltaNumero);


//verifico se è pari o dispari tramite un if e la %
var numeroPari;
var numeroDispari;


if(sceltaNumeroUtente % 2 === 0){
    numeroPari=true
    console.log("il numero da te scelto è pari" )
}else {
    numeroDispari=true
    console.log("il numero da te scelto è dispari" )
}

var numeroPC = Math.floor(Math.random() * 6); 
console.log(numeroPC)

var somma = sceltaNumeroUtente + numeroPC
console.log(somma)



