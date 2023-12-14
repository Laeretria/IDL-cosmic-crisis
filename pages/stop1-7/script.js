const element = document.getElementById("navigate-main");
element.onclick = () => {
    localStorage.setItem("stop", 1);
    location.assign("../main/index.html");
}