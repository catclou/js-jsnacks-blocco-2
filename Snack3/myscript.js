// SNACK 3: Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// 1) Crea un array di numeri interi
let arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let somma = 0;

// 2) Seleziona tutti gli elementi in posizione dispari
for (i=1; i<=arrayNumeri.length; i = i + 2) {
    // 3) Sommali tra di loro
    somma += arrayNumeri[i];
}

console.log(somma);


