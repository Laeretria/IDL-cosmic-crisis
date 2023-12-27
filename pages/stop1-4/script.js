const div = document.querySelector(".general-text");
const text = "to collect this one you gotta play this game the humans call: simon says. i got no idea who simon is and why we gotta listen to him but yeah...good luck";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)