//Aufgabe: Aufgabe 2
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 06.04.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.



document.addEventListener('DOMContentLoaded', function () {
    
    
    let i: number = 0;
    let n: number = 64;
    let x: number = 1;
    let c: string;
    let d: string;
    let zeile: number = 0;
    
    
    for (let i: number = 0; i < n; i++) {
        
        if (i % 8 == 0) {
            zeile++; }
        
        if (zeile % 2 == 0) {
       
            if (i % 2 == 0) { 
                c = "#ffffff";
                d = "#000000"; }
            
            else {
                c = "#000000";
                d = "#ffffff"; }
         }   
        
         else {
       
            if (i % 2 == 1) { 
                c = "#ffffff";
                d = "#000000"; }
            
            else {
                c = "#000000";
                d = "#ffffff"; }
        } 
           
        x = x * 2;
        
        
        
        
        placeDiv(c,d);
        
       
        

    }
    
    
    
    
    
    function placeDiv(_color: string, _fontColor: string ): void {
    let div: HTMLDivElement = document.createElement("div");
        
    
    div.textContent = x.toString();
    document.body.appendChild(div);
          
    
    let s: CSSStyleDeclaration = div.style;
    
        
    s.backgroundColor = _color;
    s.color = _fontColor;
   
        
}

    let getDivs: NodeListOf <HTMLElement> = document.getElementsByTagName("div");
    let divClicked:boolean = false;
    
    for (let i = 0; i < 9; i++){
    getDivs[i].addEventListener("click",function () {
    if(divClicked==false){
        getDivs[i].style.borderColor = "rgb(255,0,0)";
        divClicked = true; 
    }  
    else {
        getDivs[i].style.borderColor = "black";
        divClicked = false; 
    }
    }); 
        
    for (let i = 0; i < 8; i++){
        x += Number(getDivs[i].textContent);
        document.getElementById("sumWindow").textContent = "Dezimal: "+ x.toString() + " ; " + "Hexadezimal: " + x.toString(16);
        
    }
    }
    
    
    
    
    
    document.addEventListener("mousemove", function (Event) {
    document.getElementById("sumWindow").style.left = (Event.clientX + 15) + "px";
    document.getElementById("sumWindow").style.top = (Event.clientY + 20) + "px";
});
    
    
});