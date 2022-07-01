// kreiranje "close" dugmeta i apendovanje za svaki item iz liste
var myNodelist = document.querySelectorAll("li");
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7"); // oznaka za iksic
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// hajduje item iz liste prilikom klika na close dugme
var elements = document.getElementsByClassName("close");
for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function() {
        this.parentElement.style.display = "none"; // bez parentElement-a bi prilikom klika nestalo samo x dugme
    }
}

// dodavanje checked simbola prilikom klika na item iz liste
var list = document.querySelector('ul');
list.addEventListener('click', function(event) { // svakom elementu iz liste prilikom klika dodaje dogadjaj (ovu funkciju)
    // posto imamo eventListener (slusa se dogadjaj prilikom klika), automatski
    // nam je target dostupan i pomocu njega uzimamo element koji je pokrenuo dogadjaj
    if(event.target.tagName === 'LI') {  // tagName govori koji element je pokrenuo click dogadjaj
        event.target.classList.toggle('checked'); //classList vraca naziv CSS klase
                                                // dok toggle omogucuje hide i show checked oznake za selektovani item
    }
}, false);

// kreiranje novog elementa prilikom klika na add dugme
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue); // ono sto bude uneto, ispisace u listu
    li.appendChild(t);

    if(inputValue === '') {
        alert("Morate uneti nesto!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < elements.length; i++ ) { //elements iz 12. linije
        elements[i].onclick = function() {
            this.parentElement.style.display = "none";
       }
    }

}