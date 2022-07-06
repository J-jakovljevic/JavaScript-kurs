let textTag = document.querySelector('.section1 h1');
let text = textTag.innerText;   // "ovo je animirani text!"

let splittedText = text.split('');  // ne splitujemo ni po cemu, sto znaci da ce rez biti svako slovo pojedinacno

textTag.innerText = '';

for(let i = 0; i < splittedText.length; i++) {
    if(splittedText[i] == " ") {
        splittedText[i] = "&nbsp;";  /* posto se ponasa kao da razmak ne postoji, rucno ga dodajemo */
    }
    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

let spans = textTag.querySelectorAll('span');
let k = 0;
let interval = setInterval(() => {   // ponavlja radnju na svaki sekund
    let singleSpan = spans[k];
    
    singleSpan.className = 'fadeMove';
    k++;

    if(k === spans.length) {
        clearInterval(interval);  /* prekidanje funkcije */
    }
}, 70);   // 1000ms = 1sek

let border = document.querySelector('.border-line');
let animationWidth = 0;

window.onscroll = () => {
    if(this.oldScroll > this.scrollY) {  // skrolujemo ka gore
        animationWidth -= 2;
    } else {                            // skrolujemo ka dole
        animationWidth += 2;
    }
    if(animationWidth >= 100) {
        animationWidth = 100;
    }

    if(animationWidth <= 0) {
        animationWidth = 0;     // jer pri skrolovanju ka gore ode u minus
    }

   border.style.width = animationWidth + '%';
  
   this.oldScroll = this.scrollY;

    imageAnimation();
}

const imageAnimation = () => {
    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;  // uzimamo pravougaonik i racunamo koliko je udaljen od vrha browsera
    let screenPosition = window.innerHeight / 1.3;  // korisnik mora da skroluje do 30% slike kako bi se animacija prikazala
 
    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');
 
     // kada se poklopi vrh browsera sa slikama, tada treba da se pokrene animacija
    if(sectionPosition < screenPosition) {
     leftImage.classList.add('animated'); // ne moze className posto vec imaju klasu
     rightImage.classList.add('animated');
    }
}