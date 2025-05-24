// En updateChatBox, en lugar de chatBox.innerHTML = ''; y el bucle:
function appendMessageToChatBox(role, content) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${role}-message`);
    messageDiv.innerHTML = `
        <div>${content}</div>
        <div class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
    `;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Mantener el scroll abajo
}

// En sendMessage, después de state.conversation.push y antes de la respuesta del bot:
// appendMessageToChatBox('user', message); // Para el mensaje del usuario
// Y para el mensaje del bot:
// appendMessageToChatBox('assistant', response); // Para el mensaje del bot

// Tendrías que modificar updateChatBox para que solo se llame al cargar la conversación inicial
// o al cambiar de modo, y usar appendMessageToChatBox para nuevos mensajes.
// Efecto smooth scroll para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambiar navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});