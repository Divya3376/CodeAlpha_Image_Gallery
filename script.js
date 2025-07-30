let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  images = Array.from(document.querySelectorAll('.gallery img'));
  currentIndex = images.indexOf(imgElement);
  document.getElementById("lightbox-img").src = imgElement.src;
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
  currentIndex += step;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll(".gallery .image");
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
