let MyStyle = {

    NONE: 'none',
    BLOCK:  'block',
    OPACITY: [0.1,1],
    TRANSITION : 'all 0.7s ease',
    FONSIZE : [],
    COLOR : [],
    HIDE:  "hidden",
    HEIGHT:["0%","25%","","",""],
    getOPACITY : function(value){
        
        return value;
    }
}

function openNav(OPEN) {
    document.getElementById(OPEN).style.height = MyStyle.HEIGHT[1];
  }
  
  function closeNav(CLOSE) {
    document.getElementById(CLOSE).style.height = MyStyle.HEIGHT[0];
  }

for( let i = 0; i < MyStyle.OPACITY.length; i++){

        console.log(MyStyle.OPACITY[i]);
    }

let DARK = MyStyle.OPACITY[0]; 
let SHINE = MyStyle.OPACITY[1];

let ClickFunction = (click) =>{

    let myclick = document.getElementById(click);

    switch (myclick.style.display) {

        case MyStyle.BLOCK:

            myclick.style.display = MyStyle.NONE;
            myclick.style.overflow = MyStyle.HIDE;
            
            break;

        default:

            myclick.style.display = MyStyle.BLOCK;
        
            break;    
    }
}

let blockFunction = (block) => {

    let myclick2 = document.getElementById(block);

    if(myclick2){

        myclick2.style.display = MyStyle.BLOCK;
    }
}
let NoneFunction = (none) =>{ 

    let mynone = document.getElementById(none);
    if(mynone){

        mynone.style.display = MyStyle.NONE;
    }
}
let OpacityFunction = (Opacity) => {
    let myopacity = document.getElementById(Opacity);
    if(myopacity){

        myopacity.style.opacity = MyStyle.getOPACITY(DARK);
        myopacity.style.transition =  MyStyle.TRANSITION;
        
    }
    
}
let ShineFunction = (shine) => { 

    let myopacity = document.getElementById(shine);

    if(myopacity){

        myopacity.style.opacity = MyStyle.getOPACITY(SHINE);
    }
}    
 

function filterSelection(c) {

    var x, index;
    x = document.getElementsByClassName("COUMNN");

    if (c == "all") c = "";
        for (index = 0; index < x.length; index++) {

            RemoveClass(x[index], "show");

            if (x[index].className.indexOf(c) > -1) 

                AddClass(x[index], "show");
      }
    }
        
  
  function AddClass(element, name) {

    var index, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");

      for (index = 0; index < arr2.length; index++) {

          if (arr1.indexOf(arr2[index]) == -1) {
              element.className += " " + arr2[index];}
      }
  }
  
  function RemoveClass(element, name) {

    var index, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");

        for (index = 0; index < arr2.length; index++) {
            
            while (arr1.indexOf(arr2[index]) > -1) {
                  arr1.splice(arr1.indexOf(arr2[index]), 1);     
            }
        }
    element.className = arr1.join(" ");
}
  
  
