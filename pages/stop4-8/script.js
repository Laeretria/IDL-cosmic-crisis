const div = document.querySelector(".general-text");
const text = "oh really? hahahhahahahahah";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

textTypingEffect(div, text)

const div2 = document.querySelector(".general-text-lg");
const text2 = "you fool!";

setTimeout(function() {
    textTypingEffect(div2, text2);
}, 1000);

// JavaScript to toggle the jiggle effect
function toggleJiggle() {
    text2.classList.toggle('jiggle-text');
    }
  
    // Toggle the jiggle effect after a delay (e.g., 3 seconds)
    setTimeout(toggleJiggle, 3000);