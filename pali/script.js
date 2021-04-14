//chiedo all'utente di scrivere una parola

var parolaUtente =prompt("Scrivi una parola");
console.log(parolaUtente)


// rendo la parola in un array usando il metodo split

var parolaUtenteDivisa = parolaUtente.split("")
console.log(parolaUtenteDivisa)


//inverto l'ordine delle lettere usando il metodo reverse()

var parolaUtenteDivisa = parolaUtenteDivisa.reverse()
console.log(parolaUtenteDivisa)

//rendol'array in una parola con lettere unite

var parolaInvertita = parolaUtenteDivisa.join("")
console.log(parolaInvertita)

//faccio un if/else per fare il paragone

if (parolaUtente===parolaInvertita){

    console.log("le due parole sono uguali quindi è palindroma")
}else{

    console.log("le due parole Non sono uguali quindi NON è palindroma")
}