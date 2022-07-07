/* stari nacin
let xhhtp = new XMLHttpRequest();
xhhtp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        console.log(xhhtp.responseText);
    }
}
    xhhtp.open('GET', 'https://62c7471f2b03e73a58e2ead5.mockapi.io/Users', true);
    xhhtp.send();
*/

document.querySelector('#fetchBtn').addEventListener('click', e => {
    e.preventDefault();

    let id = document.querySelector('#userID').value;

    console.log(id);

    let r = fetch('https://62c7471f2b03e73a58e2ead5.mockapi.io/Users/' + id).then(response => {  // fetch vraca obecanje
        return response.json();
    }).then(data => {
        console.log(data);

        let podaci = document.querySelector('#podaci');
        
        podaci.innerHTML = `<p><b>${data['email']}</b></p>
                           <p>${data['username']}</p>
                           <p><i>${data['password']}</i></p>`;
    }).catch(error => {
        alert('Prekinuta veza.');
    }); 
});

