//chiedo all'utente di scrivere una parola

var parolaUtente =prompt("Scrivi una parola");
// console.log(parolaUtente)


function controlloParola(parola){

    // rendo la parola in un array usando il metodo split

    var parolaUtenteDivisa = parola.split("")
    console.log(parolaUtenteDivisa)


    //inverto l'ordine delle lettere usando il metodo reverse()

    var parolaUtenteInversa = parolaUtenteDivisa.reverse()
    console.log(parolaUtenteDivisa)


    //rendo l'array una parola con lettere unite

    parolaUtenteInversa = parolaUtenteDivisa.join("")
    console.log(parolaUtenteInversa)

    //faccio un if/else per fare il paragone

    if (parolaUtente===parolaUtenteInversa){
        return true
    }else{

        return false
    }


}

var risultato= controlloParola(parolaUtente)

if (risultato){
    console.log("La parola inserita è palindroma")
}else{

    console.log("la parola inserita non è palindroma")
}







