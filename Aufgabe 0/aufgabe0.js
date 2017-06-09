document.addEventListener('DOMContentLoaded', function () {
    var gruß = "Herzlich Willkommen";
    var getName = prompt("Bitte geben sie Ihren Namen ein");
    document.getElementById("Gruß").innerHTML = gruß + " " + getName + "!";
});
