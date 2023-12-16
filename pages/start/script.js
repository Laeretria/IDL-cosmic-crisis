localStorage.clear();
const element = document.getElementById("navigate-main");
element.onclick = () => {
    localStorage.setItem("stop", 0);
    location.assign("../../main/index.html");
}