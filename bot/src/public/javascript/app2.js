const static_App = (

    function(){

        var obj = [
                      {
                         me : {

                                firstname : "Tran",
                                lastname : "Tuong",  
                                age : 21,
                                address : "31 Nguyen Khuyen Da Nang"

                          },

                          crush : {

                                firstname : "Ho",
                                lastname : "Thao",  
                                age : 21,
                                address : "Go Da Nang"
                                
                          }
                      }
                  ];

        const data = [obj];

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

function start_app(run){

    switch(run){

        case false : 

            console.log("Application is shutting down");

        break;

        case true:

            setTimeout(function(){

                while(run){

                    console.log(static_App.get(0)[0].me.address);
            
                    var model = document.querySelector("#layout_after_id");
                    
                    return model.innerHTML = `<div class="render-mydata">
                            <li>firstname : ${static_App.get(0)[0].me.firstname}</li>
                            <li>lastname : ${static_App.get(0)[0].me.lastname}</li>
                            <li>age : ${static_App.get(0)[0].me.age}</li>
                            <li>address : ${static_App.get(0)[0].me.address}</li>
                            <li>firstname : ${static_App.get(0)[0].crush.firstname}</li>
                            <li>lastname : ${static_App.get(0)[0].crush.lastname}</li>
                            <li>age : ${static_App.get(0)[0].crush.age}</li>
                            <li>address : ${static_App.get(0)[0].crush.address}</li></div>`;
                }

            },3000);

        break;

        default:

            console.log(true + " or " + false);

        break;
    }
}

start_app(true)




