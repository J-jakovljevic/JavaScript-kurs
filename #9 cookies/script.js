document.querySelector('#setCooke').addEventListener('click', e => {
    e.preventDefault();

    document.cookie = "name = joksi";
    document.cookie = "test = test1";

    const date = new Date();

    let today = date.getTime();
    let expires =  2 * 24 * 60 * 60 * 1000; // za 2 dana istice cookie, pa ih pisemo u milisekundama => 2 dana * 24h * 60min * 60sek * 1000milisek

    date.setTime(today + expires);

    let new_date = date.toUTCString();

    document.cookie = `login = 1; expires = ${new_date}`;

    console.log(cookie);

})