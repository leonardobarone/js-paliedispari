// PALINDROMA

// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
// var parola = prompt("inserisci una parola").toLowerCase();
// while (!isNaN(parola)) {
//     var parola = prompt("inserisci una parola").toLowerCase();
// }

var parola = "ciao";
// CREA UNA FUNZIONE PER CAPIRE SE LA PAROLA INSERITA È PALINDROMA
function isPalindromea(string) {
    
    var control = false;

    for (let i = 0; i < string.length / 2; i++) {

        if (string[i] == string[string.length - 1 - i]) {
            control = true;
            alert( 'è palindroma'); break
        }
    }
        if (control == false) {
            alert( 'non è palindroma');
        }

}

console.log(isPalindromea("ciao"));