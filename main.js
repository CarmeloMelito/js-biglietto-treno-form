//const prezzo fisso km

document.addEventListener("click", function () {
    const button = document.getElementById("calcola");
    button.addEventListener("click", function () {
        const km = parseFloat(document.getElementById("km").value);
        const eta = parseInt(document.getElementById("eta").value);
        const finalPrice = document.getElementById("finalPrice");

        let prezzoBase = km * 0.21;
        let sconto = 0;

        if (eta < 18) {
            sconto = prezzoBase * 0.20;
        } else if (eta >= 65) {
            sconto = prezzoBase * 0.40;
        }

        let prezzoFinale = prezzoBase - sconto;
        finalPrice.innerHTML = (`Il prezzo è: €${prezzoFinale.toFixed(2)}`);
        console.log(finalPrice);
    });
});

// const prezzoKm = 0.21;

// //const km ed eta
// const km = parseFloat(prompt("Inserisci numero di km da percorrere "));
// const eta = parseInt(prompt("Inserisci l'età del passeggero "));

// //moltiplicazione km
// let prezzoTotale = km * prezzoKm;

// //Sconto
// let sconto = 0;
// // 20% di sconto per minorenni
// if (eta < 18) {
//     sconto = 0.20;
// }
// // 40% di sconto per over 65io
// else if (eta > 65) {
//  sconto = 0.40;
// }

// let prezzoScontato = prezzoTotale * (1 - sconto);
// console.log(`Il prezzo del biglietto è: €  ${prezzoScontato.toFixed(2)}`);
