class Validator {
    constructor(config) {
        this.elementsConfig = config;   // nazivi svih input polja
        this.errors = {};
        
        this.generateErrorObject();
        this.inputListener();
    }

    generateErrorObject() {
        for(let field in this.elementsConfig) {
            this.errors[field] = [];

        }
    }

    inputListener() {
        let inputSelector = this.elementsConfig;

        for(let field in inputSelector) {
            let el = document.querySelector(`input[name="${field}"]`);

            el.addEventListener('input', this.validate.bind(this));
        }
    }

    validate(e) {
        let elFields = this.elementsConfig; // sva polja koja imamo
        let field = e.target;   // uzimamo polje u koje smo nesto upisali
        let fieldName = field.getAttribute('name');
        let fieldValue = field.value;

        this.errors[fieldName] = []; // upisujemo error za svaki fieldName

        if(elFields[fieldName].required) {
            if(fieldValue === '') {
                this.errors[fieldName].push('Polje je prazno.');
            }
        }

        if(elFields[fieldName].email) {
            if(!this.validateEmail(fieldValue)) {
                this.errors[fieldName].push('Neispravna email adresa.');
            }
        }

        if(fieldValue.length < elFields[fieldName].minlength || fieldValue.length > elFields[fieldName].maxlength) {  // ako je uneta vrednost < od minimalnog ili ....
            this.errors[fieldName].push(`Polje mora imati minimalno ${elFields[fieldName].minlength} i maksimalno ${elFields[fieldName].maxlength} karaktera.`);

        }

        if(elFields[fieldName].matching) {
            let matchingElement = document.querySelector(`input[name="${elFields[fieldName].matching}"]`);

            if(fieldValue !== matchingElement.value) {
                this.errors[fieldName].push('Lozinke se ne poklapaju.');
            }
            
            if(this.errors[fieldName].length === 0) {   // za sprecavanje konflikata medju errorima (da ne bismo imali duplikate medju greskama)
                this.errors[fieldName] = [];
                this.errors[elFields[fieldName].matching] = [];
            }

        }

        this.populateErrors(this.errors);
    }

    populateErrors(errors) {
        for(const elem of document.querySelectorAll('ul')) {
            elem.remove();
        }

        for(let key of Object.keys(errors)) {
            let parentElement = document.querySelector(`input[name="${key}"]`).parentElement;
            let errorsElement = document.createElement('ul');
            parentElement.appendChild(errorsElement);

            this.errors[key].forEach(error => {
                let li = document.createElement('li');
                li.innerText = error;

                errorsElement.appendChild(li);
            })
        }
    }

    validateEmail(email) {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        
        return false;
    }
}

