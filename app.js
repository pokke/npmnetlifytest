// Importera paketen
const paket1pokke = require('paket1pokke');
const paket2pokke = require('paket2pokke');

window.addEventListener('DOMContentLoaded', (event) => {
    // Lägg till en händelsehanterare för din knapp
    const testButton = document.getElementById('test-button');
    testButton.addEventListener('click', () => {
        // Använd dina paket här när knappen klickas
        paket1pokke();
        paket2pokke();
    });
});
