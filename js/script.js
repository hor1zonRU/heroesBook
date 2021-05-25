const points = document.querySelectorAll(".point");
const modals = document.querySelectorAll(".modal");
const mainScreen = document.querySelector(".main-screen");

const modalPike = document.querySelector(".modal-pikeman");
const modalGrif = document.querySelector(".modal-griffin");
const modalSword = document.querySelector(".modal-swordsman");
const modalArcher = document.querySelector(".modal-archer");
const modalAngel = document.querySelector(".modal-angel");
const modalMonk = document.querySelector(".modal-monk");
const modalCavalier = document.querySelector(".modal-cavalier");

points.forEach( point => {
    point.addEventListener("mouseover", (e) => {
      
        if (e.target.classList.contains('pikeman')) {
            modalPike.classList.add("show")
            return
        }
        if (e.target.classList.contains('griffin')) {
            modalGrif.classList.add("show")
            return
        }
        if (e.target.classList.contains('swordsman')) {
            modalSword.classList.add("show")
            return
        }
        if (e.target.classList.contains('archer')) {
            modalArcher.classList.add("show")
            return
        }
        if (e.target.classList.contains('angel')) {
            modalAngel.classList.add("show")
            return
        }
        if (e.target.classList.contains('monk')) {
            modalMonk.classList.add("show")
            return
        }
        if (e.target.classList.contains('cavalier')) {
            modalCavalier.classList.add("show")
            return
        }
    })
})

points.forEach( point => {
    point.addEventListener("mouseleave", () => {
        modals.forEach( modal => {
            modal.classList.remove("show")
        })
    })
})

// Section Heroes Tabs

function openHero(evt, heroName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(heroName).style.display = "block";
    evt.currentTarget.className += " active";
}





