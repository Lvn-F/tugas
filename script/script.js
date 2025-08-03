const nav = document.querySelector('.navButton');
const navback = document.querySelector('.navBack');
const navCards = document.querySelectorAll('.nav');
nav.addEventListener('click', () => {
    navCards.forEach(navcard => {
        navcard.classList.add('show');
        navcard.classList.remove('hidden');
    });
});
navback.addEventListener('click', () => {
    navCards.forEach(navcard => {
        navcard.classList.remove('show');
        navcard.classList.add('hidden');
    });
});

const profile = document.getElementById('sejarah');
profile.addEventListener('click', ()=> {
    window.location.href = "profile.html";
})
const news = document.getElementById('budaya');
news.addEventListener('click', ()=> {
    window.location.href = "news.html";
})
const video = document.getElementById('kuliner');
video.addEventListener('click', ()=> {
    window.location.href = "video.html";
})
const photo = document.getElementById('wisata');
photo.addEventListener('click', ()=> {
    window.location.href = "photo.html";
})  