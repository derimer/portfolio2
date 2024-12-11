// script.js

let ticketNumber = 1;
let printInterval = 8000; // 8 secondes
let nextPrintTime = printInterval / 1000; // Convertir en secondes

function printTicket() {
    console.log(`Ticket #${ticketNumber} imprimé`);
    assignTicketToGuichet(ticketNumber);
    ticketNumber++;
    resetPrintTimer();
}

function resetPrintTimer() {
    nextPrintTime = printInterval / 1000; // Réinitialiser le temps d'impression
    document.getElementById("print-time").textContent = `Prochain ticket imprimé dans ${nextPrintTime} secondes`;
}

setInterval(() => {
    printTicket();
}, printInterval);

document.getElementById("print-button").addEventListener("click", printTicket);

setInterval(() => {
    nextPrintTime--;
    document.getElementById("print-time").textContent = `Prochain ticket imprimé dans ${nextPrintTime} secondes`;
}, 1000);

let guichets = [
    { ticket: null, timeRemaining: 0, elementId: 'guichet-1' },
    { ticket: null, timeRemaining: 0, elementId: 'guichet-2' },
    { ticket: null, timeRemaining: 0, elementId: 'guichet-3' }
];

function assignTicketToGuichet(ticketNumber) {
    for (let i = 0; i < guichets.length; i++) {
        if (guichets[i].ticket === null) { // Guichet libre
            let timeAtGuichet = Math.floor(Math.random() * (45 - 3 + 1)) + 3; // Temps aléatoire entre 3 et 45 secondes
            guichets[i].ticket = ticketNumber;
            guichets[i].timeRemaining = timeAtGuichet;
            document.getElementById(`${guichets[i].elementId}-ticket`).textContent = `Ticket #${ticketNumber}`;
            document.getElementById(`${guichets[i].elementId}-time`).textContent = `Temps restant : ${timeAtGuichet} sec`;
            break;
        }
    }
}

function updateGuichets() {
    guichets.forEach((guichet, index) => {
        if (guichet.ticket !== null) {
            guichet.timeRemaining--;
            document.getElementById(`${guichet.elementId}-time`).textContent = `Temps restant : ${guichet.timeRemaining} sec`;
            if (guichet.timeRemaining <= 0) {
                alert(`Guichet ${index + 1} ticket disponible.`);
                document.getElementById(`${guichet.elementId}-ticket`).textContent = "Aucun ticket";
                document.getElementById(`${guichet.elementId}-time`).textContent = "Temps restant : -- sec";
                guichet.ticket = null; // Libérer le guichet
                guichet.timeRemaining = 0;
            }
        }
    });
}
function resetGuichet(index) {
    guichets[index].ticket = null; // Libérer le guichet
    guichets[index].timeRemaining = 0;
    document.getElementById(`${guichets[index].elementId}-ticket`).textContent = "Aucun ticket";
    document.getElementById(`${guichets[index].elementId}-time`).textContent = "Temps restant : -- sec";

}
function recupererTicket(index) {
    if (index >= 0 && index < guichets.length) {  // Vérifie que l'index est dans les limites du tableau
        alert(`Ticket récupéré au guichet ${index + 1}`);
        resetGuichet(index);  // Réinitialiser le guichet
    } else {
        console.error("Index de guichet invalide:", index);
    }
}
setInterval(updateGuichets, 1000);
