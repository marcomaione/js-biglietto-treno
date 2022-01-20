//numero di km che vuole percorrere//

let km = prompt("inserire km da percorrere");

let price = km * 0.21;

//età passeggero// 

let eta = prompt( "inserire la propria eta");

// va applicato uno sconto del 20% per i minorenni //
// va applicato uno sconto del 40% per gli over 65 //

if (eta < 18 ) {
    let discount = price / 100 * 20 ;
    let finalPrice = price - discount;
    document.getElementById("finalPrice").innerHTML = finalPrice + "euro";
    price.toFixed(2);
    console.log("sconto giovani");
}

else if ( eta > 65) {
    let senior = price / 100 * 40 ;
    let finalPrice = price - senior;
    document.getElementById("finalPrice").innerHTML = senior + "euro";
    price.toFixed(2);
    console.log("sconto anziani");
}

else {
    document.getElementById("finalPrice").innerHTML = price + "euro";
    console.log("prezzo pieno");
}

