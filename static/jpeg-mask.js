// Massive thanks to https://github.com/rphsoftware for the solution

var jpeg_img = document.querySelector(".profile-wrapper img");
if (!jpeg_img.currentSrc || (!jpeg_img.currentSrc.endsWith("webp") && !jpeg_img.currentSrc.endsWith("avif"))) {
  jpeg_img.classList.add("jpeg");
}
