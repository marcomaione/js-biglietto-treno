//numero di km che vuole percorrere//

let km = prompt("inserire km da percorrere");
console.log(km);

let price = km * 0.21;
//età passeggero// 

let eta = prompt( "inserire la propria eta")
console.log(eta);

// va applicato uno sconto del 20% per i minorenni //
// va applicato uno sconto del 40% per gli over 65 //

if (eta < 18 ) {
    let discount = price / 20 * 100 - price;
    document.getElementById("finalPrice").innerHTML = discount + "euro";
    price.toFixed(2)
}

else if ( eta > 65) {
    let senior = price / 40 * 100 - price;
    document.getElementById("finalPrice").innerHTML = senior + "euro";
    price.toFixed(2)
}