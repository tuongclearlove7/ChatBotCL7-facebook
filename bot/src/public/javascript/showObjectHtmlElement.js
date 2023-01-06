
function start(){

    renderShowInputBlock();
    renderShowPage2();

}

start();

function scrollClick(){
 
    window.scrollTo({

            top: 0,
            left: 0,
            behavior: 'smooth'
    }); 

    console.log("scroll");
}

function changePage(){

    window.alert("hi");
    
    console.log("changePage");

}


function renderShowPage2(){

    var page2 = document.querySelector("#page_id_2");

    return page2.innerHTML = `<a href="javascript:void(0);" class="item1"  onclick="scrollClick()">Page 1</a>
                              <a href="javascript:void(0);" class="item2"  onclick="changePage()">Page 2</a>
                              <a class="item3" href="">Page 3</a>
                              <a class="item4" href="">Page 4</a>
                              <a class="item5" href="">Page 5</a>
    
    `;  
}


function renderShowInputBlock(){

    var inputBlock = document.querySelector("#layout_after_id");

    return inputBlock.innerHTML = `<div class="card_create">
    <div class="iconGithub"><a class="fa fa-github" href="https://github.com/tuongclearlove7"></a></div>   
    <div class="iconFacebook"><a class="fa fa-facebook" href="https://www.facebook.com/Ytttuong1"></a></div>  
    <div class="iconInstagram"><a class="fa fa-instagram" href="https://www.instagram.com/warkeryt/?next=%2F"></a></div>  
    <div><label class="label1">Name</label>
    <input class="input1" type="text" name="name" placeholder="Nhập tên kiến thức">
    </div>
    <div><label class="label2">Description</label>
    <input class="input2" type="text" name="description" placeholder="Nhập mô tả">
    </div>
    <div>
    <button id="newCreate" onclick="handleCreateForm();">Create</button>
    </div>
    <div>
    <a class="text" href="javascript:void(0);" onclick="hello();">console.log("hello world");</a>
    </div>
    <!-- <div><img class="apiImage"  src="./image/api.png" alt=""></div> -->
    </div>
    </div>`;
}



