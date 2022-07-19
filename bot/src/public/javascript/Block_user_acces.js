export function myfunc(){
document.addEventListener("contextmenu",function(e){
            e.preventDefault();
        }, false);
document.addEventListener("keydown",function(e){
            if(e.ctrlKey||e.keyCode==123){
                e.stopPropagation();
                e.preventDefault();
        }
    });
}
myfunc();