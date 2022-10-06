var key = "tuong"
var myobject = {
    website : { 
        profile : "Profile of Clearlove7",
        WebDeveloper :{
            developer : 'TuongClearlove7',
            info : { 
                name : {
                    firstname : "tran",
                    midllename : "the", 
                    lastname : "tuong",
                    fullname : "Tran The Tuong",
                    nickname :  "Clearlove7",
                    "Sort name" : ['tran','the','tuong'],
                    
                },
                age : {
                    myage : 20
                },
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
        }
    },
    [key] : {
        DeveloperPhone : "0915662495"
    },
    myinfo : function(){
       
            return myobject.website; // this or  myobject
    },
    getkey : function(){
        return this["this isn't key"];
    },
};

console.log(myobject.myinfo())
console.log(myobject.getkey())








