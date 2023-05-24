const inner = document.querySelector(".slidesContainerCarrusel");
const b = 284;

let cusId = 0;
class calimatic__Custom__Carousl {
    slidePx = 0;
    currentPosition = 0;

    NextSlide(that) {
        // let inner = that.parentElement.firstElementChild;
        if (this.currentPosition < inner.childElementCount - 1) {
            this.slidePx += (b * -1)
            inner.style.transform = `translateX(${this.slidePx}px)`
            console.log(inner.style.transform);
            this.currentPosition++
            this.currentPosition == inner.childElementCount - 1 ? that.classList.add('disable-button') : that.classList.remove('disable-button');
            this.currentPosition != 0 ? that.previousElementSibling.classList.remove('disable-button') : that.classList.remove('disable-button');
        }
        else {
            this.slidePx = 0;
            this.currentPosition = 0;
            inner.style.transform = `translateX(${this.slidePx}px)`;
            this.currentPosition++;
            this.currentPosition == (inner.childElementCount - 1) ? that.classList.remove('disable-button') : that.classList.remove('disable-button');
            this.currentPosition != 0 ? that.previousElementSibling.style.display = '' : that.classList.add('disable-button');
        }
    }

    PrevSlide(that) {
        // let inner = that.parentElement.firstElementChild;
        if (this.currentPosition > 0 && this.slidePx < 0) {
            this.slidePx += (b * 1)
            inner.style.transform = `translateX(${this.slidePx}px)`
            this.currentPosition--
            this.currentPosition == 0 ? that.classList.add('disable-button') : that.classList.remove('disable-button');
            this.currentPosition != inner.childElementCount ? that.nextElementSibling.classList.remove('disable-button') : that.classList.remove('disable-button');
        }
    }
}

let carouselPipeLine = []
let carouselObjPipeLine = []

function PrevSlide(that) {
    let slideWidth = that.parentElement.offsetWidth;

    if (!that.parentElement.hasAttribute('customIndex')) {
        let allCarousel = document.getElementsByClassName('mainContainerCarrusel');
        for (let i = 0; i < allCarousel.length; i++) {

            cusId = cusId + 1
            allCarousel[i].setAttribute('customIndex', `custom${i}${cusId}`)
        }
    }
    if (!carouselPipeLine.includes(that.parentElement.getAttribute('customIndex'))) {

        let obj = that.parentElement.getAttribute('customIndex');
        carouselPipeLine.push(obj);
        obj = new calimatic__Custom__Carousl()
        carouselObjPipeLine.push(obj);
        obj.PrevSlide(that, slideWidth)
    }
    else {
        let MyIndex = carouselPipeLine.indexOf(that.parentElement.getAttribute('customIndex'));
        let obj = carouselObjPipeLine[MyIndex];
        obj.PrevSlide(that, slideWidth)
    }
}

function NextSlide(that) {

    let slideWidth = that.parentElement.offsetWidth;

    if (!that.parentElement.hasAttribute('customIndex')) {
        let allCarousel = document.getElementsByClassName('mainContainerCarrusel');
        for (let i = 0; i < allCarousel.length; i++) {
            cusId = cusId + 1
            allCarousel[i].setAttribute('customIndex', `custom${i}${cusId}`)
        }
    }
    if (!carouselPipeLine.includes(that.parentElement.getAttribute('customIndex'))) {
        let obj = that.parentElement.getAttribute('customIndex');
        carouselPipeLine.push(obj);
        obj = new calimatic__Custom__Carousl()
        carouselObjPipeLine.push(obj);
        obj.NextSlide(that, slideWidth)

    }
    else {
        let MyIndex = carouselPipeLine.indexOf(that.parentElement.getAttribute('customIndex'));
        let obj = carouselObjPipeLine[MyIndex];
        obj.NextSlide(that, slideWidth)
    }
}



//-------------------------------------------- NAVBAR ---------------------------------------------

// MODIFICA LINK NAVBAR CUANDO CLICK
// EN DESARROLLO
const navLinkSeveral = document.querySelectorAll(".nav-link");
if (window.innerWidth >= 992) {
    navLinkSeveral.forEach(function (link) {
        link.addEventListener("click", function () {
            link.classList.add("prueba");
        });
    });
}

// const navLinkSeveral1 = document.querySelector(".navbar-nav");
// if (window.innerWidth >= 992) {
//     navLinkSeveral1.addEventListener("click", function () {
//         navLinkSeveral1.classList.add("prueba");
//     });
// }
// ---------------------------------------------------------------------------

const mainNavbar = document.querySelector("#mainNavbar");
const btnToggler = document.querySelector(".navbar-toggler");
const formNavbar = document.querySelector(".formNavbar");

const navLinks = document.querySelector("#navLinks");
window.addEventListener("scroll", function () {
    mainNavbar.classList.toggle("scrolled", window.scrollY > mainNavbar.clientHeight);
});

btnToggler.addEventListener("click", function () {
    // formNavbar.classList.toggle("hideFormNavbar");
    mainNavbar.classList.toggle("newPadding");
});

navLinks.addEventListener("click", function () {
    navLinks.classList.remove("show");
    mainNavbar.classList.remove("newPadding");
});


//---------------------------------------------- VIDEO ---------------------------------------------

const btn = document.querySelector(".mainPlayPauseSection");
const mainExplainVideo = document.querySelector(".mainExplainVideo");
const textIntro = document.querySelector(".textIntro");
const nameIntro = document.querySelector(".nameIntro");
const shadow = document.querySelector(".mainDivVideo");
const video = document.querySelector(".containerVideo");

btn.addEventListener("click", function () {
    if (btn.classList.contains("slides")) {
        btn.classList.remove("slides");
        btn.classList.remove("addMargin");
        mainExplainVideo.classList.add("linkShow");
        mainExplainVideo.classList.remove("linkHideCard");
        if (window.innerWidth <= 992) {
            textIntro.classList.add("linkShow");
            textIntro.classList.remove("linkHideTextIntro");
            nameIntro.classList.remove("addMarginTop");
            nameIntro.classList.add("removeMarginTop");
        }
        shadow.classList.add("mainDivVideo");
        video.pause();
    }
    else {
        btn.classList.add("slides");
        btn.classList.add("addMargin");
        mainExplainVideo.classList.add("linkHideCard");
        mainExplainVideo.classList.remove("linkShow");
        if (window.innerWidth <= 992) {
            textIntro.classList.add("linkHideTextIntro");
            textIntro.classList.remove("linkShow");
            nameIntro.classList.add("addMarginTop");
            nameIntro.classList.remove("removeMarginTop");
        }
        shadow.classList.remove("mainDivVideo");
        video.play();
    }
});

const preloader = document.querySelector(".preloaderVideo");
window.addEventListener("load", function () {
    preloader.classList.remove("hide-preloader");
    video.pause();
    setTimeout(function () {
        preloader.classList.add("hide-preloader");
    }, 500);
});

//---------------------------------------------- REVIEW ---------------------------------------------

// DARK BTN EN DESARROLLO

const darkBtn = document.querySelector(".darkBtn");
const sectionSegunda = document.querySelector(".sectionSegunda");
const mainDivDarkMode = document.querySelector(".mainDivDarkMode");
const descExplain = document.querySelector(".parrafoReview");
const projectName = document.querySelector(".projectNameReview");
const spanDark = document.querySelector(".spanDark");
const spanLigth = document.querySelector(".spanLigth");
const prevBtnDark = document.querySelector(".prev");
const nextBtnDark = document.querySelector(".next");

const scrollXReview = document.querySelectorAll(".itemScrollXReview");
scrollXReview.forEach(function (review) {
    darkBtn.addEventListener("click", function () {
        review.classList.toggle("fontReview");
        review.classList.toggle("darkBgCard");
    });
});
const authorReview = document.querySelectorAll(".authorReview");
authorReview.forEach(function (author) {
    darkBtn.addEventListener("click", function () {
        author.classList.toggle("shadowCityName");
    });
})

darkBtn.addEventListener("click", function () {
    sectionSegunda.classList.toggle("darkBackG");
    mainDivDarkMode.classList.toggle("darkBgCard");
    darkBtn.classList.toggle("darkBgCard");
    descExplain.classList.toggle("fontExplainProject");
    projectName.classList.toggle("ligthFont");
    if (window.innerWidth <= 992) {
        spanLigth.classList.toggle("btnShow");
        spanDark.classList.toggle("btnHide");
    }
    prevBtnDark.classList.toggle("darkPrevNextBtn");
    nextBtnDark.classList.toggle("darkPrevNextBtn");
})

// CARRUSEL -----------------------------------------------------------------------------

// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");

// const thirdReview = document.querySelector(".thirdReview");
// const secondReview = document.querySelector(".secondReview");

// const nextBtn = document.querySelector(".next-btn");


// let counter = 0;


// window.addEventListener("load", function () {
//     prevButton.classList.add("hideBtn");
// });

// nextButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     secondReview.classList.add("overVisible");
//     thirdReview.classList.add("overVisible");
//     if (counter >= carouselImages.length - 1) return;
//     carousel.style.transition = "transform 0.9s ease-in-out";
//     counter++;
//     if (counter > carouselImages.length - 2) {
//         nextButton.classList.add("hideBtn");
//     } else if (counter = carouselImages.length - 2) {
//         prevButton.classList.remove("hideBtn");
//     }
//     carousel.style.transform = `translateX(${-size * counter - 2}px)`;
//     nextButton.addEventListener("click", (e) => {
//         carousel.style.transform = `translateX(${-size * counter - 4}px)`;
//     });
// });

// prevButton.addEventListener("click", () => {

//     if (counter <= 0) return;
//     carousel.style.transition = "transform 0.9s ease-in-out";
//     counter--;
//     if (counter <= carouselImages.length - 2) {
//         nextButton.classList.remove("hideBtn");
//     } if (counter <= carouselImages.length - 3) {
//         prevButton.classList.add("hideBtn");
//     }
//     carousel.style.transform = `translateX(${-size * counter - 2}px)`;
//     prevButton.addEventListener("click", (e) => {
//         carousel.style.transform = `translateX(${-size * counter}px)`;
//     });
// });



// ------------------------------------------------

// const reviews = [
//     {
//         id: 1, // no es necesario
//         name: "Susan Smith",
//         job: "WEB DEVELOPER",
//         img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=180&q=60",
//         text: "UNO   Lorem ipsum dolor sit, amet consectetur adipisicing elit.Maxim labore culpa provident eum suscipit autem corporis.Ipsam quae, quos temporibus alias veritatis, necessitatibus aperiam nulla"
//     },
//     {
//         id: 2, // no es necesario
//         name: "Luis Perez",
//         job: "ARQUITECTO",
//         img: "https://images.unsplash.com/photo-1584518969469-c2d99c7760a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=180&q=60",
//         text: "DOS   Lorem ipsum dolor sit, amet consectetur adipisicing elit.Maxim labore culpa provident eum suscipit autem corporis.Ipsam quae, quos temporibus alias veritatis, necessitatibus aperiam nulla"
//     },
//     {
//         id: 3, // no es necesario
//         name: "Jorge Salmeron",
//         job: "ASTRONAUTA",
//         img: "https://images.unsplash.com/photo-1542909168-6296a31d7689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=180&q=60",
//         text: "TRES   Lorem ipsum dolor sit, amet consectetur adipisicing elit.Maxim labore culpa provident eum suscipit autem corporis.Ipsam quae, quos temporibus alias veritatis, necessitatibus aperiam nulla"
//     },
//     {
//         id: 4, // no es necesario
//         name: "Yndira Escobar",
//         job: "PRESIDENTE",
//         img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=180&q=60",
//         text: "CUATRO   Lorem ipsum dolor sit, amet consectetur adipisicing elit.Maxim labore culpa provident eum suscipit autem corporis.Ipsam quae, quos temporibus alias veritatis, necessitatibus aperiam nulla"
//     },
// ]
// const img = document.querySelector("#person-img");
// const author = document.querySelector("#author");
// const job = document.querySelector("#job");
// const info = document.querySelector("#info");

// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// const randomBtn = document.querySelector(".random-btn");

// let currentItem = 0;

// document.addEventListener("DOMContentLoad", function () {
//     showPerson(); // no es necesario escribir el parametro (currentItem)
// });
// function showPerson() {
//     const item = reviews[currentItem];
//     img.src = item.img;
//     author.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
// }
// nextBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     currentItem++;
//     if (currentItem > reviews.length - 1) {
//         currentItem = 0;
//     }
//     showPerson();

// });
// prevBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     currentItem--;
//     if (currentItem < 0) {
//         currentItem = reviews.length - 1;
//     }
//     showPerson();
// });
// randomBtn.addEventListener("click", function () {
//     currentItem = Math.floor(Math.random() * reviews.length);
//     showPerson();
// });

//---------------------------------------------- REVIEW ---------------------------------------------

const menuArray =
    [
        {
            id: 1,
            name: "Lasagna",
            title: "Lunch",
            category: "Lunch",
            price: 15,
            cent: 35,
            img: "images/lasaña.avif",
            desc: "Thin layers of pasta dough, filled with ricotta cheese, spinach, and then baked in a tomato sauce with melted mozzarella."
        },
        {
            id: 2,
            name: "Pastas",
            title: "Lunch",
            category: "Lunch",
            price: 10,
            cent: 35,
            img: "images/pastaMarinara1.avif",
            desc: "Dish of spaghetti pasta cooked with a tomato sauce, garlic, olive oil, and basil."
        },
        {
            id: 3,
            name: "Pizzas",
            title: "Lunch",
            category: "Lunch",
            price: 25,
            cent: 35,
            img: "images/PizzaMargarita.avif",
            desc: "Classic Italian pizza made with thin crust, tomato sauce, mozzarella cheese, and fresh basil."
        },
        {
            id: 4,
            name: "Minestrone",
            title: "Lunch",
            category: "Lunch",
            price: 5,
            cent: 35,
            img: "images/Minestrone.avif",
            desc: "Traditional Italian soup made with tomatoes, onions, garlic, basil, and beef broth."
        },
        {
            id: 5,
            name: "Risotto",
            title: "Dinner",
            category: "Dinner",
            price: 12,
            cent: 35,
            img: "images/Rissoto.avif",
            desc: "Creamy Italian risotto dish made with Arborio rice, mushrooms, and parmesan cheese."
        },
        {
            id: 6,
            name: "Tiramisu",
            title: "Desserts",
            category: "Desserts",
            price: 12,
            cent: 35,
            img: "images/Tiramisu.avif",
            desc: "Italian dessert made with ladyfingers soaked in a liqueur coffee mixture, layered with a sweetened mascarpone cheese."
        },
        {
            id: 7,
            name: "House Wine",
            title: "Wines",
            category: "Wines",
            price: 5,
            cent: 35,
            img: "images/Minestrone.avif",
            desc: "Rich, full-bodied red with notes of blackberry, leather, and vanilla on the finish."
        },
        {
            id: 8,
            name: "House Wine",
            title: "Wines",
            category: "Wines",
            price: 5,
            cent: 35,
            img: "images/Minestrone.avif",
            desc: "Rich, full-bodied red with notes of blackberry, leather, and vanilla on the finish."
        },
    ];

const sectionCenter = document.querySelector(".divCentralMenu");
const sectionBtns = document.querySelector(".btnsMenu");


window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menuArray);
    displayMenuButtons();
});

function displayMenuItems(menuArray) {
    const displayMenu = menuArray.map(function (part) {
        return `<div class="divImageMenu col-auto">
        <img class="imgPlato"
            src=${part.img}
            alt="">
    </div>
    <div class="mainDivMenu col-6">
        <div class="mainDivPlato">
            <div class="titlePlato">
                <h4 class="namePlato">${part.name}</h4>
                <h4 class="price">$${part.price}<sup class"cents"> ${part.cent}</h4></sup>
            </div>
            <p class="textPlato">${part.desc}</p>
        </div>
    </div>`
    })
        .join("");
    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
    let newArrayBtns = menuArray.reduce(function (btn, arrayItems) {
        if (!btn.includes(arrayItems.category)) {
            btn.push(arrayItems.category);
        }
        return btn;
    },
        ["All"]
    );
    const displayBtns = newArrayBtns.map(function (category) {
        return `<button class="filter-btn changeBorderBtn" data-id=${category}>${category}</button>`
    })
        .join("");
    sectionBtns.innerHTML = displayBtns;

    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const selectById = e.currentTarget.dataset.id;
            const menuByCategory = menuArray.filter(function (menuItem) {
                if (menuItem.category === selectById) {
                    return menuItem;
                }
            });
            if (selectById === "All") {
                displayMenuItems(menuArray);
            }
            else {
                displayMenuItems(menuByCategory);
            }
        });
        btn.addEventListener("click", function () {
            filterBtns.forEach(function (btn) {
                btn.classList.remove("changeBorderBtn");
            });
            this.classList.add("changeBorderBtn");
        });
    });
}



//---------------------------------------------- ACCORDION ---------------------------------------------

const containers = document.querySelectorAll(".containerAccordion");
const containers1 = document.querySelectorAll(".containerAccordion1");

const btnAgregar = document.querySelector(".btnAgregar");
const linkHide = document.querySelector(".linkHide");

const btnDivCounterUno = document.querySelector(".btnDivCounterUno");



btnAgregar.addEventListener("click", function () {
    linkHide.classList.add("containerAccordion");
    linkHide.classList.remove("linkHide");

});

containers.forEach(function (parametro) {
    parametro.addEventListener("click", function () {
        this.classList.toggle("active");
        btnDivCounterUno.classList.toggle("btnDivCounterUno");
    });
});
containers1.forEach(function (parametro) {
    parametro.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});


// ----------------------------------------- COUNTER ---------------------------------------------------

let count = 0;
const btns = document.querySelectorAll(".btn");

const value = document.querySelector(".numberCounter");
const title = document.querySelector(".titleCounter");
const titulo = document.querySelector(".titulo");

const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.currentTarget.classList;

        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hexa[getRandomNumber()];
        }

        if (style.contains("decrease")) {
            count--;
        } else if (style.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            document.body.style.backgroundColor = hexColor;
        }
        if (count < 0) {
            document.body.style.backgroundColor = hexColor;
        }
        if (count === 0) {
            value.style.color = "black";
            title.style.color = "black";
            titulo.style.color = "black";
            document.body.style.backgroundColor = "white";
        }
        value.textContent = count;

        if (!e.detail || e.detail == 1) { return true; }
        else { return false; }

        // this.disabled = true;
        // setTimeout(function () { btn.disabled = false; }, 3000);
    });
    function getRandomNumber() {
        return Math.floor(Math.random() * hexa.length);
    }
});

