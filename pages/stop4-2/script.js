const div = document.querySelector(".general-text");
const text = "J3ff is always F@'#ing yelling. really works on the nerves. maybe he’s somewhere screaming like his usual annoying self?";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)