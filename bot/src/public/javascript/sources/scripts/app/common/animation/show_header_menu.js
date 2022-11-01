import framework from "../../../framework/framework.js"



export default function ShowHeaderMenu(){

    return framework.Animation(

        //begin
        framework.AnimationState(async (state)=>{

            $("#header-menu").applyResponsiveStyle();

            await state.wait(750);

            $("#header-menu").showed = true;

            $("#header-menu")
            .setStyle({

                transition : "0.0s"

            });

            $("#header-menu").applyResponsiveStyle();

        })

    )
}