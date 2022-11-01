import framework from "../../../framework/framework.js"

import ShowHomeAnimation from "../../home/animation/show_home.js";
import UIHome from "../../home/ui/home.js"

import ShowSkillsAndKnownledgeAnimation from "../../skills_and_knownledge/animation/show_skills_and_knownledge.js";
import UISkillsAndKnownledge from "../../skills_and_knownledge/ui/skills_and_knownledge.js";

import ShowProjectsAnimation from "../../projects/animation/show_projects.js";
import UIProjects from "../../projects/ui/projects.js";

import ShowExperiencesAnimation from "../../experiences/animation/show_experiences.js";
import UIExperiences from "../../experiences/ui/experiences.js";



function UIPageDesktopBtn(name, width){

    return (
        framework.UIElement("div")
        .setClass("page-btn noselect")
        .setStyle({

            width : `${width}px`,
            minWidth : `${width}px`,
            height : "100%",

            paddingLeft : "40px",
            paddingTop : "23px",
            paddingRight : "40px",

            fontSize : "20px",
            fontFamily : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontWeight : "240",
            textAlign : "center",

            transition : "0s",

            justifyContent : "space-around",

        })
        .setInner(

            name

        )
        .exe(function(){

            this.addEventListener("mousedown", function(){

                if(window.currPage != null){

                    window.currPage.setStyle({

                        fontWeight : "240",
        
                    });
    
                }

                window.currPage = this;

            });

        })
        .on("mouseenter", function(){

            this.setStyle({

                fontWeight : "600",

            });

        })
        .on("mouseleave", function(){

            if(window.currPage != this){
            
                this.setStyle({

                    fontWeight : "240",
    
                });

            }
            
        })
        .exe(function(){

            this.defaultWidth = width;

        })
    );
}



function UIPageMobileBtn(name){

    return (
        framework.UIElement("div")
        .setClass("page-btn noselect")
        .setStyle({

            width : `100%`,
            height : "40px",

            fontSize : "20px",
            fontFamily : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontWeight : "240",
            textAlign : "center",

            transition : "0s",
            
            display : "flex",

            flexFlow : "row",

            justifyContent : "space-around",

            color : "rgb(140, 140, 139)",

        })
        .setInner(

            name

        )
        .on("mouseenter", function(){

            this.setStyle({

                fontWeight : "400",

                color : "rgb(240, 240, 239)",

            });

        })
        .on("mouseleave", function(){

            this.setStyle({

                fontWeight : "240",

                color : "rgb(140, 140, 139)",

            });
            
        })
        .exe(function(){

            

        })
    );
}



function UIVR(){

    return (
        framework.UIElement("div")
        .setClass("vr noselect")
        .setStyle({

            width : "1px",
            height : "40px",

            marginTop : "19px",

            backgroundColor : "rgb(34,34,33)"

        })
    );
}



function UIHR(){

    return (
        framework.UIElement("div")
        .setClass("vr noselect")
        .setStyle({

            width : "80%",
            height : "1px",

            marginBottom : "10px",

            marginLeft : "10%",

            backgroundColor : "rgb(37,37,36)"

        })
    );
}



export default function UIHeaderMenu(){

    return (
        framework.UIElement("div")
        .setId("header-menu")
        .setClass("noscrollbar")
        .setStyle({

            height : "75px",

            margin : "0",

            display : "flex",

            flexFlow : "row",
            flexDirection : "row-reverse",

            transition : "0.75s",

            position : "fixed",

            top : "-75px",

            right : "0",

            zIndex : "2",

            color : "rgb(34,34,33)",

            backgroundColor : "rgba(116, 255, 253, 0)",

            zIndex : "3",

            pointerEvents : "none",

        })
        .exe(function(){

            this.showed = false;

        })
        .setInner(

            framework.UIElement("div")
            .setId("header-menu-desktop")
            .setStyle({
    
                height : "75px",
    
                display : "flex",
    
                flexFlow : "row",
                flexDirection : "row-reverse",

                visibility : "hidden",

                position : "relative",

                pointerEvents: "auto",
    
            })
            .setInner(

                UIPageDesktopBtn("Experiences", 125)
                .setClass("page-btn")
                .setStyle({

                    cursor: "pointer",

                })
                .on('click', function(){
    
                    $("#content-container")
                    .setInner(
    
                        UIExperiences()
    
                    );
    
                    ShowExperiencesAnimation().play();
    
                }),
    
                UIVR(),
    
                UIPageDesktopBtn("Projects", 100)
                .setClass("page-btn")
                .setStyle({

                    cursor: "pointer",

                })
                .on('click', function(){
    
                    $("#content-container")
                    .setInner(
    
                        UIProjects()
    
                    );
    
                    ShowProjectsAnimation().play();
    
                }),
    
                UIVR(),
    
                UIPageDesktopBtn("Skills And Knowledge", 220)
                .setClass("page-btn")
                .setStyle({

                    cursor: "pointer",

                })
                .on('click', function(){
    
                    $("#content-container")
                    .setInner(
    
                        UISkillsAndKnownledge()
    
                    );
    
                    ShowSkillsAndKnownledgeAnimation().play();
    
                }),
    
                UIVR(),
    
                UIPageDesktopBtn("Home", 100)
                .setClass("page-btn")
                .setStyle({

                    cursor: "pointer",

                })
                .on('click', function(){
    
                    $("#content-container")
                    .setInner(
    
                        UIHome()
    
                    );
    
                    ShowHomeAnimation().play();
    
                }),

            ),

            

            framework.UIElement("div")
            .setId("header-menu-mobile")
            .setStyle({
    
                height : "75px",
    
                width : "75px",
    
                display : "flex",
    
                flexFlow : "row",
                flexDirection : "row-reverse",

                visibility : "hidden",

                position : "absolute",

                zIndex : "11",

                pointerEvents: "auto",
    
            })
            .exe(function(){

                this.open = async function(){

                    $("#header-menu-mobile-btn")
                    .setStyle({

                        transform : "rotate(180deg)",

                    });

                    $("#header-menu-mobile-btn > div")
                    .setStyle({

                        transform : "translateY(-24px)",

                        borderTop : "22px solid rgba(116, 255, 253, 1)",

                    });

                    $("#header-menu-mobile-container")
                    .setStyle({

                        visibility : "visible",

                    });

                    $("#header-menu-mobile-container")
                    .setStyle({

                        opacity : "1",

                    });

                    await (new Promise(resolve=>{return setTimeout(resolve, 250)}));

                    $("#header-menu-mobile-btn > div")
                    .setStyle({

                        transform : "translateY(0px)",
                        
                        borderTop : "22px solid rgba(116, 255, 253, 1)",

                    });

                    await (new Promise(resolve=>{return setTimeout(resolve, 250)}));

                    this.isOpening = true;

                }

                this.close = async function(){

                    $("#header-menu-mobile-btn")
                    .setStyle({

                        transform : "rotate(0deg)"

                    });

                    $("#header-menu-mobile-btn > div")
                    .setStyle({

                        transform : "translateY(-24px)",
                        
                        borderTop : "22px solid rgba(64, 64, 64, 1)",

                    });

                    $("#header-menu-mobile-container")
                    .setStyle({

                        opacity : "0",

                    });

                    await (new Promise(resolve=>{return setTimeout(resolve, 250)}));

                    $("#header-menu-mobile-btn > div")
                    .setStyle({

                        transform : "translateY(-0px)",
                        
                        borderTop : "22px solid rgba(64, 64, 64, 1)",

                    });

                    await (new Promise(resolve=>{return setTimeout(resolve, 250)}));

                    $("#header-menu-mobile-container")
                    .setStyle({

                        visibility : "hidden",

                    });

                    this.isOpening = false;

                }

                this.inverse = function(){

                    if(!this.isOpening){

                        this.open();

                    }
                    else{

                        this.close();

                    }

                }

            })
            .setInner(

                framework.UIElement("div")
                .setId("header-menu-mobile-container")
                .setStyle({
    
                    position : "fixed",

                    width : "100vw",
                    height : "100vh",

                    transition : "0.5s",

                    visibility : "hidden",

                    zIndex : "10",

                    top : "0",
                    right : "0",

                    backgroundColor : "rgba(24, 24, 23, 0.99)",

                    opacity : "0",

                    display : "flex",

                    flexFlow : "column",

                    justifyContent : "space-evenly",
        
                })
                .setInner(

                    framework.UIElement("div")
                    .setStyle({

                        display : "flex",

                        flexFlow : "column",

                        justifyContent : "space-evenly",
            
                    })
                    .setInner(

                        UIPageMobileBtn("Home")
                        .setStyle({

                            cursor: "pointer",

                        })
                        .on('click', function(){
            
                            $("#content-container")
                            .setInner(
            
                                UIHome()
            
                            );
            
                            ShowHomeAnimation().play();
                            
                            $("#header-menu-mobile").close();
            
                        }),

                        UIHR(),

                        UIPageMobileBtn("Skills And Knownledge")
                        .setStyle({

                            cursor: "pointer",

                        })
                        .on('click', function(){
            
                            $("#content-container")
                            .setInner(
            
                                UISkillsAndKnownledge()
            
                            );
            
                            ShowSkillsAndKnownledgeAnimation().play();
                            
                            $("#header-menu-mobile").close();
            
                        }),

                        UIHR(),

                        UIPageMobileBtn("Projects")
                        .setStyle({

                            cursor: "pointer",

                        })
                        .on('click', function(){
            
                            $("#content-container")
                            .setInner(
            
                                UIProjects()
            
                            );
            
                            ShowProjectsAnimation().play();
                            
                            $("#header-menu-mobile").close();
            
                        }),

                        UIHR(),

                        UIPageMobileBtn("Experiences")
                        .setStyle({

                            cursor: "pointer",

                        })
                        .on('click', function(){
            
                            $("#content-container")
                            .setInner(
            
                                UIExperiences()
            
                            );
            
                            ShowExperiencesAnimation().play();
                            
                            $("#header-menu-mobile").close();
            
                        }),

                    ),

                ),

                framework.UIElement("div")
                .setId("header-menu-mobile-btn")
                .setStyle({
    
                    position : "absolute",
    
                    right : "23px",
                    top : "23px",

                    width : "30px",
                    height : "30px",

                    borderRadius : "15px",

                    transition : "0.5s",

                    zIndex : "11",

                    cursor : "pointer",
        
                })
                .setInner(
    
                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
    
                        right : "0px",
                        top : "5px",
    
                        borderRight : "15px solid rgba(0,0,0,0)",
                        borderLeft : "15px solid rgba(0,0,0,0)",
                        borderTop : "22px solid rgba(64, 64, 64, 1)",

                        transition : "0.5s",

                        zIndex : "14",
            
                    })
                    .setInner(
        
                        
        
                    )
                    .on("mouseover", function(){

                        this
                        .setStyle({
        
                            right : "-2px",
                            top : "4px",
        
                            borderRightWidth : "17px",
                            borderLeftWidth : "17px",
                            borderTopWidth : "25px",
                
                        })

                    })
                    .on("mousedown", function(){

                        $("#header-menu-mobile").inverse();

                    })
                    .on("mouseout", function(){

                        this
                        .setStyle({
        
                            right : "0px",
                            top : "5px",
        
                            borderRightWidth : "15px",
                            borderLeftWidth : "15px",
                            borderTopWidth : "22px",
                
                        })
                        
                    })
    
                )

            )

        )
        .on("mouseover", function(){
            
            $("#start-right")
            .setStyle({

                transform : "translateX(30px)",
    
            })
            $("#start-left")
            .setStyle({

                transform : "translateX(15px)",
    
            })

        })
        .on("mouseout", function(){
            
            $("#start-right")
            .setStyle({

                transform : "translateX(0)",
    
            })
            $("#start-left")
            .setStyle({

                transform : "translateX(0)",
    
            })
            
        })
        .exe(function(){

            var headerMenu = this;

            const applyResponsiveStyle = function(){

                //check is mobile
                if(true){//window.innerWidth <= 1070){   
                    
                    headerMenu
                    .setStyle({

                        transition : "0.75s",

                        top : "0px",
            
                    });

                    $("#header-menu-desktop")
                    .setStyle({

                        visibility : "hidden"

                    });

                    $("#header-menu-mobile")
                    .setStyle({

                        visibility : "visible"

                    });

                }
                else{

                    $("#header-menu-mobile").close();
                    
                    headerMenu
                    .setStyle({

                        transition : "0.75s",

                        top : "0px",
            
                    });

                    $("#header-menu-desktop")
                    .setStyle({

                        visibility : "visible"

                    });

                    $("#header-menu-mobile")
                    .setStyle({

                        visibility : "hidden"

                    });

                }

            }

            headerMenu.applyResponsiveStyle = applyResponsiveStyle;

            window.addEventListener("resize", ()=>{

                applyResponsiveStyle();

            });

        })
    )

}