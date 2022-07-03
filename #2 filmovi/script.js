let allTotal = 0;

function addToCart(element) { 
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let cartItems = document.querySelector('.cart-items');

        price = parseInt(price.substring(7,9));
        allTotal += price;

        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3> ${name} </h3>
                                    <p> <span> $${price} </span> </p>
                                    <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                                </div>`;

        document.querySelector('.total').innerText = `Ukupno: $${allTotal}`;
        
        element.innerText = 'Dodato';
        element.setAttribute('disabled', 'true');
        element.style.background='#a83240';

}

function removeFromCart(element) {
     let mainEl = element.closest('.cart-single-item');
     let price = mainEl.querySelector('p span').innerText;
     price = parseInt(price.substring(1));
     let name = mainEl.querySelector('h3').innerText;
     let movies = document.querySelectorAll('.single-item');

     allTotal -= price;
     document.querySelector('.total').innerText = `Ukupno: $${allTotal}`;

     mainEl.remove();

     movies.forEach(function (movie) {
        let itemName = movie.querySelector('.si-content h3').innerText;

        if(itemName === name) {
            movie.querySelector('.actions button').removeAttribute('disabled');
            movie.querySelector('.actions button').innerText = 'Gledaj';
            movie.querySelector('.actions button').style.background = '#e7e7e7';
        }
     })

}