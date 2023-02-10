import {static_App} from './app2.js';

export function getVisitors(key){

    if(!localStorage.getItem(key)){

        localStorage.setItem(key,1);
    }

    static_App.get(0).visits = +localStorage.getItem(key);

    const count = ++static_App.get(0).visits;

    localStorage.setItem(key, count);

    var count_visits = localStorage.getItem(key)

    console.log([{visits : count_visits}]);

}

export function music(){

    static_App.get(0).audio.volume = 0.05;
    static_App.get(0).audio.loop = true;

    document.onclick = function() {

        //static_App.get(0).audio.play();
    }
}


export function getIPAddress(){

    fetch('http://ip-api.com/json/?fields=61439')

    .then((res) => res.json())
    
    .then((...res) => {

        console.log(res);
        
    });
}

