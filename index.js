const url = "http://localhost:3000/margaritas";

function showOneRita(rita) {
    const ritaList = document.getElementById('margaritas');
    const image = document.createElement('img');
    image.src = rita.image;
    image.alt = rita.name;
    ritaList.append(image);
    listenForImageClick(image, rita);
    watchForMouseOver(image, rita);
}
function watchForMouseOver(image, rita) {
    image.addEventListener('mouseover', ()=> {
        const hover = document.getElementById('hover');
        hover.textContent = rita.name;
        
    })
}
function submit() {
    const form = document.getElementById('comment-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const comment = document.getElementById('comment-display');
        comment.textContent = ;
    })
}
function listenForImageClick(image, rita) {
    image.addEventListener('click', () => {
        const image = document.getElementById('placeholderImage');
        image.src = rita.image;
        image.alt = rita.name;
        const name = document.getElementById('name');
        name.textContent = rita. name;
        const rating = document.getElementById('rating-display');
        rating.textContent = rita.rating;
        const comment = document.getElementById('comment-display');
        comment.textContent = rita.comment;
        const ingredients = document.getElementById('ingredients');
        ingredients.textContent = rita.ingredients;
        
    });
}
function displayRitas(ritas) {
    ritas.forEach(showOneRita);
}
function getMargaritas() {
    fetch(url)
    .then(response => response.json())
    .then(displayRitas)
}

document.addEventListener('DOMContentLoaded', (e) => {
    const image = document.getElementById('placeholderImage');
    image.src = './assets/margs/beach-bar-pic.jpg';
})
getMargaritas();
submit();