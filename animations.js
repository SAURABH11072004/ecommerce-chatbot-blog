// Sample responses for demo (replace with actual API calls)
const demoResponses = {
    "hello": "Hello! How can I help you today?",
    "help": "I can assist with general inquiries. Try asking about our services!",
    "default": "I'm a demo chatbot. Connect to GPT API for full functionality!"
};

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatWindow = document.getElementById('chatWindow');
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = userInput.value;
    chatWindow.appendChild(userMessage);
    
    // Add typing animation
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message bot typing';
    typingIndicator.textContent = '...';
    chatWindow.appendChild(typingIndicator);
    
    // Simulate API call
    setTimeout(() => {
        chatWindow.removeChild(typingIndicator);
        const botResponse = document.createElement('div');
        botResponse.className = 'message bot';
        botResponse.textContent = getBotResponse(userInput.value.toLowerCase());
        chatWindow.appendChild(botResponse);
    }, 1000);
    
    // Scroll to bottom
    chatWindow.scrollTop = chatWindow.scrollHeight;
    userInput.value = '';
}

function getBotResponse(input) {
    return demoResponses[input] || demoResponses['default'];
}
