// PARI E DISPARI

// L'UTENTE SCEGLIE PARI O DISPARI 
var sceltaUtente = prompt("inserisci pari o dispari").toLowerCase();
// MINIMO DI CONTROLLO
while ( sceltaUtente !== "pari" && sceltaUtente !== "dispari" ) {
    var sceltaUtente = prompt("inserisci pari o dispari").toLowerCase();
}

// L'UTENTE INSERISCE UN NUMERO DA 1 A 5
var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
// MINIMO DI CONTROLLO
while ( isNaN(numeroUtente) || numeroUtente > 5 || numeroUtente < 1) {
        var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
}

// GENERIAMO UN NUMERO RANDOM (SEMPRE DA 1 A 5) PER IL COMPUTER (USANDO UNA FUNZIONE)
function numeroRandom (num1, num2) {

    if (num1 < num2) {
        var risultato = parseInt(Math.floor(Math.random() * (num2 - num1 + 1)) + num1);
        return risultato;    
    } else {
        return false;
    }

}
var numeroComputer = numeroRandom(1, 5);


// SOMMIAMO I DUE NUMERI
var somma = numeroComputer + numeroUtente;
// STABILIAMO SE LA SOMMA DEI DUE NUMERI È PARI O DISPARI USANDO UNA FUNZIONE
function pariODispari(num) {
    
    if (somma % 2 == 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

// DICHIARIAMO CHI HA VINTO
;

if (pariODispari(somma) == sceltaUtente) {
    console.log("HA VINTO L'UTENTE!");
} else {
    console.log("HA VINTO IL COMPUTER!");
}


console.log(numeroComputer, numeroUtente, sceltaUtente, somma, pariODispari(somma));