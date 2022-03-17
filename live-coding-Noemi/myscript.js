// Controllare che un numero preso in input tramite prompt sia positivo e richiederlo in caso contrario.

// 1) Chiedere un numero tramite prompt
let numeroRichiesto = prompt("Scrivi un numero");

// 2) Controllare se è positivo
while (numeroRichiesto < 0) {
    // 3) Se è negativo, richiedere il numero
    numeroRichiesto = prompt("Reinserisci un numero")
}

// 4) Se è positivo, stamparlo
document.getElementById("numeroRichiesto").innerHTML = `${numeroRichiesto}`;
