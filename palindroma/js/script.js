// PALINDROMA

// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
var parola = prompt("inserisci una parola").toLowerCase();
while (!isNaN(parola)) {
    var parola = prompt("inserisci una parola").toLowerCase();
}

// CREA UNA FUNZIONE PER CAPIRE SE LA PAROLA INSERITA È PALINDROMA
function palindroma(string) {
    
    var control = false;

    for (var i = 0; i < string.length / 2; i++) {

        if (string[i] == string[string.length - 1 - i]) {
            control = true;
            return  'è palindroma'; break
        }
    }
        if (control == false) {
            return 'non è palondroma'
        }

}

console.log(palindroma(parola));