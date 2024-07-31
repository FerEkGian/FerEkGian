// index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.autoReply = functions.database.ref('/messages/{messageId}')
    .onCreate((snapshot, context) => {
        const messageData = snapshot.val();
        const response = generateResponse(messageData.message);
        return admin.database().ref('responses').push({
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
