// ESERCIZIO 1

{let num1 = 15
let num2 = 23
let num3 = 18
let num4 = 9
let num5 = 11
let arraynumbers = [15,23,18,9,11]
let somma = 0;
arraynumbers.forEach(number => {somma += number;});

let media = somma / arraynumbers.length;

console.log("la somma tra i numeri equivale a " + somma + " e la media equivale a " + media)};


// ESERCIZIO 2

let anno_corrente = 2024;
let anno_di_nascita = 1991;

let eta = anno_corrente - anno_di_nascita;
let roadto100 = 100 - eta;

console.log ("hai " + eta + " anni e ti mancano " + roadto100 + " anni per compierne 100");

// ESERCIZIO 3

{let firstNumber = parseInt(prompt("scegli un numero"));
let secondNumber = parseInt(prompt("scegli un altro numero"));

let somma = firstNumber + secondNumber;
let sottrazione = firstNumber - secondNumber;       
let moltiplicazione = firstNumber * secondNumber;
let divisione = firstNumber/secondNumber;
let potenza = firstNumber**secondNumber;

console.log("Con i numeri da te scelti, i risultati delle varie operazioni sono: somma "+ somma + ", sottrazione " + sottrazione + ", moltiplicazione " + moltiplicazione + ", divisione " + divisione + ", potenza " + potenza )};


// ESERCIZIO 4

let array_1 = [ ['un', 'per', 'incatenarli.'],['Anello', 'trovarli,'],['ghermirli', 'e'],['gondor', 'mark'],];

let array_2 = [[['trovarli,']],['tu,', 'sciocchi'],['tu,', 'sciocchi', ['padron', 'Sauron']],['nel', ['fuggite', 'gandalf']],[['domarli,', 'passare'], 'buio']];

let frasecompleta = `${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_2[4][0][0]} ${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_2[0][0]}${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_1[2][0]} ${array_1[2][1]} ${array_2[3][0]} ${array_2[4][1]} ${array_1[0][2]}`;

console.log (frasecompleta);


// best esercizio ever, sono un tolkeniano sfegatato!