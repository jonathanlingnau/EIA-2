//Aufgabe: Aufgabe 9
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 30.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Form;
(function (Form) {
    window.addEventListener("load", init);
    var eissorten = ["Vanille", "Schokolade", "Erdbeere", "Himbeere", "Zitrone", "Banane", "Mocca", "Cookies", "Mango", "Haselnuss", "Straciatella", "Nougat", "Kirsche", "Joghurt", "Pistazie"];
    var toppings = ["Sahne", "Schokostreusel", "Bunte Zuckerstreusel", "Erdbeersoße", "Schokosoße"];
    var cups = ["Waffel", "Becher"];
    var iceInput = [];
    var toppingsInput = [];
    var cupsInput = [];
    var Eissorten;
    var Toppings;
    var Behaelter;
    var Ausgabe;
    var Button;
    function init(_event) {
        Eissorten = document.getElementById("sorten");
        Toppings = document.getElementById("toppings");
        Behaelter = document.getElementById("cups");
        Ausgabe = document.getElementById("ausgabe");
        createInputs();
        Eissorten.addEventListener("change", change);
        Toppings.addEventListener("change", change);
        Behaelter.addEventListener("change", change);
    }
    function createInputs() {
        for (var i = 0; i < eissorten.length; i++) {
            createCounter(eissorten[i]);
        }
        for (var i = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (var i = 0; i < cups.length; i++) {
            createRadio(cups[i]);
        }
    }
    function createCounter(_eis) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerText = _eis;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";
        Eissorten.appendChild(label);
        iceInput.push(input);
    }
    function createCheckbox(_topping) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerText = _topping;
        label.appendChild(input);
        input.type = "checkbox";
        Toppings.appendChild(label);
        toppingsInput.push(input);
    }
    function createRadio(_behaelter) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerText = _behaelter;
        label.appendChild(input);
        input.type = "radio";
        input.required = true;
        Behaelter.appendChild(label);
        cupsInput.push(input);
    }
    function change() {
        var summe = 0;
        for (var i = 0; i < iceInput.length; i++) {
            summe += parseInt(iceInput[i].value);
        }
        for (var i = 0; i < toppingsInput.length; i++) {
            if (toppingsInput[i].checked) {
                summe += 0.8;
            }
        }
        show(summe);
    }
    function show(_summe) {
        document.getElementById("selectedIce").innerText = "";
        document.getElementById("selectedToppings").innerText = "";
        document.getElementById("selectedFruits").innerText = "";
        document.getElementById("SelectedCup").innerText = "";
        for (var i = 0; i < iceInput.length; i++) {
            if (parseInt(iceInput[i].value) > 0) {
                document.getElementById("selectedIce").innerText += eissorten[i] + " " + ": " + (parseInt(iceInput[i].value) * 1) + "\n";
            }
        }
        for (var i = 0; i < toppingsInput.length; i++) {
            if (toppingsInput[i].checked) {
                document.getElementById("selectedToppings").innerText += toppings[i] + " 0.80 Euro" + "\n";
            }
        }
        for (var i = 0; i < cupsInput.length; i++) {
            if (cupsInput[i].checked) {
                document.getElementById("SelectedCup").innerText += cups[i] + "\n";
            }
        }
        //Anzeigen der Gesamtsumme
        document.getElementById("Summe").innerText = _summe.toString() + " Euro";
    }
})(Form || (Form = {}));
