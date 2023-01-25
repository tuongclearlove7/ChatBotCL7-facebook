let list_cards = [];
list_cards[0] = "button";
list_cards[1] = "div";
list_cards[2] = "a";
list_cards[3] = "p";
list_cards[4] = "img";
list_cards[5] = "span";
list_cards[6] = "html";
list_cards[7] = "li";


for(let index in list_cards){

    let myget = document.getElementsByTagName(list_cards[index]);
    console.log(myget);
   
}
   
let getElement = document.querySelectorAll(list_cards[6]);

let counts = 0;

for (let j in  getElement){ 

    getElement[j].onclick = (event) => { 

        let e = event.target;
        event.preventDefault();
        let myobj = {

            Index : counts++,
            Object : e,

            getObj : function(){

                return this.Object;// this or myobj
            },
        }
        console.log(myobj);
        console.log("click : " + counts, myobj.getObj());
    };
}




















