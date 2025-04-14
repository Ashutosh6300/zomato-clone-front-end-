// Typing animation for the main text
document.addEventListener("DOMContentLoaded", () => {
    const text = "Discover the best food and drink in Dehradun";
    const paragraph = document.querySelector("main p");
    paragraph.textContent = "";

    let index = 0;
    function type() {
        if (index < text.length) {
            paragraph.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    type();
});

// Input box focus effects
const searchBox = document.querySelector("main input");

searchBox.addEventListener("focus", () => {
    searchBox.style.boxShadow = "0 0 15px #e23744";
});

searchBox.addEventListener("blur", () => {
    searchBox.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
});
