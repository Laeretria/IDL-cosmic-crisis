function drawCoordinates(longitude, latitude, color, className) {
    const topOffset = 70;
    const multiplier = 2;
    const parsedLongitude = parseFloat(longitude) * multiplier;
    const parsedLatitude = topOffset + parseFloat(latitude) * multiplier;


    const element = document.querySelector(`.${className}`);
    element.style.top = `${parsedLatitude}px`;
    element.style.left = `${parsedLongitude}px`;
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
let locationHasBeenLoaded = false;
function success(position) {
    if (locationHasBeenLoaded == false) {
        document.querySelector(".dot").style.display = "block";
        document.querySelector(".dot2").style.display = "block";
/*         document.querySelector(".dot3").style.display = "block";
        document.querySelector(".dot4").style.display = "block";
        document.querySelector(".dot5").style.display = "block";
        document.querySelector(".dot6").style.display = "block";
        //zna-stop */
        drawCoordinates("51.23001101968917", "4.417763301461334", "#6200ff", "dot2");
/*         //park-brug
        drawCoordinates("51.23067160739562", "4.414336896383585", "#6200ff", "dot3");
        //mas
        drawCoordinates("51.230587286583706", "4.413112959178332", "#6200ff", "dot4");
        //whisperer 
        drawCoordinates("51.2287694781101", "4.4047231686325174", "#6200ff", "dot5");
        //havenhuis
        drawCoordinates("51.22824052866616", "4.406153302731023", "#6200ff", "dot6"); */
        locationHasBeenLoaded = true;
    }

    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;

    console.log(longitude);
    console.log(latitude);

    drawCoordinates(longitude, latitude, "#ffffff", "dot");

}
document.querySelector(".dot").style.display = "none";
document.querySelector(".dot2").style.display = "none";
/* document.querySelector(".dot3").style.display = "none";
document.querySelector(".dot4").style.display = "none";
document.querySelector(".dot5").style.display = "none";
document.querySelector(".dot6").style.display = "none"; */
navigator.geolocation.watchPosition(success, error, options);


