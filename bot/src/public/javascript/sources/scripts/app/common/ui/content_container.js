import framework from "../../../framework/framework.js"



export default function UIContentContainer(){

    return (
        framework.UIElement("div")
        .setId("content-container")
        .setClass("noscrollbar")
        .setStyle({

            width : "100vw",
            //width : "100vw",
            height : "calc(100vh - 75px)",

            display : "flex",

            flexFlow : "column",
            flexDirection: "column",
                       
            overflowY : "auto",
            overflowX : "auto",

            transition : "0.5s",

            position : "fixed",

            transform : "translateY(100vh)",

            border : "1px solid rgb(50,50,50)",

            backgroundColor : "rgb(55, 55, 55)",

            //background : "linear-gradient(to bottom, rgb(75, 75, 75), rgb(35, 35, 35))",
            //background : "linear-gradient(to bottom, rgb(75, 75, 75), rgb(15, 15, 15))",

            borderTopLeftRadius : "4vh",
            borderTopRightRadius : "4vh",
            //background : "linear-gradient(to bottom, rgb(235, 235, 235), rgb(200, 200, 200))",
                
            // backgroundImage : `url("${window.location.origin}/resources/images/background1.png")`,
            // backgroundSize : 'cover',

            //boxShadow : "40px 40px 40px 40px rgba(0,0,0,0.1), 40px 40px 40px 40px rgba(0,0,0,0.1), 40px 40px 40px 40px rgba(0,0,0,0.1), 40px 40px 40px 40px rgba(0,0,0,0.1)",

            zIndex : "2",

        })
        .exe(function(){

            var contentContainer = this;



            contentContainer.setInner = function(...childs){

                contentContainer.innerHTML = "";
                
                for(let childName in childs){
        
                    let child = childs[childName];
        
                    try {
        
                        contentContainer.appendChild(child);
        
                    }
                    catch
                    {
        
                        try{
        
                            contentContainer.innerHTML += child;
        
                        }
                        catch{
        
        
        
                        }
        
                    }
        
                }
        
                return contentContainer;
            }

            const applyResponsiveStyle = function(){

                //check is mobile
                if(window.innerWidth <= 1000){   
    
                    this
                    .setStyle({

                        width : "100vw",
                        height : "calc(100vh - 75px)",

                        marginLeft : "0",
            
                    });

                }
                else{
                    
                    this
                    .setStyle({

                        width : "50vw",
                        height : "calc(100vh - 75px)",

                        marginLeft : "25vw",
            
                    });

                }

            }

            contentContainer.applyResponsiveStyle = applyResponsiveStyle;

            contentContainer.applyResponsiveStyle();

            window.addEventListener("resize", ()=>{

                contentContainer.applyResponsiveStyle();

            });

        })
    )

}