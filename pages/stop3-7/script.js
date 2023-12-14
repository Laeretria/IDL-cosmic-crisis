const element = document.getElementById("navigate-main");
element.onclick = () => {
    localStorage.setItem("stop", 3);
    location.assign("../main/index.html");
}