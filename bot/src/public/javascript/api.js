let key = "tuong"
let mykey = "this isn't key";
let myobject = {
    website : { 
        profile : "Profile of Clearlove7",
        WebDeveloper :{
            developer : 'TuongClearlove7',
            info : { 
                "birth day" : {
                    day : 16,
                    month : 1,
                    year : 2003
                },
                name : {
                    firstname : "tran",
                    middlename : "the", 
                    lastname : "tuong",
                    fullname : "Tran The Tuong",
                    nickname :  "Clearlove7",
                    "Sort names" : ['tran','the','tuong'],
                },
                age : 20,
                address : {
                    continents : "Asia",
                    country : "Viet Nam",
                    city : "Da Nang",
                    district: 'Lien chieu',
                    ward : 'Hoa Khanh Nam',
                    street : {
                        "street name" : 'Nguyen Khuyen',
                        "home number" : '31',
                    }
                },  
            },
            about : {
                "Lucky number" : 7,
                "School of Dev" : "Duy Tan",
                crush : {
                    hide : {
                        slogan : "Thao oi anh yeu em nhieu lam !",
                        firstname : "Ho",
                        middlename2 : "Thi",
                        middlename : "Phuong",
                        lastname : "Thao",
                        nickname : "Rose",
                        fullname : "Ho Thi Phuong Thao",
                        "Sort names": ["Ho","Thi","Phuong","Thao"],
                        age : 19,
                        "birth day" : {
                            day : 9,
                            month : 9,
                            year : 2003
                        },
                        "School of Crush" : "Duy Tan",
                    }
                },     
            }
        }
    },
    [key] : {
        DeveloperPhone : "0915662495"
    },
    myinfo : function(){
       
            return myobject.website; // this or  myobject
    },
    getkey : function(errkey){
        return this[errkey];//dfdsfdfdfsdfsđfdsfdsf
    },
};

console.log(myobject.myinfo())
console.log(myobject.getkey(mykey))












