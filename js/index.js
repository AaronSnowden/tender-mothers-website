function loadImages(numberOfImages) {
  const gallery = document.getElementById("gallery");
  const fullscreen = document.getElementById("fullscreen");

  // Simulated image loading (replace with actual image paths)
  const imagePaths = Array.from(
    { length: numberOfImages },
    (_, i) => `assets/Arua City Kids Run/image0${i + 1}.jpg`
  );

  imagePaths.forEach((path) => {
    const img = document.createElement("img");
    img.src = path;
    img.alt = "Arua City Kids Run";
    img.className = "img-fluid";

    const div = document.createElement("div");
    div.className = "gallery-item";
    div.style.backgroundImage = `url(${img.src})`;
    // div.appendChild(img);

    div.addEventListener("click", () => openFullscreen(path));

    gallery.appendChild(div);
  });

  function openFullscreen(imagePath) {
    fullscreen.innerHTML = `<img src="${imagePath}" alt="Fullscreen Image">`;
    fullscreen.style.display = "flex";
  }
}

function closeFullscreen() {
  fullscreen.style.display = "none";
}
