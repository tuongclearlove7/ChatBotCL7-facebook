import framework from "../../framework/framework.js"

import ShowStartAnimation from "../common/animation/show_start.js"
import UIStart from "../common/ui/start.js"

import ShowContentAnimation from "../common/animation/show_content.js"
import UIContentContainer from "../common/ui/content_container.js";

import ShowHeaderMenu from "../common/animation/show_header_menu.js";
import UIHeaderMenu from "../common/ui/header_menu.js"

import ShowHomeAnimation from "../home/animation/show_home.js";
import UIHome from "../home/ui/home.js"



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