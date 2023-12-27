const div = document.querySelector(".general-text");
const text = `good luck...`;

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)

const div2 = document.querySelector(".general-text-lg");
const text2 = "fool!";

setTimeout(function() {
    textTypingEffect(div2, text2);
}, 1000);