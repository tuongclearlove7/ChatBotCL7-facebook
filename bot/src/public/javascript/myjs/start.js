import framework from "../framework.js"



export default function UIStart(){

    return (
        framework.UIElement("div")
        .setId("start")
        .setStyle({

            width : "100vw",
            height : "100vh",

            margin : "0",

            display : "flex",

            flexFlow : "row",

            overflowY : "hidden",
            overflowX : "hidden",

            transition : "2s",

            position : "fixed",

            top : 0,

            backgroundColor : "rgba(34, 34, 33, 1.0)",

            zIndex : "0"

        })
        .exe(function(){

            window.uistart = this;

            this.showed = false;

        })
        .setInner(

            framework.UIElement("div")
            .setId("start-left")
            .setStyle({
    
                width : "100%",
                height : "100%",

                display : "flex",
    
                flexFlow : "row",
                flexDirection: "row-reverse",

                transition : "1s",

                position : "relative"
    
            })
            .setInner(
                framework.UIElement("div")
                .setId("start-left-logo-container-y")
                .setStyle({
        
                    height : "100%",
        
                    display : "flex",
        
                    flexFlow : "column",
                    flexDirection: "column",

                    justifyContent : "center",

                    transition : "0.5s"
        
                })
                .setInner(

                    framework.UIElement("div")
                    .setId("start-left-logo-container-x")
                    .setStyle({

                        overflowY : "hidden",
                        overflowX : "hidden",

                        transition : "0.5s"
            
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setId("start-left-logo")
                        .setStyle({
                
                            width : "260px",
                            height : "180px",
                
                            backgroundImage : `url("${window.location.origin}/javascript/resources/images/logo1024.png")`,
                            backgroundSize : 'cover',

                            position : "relative",

                            right : "-260px",

                            transition : "0.5s",

                            imageRendering : "crisp-edges",
    
                            cursor: "pointer",
                
                        })
                        .exe(function(){

                            this.addEventListener("click", ()=>{

                                window.location.href = window.location.origin;

                                console.log("ok");

                            });

                        }),
        
                    )
    
                )
            ),

            framework.UIElement("div")
            .setId("start-right")
            .setStyle({
    
                backgroundColor : "rgb(116, 255, 253)",
    
                width : "0%",
                height : "100%",

                display : "flex",
    
                flexFlow : "row",

                overflowY : "hidden",
                overflowX : "hidden",

                transition : "0.5s",

                position : "relative"
    
            })
            .setInner(                
                framework.UIElement("div")
                .setId("start-right-text-container-y")
                .setStyle({

                    height : "100%",
        
                    display : "flex",
        
                    flexFlow : "column",
                    flexDirection: "column",

                    justifyContent : "center",

                    transition : "0.5s"
        
                })
                .setInner(

                    framework.UIElement("div")
                    .setId("start-right-text-container-x")
                    .setStyle({

                        overflowY : "hidden",
                        overflowX : "hidden",

                        transition : "0.5s",
            
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setId("start-right-text")
                        .setClass("noselect")
                        .setStyle({
                
                            width : "400px",
                            height : "110px",

                            position : "relative",

                            left : "-400px",

                            transition : "0.5s",

                            fontSize : "105px",
                            fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            fontWeight : "325",

                            color : "rgb(34, 34, 33)",

                            transform : "translateX(60px) translateY(-20px)"
                
                        })
                        .setInner(

                            "Coder"

                        )
                        .exe(function(){
                            
                            window.uistart.rightText = this;

                        })
        
                    )
    
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
            
            

        })
    );
}