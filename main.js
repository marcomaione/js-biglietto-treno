//numero di km che vuole percorrere//

let km = prompt("inserire km da percorrere") * 0.21;
console.log(km);

//età passeggero// 

let eta = prompt( "inserire la propria eta")
console.log(eta);



if (eta > 18 || eta < 66) {
    document.getElementById("finalPrice").innerHTML = km + "euro";
}

//sconto 20% minorenni//

