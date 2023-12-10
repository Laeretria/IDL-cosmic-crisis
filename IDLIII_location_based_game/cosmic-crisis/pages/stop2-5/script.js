const element = document.getElementById("navigate-main");
element.onclick = () => {
    localStorage.setItem("stop", 2);
    location.assign("../main/index.html");
}