const div = document.querySelector(".general-text");
const text = "i need to find my spaceship parts and the pilot if i want to escape this planet!";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)