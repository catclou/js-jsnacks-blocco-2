let cognomi = ["Arpa", "Ayadi", "Bellucci", "Biga", "Borriello", "Calia", "Carbone", "Carluccio", "De Stefano", "Di Benedetto", "Di Pietro", "Fergag", "Fonzi", "Magni", "Maiorchini", "Melotti", "Moccia", "Nifosi", "Nocilla", "Nuvoloni", "Pavone", "Pintaldi", "Piva", "Pontillo", "Rosellini", "Saputo", "Spadaro", "Sprinceana", "Toselli", "Wachnicki", "Zaino", "Natoli"]
let nomi = ["Modestino", "Abdelhamid", "Andrea", "Alberto", "Vincenzo", "Gerardo", "Luca", "Tancredi", "Valentino", "Ludovica", "Davide", "Nizar", "Alessandro", "Gabriele", "Stefano", "Angelo", "Caterina", "Sergio", "Clara", "Matteo", "Simone", "Noemi", "Roberto", "Andrea", "Andrea", "Simone", "Samuele", "Vera", "Ivan", "Michael", "Simone Luca", "Francesco"];

let list = [];

let i = 0;

while (i < nomi.length) {
    let listaNomi = nomi[i] + " " + cognomi[i];
    i++;
    list.push(listaNomi);
}

console.log(list);

let l = 0;

let bottoneGenera = document.getElementById("btnGenera");
console.log(bottoneGenera)

bottoneGenera.addEventListener("click",
    function () {
        let random = Math.floor(Math.random() * list.length);
        console.log(list[random]);
        document.getElementById("nomeEstratto").innerHTML = `${list[random]}`;
    }
)



