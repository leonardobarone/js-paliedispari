// PALINDROMA

// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
var parola = prompt("inserisci una parola").toLowerCase();

while (!isNaN(parola) && parola != null) {
    var parola = prompt("inserisci una parola").toLowerCase();
}

// CREA UNA FUNZIONE PER CAPIRE SE LA PAROLA INSERITA È PALINDROMA
// function palindroma(stringa) {

//     var stringaArray = stringa.split("");
//     var stringaArrayReverse = stringaArray.reverse();
//     var stringaContraria = stringaArrayReverse.join("");

//     if (stringaContraria == stringa) {
//         return "è palindroma";
//     } else {
//         return "non è palindroma"
//     }
// }

console.log(palindroma(parola));

function palindroma(stringa) {
        
    var parolaCapovolta = "";
        
        for (var i = stringa.length - 1; i >= 0; i--) {
        
            parolaCapovolta += parola[i];

        }

        if ( parolaCapovolta == stringa) {
            return "è palindroma"
        } else {
            return "non è palindroma"
        }
}