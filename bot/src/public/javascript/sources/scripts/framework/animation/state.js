
export default function AnimationState(callback) {

    let result = {

        rootState : null,
        nextState : null,
        prevState : null,
        callback : callback,



        then : function(nextState){

            this.nextState = nextState;
            this.nextState.prevState = this;
            this.nextState.rootState = this.rootState;

            return nextState;

        },

        play : async function(){

            await callback(this);

            if(this.nextState != null){

                await this.nextState.play();

            }

        },

        wait : async function(seconds){

            return await new Promise((resolve)=>{

                setTimeout(() => {
                    resolve()
                }, seconds);

            });

        }

    };
    
    result.rootState = result;

    return result;
}