import framework from "../../../framework/framework.js"

//javascript/resources/images/

function UIVR(){

    return (
        framework.UIElement("div")
        .setStyle({

            width : "calc(100% - 1vh)",
            height : "1vh",
            // height : "2px",

            // marginTop : "45px",
            // marginBottom : "45px",

            marginLeft : "2vh",

            //backgroundColor : "rgba(155, 155, 155, 0.2)",

        })
    );
}



export default function UIHome(){

    return (
        framework.UIElement("div")
        .setClass("custom-scroll-bar")
        .setId("home")
        .setStyle({

            position : "relative",

            width : "100%",

            display : "block",

            opacity : "0",

            transition : "1s",

        })
        .setInner(

            framework.UIElement("div")
            .setClass("noscrollbar")
            .setStyle({

                position : "relative",
    
                width : "100%",

                marginLeft : "15px",
    
            })
            .setInner(



                UIVR(),


    
                framework.UIElement("div")
                .setStyle({
    
                    position : "relative",
        
                    width : "calc(100% - 4px)",
                    height : "45vh",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgba(41, 41, 41, 1)",

                    transition : "0.5s",
    
                    boxShadow : "0px 0px 4px 4px rgba(0,0,0,0.1)",

                    overflowX : "hidden",
                    overflowY : "hidden",
                    borderRadius : "3vh",

                    border : "2px solid rgba(24,24,24,0.3)",
                    
                })
                .setInner(
        
                    framework.UIElement("div")
                    .setClass("noselect")
                    .setStyle({

                        transition : "0.5s",
        
                        position : "relative",
            
                        height : "100%",
    
                        display : "flex",
    
                        flexFlow : "column",
                        
                        justifyContent : "center",

                        fontSize : "calc(2vw  + 3vh)",
                        fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontWeight : "325",

                        color : "rgb(255, 255, 255)",
                        textAlign : "center"
            
                    })
                    .setInner(
            
                        "Hi! I'm NCoder ^^",
            
                    )
        
                )
                .on("mouseover", function(){
                    
                    $("#home > div > div > div")
                    .setStyle({

                        color : "rgb(255, 255, 255)",
            
                    })

                    this
                    .setStyle({
                        
                        backgroundColor : "rgba(25, 25, 25, 1)",
            
                    })

                })
                .on("mouseout", function(){
                    
                    $("#home > div > div > div")
                    .setStyle({

                        color : "rgb(255, 255, 255)",
            
                    })

                    this
                    .setStyle({
                        
                        backgroundColor : "rgba(41, 41, 41, 1)",
            
                    })

                }),



                UIVR(),

                
    
                framework.UIElement("div")
                .setId("home-a-bit-about-me")
                .setStyle({
    
                    position : "relative",
        
                    width : "calc(100% - 4px)",
                    height : "45vh",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor: "rgb(116, 255, 253)",
    
                    boxShadow : "0px 0px 4px 4px rgba(0,0,0,0.1)",

                    overflowX : "hidden",
                    overflowY : "hidden",
                    borderRadius : "3vh",

                    border : "2px solid rgba(24,24,24,0.3)",

                    transition : "0.3s",
        
                })
                .setInner(
                        


                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        maxWidth : "500px",            
                        width : "70%",
                        height : "100%",
            
                        zIndex : "5",

                        pointerEvents: "none",

                        display : "flex",

                        flexFlow : "row",

                        justifyContent : "center",
                        
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setStyle({
    
                            display : "flex",
    
                            flexFlow : "column",
    
                            justifyContent : "center",
                            
                        })
                        .setInner(
    
                            framework.UIElement("div")
                            .setStyle({
                
                                whiteSpace : "pre-wrap",
            
                                maxWidth : "500px",

                                fontSize : "2.3vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "400",

                                color : "rgb(40, 40, 39)",

                                lineBreak: "auto",
                                wordBreak: "break-word",

                                display : "flex",

                                flexFlow : "row",
                                
                            })
                            .setInner(

`I'm a game, game engine programmer, currently learning game engine development. `,

                            ),
    
                        ),

                    ),


        
                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        width : "calc(100% - 34px)",
                        height : "100%",

                        paddingLeft : "17px",
                        paddingRight : "17px",
    
                        display : "flex",
    
                        flexFlow : "row",
                        
                        justifyContent : "space-around",
                        
                        visibility : "visible",

                        overflowX : "hidden",
                        overflowY : "hidden",
                        borderRadius : "3vh",
            
                    })
                    .setInner(
                        

            
                    )
        
                )                   
                .on("mouseover", function(){

                    this.setStyle({

                        backgroundColor: "rgb(100, 255, 200)",

                    });
                    
                })               
                .on("mouseout", function(){

                    this.setStyle({

                        backgroundColor: "rgb(116, 255, 253)",

                    });
                    
                }),



                UIVR(),
                
                
    
                framework.UIElement("div")
                .setStyle({
    
                    position : "relative",
        
                    width : "calc(100% - 4px)",
                    height : "50vh",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgb(38, 38, 38)",
    
                    boxShadow : "0px 0px 4px 4px rgba(0,0,0,0.1)",

                    overflowX : "hidden",
                    overflowY : "hidden",
                    borderRadius : "3vh",

                    border : "2px solid rgba(24,24,24,0.3)",

                    transition : "0.3s",
        
                })
                .setInner(

                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        maxWidth : "500px",            
                        width : "70%",
                        height : "35%",
            
                        zIndex : "5",

                        pointerEvents: "none",

                        display : "flex",

                        flexFlow : "row",

                        justifyContent : "center",

                        transition : "0.4s",
                        
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setStyle({
    
                            display : "flex",
    
                            flexFlow : "column",
    
                            justifyContent : "center",
                            
                        })
                        .setInner(
    
                            framework.UIElement("div")
                            .setStyle({
                
                                whiteSpace : "pre-wrap",
            
                                maxWidth : "500px",

                                fontSize : "2vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "200",

                                color : "rgba(240, 240, 239, 0.5)",

                                lineBreak: "auto",
                                wordBreak: "break-word",

                                display : "flex",

                                flexFlow : "row",
                                
                            })
                            .setInner(

`I'm mostly programming in low level`,

                            ),
    
                        ),

                    ),


        
                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        width : "calc(100% - 34px)",
                        height : "calc(65% - 40px)",

                        bottom : "0",

                        paddingTop : "20px",
                        paddingBottom : "20px",

                        paddingLeft : "17px",
                        paddingRight : "17px",
    
                        display : "flex",
    
                        flexFlow : "row",
                        flexWrap : "wrap",
                        
                        justifyContent : "space-around",
                        
                        visibility : "visible",

                        backgroundColor : "#1F1F1F",

                        zIndex : "6",
            
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setStyle({
    
                            zIndex : "6",
    
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "center",

                            fontSize : "2vh",
                            fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            fontWeight : "300",

                            color : "rgba(240, 240, 240, 0.8)",

                            minWidth : "200px",

                            textAlign : "center",
                
                        })
                        .setInner(
    
                            "C++ 17"
                
                        ),

                        framework.UIElement("div")
                        .setStyle({
    
                            zIndex : "6",
    
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "center",

                            fontSize : "2vh",
                            fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            fontWeight : "300",

                            color : "rgba(240, 240, 240, 0.8)",

                            minWidth : "200px",

                            textAlign : "center",
                
                        })
                        .setInner(
    
                            "Direct3D 11"
                
                        ),

                        framework.UIElement("div")
                        .setStyle({
    
                            zIndex : "6",
    
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "center",

                            fontSize : "2vh",
                            fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            fontWeight : "300",

                            color : "rgba(240, 240, 240, 0.8)",

                            minWidth : "200px",

                            textAlign : "center",
                
                        })
                        .setInner(
    
                            "Windows API"
                
                        ),
            
                    )
                    
                )                                  
                .on("mouseover", function(){

                    this.setStyle({

                        backgroundColor : "rgb(48, 48, 48)",

                    });
                    
                })               
                .on("mouseout", function(){

                    this.setStyle({

                        backgroundColor : "rgb(38, 38, 38)",

                    });
                    
                }),



                UIVR(),
                
                
    
                framework.UIElement("div")
                .setStyle({
    
                    position : "relative",
        
                    width : "calc(100% - 4px)",
                    height : "50vh",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgb(38, 38, 38)",
    
                    boxShadow : "0px 0px 4px 4px rgba(0,0,0,0.1)",

                    overflowX : "hidden",
                    overflowY : "hidden",
                    borderRadius : "3vh",

                    border : "2px solid rgba(24,24,24,0.3)",

                    transition : "0.3s",
        
                })
                .setInner(

                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        maxWidth : "500px",            
                        width : "70%",
                        height : "35%",
            
                        zIndex : "5",

                        pointerEvents: "none",

                        display : "flex",

                        flexFlow : "row",

                        justifyContent : "center",

                        transition : "0.4s",
                        
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setStyle({
    
                            display : "flex",
    
                            flexFlow : "column",
    
                            justifyContent : "center",
                            
                        })
                        .setInner(
    
                            framework.UIElement("div")
                            .setStyle({
                
                                whiteSpace : "pre-wrap",
            
                                maxWidth : "500px",

                                fontSize : "2vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "200",

                                color : "rgba(240, 240, 239, 0.5)",

                                lineBreak: "auto",
                                wordBreak: "break-word",

                                display : "flex",

                                flexFlow : "row",
                                
                            })
                            .setInner(

`Here are game engines that I used:`,

                            ),
    
                        ),

                    ),


        
                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        width : "calc(100% - 34px)",
                        height : "65%",

                        bottom : "0",

                        paddingLeft : "17px",
                        paddingRight : "17px",
    
                        display : "flex",
    
                        flexFlow : "column",
                        
                        justifyContent : "center",
                        
                        visibility : "visible",

                        backgroundColor: "rgb(255, 253, 116)",

                        zIndex : "6",
            
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setStyle({
                
                            width : "100%",
        
                            display : "flex",
        
                            flexFlow : "row",
                            flexWrap : "wrap",
                            
                            justifyContent : "space-around",
                            
                            visibility : "visible",
    
                            backgroundColor: "rgb(255, 253, 116)",
    
                            zIndex : "6",
                
                        })
                        .setInner(

                            framework.UIElement("img")
                            .setStyle({
        
                                zIndex : "7",
        
                                display : "flex",
            
                                flexFlow : "column",
                                
                                justifyContent : "center",
    
                                fontSize : "3vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "500",
    
                                color : "rgba(40, 40, 40, 1)",
    
                                width : "9vh",
    
                                height : "9vh",
    
                                textAlign : "center",

                                cursor: "pointer",
                    
                            })
                            .setInner(
        
                                
                    
                            )
                            .exe(function(){
    
                                this.src = `${window.location.origin}/javascript/resources/images/unity.png`;

                                this.addEventListener('click', function(){

                                    window.open(`https://unity.com/`);

                                });
    
                            }),

                            

                            framework.UIElement("img")
                            .setStyle({
        
                                zIndex : "7",
        
                                display : "flex",
            
                                flexFlow : "column",
                                
                                justifyContent : "center",
    
                                fontSize : "3vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "500",
    
                                color : "rgba(40, 40, 40, 1)",
    
                                width : "9vh",
    
                                height : "9vh",
    
                                textAlign : "center",

                                cursor: "pointer",
                    
                            })
                            .setInner(
        
                                
                    
                            )
                            .exe(function(){
    
                                this.src = `${window.location.origin}/javascript/resources/images/ue.png`;

                                this.addEventListener('click', function(){

                                    window.open(`https://www.unrealengine.com/`);

                                });
    
                            }),

                            

                            framework.UIElement("img")
                            .setStyle({
        
                                zIndex : "7",
        
                                display : "flex",
            
                                flexFlow : "column",
                                
                                justifyContent : "center",
    
                                fontSize : "3vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "500",
    
                                color : "rgba(40, 40, 40, 1)",
    
                                width : "9vh",
    
                                height : "9vh",
    
                                textAlign : "center",

                                cursor: "pointer",
                    
                            })
                            .setInner(
        
                                
                    
                            )
                            .exe(function(){
    
                                this.src = `${window.location.origin}/javascript/resources/images/godot.png`;

                                this.addEventListener('click', function(){

                                    window.open(`https://godotengine.org/`);

                                });
    
                            }),

                        ),
            
                    )
                    
                )                                  
                .on("mouseover", function(){

                    this.setStyle({

                        backgroundColor : "rgb(48, 48, 48)",

                    });
                    
                })               
                .on("mouseout", function(){

                    this.setStyle({

                        backgroundColor : "rgb(38, 38, 38)",

                    });
                    
                }),



                UIVR(),
                
                
    
                framework.UIElement("div")
                .setStyle({
    
                    position : "relative",
        
                    width : "calc(100% - 4px)",
                    height : "55vh",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgb(38, 38, 38)",
    
                    boxShadow : "0px 0px 4px 4px rgba(0,0,0,0.1)",

                    overflowX : "hidden",
                    overflowY : "hidden",
                    borderRadius : "3vh",

                    border : "2px solid rgba(24,24,24,0.3)",

                    transition : "0.3s",
        
                })
                .setInner(

                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        maxWidth : "500px",            
                        width : "70%",
                        height : "calc(35% - 30px)",
            
                        zIndex : "5",

                        pointerEvents: "none",

                        display : "flex",

                        flexFlow : "row",

                        justifyContent : "center",

                        transition : "0.4s",
                        
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setStyle({
    
                            display : "flex",
    
                            flexFlow : "column",
    
                            justifyContent : "center",
                            
                        })
                        .setInner(
    
                            framework.UIElement("div")
                            .setStyle({
                
                                whiteSpace : "pre-wrap",
            
                                maxWidth : "500px",

                                fontSize : "2vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "200",

                                color : "rgba(240, 240, 239, 0.5)",

                                lineBreak: "auto",
                                wordBreak: "break-word",

                                display : "flex",

                                flexFlow : "row",
                                
                            })
                            .setInner(

`Knowledge:`,

                            ),
    
                        ),

                    ),


        
                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        width : "calc(100% - 154px)",
                        height : "calc(65% - 30px)",

                        bottom : "0",

                        paddingTop : "30px",
                        paddingBottom : "30px",

                        paddingLeft : "97px",
                        paddingRight : "97px",
    
                        display : "flex",
    
                        flexFlow : "row",
                        flexWrap : "wrap",
                        
                        justifyContent : "space-around",
                        
                        visibility : "visible",

                        backgroundColor : "#1F1F1F",

                        zIndex : "6",
            
                    })
                    .setInner(

                        

                        framework.UIElement("div")
                        .setStyle({

                            position : "relative",
    
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "center",

                            transform : "translateX(-5px)",
                
                        })
                        .setInner(

                            framework.UIElement("div")
                            .setStyle({
    
                                position : "relative",
        
                                zIndex : "6",
        
                                display : "flex",
            
                                flexFlow : "row",
                                
                                justifyContent : "center",
    
                                fontSize : "2vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "300",
    
                                color : "rgba(240, 240, 240, 0.8)",
    
                                minWidth : "330px",
    
                                textAlign : "center",
                    
                            })
                            .setInner(
    
                                framework.UIElement("div")
                                .setStyle({
            
                                    zIndex : "7",
    
                                    width : "30px",
                                    height : "30px",
    
                                    marginLeft : "5px",
            
                                    backgroundImage : `url("${window.location.origin}/javascript/resources/images/engine.png")`,
                                    backgroundSize : "cover",
                        
                                })
                                .setInner(
            
                                    
                        
                                ),
    
                                framework.UIElement("div")
                                .setStyle({
            
                                    zIndex : "7",
    
                                    display : "flex",

                                    flexFlow : "column",

                                    justifyContent : "center",
                        
                                })
                                .setInner(
        
                                    "Game Engine Architecture"
                        
                                ),
                    
                            ),

                        ),

                        

                        framework.UIElement("div")
                        .setStyle({

                            position : "relative",
    
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "center",

                            transform : "translateX(-5px)",
                
                        })
                        .setInner(

                            framework.UIElement("div")
                            .setStyle({
    
                                position : "relative",
        
                                zIndex : "6",
        
                                display : "flex",
            
                                flexFlow : "row",
                                
                                justifyContent : "center",
    
                                fontSize : "2vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "300",
    
                                color : "rgba(240, 240, 240, 0.8)",
    
                                minWidth : "330px",
    
                                textAlign : "center",
                    
                            })
                            .setInner(
    
                                framework.UIElement("div")
                                .setStyle({
                                    
                                    zIndex : "7",
    
                                    width : "30px",
                                    height : "30px",
    
                                    marginLeft : "5px",
            
                                    backgroundImage : `url("${window.location.origin}/javascript/resources/images/game.png")`,
                                    backgroundSize : "cover",
                        
                                })
                                .setInner(
            
                                    
                        
                                ),
    
                                framework.UIElement("div")
                                .setStyle({
            
                                    zIndex : "7",
    
                                    display : "flex",

                                    flexFlow : "column",

                                    justifyContent : "center",
                        
                                })
                                .setInner(
        
                                    "Game Programming"
                        
                                ),
                    
                            ),

                        ),

                        

                        framework.UIElement("div")
                        .setStyle({

                            position : "relative",
    
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "center",

                            transform : "translateX(-5px)",
                
                        })
                        .setInner(

                            framework.UIElement("div")
                            .setStyle({
    
                                position : "relative",
        
                                zIndex : "6",
        
                                display : "flex",
            
                                flexFlow : "row",
                                
                                justifyContent : "center",
    
                                fontSize : "2vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "300",
    
                                color : "rgba(240, 240, 240, 0.8)",
    
                                minWidth : "330px",
    
                                textAlign : "center",
                    
                            })
                            .setInner(
    
                                framework.UIElement("div")
                                .setStyle({
            
                                    zIndex : "7",
    
                                    width : "30px",
                                    height : "30px",
    
                                    marginLeft : "5px",
            
                                    backgroundImage : `url("${window.location.origin}/javascript/resources/images/cg.png")`,
                                    backgroundSize : "cover",
                        
                                })
                                .setInner(
            
                                    
                        
                                ),
    
                                framework.UIElement("div")
                                .setStyle({
            
                                    zIndex : "7",
    
                                    display : "flex",

                                    flexFlow : "column",

                                    justifyContent : "center",
                        
                                })
                                .setInner(
        
                                    "Computer Graphics"
                        
                                ),
                    
                            ),

                        ),

                        

                        framework.UIElement("div")
                        .setStyle({

                            position : "relative",
    
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "center",

                            transform : "translateX(-5px)",
                
                        })
                        .setInner(

                            framework.UIElement("div")
                            .setStyle({
    
                                position : "relative",
        
                                zIndex : "6",
        
                                display : "flex",
            
                                flexFlow : "row",
                                
                                justifyContent : "center",
    
                                fontSize : "2vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "300",
    
                                color : "rgba(240, 240, 240, 0.8)",
    
                                minWidth : "330px",
    
                                textAlign : "center",
                    
                            })
                            .setInner(
    
                                framework.UIElement("div")
                                .setStyle({
            
                                    zIndex : "7",
    
                                    width : "30px",
                                    height : "30px",
    
                                    marginLeft : "5px",
            
                                    backgroundImage : `url("${window.location.origin}/javascript/resources/images/calculus.png")`,
                                    backgroundSize : "cover",
                        
                                })
                                .setInner(
            
                                    
                        
                                ),
    
                                framework.UIElement("div")
                                .setStyle({
            
                                    zIndex : "7",
    
                                    display : "flex",

                                    flexFlow : "column",

                                    justifyContent : "center",
                        
                                })
                                .setInner(
        
                                    "Calculus"
                        
                                ),
                    
                            ),

                        ),

                        

                        framework.UIElement("div")
                        .setStyle({

                            position : "relative",
    
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "center",

                            transform : "translateX(-5px)",
                
                        })
                        .setInner(

                            framework.UIElement("div")
                            .setStyle({
    
                                position : "relative",
        
                                zIndex : "6",
        
                                display : "flex",
            
                                flexFlow : "row",
                                
                                justifyContent : "center",
    
                                fontSize : "2vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "300",
    
                                color : "rgba(240, 240, 240, 0.8)",
    
                                minWidth : "330px",
    
                                textAlign : "center",
                    
                            })
                            .setInner(
    
                                framework.UIElement("div")
                                .setStyle({
            
                                    zIndex : "7",
    
                                    width : "30px",
                                    height : "30px",
    
                                    marginLeft : "5px",
            
                                    backgroundImage : `url("${window.location.origin}/javascript/resources/images/linearAlgebra.png")`,
                                    backgroundSize : "cover",
                        
                                })
                                .setInner(
            
                                    
                        
                                ),
    
                                framework.UIElement("div")
                                .setStyle({
            
                                    zIndex : "7",
    
                                    display : "flex",

                                    flexFlow : "column",

                                    justifyContent : "center",
                        
                                })
                                .setInner(
        
                                    "Linear Algebra",
                        
                                ),
                    
                            ),

                        ),
            
                    )
                    
                )                                  
                .on("mouseover", function(){

                    this.setStyle({

                        backgroundColor : "rgb(48, 48, 48)",

                    });
                    
                })               
                .on("mouseout", function(){

                    this.setStyle({

                        backgroundColor : "rgb(38, 38, 38)",

                    });
                    
                }),



                UIVR(),
                
                
    
                framework.UIElement("div")
                .setStyle({
    
                    position : "relative",
        
                    width : "calc(100% - 4px)",
                    height : "50vh",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgb(38, 38, 38)",
    
                    boxShadow : "0px 0px 4px 4px rgba(0,0,0,0.1)",

                    overflowX : "hidden",
                    overflowY : "hidden",
                    borderRadius : "3vh",

                    border : "2px solid rgba(24,24,24,0.3)",

                    transition : "0.3s",
        
                })
                .setInner(

                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        maxWidth : "500px",            
                        width : "70%",
                        height : "35%",
            
                        zIndex : "5",

                        pointerEvents: "none",

                        display : "flex",

                        flexFlow : "row",

                        justifyContent : "center",

                        transition : "0.4s",
                        
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setStyle({
    
                            display : "flex",
    
                            flexFlow : "column",
    
                            justifyContent : "center",
                            
                        })
                        .setInner(
    
                            framework.UIElement("div")
                            .setStyle({
                
                                whiteSpace : "pre-wrap",
            
                                maxWidth : "500px",

                                fontSize : "2vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "200",

                                color : "rgba(240, 240, 239, 0.5)",

                                lineBreak: "auto",
                                wordBreak: "break-word",

                                display : "flex",

                                flexFlow : "row",
                                
                            })
                            .setInner(

`ING is my biggest project, its a game engine for windows `,

                            ),
    
                        ),

                    ),



                    framework.UIElement("img")
                    .setStyle({
        
                        position : "absolute",

                        height : "65%",

                        top : "35%",

                        zIndex : "7",

                        pointerEvents : "click",

                        cursor: "pointer",

                    })
                    .exe(function(){

                        this.src = `${window.location.origin}/javascript/resources/images/ing.png`;

                        this.addEventListener("click", function(){

                            window.open("https://github.com/INGTechnologies/ING");

                        });

                    }),



                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",

                        width : "100%",
                        height : "50%",

                        top : "50%",

                        backgroundColor : "#FFFFFF",

                        zIndex : "6",

                        pointerEvents : "none",

                    }),


        
                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        width : "calc(100% - 34px)",
                        height : "100%",

                        paddingLeft : "17px",
                        paddingRight : "17px",
    
                        display : "flex",
    
                        flexFlow : "row",
                        
                        justifyContent : "space-around",
                        
                        visibility : "visible",
            
                    })
                    .setInner(

                        
            
                    )
                    
                )                                  
                .on("mouseover", function(){

                    this.setStyle({

                        backgroundColor : "rgb(48, 48, 48)",

                    });
                    
                })               
                .on("mouseout", function(){

                    this.setStyle({

                        backgroundColor : "rgb(38, 38, 38)",

                    });
                    
                }),



                UIVR(),
                
                
    
                framework.UIElement("div")
                .setStyle({
    
                    position : "relative",
        
                    width : "calc(100% - 4px)",
                    height : "50vh",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgb(38, 38, 38)",
    
                    boxShadow : "0px 0px 4px 4px rgba(0,0,0,0.1)",

                    overflowX : "hidden",
                    overflowY : "hidden",
                    borderRadius : "3vh",

                    border : "2px solid rgba(24,24,24,0.3)",

                    transition : "0.3s",
        
                })
                .setInner(

                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        maxWidth : "500px",            
                        width : "70%",
                        height : "35%",
            
                        zIndex : "5",

                        pointerEvents: "none",

                        display : "flex",

                        flexFlow : "row",

                        justifyContent : "center",

                        transition : "0.4s",
                        
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setStyle({
    
                            display : "flex",
    
                            flexFlow : "column",
    
                            justifyContent : "center",
                            
                        })
                        .setInner(
    
                            framework.UIElement("div")
                            .setStyle({
                
                                whiteSpace : "pre-wrap",
            
                                maxWidth : "500px",

                                fontSize : "2vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "200",

                                color : "rgba(240, 240, 239, 0.5)",

                                lineBreak: "auto",
                                wordBreak: "break-word",

                                display : "flex",

                                flexFlow : "row",
                                
                            })
                            .setInner(

`NFramework is my framework for website developing `,

                            ),
    
                        ),

                    ),



                    framework.UIElement("img")
                    .setStyle({
        
                        position : "absolute",

                        height : "65%",

                        top : "35%",

                        zIndex : "7",

                        pointerEvents : "click",

                        cursor: "pointer",

                    })
                    .exe(function(){

                        this.src = `${window.location.origin}/javascript/resources/images/nframework.png`;

                        this.addEventListener("click", function(){

                            window.open("https://github.com/N1ghtTeam/NFramework");

                        });

                    }),



                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",

                        width : "100%",
                        height : "50%",

                        top : "50%",

                        backgroundColor : "#1F1F1F",

                        zIndex : "6",

                        pointerEvents : "none",

                    }),


        
                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        width : "calc(100% - 34px)",
                        height : "100%",

                        paddingLeft : "17px",
                        paddingRight : "17px",
    
                        display : "flex",
    
                        flexFlow : "row",
                        
                        justifyContent : "space-around",
                        
                        visibility : "visible",
            
                    })
                    .setInner(

                       
                    )
                    
                )                                  
                .on("mouseover", function(){

                    this.setStyle({

                        backgroundColor : "rgb(48, 48, 48)",

                    });
                    
                })               
                .on("mouseout", function(){

                    this.setStyle({

                        backgroundColor : "rgb(38, 38, 38)",

                    });
                    
                }),



                UIVR(),

                
                framework.UIElement("div")
                .setId("home-footer")
                .setStyle({
    
                    position : "relative",
        
                    width : "100%",
                    height : "10vh",

                    display : "flex",

                    flexFlow : "row",
        
                })
                .setInner(
        
                    framework.UIElement("div")
                    .setStyle({
            
                        width : "100%",
                        height : "100%",
    
                        textAlign : "center",

                        display : "flex",

                        flexFlow : "column",

                        justifyContent : "center",

                        fontSize : "18px",
                        fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontWeight : "250",

                        color : "rgba(140, 140, 140, 0.7)",
            
                    })
                    .setInner(

                        "© 2022 By NCoder."

                    ),
                    
                ),
    
            )

        )
        .exe(function(){

            var home = this;

            const applyResponsiveStyle = function(){

                //check is mobile
                if(window.innerWidth <= 1000){   
                    
                    home.querySelector("div")
                    .setStyle({

                        width : "calc(100% - 2vh)",
                        marginLeft : "1vh",
                        fontSize : "10px",
            
                    });

                }
                else{
                    
                    home.querySelector("div")
                    .setStyle({

                        width : "calc(100% - 2vh)",
                        marginLeft : "1vh",
                        fontSize : "20px",
            
                    });

                }

            }

            home.applyResponsiveStyle = applyResponsiveStyle;

            window.addEventListener("resize", ()=>{

                applyResponsiveStyle();

            });

            applyResponsiveStyle();

        })
    )
}