var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let inputArray = _input.split(",");
        let s = {
            matrikel: parseInt(inputArray[0]),
            name: (inputArray[1]),
            firstname: (inputArray[2]),
            age: parseInt(inputArray[3]),
            sex: parseInt(inputArray[4]) == 0,
            comment: (inputArray[5])
        };
        let sex;
        if (parseInt(inputArray[4]) == 0) {
            sex = "weiblich";
        }
        else {
            sex = "männlich";
        }
        if (inputArray.length <= 5) {
            return "Die Eingabe ist nicht vollständig.";
        }
        if (isNaN(parseInt(inputArray[0]))) {
            return "Bitte geben Sie eine gültige Martikelnummer ein.";
        }
        if (isNaN(parseInt(inputArray[4]))) {
            return "Bitte geben Sie für weiblich die Zahl 0 und für männlich die Zahl 1 an.";
        }
        if (isNaN(parseInt(inputArray[3]))) {
            return "Bitte geben Sie ein gültiges Alter an.";
        }
        students.push(s);
        return "Student " + "\n" + "\n" + "Name: " + s.name + "\nVorname: " + s.firstname + "\nMatrikelnummer: " + s.matrikel + "\nAlter: " + s.age + " Jahre" + "\nGeschlecht: " + sex + "\nKommentar: " + s.comment + "\n" + "\nwurde erfolgreich gespeichert";
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                let sex;
                if (students[i].sex == false) {
                    sex = "männlich";
                }
                else {
                    sex = "weiblich";
                }
                return "Folgende Daten wurden gefunden: " + "\n" + "\n" + "Matrikelnummer: " + students[i].matrikel + "\n" + "Name: " + students[i].name + "\nVorname: " + students[i].firstname + "\nAlter: " + students[i].age + "Jahre" + "\nGeschlecht: " + sex + "\nKommentar: " + students[i].comment;
            }
            else {
                return "Kein Eintrag vorhanden.";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe6b.js.map