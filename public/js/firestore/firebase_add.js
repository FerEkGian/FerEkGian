const db = firebase.database();

// Enviar mensaje
function sendMessage() {
    const inputBox = document.getElementById('inputBox');
    const message = inputBox.value;
    db.ref('messages').push({
        message: message,
        timestamp: Date.now()
    });
    inputBox.value = '';
}

// Recibir mensaje
db.ref('messages').on('child_added', function (snapshot) {
    const chatbox = document.getElementById('chatbox');
    const msg = snapshot.val().message;
    const msgElement = document.createElement('div');
    msgElement.textContent = msg;
    chatbox.appendChild(msgElement);
});

db.ref('responses').on('child_added', function(snapshot) {
    const chatbox = document.getElementById('chatbox');
    const response = snapshot.val().response;   
    const responseElement = document.createElement('div');
    responseElement.textContent = 'Bot: ' + response;
    chatbox.appendChild(responseElement);
});
