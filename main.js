// scomponiamo il problema 

// chiedere il numero dei km 
// chiedere l'età 
// calcolare il costo del biglietto del treno 
    // 0.21 €/km
    // -20 % minorenni 
    // -40 % over-65
    
// output prezzo finale in forma umana massimo due decimali (due centesimi) 




// primo passo - creazione delle variabili 

let distanceKm = prompt ( "Quanta distanza devi percorrere? (in km)?")
let clientAge = prompt ( "Inserisci la tua età: (in anni)")

// secondo passo - controllo delle variabili 

console.log (distanceKm)
console.log (clientAge) 

// terzo passo - creazione dell'algoritmo 

if (clientAge < 18){
    document.writeln((distanceKm * 0.21) - 20/100)
} else if (clientAge > 65){
    document.writeln((distanceKm * 0.21) - 40/100)
} else if (18 < clientAge < 65){
    document.writeln((distanceKm * 0.21))
} else {
    document.writeln("Uhmm error")
}

