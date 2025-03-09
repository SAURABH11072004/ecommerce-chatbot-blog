// Function to animate sections when they come into view
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const images = document.querySelectorAll("figure img");

    // Section animation observer
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // Add a slight delay for staggered effect
                    setTimeout(() => {
                        entry.target.classList.add("animated");
                    }, 200);
                    sectionObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });

    // Image hover animation observer
    const imageObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = "transform 0.3s ease, opacity 0.5s ease";
                    entry.target.classList.add("visible");
                    imageObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    images.forEach((img) => {
        imageObserver.observe(img);
    });
});
