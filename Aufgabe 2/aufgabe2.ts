document.addEventListener('DOMContentLoaded', function () {
    
    
    let i: number = 0;
    let n: number = 64;
    let x: number = 1;
    let c: string;
    let zeile: number = 0;
    
    
    for (let i: number = 0; i < n; i++) {
        
        if (i % 8 == 0) {
            zeile++; }
        
        if (zeile % 2 == 0) {
       
            if (i % 2 == 0) { 
                c = "#ffffff"; }
            
            if (i % 2 == 1) {
                c = "#000000"; }
         }   
        
         if (zeile % 2 == 1) {
       
            if (i % 2 == 1) { 
                c = "#ffffff"; }
            
            if (i % 2 == 0) {
                c = "#000000"; }
         }
           
        
        
        
        placeDiv(c);
        

    }
    
    
    
    
    
    function placeDiv(_color: string): void {
    let div: HTMLDivElement = document.createElement("div");
    document.body.appendChild(div);

        
    
    let s: CSSStyleDeclaration = div.style;
    
        
    s.backgroundColor = _color;
    div.className += "squares";
}

    
    
    
    
});