const div = document.querySelector(".general-text");
const text = "oh... here you are.i’ve been looking all over town for part- i mean for you...  ";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)