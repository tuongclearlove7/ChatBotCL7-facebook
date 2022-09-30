function filterSelection(c) {
    var x, index;
        x = document.getElementsByClassName("COUMNN");
    if (c == "all") c = "";
        for (index = 0; index < x.length; index++) {
            RemoveClass(x[index], "show");
            if (x[index].className.indexOf(c) > -1) 
                AddClass(x[index], "show");
      }
  }
  
  function AddClass(element, name) {
    var index, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (index = 0; index < arr2.length; index++) {
          if (arr1.indexOf(arr2[index]) == -1) {
              element.className += " " + arr2[index];}
      }
  }
  
  function RemoveClass(element, name) {
    var index, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (index = 0; index < arr2.length; index++) {
            while (arr1.indexOf(arr2[index]) > -1) {
                  arr1.splice(arr1.indexOf(arr2[index]), 1);     
            }
        }
    element.className = arr1.join(" ");
}
  
  
