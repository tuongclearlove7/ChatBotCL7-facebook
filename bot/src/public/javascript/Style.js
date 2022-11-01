let MyStyle = {
    NONE : 'none',
    BLOCK:'block'
}

let NoneFunction = (click) =>{
    let myclick = document.getElementById(click);
   
        
        myclick.style.display = MyStyle.NONE;
    
}
blockFunction =(click) =>{  
    let myclick = document.getElementById(click);
   
        
    myclick.style.display = MyStyle.BLOCK;
}


let MyFunction = (click) =>{
    let myclick = document.getElementById(click);
    if(myclick.style.display === MyStyle.BLOCK) {
        
        myclick.style.display = MyStyle.NONE;
    }
    else{
        myclick.style.display = MyStyle.BLOCK;
    }
}























