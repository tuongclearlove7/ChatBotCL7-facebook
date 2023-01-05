
var knowlegdeBlock = document.getElementById("#list_api");

var cardBlock = document.getElementById("#layout_after_id");

function showBlock(block){


    if (knowlegdeBlock.style.display === block) {


        cardBlock.style.display = "none";
    
    }
}

knowlegdeBlock.onload = showBlock;