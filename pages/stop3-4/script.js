const div = document.querySelector(".general-text");
const text = "By playing this game humans call tetris you can fix this place. Just fill 4 lines and you're in the clear";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)