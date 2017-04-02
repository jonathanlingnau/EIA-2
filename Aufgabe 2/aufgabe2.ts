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

    
    
    
    
});