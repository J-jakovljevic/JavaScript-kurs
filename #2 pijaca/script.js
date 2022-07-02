let allTotal = 0;

function addToCart(element) { // element je dugme
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    if(parseInt(quantity) > 0) {
        price = parseInt(price.substring(1)); // makne nulti element, a prvi ne ukljucuje
        let total = price * parseInt(quantity);
        
        allTotal += total;

        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3> ${name} </h3>
                                    <p> $${price} x ${quantity} = $<span>${total} </span> </p>
                                    <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                                </div>`;

        document.querySelector('.total').innerText = `Total: $${allTotal}`;
        
        element.innerText = 'Dodato';
        element.setAttribute('disabled', 'true');
    } else {
        alert('Odaberite kolicinu!');
    }

}

function removeFromCart(element) {
     let mainEl = element.closest('.cart-single-item');
     let price = mainEl.querySelector('p span').innerText;
     price = parseInt(price);
     let name = mainEl.querySelector('h3').innerText;
     let vegetables = document.querySelectorAll('.single-item');

     allTotal -= price;
     document.querySelector('.total').innerText = `Total: $${allTotal}`;

     mainEl.remove();

     vegetables.forEach(function (vege) {
        let itemName = vege.querySelector('.si-content h3').innerText;

        if(itemName === name) {
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('actions button').innerText = 'Dodaj';
        }
     })

}