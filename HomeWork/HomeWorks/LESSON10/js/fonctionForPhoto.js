function setRandomPhoto(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    var imageContainer = document.getElementById("image-container");
    const imgElement = document.createElement('img');
    imgElement.setAttribute("src", "image/" + randomImage);
    imgElement.setAttribute("alt", "ФОТО НЕ ЗНАЙДЕНО");
    imgElement.classList.add('random-image');
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
  }