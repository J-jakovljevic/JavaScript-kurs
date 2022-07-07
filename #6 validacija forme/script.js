let inputs = document.querySelectorAll('input');
let errors = {
    "ime_prezime": [],      //niz je zato sto ima vise errora
    "korisnicko_ime": [],
    "email": [],
    "lozinka": [],
    "ponovi_lozinku": []
};

inputs.forEach((element) => {
    element.addEventListener('change', e => {
        let currentInput = e.target;   // pomocu targeta uzimamo element koji je pokrenuo dogadjaj
        let inputValue = currentInput.value;
        let inputName = currentInput.getAttribute('name');  // treba nam da bismo znali za koje polje ispisuje gresku

        if(inputValue.length > 4) {
            errors[inputName] = [];  // praznimo greske kako ne bi ispisivao one stare

            switch(inputName) {
                case 'ime_prezime': 
                    let validation = inputValue.trim();  // onemogucujemo da validacija prodje ako korisnik unese "razmak neka_rec razmak" jer je onda length = 3
                    validation = validation.split(" "); // validiramo vrednost iz input-a
                   
                    if(validation.length < 2) {
                        errors[inputName].push('Potrebno je napisati ime i prezime.');
                    }
                    break;
                
                case 'email':
                    if(!validateEmail(inputValue)) {
                        errors[inputName].push('Neispravna email adresa.');
                    } 
                    break;

                case 'ponovi_lozinku': 
                    let lozinka = document.querySelector('input[name = "lozinka"]').value;
                    if(inputValue !== lozinka) {
                        errors[inputName].push('Lozinke se ne poklapaju.');
                    }

                    break;
            }
        } else {
            errors[inputName] = ['Polje ne moze imati manje od 5 karaktera.'];

        }

        populateErrors();

    })
})

const populateErrors = () => {
    for(let elem of document.querySelectorAll('ul')) {
        elem.remove();      // bez ovoga za svako input polje ispisuje vise puta error
    }

    for(let key of Object.keys(errors)) {
        let input = document.querySelector(`input[name = "${key}"]`);
        let parentElement = input.parentElement;  // div je parent element svakog inputa
        let errorsElement = document.createElement('ul'); // ovde cemo ispisivati greske
        parentElement.appendChild(errorsElement);

        errors[key].forEach(error =>  {   // prolazimo kroz svaki pojedinacni input
            let li = document.createElement('li');
            li.innerText = error;
            errorsElement.appendChild(li);
        })
        
    }
}

const validateEmail = email => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    
    return false;
}
