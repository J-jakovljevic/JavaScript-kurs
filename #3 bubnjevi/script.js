let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top');

const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
} 

const animateHiHatClosed = () => {
    hiHatTop.style.top = '171px';
}

window.addEventListener("keydown", (event) => {
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`);

    if(!keyElement) {
        return;
    }

    let audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime = 0;   // bez ovoga se zvuk cuje svaki drugi put
    audio.play();

    switch(code) {
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
        case 73:
            animateHiHatClosed();
            break;
    }

    keyElement.classList.add('playing');
});

const removeCrashRideTransition = e => {  
    if(e.propertyName !== 'transform') return;  // prekida se izvrsavanje ako se desi nesto sto nije transform

    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';  // pomocu targeta uzimamo element koji je pokrenuo dogadjaj
}

const removeHiHatTopTransition = e => {
    if(e.propertyName !== 'top') return; 

    e.target.style.top = '166px';
}

const removeKeyTransition = e => {   // drugaciji zapis za removeKeyTransition = (e) => kada imamo jedan argument
    if(e.propertyName !== 'transform') return; 

    e.target.classList.remove('playing');
}

let drumKeys = document.querySelectorAll('.key');

drumKeys.forEach(key => {
    key.addEventListener("transitioned", removeKeyTransition);
})

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition);