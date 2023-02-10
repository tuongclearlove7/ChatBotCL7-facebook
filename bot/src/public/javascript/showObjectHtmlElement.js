import {getVisitors,getIPAddress,music} from './app3.js';
import {start_app,static_App} from './app2.js';


function start(){

    
    renderShowInputBlock(static_App.get(0).block);
    renderShowPage();
    backToTop();
    setInterval(myTimer, 1000);
    getValueAPI();
    getVisitors("visits");
    getIPAddress();
    music();
    start_app(true);
    
}

start();   


function getValueAPI(){

    fetch(static_App.get(0).list_knowledges)
    
    .then(function(response){

        return response.json();

    }).then((...api) => {  

        for(var i = 0; i < api.length; i++) {

            console.log(api[i])
        }
    });
}


function scrollClick(click){

    let obj1 = {

            top: click,
            left: 0,
            behavior: 'smooth'
        }

    
    window.scrollTo(obj1); 

}

function backToTop(){

    static_App.get(0).getIDFooter.innerHTML = static_App.get(0).top;


    let comebackTop = document.querySelector('.back_to_top');

    comebackTop.onclick = function(){

        
        scrollClick(1000000);
        

     
    }
}


function renderItem(itEm, ...args){

    for(i in args){

        document.querySelector(itEm).onclick = function(){

            setTimeout(args[i], 100);
           
        
        }
    }
}



function renderShowPage(){

    var page2 = document.querySelector("#page_id");
    var listItem = ['.item1', '.item2', '.item3', '.item4','.item5'];

    page2.innerHTML  = static_App.get(0).item;

    document.querySelector(listItem[0]).onclick = function(){

        changePage1(static_App.get(0).pagE1);
        scrollClick(0);
       
    }

    document.querySelector(listItem[1]).onclick = function(){

        changePage2(static_App.get(0).pagE2);
        scrollClick(0);
   
    }

    document.querySelector(listItem[2]).onclick = function(){

        changePage3(static_App.get(0).pagE3);
        scrollClick(0);
        console.log("page3");
   
    }

    document.querySelector(listItem[3]).onclick = function(){

        changePage4(static_App.get(0).pagE4);
        scrollClick(0);
   
    }

    document.querySelector(listItem[4]).onclick = function(){

        changePage5(static_App.get(0).pagE5),scrollClick(0);

    }
}

function myTimer() {

    var date = new Date();
    
    document.querySelector(".timer").innerHTML = date.toLocaleTimeString();
}

function changePage1(page1){


    static_App.get(0).inputBlock.innerHTML = page1;

    document.querySelector('#newCreate').onclick = function(){

        handleCreateForm();
    }

    document.querySelector('.welcomeToWeb').onclick = function(){

        alert("Anthor : Clearlove7\nHello world ^^\nChúc bạn ngủ ngon <3");
    }
}

function changePage2(page2){

    return static_App.get(0).inputBlock.innerHTML = page2;
}

function changePage3(page3){


    return static_App.get(0).inputBlock.innerHTML = page3;
}

function changePage4(page4){


    return static_App.get(0).inputBlock.innerHTML = page4;
}


function changePage5(page5){


    return static_App.get(0).inputBlock.innerHTML = page5;
}

function renderShowInputBlock(block){


    static_App.get(0).inputBlock.innerHTML = block;


    document.querySelector('.welcomeToWeb').onclick = function(){

        alert("Anthor : Clearlove7\nHello world ^^\nChúc bạn ngủ ngon <3");
    }
    
    document.querySelector('#newCreate').onclick = function(){

        handleCreateForm();
    }
}





