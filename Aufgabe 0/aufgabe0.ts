document.addEventListener('DOMContentLoaded', function () {
    
    var gruß : string = "Herzlich Willkommen" ;
    var getName : string = prompt ("Bitte geben sie Ihren Namen ein");
    document.getElementById("Gruß").innerHTML = gruß + " " + getName + "!";
    
    });