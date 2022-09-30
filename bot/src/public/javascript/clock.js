   




const timeFunc = () =>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let present = 'Time : ' + hours + ':'+ minutes + ':'+seconds;
    console.table(present);    


    document.getElementById('mytime').innerHTML = present;
}
 





