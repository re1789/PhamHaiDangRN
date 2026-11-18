const images = ["images/slide1.png", "images/slide2.png", "images/slide3.png"];
let currentIndex = 0;
const bannerImg = document.getElementById("banner-img");

function changeBanner() {
    currentIndex = (currentIndex + 1) % images.length;
    if (bannerImg) {
        bannerImg.src = images[currentIndex];
    }
}

setInterval(changeBanner, 3000);