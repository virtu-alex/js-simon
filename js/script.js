console.log('OK')

/*Descrizione:

1--
Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.

2--
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().

3--
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




////1.A------ STAMPA IN PAGINA 5 NUMERI CASUALI DIVERSI FRA LORO
////1.B------ QUANDO GENERATI PARTE UN TIMER DI 30000ms (30 SECONDI)
////1.C------ SCADUTO IL TEMPO I NUMERI GENERATI SPARISCONO


////2-------- TRAMITE 5 PROPMT (DIVERSI) CHIEDO ALL'UTENTE DI INSERIRE DEI NUMERI


//3-------- DOPO I PROMPT , DIRO' ALL'UTENTE QUANTI DEI NUMERI INSERITI CORRISPONDONO AI NUMERI GENERATI RANDOMICAMENTE



Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
ATTENZIONE:
prompt() e alert() vengono sempre eseguiti prima del resto del codice nel loro scope, quindi dovete trovare un escamotage per "tenerli a bada" finchè le altre operazioni siano state svolte. Siete autorizzate a "imbrogliare" un po' e chiedere all'utente i numeri un pochettino dopo, l'importante è far sparire i numeri allo scadere dei 30 secondi!*/

const numbers = document.getElementById('display-numbers');
const timer = document.getElementById('timer');





let userGuess;
let blackList = [];
let randomNumber;
let counter = 0;
let maxCount = 30;


function randomGenerator(max) {
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * max + 1);
        if (blackList.includes(randomNumber)) {
            do {
                randomNumber = Math.floor(Math.random() * max + 1);
            } while (blackList.includes(randomNumber));
            blackList.push(randomNumber);
        } else {
            numbers.innerText = blackList
            blackList.push(randomNumber);
        }
    }

}
console.log(blackList)


randomGenerator(20)

const chronometer = setInterval(() => {
    timer.innerText = ++counter;
    if (counter === maxCount) {
        clearInterval(chronometer);
        numbers.classList.add('none');
        timer.classList.add('none');
    }
}, 1000);


setInterval(() => {
    userGuess = prompt('Inserisci il primo numero')
    userGuess = prompt('Inserisci il secondo numero')
    userGuess = prompt('Inserisci il terzo numero')
    userGuess = prompt('Inserisci il quarto numero')
    userGuess = prompt('Inserisci il quinto numero')
}, 32000)

if(userGuess === blackList[i]){
    console.log('hai vinto')
}