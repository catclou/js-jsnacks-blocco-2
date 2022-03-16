// SNACK 2: Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

// 1) Creare una lista di nomi
let listaNomi = ["Marco", "Antonio", "Luca", "Giacomo", "Lorenzo", "Alessandro", "Jacopo", "Livio", "Sergio", "Paolo", "Luciano", "Michelangelo", "Nicola", "Vito", "Ivo", "Francesco", "Adele", "Caterina", "Giulia", "Patrizia", "Livia", "Antonella", "Maria", "Sofia", "Elena", "Beatrice", "Claudia", "Alessandra", "Barbara", "Ilaria", "Tiziana", "Carlo", "Mario", "Felice", "Giovanni", "Carlotta", "Francesca", "Remo", "Corrado", "Gerardo", "Edoardo", "Annalisa", "Camilla", "Annamaria", "Margherita", "Simona", "Simone", "Saverio", "Donato", "Tancredi", "Federico", "Giulio", "Cesare", "Riccardo", "Alberto", "Giampiero", "Alessia", "Daniele", "Daniela", "Cristina", "Leonardo", "Fabrizio", "Gianmarco", "Pietro", "Adriano", "Lia", "Andrea", "Mauro", "Davide", "Domenico", "Lucia", "Matteo", "Mattia", "Laura"];

// 2) Creare una lista di cognomi
let listaCognomi = ["Bianchi", "Rossi", "Griseta", "Fantoni", "Lupari", "Ravenna", "Ferrario", "Montanini", "Vicario", "Guzzanti", "Rapone", "Vecchi", "Corradini", "Farenga", "Massafra", "Moretti", "Paciolla", "Bacci", "Crivella", "Campidelli", "Fiermani", "Conenna", "Nuzzo", "Pellegrini", "Sontino", "Barbareschi", "Iannelli", "Corsini", "Bonometti", "Bellantuono", "Paoletti", "Fioretti", "Fiorucci", "Del Re", "Dininni", "Santoro", "Pietricola", "Lattanzio", "Sassanelli", "Lopetuso", "Fuzio", "Vecchio", "Carbone", "Antonicelli", "De Laurentiis", "Francavilla", "Sarmiento", "Decarolis", "Cosmai", "Pagliula", "Aniello", "Albanese", "Marcantonio", "Servedio", "Cutrone", "Antonucci", "Cioce", "Copertino", "Losappio", "Mezzopane", "Montrucchio", "Scarimbolo", "Russo", "De Luca", "Calamandrei", "Fazio", "Civati"];

let numeroNomeRandom
let numeroCognomeRandom
let nomeScelto
let cognomeScelto

// 3) Selezionare casualmente un nome e cognome per volta
for (i=1; i<=30; i++) {
    numeroNomeRandom = Math.random();
    numeroNomeRandom = Math.floor (numeroNomeRandom * listaNomi.length);
    nomeScelto = listaNomi[parseInt(numeroNomeRandom)];

    numeroCognomeRandom = Math.random();
    numeroCognomeRandom = Math.floor (numeroCognomeRandom * listaCognomi.length);
    cognomeScelto = listaCognomi[parseInt(numeroCognomeRandom)];

    // 4) Stampare i risultati dei nomi + cognomi di invitati
    document.getElementById("listaInvitati").innerHTML += `<li>${nomeScelto} ${cognomeScelto}</li>`;
}


