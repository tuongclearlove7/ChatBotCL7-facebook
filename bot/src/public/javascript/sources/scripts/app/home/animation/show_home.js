import framework from "../../../framework/framework.js"



export default function ShowHomeAnimation(){

    return framework.Animation(

        //begin
        framework.AnimationState(async (state)=>{

            await state.wait(500);

            $("#home")
            .setStyle({

                opacity : "1",

            });

            await state.wait(1000);

        })

    )
}