document.addEventListener('DOMContentLoaded', function () {
    
    
    let i: number = 0;
    let n: number = 64;
    let x: number = 1;
    let c: string;
    let d: string;
    let zeile: number = 0;
    
    let divSelected : boolean[];
    
    let sum: number =0;
    
    
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
        
        
        
        
        placeDiv(c, d, i, x);
        
       
        

    } 
    
    
    
    
    
    function placeDiv(_color: string, _fontColor: string , _id : number, value: number): void {
        divSelected.push(false);
        let div: HTMLDivElement = document.createElement("div");
        
    
        div.textContent = value.toString();
        document.body.appendChild(div);
              
        
        let s: CSSStyleDeclaration = div.style;
        
            
        s.backgroundColor = _color;
        s.color = _fontColor;
   
//        div.addEventListener("click", function () : void {
//            if (divSelected[_id]){
//                sum-=value;
//                divSelected[_id]= false;
//                div.style.borderColor = "black";
//            }
//            
//            else {
//                sum+=value;
//                divSelected[_id]=true;
//                div.style.borderColor = "rgb(255,0,0)";
//            }
//            document.getElementById("sumWindow").innerText = sum.toString();
//            
//            }); 
    }
    
    
       
        
        
     

    
    
    
//    document.addEventListener("mousemove", function (Event) {
//        document.getElementById("sumWindow").style.left = (Event.clientX + 10) + "px";
//        document.getElementById("sumWindow").style.top = (Event.clientY + 10) + "px";
//    });
//    
    
    
    
    
    

    
    
    
    
});