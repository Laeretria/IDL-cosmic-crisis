const div = document.querySelector(".general-text");
const text = "Quickly! You have to get to the spaceship first, otherwise J3FF will leave without you!";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)

const element = document.getElementById("navigate-main");
element.onclick = () => {
    localStorage.setItem("stop", 4);
    location.assign("../main/index.html");
}