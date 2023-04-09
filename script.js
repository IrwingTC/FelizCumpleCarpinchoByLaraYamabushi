const mangaImages = ["IMG/001.png","IMG/002.png","IMG/003.png","IMG/004.png","IMG/005.png","IMG/006.png",
"IMG/007.png","IMG/008.png","IMG/009.png","IMG/010.png","IMG/011.png","IMG/012.png","IMG/013.png","IMG/014.png"];

let currentImage = 0;
const mangaImage = document.getElementById("manga-image");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

previousButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

function showPreviousImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = mangaImages.length - 1;
  }
  mangaImage.src = mangaImages[currentImage];
  scrollToTop();
}

function showNextImage() {
  currentImage++;
  if (currentImage > mangaImages.length - 1) {
    currentImage = 0;
  }
  mangaImage.src = mangaImages[currentImage];
  scrollToTop();
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
