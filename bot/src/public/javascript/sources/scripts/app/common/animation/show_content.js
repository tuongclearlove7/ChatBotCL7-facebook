import framework from "../../../framework/framework.js"



export default function ShowContentAnimation(){

    return framework.Animation(

        //begin
        framework.AnimationState(async (state)=>{

            $("#content-container")
            .setStyle({

                transform : "translateY(75px)",

            })        



            {           

                await state.wait(500);

                $('#content-container')
                .setStyle({

                    transition : "0.0s",
    
                })  

            };    

        })

    )
}