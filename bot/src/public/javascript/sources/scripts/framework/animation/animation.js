
export default function Animation(state) {

    return {

        rootState : state.rootState,



        play : async function(){

            await this.rootState.play();            

        }

    };

}