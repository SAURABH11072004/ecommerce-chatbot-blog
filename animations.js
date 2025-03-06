document.addEventListener('DOMContentLoaded', () => {
    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.content-section').forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });

    // Chatbot interaction
    const chatbot = document.getElementById('animatedBot');
    chatbot.addEventListener('mouseover', () => {
        chatbot.style.transform = 'scale(1.1)';
    });
    
    chatbot.addEventListener('mouseout', () => {
        chatbot.style.transform = 'scale(1)';
    });
});
