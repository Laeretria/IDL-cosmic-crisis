const div = document.querySelector(".general-text");
const text = "you see all those holes in the bridge? who put them there? whatever that’s besides the point. you’ve gotta find what exact hole that picture was taken from.";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)