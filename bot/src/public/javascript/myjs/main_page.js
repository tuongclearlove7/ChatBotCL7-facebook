import framework from "../framework.js"

import ShowStartAnimation from "../show_start.js"
import UIStart from "../start.js"

import ShowContentAnimation from "../show_content.js"
import UIContentContainer from "../content_container.js";

import ShowHeaderMenu from "../show_header_menu.js";
import UIHeaderMenu from "../header_menu.js"

import ShowHomeAnimation from "../show_home.js";
import UIHome from "../home.js"



framework.UIElement('body')    
.setStyle({

    margin : "0",

    backgroundColor : "rgb(34, 34, 33)",

    transition : "0.0s"

})
.appendInner(

    UIStart(),

    UIHeaderMenu(),

    UIContentContainer()

)



await ShowStartAnimation().play();

await ShowContentAnimation().play();

await ShowHeaderMenu().play();



$("#content-container")
.setInner(

    UIHome()

);

await ShowHomeAnimation().play();



setInterval(function () {

    $("#start")
    .setStyle({
    
        transition : "0.0s"
    
    })
    
    $("#content-container")
    .setStyle({
    
        transition : "0.0s"
    
    })

}, 1000);