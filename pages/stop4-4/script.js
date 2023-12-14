function callback(base64) {
    console.log('the image was captured');
    console.log(base64);
    document.querySelector('.video-container').style.display = "none";
    document.querySelector('.canvas').style.display = "block";
    document.querySelector('h2').textContent = "this is it!"
    setTimeout(function () {
      window.location.href = '../stop4-5/index.html';
    }, 3500);
  }
  

startCamera(false, '#video', '.canvas', '.continue', callback);