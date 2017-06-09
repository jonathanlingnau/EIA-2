//Aufgabe: Aufgabe 9
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 30.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.


namespace Form {
    window.addEventListener("load", init);

    let eissorten: string[] = ["Vanille", "Schokolade", "Erdbeere", "Himbeere", "Zitrone", "Banane", "Mocca", "Cookies", "Mango", "Haselnuss", "Straciatella", "Nougat", "Kirsche", "Joghurt", "Pistazie"];
    let toppings: string[] = ["Sahne", "Schokostreusel", "Bunte Zuckerstreusel", "Erdbeersoße", "Schokosoße"];
    let cups: string[] = ["Waffel", "Becher"];
    
    let iceInput: HTMLInputElement[] = [];
    let toppingsInput: HTMLInputElement[] = [];
    let cupsInput: HTMLInputElement[] = [];         
    let Eissorten: HTMLElement;
    let Toppings: HTMLElement;
    let Behaelter: HTMLElement;  
    let Ausgabe: HTMLElement;
    let Button: HTMLElement;

    function init(_event: Event): void {
        Eissorten = document.getElementById("sorten");
        Toppings = document.getElementById("toppings");
        Behaelter = document.getElementById("cups");
        Ausgabe = document.getElementById("ausgabe");


        createInputs();
        
        Eissorten.addEventListener("change", change);
        Toppings.addEventListener("change", change);
        Behaelter.addEventListener("change", change);
    }

    function createInputs(): void {
       
        for (let i: number = 0; i < eissorten.length; i++) {
            createCounter(eissorten[i]);
        }
        for (let i: number = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (let i: number = 0; i < cups.length; i++) {
            createRadio(cups[i]);
        }
}

    function createCounter(_eis: string): void {
      
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        

        label.innerText = _eis;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";


        Eissorten.appendChild(label);
        iceInput.push(input);
    }
    
     function createCheckbox(_topping: string): void {
       
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        

        label.innerText = _topping;
        label.appendChild(input);
        input.type = "checkbox";
     
        
        Toppings.appendChild(label);
        toppingsInput.push(input);
    }

    function createRadio(_behaelter: string): void {
        
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
     

        label.innerText = _behaelter;
        label.appendChild(input);
        input.type = "radio";
        input.required = true;
       

        Behaelter.appendChild(label);
        cupsInput.push(input);
} 
    
    function change(): void {
        let summe: number = 0;
        for (let i: number = 0; i < iceInput.length; i++) {
            summe += parseInt(iceInput[i].value);
        }
        for (let i: number = 0; i < toppingsInput.length; i++) {
            if(toppingsInput[i].checked)
            {summe += 0.8;}
        }
        
        
        show(summe);

}
    
        function show(_summe: number): void {

        document.getElementById("selectedIce").innerText = "";
        document.getElementById("selectedToppings").innerText = "";
        document.getElementById("selectedFruits").innerText = "";
        document.getElementById("SelectedCup").innerText = "";
        
        for (let i: number = 0; i < iceInput.length; i++) {
            if (parseInt(iceInput[i].value) > 0) {
               document.getElementById("selectedIce").innerText += eissorten[i] + " " + ": " + (parseInt(iceInput[i].value) * 1) + "\n";
            }
}
          
        for (let i: number = 0; i < toppingsInput.length; i++) {
            if(toppingsInput[i].checked)
            {
                document.getElementById("selectedToppings").innerText += toppings[i] + " 0.80 Euro" + "\n";
            }
        }
                
        for (let i: number = 0; i < cupsInput.length; i++) {
            if(cupsInput[i].checked)
            {
                document.getElementById("SelectedCup").innerText += cups[i]  + "\n";
            }
        }    
        
        //Anzeigen der Gesamtsumme
        
        document.getElementById("Summe").innerText = _summe.toString() + " Euro";   
} 
    


    
}

