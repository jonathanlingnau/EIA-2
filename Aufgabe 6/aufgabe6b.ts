namespace StudiVZ {
    interface StudentData {
        matrikel: number;
        name: string;
        firstname: string;
        age: number;
        sex: boolean;
        comment: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        
        let inputArray:string[] = _input.split(",");
        
        let s: StudentData = {
            matrikel: parseInt(inputArray[0]),
            name: (inputArray[1]),
            firstname: (inputArray[2]),
            age: parseInt(inputArray[3]),
            sex: parseInt(inputArray[4]) == 0,
            comment: (inputArray[5])
        };
        
        let sex: string;
        if (parseInt(inputArray[4]) == 0) {
        sex = "weiblich";    
        }
        else {
        sex = "männlich";    
        }
        
        if(inputArray.length <= 5) {
        return "Die Eingabe ist nicht vollständig.";    
        }
        
        if(isNaN(parseInt(inputArray[0]))){
        return "Bitte geben Sie eine gültige Martikelnummer ein.";    
        }
        
        if(isNaN(parseInt(inputArray[4]))){
        return "Bitte geben Sie für weiblich die Zahl 0 und für männlich die Zahl 1 an.";    
        }
        
        if(isNaN(parseInt(inputArray[3]))){
        return "Bitte geben Sie ein gültiges Alter an.";    
        }
        
        students.push(s);
        
        return "Student " + "/n" + "Name: " + s.name + "/nVorname: " + s.firstname + "/nMatrikelnummer: " + s.matrikel + "/nAlter: " + s.age + "Jahre" + "/nGeschlecht: " + sex + "/nKommentar: " + s.comment +  "/nwurde erfolgreich gespeichert";
    }
    function queryData(_matrikel: number): string {
        
        for (let i: number = 0; i < students.length; i++) {
        if (students[i].matrikel == _matrikel){
        let sex: string;
            if (students[i].sex == false){
                sex = "männlich";
                }
            else {
                sex = "weiblich";
                }
            return "Folgende Daten wurden gefunden: " + "/n" + "Matrikelnummer: " + students[i].matrikel + "/n" + "Name: " + students[i].name + "/nVorname: " + students[i].firstname + "/nAlter: " + students[i].age + "Jahre" + "/nGeschlecht: " + sex + "/nKommentar: " + students[i].comment;
            } 
            else {return "Kein Eintrag vorhanden."}
        }
        
        
    }
}

