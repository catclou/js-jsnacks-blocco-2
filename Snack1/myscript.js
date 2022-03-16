// SNACK1: inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// 1) Chiedere all'utente un numero tramite prompt
let numero = prompt("Digita un numero (in cifre)");
let numeroSuccessivo = `${parseInt(numero) + 1} (${numero}+1)`;

// 2) Se è pari, stamparlo
if (numero % 2 == 0) {
    document.getElementById("numeroStampato").innerHTML = `Il numero è ${numero}`;
    // 3) Se è dispari, stampare il numero successivo
} else {
    document.getElementById("numeroStampato").innerHTML = `Il numero è ${numeroSuccessivo}`;
}


