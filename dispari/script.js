
//utente scegli un numero da uno a 5 tramite un prompt

var sceltaNumeroUtente =parseInt(prompt("scegli un numero da 1 a 5"));

// console.log(sceltaNumero);


//verifico se è pari o dispari tramite un if e la %
var numeroPari;
// var sceltaNumeroUtentePari;
// var sceltaNumeroUtenteDispari;

if(sceltaNumeroUtente % 2 === 0){
    // sceltaNumeroUtentePari
    console.log("il numero da te scelto " + sceltaNumeroUtente + " è pari" )
}else {
    // sceltaNumeroUtenteDispari
    console.log("il numero da te scelto " + sceltaNumeroUtente + " è dispari" )
}


//genero un numero random per il pc da 1 a 5
var numeroPC = Math.floor(Math.random() * 6); 
console.log("il numero scelto dal PC è " + numeroPC)

//faccio la somma dei due numeri
var somma = sceltaNumeroUtente + numeroPC
console.log(somma)

//faccio un if/else per controllare se la somma è pari o dispari
// if (sceltaNumeroUtente % 2 === 0 && somma % 2 === 0){

//     console.log("utente vince")
// }else {

//     console.log("PC vince")
// }


function controlloPoD(pariodispari){

    if (sceltaNumeroUtente % 2 === 0 && somma % 2 === 0){
    return true
    }else {

        return false
    }
}

var risultato = controlloPoD(somma)
if (risultato){

    console.log("utente vince")
}else {

    console.log("PC vince")
}





