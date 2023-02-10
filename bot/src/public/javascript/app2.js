export const static_App = (

    function(){

        const data = [

            {
                item :  `<a href="javascript:void(0);" class="timer" ></a>
                <a href="javascript:void(0);" class="item1" >Page 1</a>
                <a href="javascript:void(0);" class="item2" >Page 2</a>
                <a href="javascript:void(0);" class="item3" >Page 3</a>
                <a href="javascript:void(0);" class="item4" >Page 4</a>
                <a href="javascript:void(0);" class="item5" >Page 5</a>`,

                block : `
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
                        </div>`,
                itemModel : "",
                top : ` <a href="javascript:void(0);" class="back_to_top" id = "top">
                                        <i class="fa fa-caret-down"></i></a>`,
                pagE1 : `
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
                        </div>`,
                pagE2 : `
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
                    </div>`,
                pagE3 : `<div class="page3"><p align='left'><a href='https://github.com/tuongclearlove7'><img height='180em' src='https://github-readme-stats-eight-theta.vercel.app/api?username=tuongclearlove7&show_icons=true&theme=algolia&include_all_commits=true&count_private=true'/><img height='180em' src='https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=tuongclearlove7&layout=compact&langs_count=8&theme=algolia'/></a></p></div>`,
                pagE4 : `<div class="page4"><h1>Page4</h1></div>`,
                pagE5 : `<div class="page5"><h1>Page5</h1></div>`,

                inputBlock : document.querySelector("#layout_after_id"),

                getIDFooter : document.querySelector("#footer"),

                visits : 0,

                audio : new Audio("../image/anhkhongthathu.mp3"),

                author : 'clearlove7',

                list_knowledges : 'http://localhost:3000/newfeed',

                list_abouts : "http://localhost:3000/about",

                list_applications : "http://localhost:3000/application",
                
                list_courses : "http://localhost:3000/courses",

                myabout : callbacks => {
                    
                    fetch(data[0].list_abouts)
    
                    .then(function (response) {
                
                        return response.json();

                    }).then(callbacks)
                },

                app : callbacks => {
                    
                    fetch(data[0].list_applications)
    
                    .then(function (response) {
                
                        return response.json();

                    }).then(callbacks)
                },
            }
        ];


            return {

                set(...value){

                    for (var i = 0; i < value.length; i++){

                        data.push(value[i]);
                    }
                },

                get(index){

                    for (var i = 0; i < data.length; i++){

                        if(index === i){

                            break;

                            return data[i];
                        }
                    }

                    return data[index];
                },

                gets_Tostring(){

                    var toString = "";

                    for (var i = 0; i < data.length; i++){

                        toString = toString + data[i];
                    }

                    return toString;
                },

                delete_toIndex(index){

                    delete data[index];

                },

                gets(){

                    for (var i = 0; i < data.length; i++){

                            console.log(data[i]);
                    }
                },

                get_index(value) {

                    return data.indexOf(value);
                }
            }
        }
)();





export function start_app(run){

    switch(run){

        case true:

                while(run){

                    var obj = Object.values(static_App.get(0))

                    static_App.get(0).myabout(about => console.log(about));

                    var model = document.querySelector("#layout_after_id");

                        static_App.get(0).app(function(calls){

                        console.log(calls);
                        
                        model.innerHTML = `<div class="render-mydata">
                                        <h1 style="text-align:left;">GitHub Analytics</h1>
                                        ${calls[0].analytics}
                                        </div>`
                        
                    });

            break;
        };

        break;

        case false :

            console.log("Application is shutting down");

        break;

        default:

            console.log(true + " or " + false);

        break;
    }
}






