const element = document.getElementById("navigate-main");
element.onclick = () => {
    localStorage.setItem("stop", 4);
    location.assign("../main/index.html");
}