import Animation from "../animation.js"
import AnimationState from "../state.js"

import UIElement from "../element.js"



const framework = {

    Animation,
    AnimationState,

    UIElement

}

window.framework = framework;
window.$ = (selector)=>{return document.querySelector(selector)}
window.$s = (selector)=>{return document.querySelectorAll(selector)}

export default framework





