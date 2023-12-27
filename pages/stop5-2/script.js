const div = document.querySelector(".general-text");
const text = "This is it B0B, I installed a code that will repair the ship. The numbers of the code should be things you see in your environment.";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)