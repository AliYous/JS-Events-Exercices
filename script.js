
perform()


function perform() {
    footerClick();
    navbarCollapse();
    cards();
    nucleaire();
    reduceCard();
}


//Exercice1
function footerClick() {
    let nbClicks = 0;
    let footer = document.querySelector('footer')
    console.log(footer)
    //Shows click everytime the user clicks
    footer.addEventListener("click", function () {
        console.log("click numéro " + nbClicks);
        nbClicks++;
    })
}
//Exercice2
function navbarCollapse() {
    let nav = document.getElementById("navbarHeader");
    let navBtn = document.querySelector(".navbar-toggler-icon");
    navBtn.addEventListener("click", function () {
        nav.classList.toggle("collapse");
    })
}
//Exercice3 et 4
function cards() {
    //First card
    let textFirstCard = document.querySelector(".card-body p");
    let editBtn = document.querySelectorAll(".card .btn")
    editBtn[1].addEventListener("click", function () {
        textFirstCard.style.color = "red";
    })

    //Second card
    let secondCard = document.querySelectorAll(".card")[1];
    let edtiBtnSecondCard = secondCard.querySelectorAll(".btn")[1]
    let textSecondCard = document.querySelectorAll(".card-body p")[1];
    console.log(textSecondCard)
    edtiBtnSecondCard.addEventListener("click", function () {
        if (textSecondCard.style.color === "green") {
            textSecondCard.style.color = "";
        } else {
            textSecondCard.style.color = "green";
        }
    })
}

//Exercice5
function nucleaire() {
    let nav = document.querySelector(".navbar");
    var link = document.getElementsByTagName("link")[0];
    console.log(link)
    nav.addEventListener("dblclick", function () {
        if (link.hasAttribute("rel")) {
            link.removeAttribute("rel");
        } else {
            link.setAttribute("rel", "stylesheet");
        }
    })
}

//Exercice 6
function reduceCard() {
    let cards = document.querySelectorAll(".card");

    for (let index in cards) {
        let cardImg = cards[index].querySelector(".card-img-top");
        let textCard = cards[index].querySelector(".card-body p");
        let viewBtn = cards[index].querySelector(".card .btn");
        viewBtn.addEventListener("mouseover", function () {

            if (viewBtn.classList.contains("mouse-over")) {
                textCard.style.display = "";
                cardImg.style.width = "";
                cardImg.style.margin = "";
            } else {
                textCard.style.display = "none";
                cardImg.style.width = "20%";
                cardImg.style.margin = "auto";
            }
            viewBtn.classList.toggle("mouse-over")
        })
    }
}