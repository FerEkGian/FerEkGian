// index.js

import { database } from 'firebase-functions';
import { initializeApp, database as _database } from 'firebase-admin';
initializeApp();

export const autoReply = database.ref('/messages/{messageId}')
    .onCreate((snapshot, context) => {
        const messageData = snapshot.val();
        const response = generateResponse(messageData.message);
        return _database().ref('responses').push({
            response: response,
            timestamp: Date.now()
        });
    });

function generateResponse(message) {
    // Lógica simple para generar respuesta, puedes hacerla más compleja según tus necesidades
    if (message.includes('hola')) {
        return '¡Hola! ¿Cómo puedo ayudarte hoy?';
    } else if (message.includes('adios')) {
        return '¡Adiós! ¡Que tengas un buen día!';
    } else {
        return 'Lo siento, no entiendo tu mensaje.';
    }
}
