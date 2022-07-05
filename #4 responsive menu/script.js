// responsive menu
const mobileMenu = () => {
    let menu = document.querySelector('.header ul'); // jedan je meni pa ne ide All
    let btn = document.querySelector('.header button');

    if(btn.innerText === 'MENU') {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
}

// menjanje slika u slajderu 
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');  // sve slike
let imgNumber = 0; // prva slika ima index 0

rightBtn.addEventListener('click', () => {
    displayNone(pictures);
    imgNumber++;

    if(imgNumber === pictures.length) {
        imgNumber = 0;
    }
    
    pictures[imgNumber].style.display = 'block';
    
})

leftBtn.addEventListener('click', () => {
    displayNone(pictures);
    imgNumber--;

    if(imgNumber === -1) {  // cilj je da krene od poslednje slike i da smanjuje njihove indexe
        imgNumber = pictures.length - 1;   // ide -1 jer nam treba poslednja slika 
                                    // (imgNumber ce biti 3, a index poslednje slike je 2)
    }

    pictures[imgNumber].style.display = 'block';
    
})

// sakriva sve slike
const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    })
}

const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });

    if(category === 'sve') {   // ovo mora zato sto u html-u ne postoji data-categoryja "sve"
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        });
    }

    portfolioItems.forEach((item) => {                         // da li data-category iz html-a sadrzi category koji smo kliknuli
        if(item.getAttribute('data-category').includes(category)) {  // ide includes jer imamo "hoteli i restorani", pa je potrebno
                 item.style.display = 'block';                       // proveriti da li se npr "hoteli" nalaze u tom stringu
           }
      })

}

const openModal = () => {
    let openModal = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    openModal.style.display = 'block';
    overlay.style.display = 'block';
    
}

const closeModal = () => {
    let openModal = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    openModal.style.display = 'none';
    overlay.style.display = 'none';
}