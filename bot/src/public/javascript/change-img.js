let list_imgs = [
            './image/big_bg.png',
            './image/img1.jpg',
            './image/img2.jpg',
            './image/img3.jpg',
            './image/img4.jpg',
            './image/img5.jpg',
            './image/img6.jpg',
            './image/img7.jpg',
            './image/img8.jpg',
            './image/img9.jpg',
            './image/img10.jpg'
];

let i = 0;
let Timeleft=1000;

function change_background() {
    document.slide.src = list_imgs[i];
        if(i < list_imgs.length - 1) {
            i++;
        } 
        else {
            i = 0;
        }
    setTimeout("change_background()",Timeleft);
}

let FuncCount = (CountImg) => { 
    for (let idx = 0; idx < list_imgs.length; idx++) {
        CountImg++
    }
    return CountImg;
}

console.log("Count image : " + FuncCount(i));
window.onload = change_background;













