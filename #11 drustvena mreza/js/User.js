class User {
    userID = '';
    username = '';
    email = '';
    password = '';
    api_url = 'https://62c7471f2b03e73a58e2ead5.mockapi.io';

    create() {
        let data = {
            username: this.username,
            email: this.email,
            password: this.password
        }

        data = JSON.stringify(data);    // pretvaramo objekat data u json jer u headers-u navodimo da saljemo json format

        fetch(this.api_url + '/Users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
        .then(response => response.json())
        .then(data => {
            window.location.href = 'hexa.html';
        })
    }
}