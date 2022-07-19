//encode file name 
function ConvertStringToHex(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {//string to hex code
           arr[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    console.log("3ndc0d3c17" + arr.join("3ndc0d3c17"));
    return "3ndc0d3c17" + arr.join("3ndc0d3c17");
  }
  
  var str = prompt("input string : ")//data
  ConvertStringToHex(str);//Output: 3ndc0d3c1700643ndc0d3c1700613ndc0d3c1700743ndc0d3c170061
  let  con = "stirng";
  