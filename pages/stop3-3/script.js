const div = document.querySelector(".general-text");
const text = "this is not good, the mayor of this funky town is gonna be pissed when he finds out his special building was hit with our zero gravity power. YOU BETTER REBUILD IT FAST!";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)