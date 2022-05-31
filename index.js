const url = "http://localhost:3000/margaritas";
getMargaritas();

function showOneRita(rita) {
    const ritaList = document.getElementById('margaritas');
    const image = document.createElement('img');
    image.src = rita.image;
    image.alt = rita.name;
    ritaList.append(image);
    //createEventListener(image, rita);
}
function displayRitas(ritas) {
    ritas.forEach(showOneRita);
}
function getMargaritas() {
    fetch(url)
    .then(response => response.json())
    .then(displayRitas)
}