import Animation from "./animation/animation.js"
import AnimationState from "./animation/state.js"

import UIElement from "./ui/element.js"



const framework = {

    Animation,
    AnimationState,

    UIElement

}

window.framework = framework;
window.$ = (selector)=>{return document.querySelector(selector)}
window.$s = (selector)=>{return document.querySelectorAll(selector)}

export default framework





