//navigation
const coordinatesMap = {
    "zna-cadix": ["51.2307055354974", "4.414559615920932"],
    "parkbrug": ["51.230584764997616", "4.413111138538661"],
    "mas": ["51.22893720876868", "4.404670093096004"],
    "whisperer": ["51.22824318132135", "4.406100184553811"],
    "havenhuis": ["51.23145696081982", "4.407370113413155"]
}

const stopHtmlMap = {
    "zna-cadix": "../stop1-1/index.html",
    "parkbrug": "../stop2-1/index.html",
    "mas": "../stop3-1/index.html",
    "whisperer": "../stop4-1/index.html",
    "havenhuis": "../stop5-1/index.html"
}

const stops = ["zna-cadix", "parkbrug", "mas", "whisperer", "havenhuis"];

document.getElementById("timer-container").style.display="block";

if(localStorage.getItem("stop") === "4") {
    document.getElementById("timer-container").style.display="block";
    if(localStorage.getItem("timeRemaining") === null) {
        localStorage.setItem("timeRemaining", 600);
    }
}

function drawCoordinates(baseLatitude, baseLongitude, latitude, longitude, color, className) {
    const precisionMultiplier = 1600;
    const offsetMultiplier = 10;
    const parsedBaseLongitude = parseFloat(baseLongitude) * precisionMultiplier;
    const parsedBaseLatitude = parseFloat(baseLatitude) * precisionMultiplier;
    const parsedLongitude = parseFloat(longitude) * precisionMultiplier;
    const parsedLatitude = parseFloat(latitude) * precisionMultiplier;

    const longitudeOffset = ((parsedLongitude - parsedBaseLongitude) * offsetMultiplier) / 2;
    const latitudeOffset = (parsedBaseLatitude - parsedLatitude) * offsetMultiplier * 2;

    const radar = document.querySelector("#radar");
    const width = radar.clientWidth;
    const height = radar.clientHeight;
    const topOffset = height / 2 - 5;
    const leftOffset = width / 2 - 5;

    const element = document.querySelector(`.${className}`);
    element.style.top = `${topOffset + latitudeOffset}px`;
    element.style.left = `${leftOffset + longitudeOffset}px`;
    element.style.backgroundColor = color;
}

const options = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 0
};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
}
function success(position) {
    //current location for watch position
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
/*     const longitude = "4.417180651456513";
    const latitude = "51.22986488128879"; */
    document.querySelector(".dot").style.display = "block";
    document.querySelector(".dot2").style.display = "block";
    document.querySelector(".dot3").style.display = "block";
    document.querySelector(".dot4").style.display = "block";
    document.querySelector(".dot5").style.display = "block";
    document.querySelector(".dot6").style.display = "block";

    drawCoordinates(latitude, longitude, latitude, longitude, "#ffffff", "dot");
    //zna-cadix
    drawCoordinates(latitude, longitude, "51.2307055354974", "4.414559615920932", "green", "dot2");
    //park-brug
    drawCoordinates(latitude, longitude, "51.230584764997616", "4.413111138538661", "orange", "dot3");
    //mas
    drawCoordinates(latitude, longitude, "51.22893720876868", "4.404670093096004", "red", "dot4");
    //whisperer 
    drawCoordinates(latitude, longitude, "51.22824318132135", "4.406100184553811", "yellow", "dot5");
    //havenhuis
    drawCoordinates(latitude, longitude, "51.23145696081982", "4.407370113413155", "blue", "dot6");

    const stopCoordinates = coordinatesMap[stops[localStorage.getItem("stop")]];
    const distance = getDistance(latitude, longitude, stopCoordinates[0], stopCoordinates[1]).distance;
    document.getElementsByClassName("distance-text")[0].innerText = distance.toString() + "m";
    document.getElementsByClassName("location-text")[0].innerText = "Navigate to " + stops[localStorage.getItem("stop")];
    if(distance <= 50) {
        location.assign(stopHtmlMap[stops[localStorage.getItem("stop")]]);
    } 
}
document.querySelector(".dot").style.display = "none";
document.querySelector(".dot2").style.display = "none";
document.querySelector(".dot3").style.display = "none";
document.querySelector(".dot4").style.display = "none";
document.querySelector(".dot5").style.display = "none";
document.querySelector(".dot6").style.display = "none";
navigator.geolocation.watchPosition(success, error, options);



//const previousStop = localStorage.getItem("stop");
//localStorage.setItem("stop", previousStop+1);