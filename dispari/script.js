
//utente sceglie prima opari o dispari poi un numero da uno a 5 tramite un prompt

var pariDispari = prompt("scegli pari o dispari")
console.log(pariDispari)

var sceltaNumeroUtente =parseInt(prompt("scegli un numero da 1 a 5"));

if(sceltaNumeroUtente % 2 === 0){
// sceltaNumeroUtentePari
console.log("il numero da te scelto " + sceltaNumeroUtente + " è pari" )
}else {
// sceltaNumeroUtenteDispari
console.log("il numero da te scelto " + sceltaNumeroUtente + " è dispari" )
}


//genero un numero random per il pc da 1 a 5 usando una funzione

function numeroRandom(){

return (Math.floor(Math.random() * 6))
}

var pc = numeroRandom();
var sommaPari = pari(pc, sceltaNumeroUtente);

console.log(numeroRandom())

//faccio la somma dei due numeri
var numeroPC = numeroRandom()
var somma = (sceltaNumeroUtente + numeroPC)
console.log(somma)
console.log("La somma del numero scelto dall'utente e quello del pc è " + somma)

// faccio un if/else per controllare se la somma è pari o dispari

//

//function winner(num1, num2, sceltaUtente) {
// // pari
// // confrontare il risultato della funzione pari con sceltaUtente
//}

function pari(num1, num2) {

var sommaNumeri = num1+num2;

if ((sommaNumeri % 2=== 0) == true){

return true
}else {

return false
}



}















