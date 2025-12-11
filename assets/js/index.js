// Show all cards by default
filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card-div");
  if (c == "all") c = ""; // c becomes "" to show all cards

  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("show");
    if (x[i].className.indexOf(c) > -1) { // True for all
        x[i].classList.add("show");
    }
  }
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) { 
  btns[i].addEventListener("click", function() {
    let filterValue = this.dataset.filter;
    filterSelection(filterValue); 

    var current = document.querySelector(".btn.active"); 
    
    if (current) { 
        current.classList.remove("active");
    }
    
    // Add 'active' class to the button that was just clicked
    this.classList.add("active");
  });
}