//import {itemModel} from "./html_model";

var inputBlock = document.querySelector("#layout_after_id");
var getIDFooter = document.querySelector("#footer");
var itemModel = `<a href="javascript:void(0);" class="timer" ></a>
                <a href="javascript:void(0);" class="item1" >Page 1</a>
                <a href="javascript:void(0);" class="item2" >Page 2</a>
                <a href="javascript:void(0);" class="item3" >Page 3</a>
                <a href="javascript:void(0);" class="item4" >Page 4</a>
                <a href="javascript:void(0);" class="item5" >Page 5</a>`

function start(){

    renderShowInputBlock(`

    <div class="card_create">
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
    <button id="newCreate">Create</button>
    </div>
    <div>
    <a class="welcomeToWeb" href="javascript:void(0);" >console.log("hello world");</a>
    </div>
    <!-- <div><img class="apiImage"  src="./image/api.png" alt=""></div> -->
    </div>
    </div>`);
    renderShowPage();
    backToTop();
    setInterval(myTimer, 1000);
   
}

start();   

function scrollClick(click){

    let obj1 = {

            top: click,
            left: 0,
            behavior: 'smooth'
        }
    
    window.scrollTo(obj1); 

}

function backToTop(){

    getIDFooter.innerHTML = ` <a href="javascript:void(0);" class="back_to_top" id = "top">
                            
                                        <i class="fa fa-caret-down"></i></a>`;


    let comebackTop = document.querySelector('.back_to_top');

    comebackTop.onclick = function(){

        scrollClick(1000000);
     
    }
}

function renderShowPage(){

    var page2 = document.querySelector("#page_id");
    var listItem = ['.item1', '.item2', '.item3', '.item4','.item5'];

    page2.innerHTML  = itemModel;
    
   

    document.querySelector(listItem[0]).onclick = function(){

        setTimeout(changePage1(`
     
        <div class="card_create">
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
        <button id="newCreate">Create</button>
        </div>
        <div>
        <a class="welcomeToWeb" href="javascript:void(0);" >console.log("hello world");</a>
        </div>
        <!-- <div><img class="apiImage"  src="./image/api.png" alt=""></div> -->
        </div>
        </div>`),scrollClick(0), 100);
       
    }

    document.querySelector(listItem[1]).onclick = function(){

        setTimeout(changePage2(`

        <div class="page2">
        <p>
        DNS documentation
        Introduce HTTP
        💬 What is DNS? (DNS là gì?)
        
        The (Domain Name System) => (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
        Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).
        Vietsub( (Hệ thống tên miền) => (DNS) là danh bạ của Internet. Con người truy cập thông tin trực tuyến thông qua các tên miền, như nytimes.com hoặc espn.com. Các trình duyệt web tương tác thông qua các địa chỉ Giao thức Internet (IP). DNS dịch tên miền thành địa chỉ IP để trình duyệt có thể tải tài nguyên Internet.
        Mỗi thiết bị được kết nối với Internet có một địa chỉ IP duy nhất mà các máy khác sử dụng để tìm thiết bị. Các máy chủ DNS loại bỏ nhu cầu con người phải ghi nhớ các địa chỉ IP như 192.168.1.1 (trong IPv4) hoặc các địa chỉ IP chữ và số phức tạp hơn mới hơn như 2400:cb00:2048:1::c629:d7a2 (trong IPv6).)
        💬 How does DNS work? (DNS hoạt động như thế nào?)
        
        The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
        
        In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.
        
        Vietsub (Quá trình phân giải DNS liên quan đến việc chuyển đổi tên máy chủ (chẳng hạn như www.example.com) thành địa chỉ IP thân thiện với máy tính (chẳng hạn như 192.168.1.1). Một địa chỉ IP được cung cấp cho mỗi thiết bị trên Internet và địa chỉ đó là cần thiết để tìm thiết bị Internet thích hợp - giống như địa chỉ đường phố được sử dụng để tìm một ngôi nhà cụ thể. Khi người dùng muốn tải trang web, bản dịch phải diễn ra giữa nội dung người dùng nhập vào trình duyệt web của họ (example.com) và địa chỉ thân thiện với máy cần thiết để định vị trang web example.com.
        
        Để hiểu quy trình đằng sau độ phân giải DNS, điều quan trọng là phải tìm hiểu về các thành phần phần cứng khác nhau mà truy vấn DNS phải chuyển qua. Đối với trình duyệt web, quá trình tra cứu DNS diễn ra "ở hậu trường" và không yêu cầu tương tác từ máy tính của người dùng ngoài yêu cầu ban đầu.)
        
        Detail Infomation
        - link : https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/
        - link : https://howdns.works/
        - link : https://developer.mozilla.org/en-US/docs/Glossary/DNS
        - link : https://www.youtube.com/watch?v=Wj0od2ag5sk
        - link : https://www.youtube.com/watch?v=7lxgpKh_fRY
        - link : https://www.youtube.com/watch?v=zEmUuNFBgN8&list=PLTk5ZYSbd9MhMmOiPhfRJNW7bhxHo4q-K
    </p>
    </div>`),scrollClick(0), 100);
   
    }

    document.querySelector(listItem[2]).onclick = function(){

        setTimeout(changePage3(`<div class="page2"><h1>Page3</h1></div>`),scrollClick(0), 100);
   
    }

    document.querySelector(listItem[3]).onclick = function(){

        setTimeout(changePage4(`<div class="page2"><h1>Page4</h1></div>`),scrollClick(0), 100);
   
    }

    document.querySelector(listItem[4]).onclick = function(){

        setTimeout(changePage5(`<div class="page2"><h1>Page5</h1></div>`),scrollClick(0), 100);

    }
}

function myTimer() {

    var date = new Date();
    
    document.querySelector(".timer").innerHTML = date.toLocaleTimeString();
}

function changePage1(page1){


     inputBlock.innerHTML = page1;

    document.querySelector('#newCreate').onclick = function(){

        handleCreateForm();
    }

    document.querySelector('.welcomeToWeb').onclick = function(){

        alert("Anthor : Clearlove7\nHello world ^^\nChúc bạn ngủ ngon <3");
    }
}

function changePage2(page2){

    return inputBlock.innerHTML = page2;
}

function changePage3(page3){


    return inputBlock.innerHTML = page3;
}

function changePage4(page4){


    return inputBlock.innerHTML = page4;
}


function changePage5(page5){


    return inputBlock.innerHTML = page5;
}

function renderShowInputBlock(block){


    inputBlock.innerHTML = block;


    document.querySelector('.welcomeToWeb').onclick = function(){

        alert("Anthor : Clearlove7\nHello world ^^\nChúc bạn ngủ ngon <3");
    }
    
    document.querySelector('#newCreate').onclick = function(){

        handleCreateForm();
    }
}


