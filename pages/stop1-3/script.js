const div = document.querySelector(".general-text");
const text = "hey! hey! you can’t just take the parts, you gotta work for ‘em.";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)