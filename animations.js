// Demo Chatbot Logic
const demoResponses = {
    "hi": "Hello! How can I assist you today?",
    "help": "I can answer questions about GPT chatbots!",
    "github": "Check our GitHub repo: https://github.com/yourusername/chatbot-blog",
    "default": "I'm a demo chatbot. Connect to GPT API for full functionality!"
};

function sendMessage() {
    const inputField = document.getElementById('userInput');
    const chatWindow = document.getElementById('chatWindow');
    const message = inputField.value.trim();

    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    
    // Add typing animation
    showTypingIndicator();

    // Simulate API call
    setTimeout(() => {
        removeTypingIndicator();
        const response = getResponse(message.toLowerCase());
        addMessage(response, 'bot');
    }, 1000);

    inputField.value = '';
}

function addMessage(text, sender) {
    const chatWindow = document.getElementById('chatWindow');
    const messageDiv = document.createElement('div');
    messageDiv.className = `${sender}-message message`;
    messageDiv.textContent = text;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function showTypingIndicator() {
    const chatWindow = document.getElementById('chatWindow');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message message typing-indicator';
    typingDiv.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    chatWindow.appendChild(typingDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicators = document.getElementsByClassName('typing-indicator');
    while(typingIndicators.length > 0) {
        typingIndicators[0].remove();
    }
}

function getResponse(input) {
    return demoResponses[input] || demoResponses.default;
}

// Optional: Add real GPT API integration
/*
async function getRealResponse(input) {
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            message: input
        })
    });
    const data = await response.json();
    return data.reply;
}
*/
