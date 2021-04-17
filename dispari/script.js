
//utente sceglie prima opari o dispari poi un numero da uno a 5 tramite un prompt

var pariDispari = prompt("scegli pari o dispari")
console.log(pariDispari)

var sceltaNumeroUtente;

if (pariDispari === "pari" ){

    sceltaNumeroUtente = isPari()
    console.log("il numero da te scelto " + sceltaNumeroUtente + " è pari" )
}else {
    sceltaNumeroUtente = isDispari()
    console.log("il numero da te scelto " + sceltaNumeroUtente + " è dispari" )
}


//genero un numero random per il pc da 1 a 5 usando una funzione

function numeroRandom(){

return (Math.floor(Math.random() * 6))
}

//faccio la somma dei due numeri
var numeroPC = numeroRandom()
console.log(numeroPC)
var somma = sceltaNumeroUtente + numeroPC
console.log(somma)
console.log("La somma del numero scelto dall'utente e quello del pc è " + somma)

function risultatoPariODispari(sommaNumeri) {

    if ((sommaNumeri % 2=== 0) == true){

    return true
    }else {

    return false
    }

}

var sommaPari = risultatoPariODispari(somma);
console.log(sommaPari)


if (pariDispari === "pari" && sommaPari === true){

    console.log("L'utente vince con il risultato pari")
}else if(pariDispari === "dispari" && sommaPari === false){

    console.log("L'utente vince con il risultato dispari")
}else {

    if(sommaPari === false){

        console.log("Il PC vince con il risultato dispari")

    }else {

        console.log("Il PC vince con il risultato pari")
    }

}


//devo creare una funzione che controlli che il numero sia pari

function isPari (){

    var numero;
do{ 
    numero =parseInt(prompt("scegli un numero da 1 a 5 pari"));
}while (numero % 2 !== 0) 
return numero
}

function isDispari (){

    var numero;
do{ 
    numero =parseInt(prompt("scegli un numero da 1 a 5 dispari"));
}while (numero % 2 === 0) 
return numero
}



