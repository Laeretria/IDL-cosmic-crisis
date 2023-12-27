const div = document.querySelector(".general-text");
const text = "that’s him! j3ff! we found him!";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)