import framework from "../../../framework/framework.js"



export default function ShowStartAnimation(){

    return framework.Animation(

        //begin
        framework.AnimationState(async (state)=>{

            await state.wait(500);

            if(window.innerWidth <= 1050)
            {
                
                await state.wait(500);

                $('#start-left')
                .setStyle({
    
                    width : "50%"
    
                })
    
                $('#start-right')
                .setStyle({
    
                    width : "50%"
    
                })
                
                await state.wait(250);
    
                $('#start-left-logo-container-y')
                .setStyle({
        
                    //height : "66px"
                    height : "75px",
    
                    backgroundColor : "rgb(34, 34, 33)",
    
                })   
    
                $('#start-left-logo')
                .setStyle({
    
                    width : "70px",        
                    height : "40px",

                    bottom : "5px",
                    
                    right : "10px"
    
                }) 

                $('#start-right-text-container-y')
                .setStyle({
        
                    height : "80px"
    
                })
    
                $('#start-right-text')
                .setStyle({
    
                    width : "120px",
        
                    height : "40px",
    
                    left : "0",

                    fontSize : "24px",
                    fontWeight : "220",

                    transform : "translateX(20px) translateY(2px)",

                    padding : "0"
    
                })

            }
            else
            {

                $('#start-left')
                .setStyle({
    
                    width : "50%"
    
                })
    
                $('#start-right')
                .setStyle({
    
                    width : "50%"
    
                })
                
                await state.wait(250);
    
                $('#start-left-logo')
                .setStyle({
    
                    right : "0",
                
                    width : "260px",
                    height : "180px",
    
                })
    
                $('#start-right-text')
                .setStyle({
    
                    left : "-12px",
                
                    width : "400px",
                    height : "110px",
    
                })
                
                await state.wait(250);


            
                await state.wait(1000);

            }



            {

                $('#start-left-logo-container-y')
                .setStyle({
        
                    //height : "66px"
                    height : "75px",
    
                    backgroundColor : "rgb(34, 34, 33)",
    
                })   
    
                $('#start-left-logo')
                .setStyle({
    
                    width : "70px",        
                    height : "40px",

                    bottom : "5px",
                    
                    right : "10px"
    
                }) 

                $('#start-right-text-container-y')
                .setStyle({
        
                    height : "80px"
    
                })
    
                $('#start-right-text')
                .setStyle({
    
                    width : "120px",
        
                    height : "40px",
    
                    left : "0",

                    fontSize : "24px",
                    fontWeight : "220",

                    transform : "translateX(20px) translateY(2px)",

                    padding : "0"
    
                })

            }



            (async ()=>{
     
    
    
                await state.wait(500);
    
    
    
                $('#start-left')
                .setStyle({
    
                    width : "90px"
    
                })
    
                $('#start-right')
                .setStyle({
    
                    width : "calc(100% - 90px)"
    
                })
    
                $("#start")
                .setStyle({
    
                    transition : "0.3s"
    
                });
    
                $("#start-left-logo")
                .setStyle({
    
                    transition : "0.2s"
    
                });
    
                $("#start-right-text")
                .setStyle({
    
                    transition : "0.0s"
    
                });
     
    
    
                await state.wait(500);

            

                /*
                document.body.appendChild(
    
                    framework.UIElement("div")
                    .setStyle({
    
                        position : "fixed",
    
                        width : "100vw",
                        height : "75px",
    
                        top : "0",
    
                        boxShadow : "0px 0px 4px 4px rgba(0,0,0,0.2)",
    
                        zIndex : "9",
                        
                        pointerEvents : "none",
    
                    })
    
                );*/



                $('#start-left')
                .setStyle({
    
                    
    
                })

            })();
            
        })
        
    );
}