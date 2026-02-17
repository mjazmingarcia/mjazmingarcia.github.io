const portfolio = document.getElementById("projects");
if (portfolio) {
  // Show all cards by default
  filterSelection("all");

  function filterSelection(c) {
    var cards, i;
    cards = document.getElementsByClassName("card-div");
    if (c == "all") c = ""; // c becomes "" to show all cards

    for (i = 0; i < cards.length; i++) {
      cards[i].classList.remove("show");
      if (cards[i].className.indexOf(c) > -1) { // True for all
          cards[i].classList.add("show");
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
}

// Modal
const exampleModal = document.getElementById('exampleModal');
const presentation = document.querySelector('.my-presentation');
if (presentation && exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const title = button.getAttribute('data-bs-title')

    // UPDATE the modal's title
    const modalTitle = exampleModal.querySelector('.modal-title')
    modalTitle.textContent = `Presenting ${title}`
    
    // UPDATE Indicators
    const path = button.getAttribute('data-bs-slides-path')
    const n = button.getAttribute('data-bs-n-slides')
    const indicators = exampleModal.querySelector('.carousel-indicators')
    const inner = exampleModal.querySelector('.carousel-inner')
    indicators.textContent = ""
    inner.textContent = ""
    
    /// Buttons
    for (let i = 0; i < n; i++){
      const mySlide = document.createElement("button");
      mySlide.setAttribute("type", "button");
      mySlide.setAttribute("data-bs-target", "#carouselExampleIndicators");
      mySlide.setAttribute("data-bs-slide-to", `${i}`)
      mySlide.setAttribute("aria-label", `Slide ${i+1}`)
      if (i == 0) {
        mySlide.classList.add("active");
        mySlide.ariaCurrent = "true"
      } else {
      }

      indicators.appendChild(mySlide)

    }
    
    // Update Images 
    for (let i = 0; i < n; i++){
      const myItem = document.createElement("div");
      const myImage = document.createElement("img");
      myItem.classList.add("carousel-item");
      myImage.setAttribute("src", `${path+(i+1)}.jpg`);
      myImage.classList.add("d-block", "w-100");
      myImage.setAttribute("alt", "...");
      
      if (i == 0) {
        myItem.classList.add("active");
      } else {
      }

      myItem.appendChild(myImage);
      inner.appendChild(myItem);
    }
    
  })
}