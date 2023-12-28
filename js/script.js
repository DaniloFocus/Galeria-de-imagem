function openImage(imagePath) {
    var fullImageContainer = document.getElementById("fullImageContainer");
    var fullImage = document.getElementById("fullImage");

    fullImage.src = imagePath;
    fullImageContainer.style.display = "flex";
}

function closeImage() {
    var fullImageContainer = document.getElementById("fullImageContainer");
    fullImageContainer.style.display = "none";
}