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

// terzo passo - variabili per calcolare il prezzo 

let minorPrice = (`${((distanceKm * 0.21) - 20/100)}`) 
let overPrice = (`${((distanceKm * 0.21) - 40/100)}`) 
let normalPrice = (`${((distanceKm * 0.21))}`) 

// quarto passo - controllo del calcolo delle variabili  

console.log (minorPrice)
console.log (overPrice)
console.log (normalPrice) 

// quinto passo - creazione dell'algoritmo 

// if (clientAge < 18){ 
    // document.writeln(`The distance: ${distanceKm} km`)
    // document.writeln(`Your age: ${clientAge} y.o`) 
    // document.writeln(`Dato che sei minorenne devi pagare: € ${minorPrice} `)
// } else if (clientAge > 65){
    // document.writeln(`The distance: ${distanceKm} km`)
    // document.writeln(`Your age: ${clientAge} y.o`) 
    // document.writeln(`Dato che sei over-65 devi pagare: € ${overPrice} `)
// } else if (18 < clientAge < 65){
    // document.writeln(`The distance: ${distanceKm} km`)
    // document.writeln(`Your age: ${clientAge} y.o`) 
    // document.writeln(`Devi pagare il biglietto pieno: € ${normalPrice}`)
// } else {
    // document.writeln("Uhmm error!")
// }


if (clientAge < 18){ 

    // creating FIRST div 
    elem = document.createElement("div");
    elem.id = 'distance';
    elem.innerHTML = `The distance: ${distanceKm} km` 
    document.body.insertBefore(elem,document.body.childNodes[8]);

    // creating SECOND div 
    elem = document.createElement("div");
    elem.id = 'age';
    elem.innerHTML = `Your age: ${clientAge} y.o`
    document.body.insertBefore(elem,document.body.childNodes[9]);

    // creating THIRD div 
    elem = document.createElement("div");
    elem.id = 'price'; 
    elem.innerHTML = `Dato che sei minorenne devi pagare: € ${minorPrice} `
    document.body.insertBefore(elem,document.body.childNodes[10]);

} else if (clientAge > 65){

    // creating FIRST div 
    elem = document.createElement("div");
    elem.id = 'distance';
    elem.innerHTML = `The distance: ${distanceKm} km` 
    document.body.insertBefore(elem,document.body.childNodes[8]);

    // creating SECOND div 
    elem = document.createElement("div");
    elem.id = 'age';
    elem.innerHTML = `Your age: ${clientAge} y.o`
    document.body.insertBefore(elem,document.body.childNodes[9]);

    // creating THIRD div 
    elem = document.createElement("div");
    elem.id = 'price'; 
    elem.innerHTML = `Dato che sei over-65 devi pagare: € ${overPrice} `
    document.body.insertBefore(elem,document.body.childNodes[10]);

} else if (18 < clientAge < 65){

    // creating FIRST div 
    elem = document.createElement("div");
    elem.id = 'distance';
    elem.innerHTML = `The distance: ${distanceKm} km` 
    document.body.insertBefore(elem,document.body.childNodes[8]);

    // creating SECOND div 
    elem = document.createElement("div");
    elem.id = 'age';
    elem.innerHTML = `Your age: ${clientAge} y.o`
    document.body.insertBefore(elem,document.body.childNodes[9]);

    // creating THIRD div 
    elem = document.createElement("div");
    elem.id = 'price'; 
    elem.innerHTML = `Devi pagare il prezzo pieno: € ${normalPrice} `
    document.body.insertBefore(elem,document.body.childNodes[10]);

} else {
    document.writeln("Uhmm error!")
}

