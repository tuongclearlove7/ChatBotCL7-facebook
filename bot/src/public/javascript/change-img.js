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
console.log("count array : ",list_imgs.length);
let i = 0,count=1000;
function changeImg() {
    document.slide.src = list_imgs[i];
        if(i < list_imgs.length - 1) {
                i++;
        } 
        else {
                i = 0;
        }
    setTimeout("changeImg()",count);
}
window.onload = changeImg;













