// ------------------------------ CARRUSEL DEL REVIEW PROJECT -------------------------------------------


const inner = document.querySelector(".slidesContainerCarrusel");
const b = 284;

let cusId = 0;
class Carrusel {
    slidePx = 0;
    currentPosition = 0;


    NextSlide(that) {
        if (this.currentPosition < inner.childElementCount - 1) {
            this.slidePx += (b * -1)
            inner.style.transform = `translateX(${this.slidePx}px)`
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
        obj = new Carrusel()
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
        obj = new Carrusel()
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


const btnToggler = document.querySelector(".navbar-toggler");
const formNavbar = document.querySelector(".formNavbar");

const navLinks = document.querySelector("#navLinks");


window.addEventListener("scroll", function () {
    mainNavbar.classList.toggle("scrolled", window.scrollY > mainNavbar.clientHeight);
});

btnToggler.addEventListener("click", function () {
    mainNavbar.classList.toggle("newPadding");
});

navLinks.addEventListener("click", function () {
    navLinks.classList.remove("show");
    mainNavbar.classList.remove("newPadding");
});


//-----------------------------CAMBIOS PLAY/PAUSE SECCIÓN VIDEO ---------------------------------------------


const btn = document.querySelector(".mainPlayPauseSection");
const mainExplainVideo = document.querySelector(".mainExplainVideo");
const textIntro = document.querySelector(".textIntro");
const textIntro1 = document.querySelector(".textIntro1");
const nameIntro = document.querySelector(".nameIntro");
const nameIntro1 = document.querySelector(".nameIntro1");
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
            textIntro1.classList.add("linkShow");
            textIntro1.classList.remove("linkHideTextIntro");
            nameIntro.classList.remove("addMarginTop");
            nameIntro.classList.add("removeMarginTop");
            nameIntro1.classList.remove("addMarginTop");
            nameIntro1.classList.add("removeMarginTop");
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
            textIntro1.classList.add("linkHideTextIntro");
            textIntro1.classList.remove("linkShow");
            nameIntro.classList.add("addMarginTop");
            nameIntro.classList.remove("removeMarginTop");
            nameIntro1.classList.add("addMarginTop");
            nameIntro1.classList.remove("removeMarginTop");
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


//---------------------------------CARRUSEL Y DARK/LIGHT REVIEW PROJECT ----------------------------------


const darkBtn = document.querySelector(".darkBtn");
const sectionSegunda = document.querySelector(".sectionSegunda");
const mainDivDarkMode = document.querySelector(".mainDivDarkMode");
const descExplain = document.querySelector(".parrafoReview");
const descExplain1 = document.querySelector(".parrafoReview1");
const projectName = document.querySelector(".projectNameReview");
const spanDark = document.querySelector(".spanDark");
const spanLigth = document.querySelector(".spanLigth");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const scrollXReview = document.querySelectorAll(".itemScrollXReview");

let isColored = false;


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
});


darkBtn.addEventListener("click", function () {
    sectionSegunda.classList.toggle("darkBackG");
    mainDivDarkMode.classList.toggle("darkBgCard");
    darkBtn.classList.toggle("darkBgCard");
    descExplain.classList.toggle("fontExplainProject");
    descExplain1.classList.toggle("fontExplainProject");
    projectName.classList.toggle("ligthFont");
    next.classList.toggle("fontExplainProject");
    prev.classList.toggle("fontExplainProject");
    if (window.innerWidth <= 992) {
        spanLigth.classList.toggle("btnShow");
        spanDark.classList.toggle("btnHide");
    }
});


//---------------------------------------------- RESTAURANT ---------------------------------------------


const menuArray =
    [
        {
            id: 1,
            name: "Lasagna",
            title: "Lunch",
            category: "Lunch",
            price: 12,
            cent: 35,
            img: "images/FotoLasaña.avif",
            desc: "Thin layers of pasta, filled with ricotta cheese, spinach, and then baked in a tomato sauce with mozzarella.",
            descEs: "Finas capas de masa de pasta, rellenas de queso ricotta, espinacas y luego horneadas en una salsa de tomate con mozzarella derretida."
        },
        {
            id: 2,
            name: "Pastas",
            title: "Lunch",
            category: "Lunch",
            price: 12,
            cent: 35,
            img: "images/FotoPasta.avif",
            desc: "Dish of spaghetti pasta cooked with a tomato sauce, garlic, olive oil, and basil.",
            descEs: "Dish of spaghetti pasta cooked with a tomato sauce, garlic, olive oil, and basil."
        },
        {
            id: 3,
            name: "Pizzas",
            title: "Dinner",
            category: "Dinner",
            price: 10,
            cent: 35,
            img: "images/FotoPizza.avif",
            desc: "Classic Italian pizza made with thin crust, tomato sauce, mozzarella cheese, and fresh basil.",
            descEs: "Classic Italian pizza made with thin crust, tomato sauce, mozzarella cheese, and fresh basil."
        },
        {
            id: 4,
            name: "Minestrone",
            title: "Lunch",
            category: "Lunch",
            price: 8,
            cent: 35,
            img: "images/FotoMinestrone.avif",
            desc: "Traditional Italian soup made with tomatoes, onions, garlic, basil, and beef broth.",
            descEs: "Traditional Italian soup made with tomatoes, onions, garlic, basil, and beef broth."
        },
        {
            id: 5,
            name: "Risotto",
            title: "Dinner",
            category: "Dinner",
            price: 14,
            cent: 35,
            img: "images/FotoRissoto.avif",
            desc: "Creamy Italian risotto dish made with Arborio rice, mushrooms, and parmesan cheese.",
            descEs: "Creamy Italian risotto dish made with Arborio rice, mushrooms, and parmesan cheese."
        },
        {
            id: 6,
            name: "Tiramisu",
            title: "Desserts",
            category: "Desserts",
            price: 5,
            cent: 35,
            img: "images/FotoTiramisu.avif",
            desc: "Made with ladyfingers soaked in a liqueur coffee mixture, layered with a sweetened mascarpone cheese.",
            descEs: "Made with ladyfingers soaked in a liqueur coffee mixture, layered with a sweetened mascarpone cheese."
        },
        {
            id: 7,
            name: "Red Wine",
            title: "Wines",
            category: "Wines",
            price: 3,
            cent: 35,
            img: "images/FotoRedWine.avif",
            desc: "Rich, full-bodied red with notes of blackberry, leather, and vanilla on the finish.",
            descEs: "Rich, full-bodied red with notes of blackberry, leather, and vanilla on the finish."
        },
        {
            id: 8,
            name: "White Wine",
            title: "Wines",
            category: "Wines",
            price: 3,
            cent: 35,
            img: "images/FotoWhiteWine.avif",
            desc: "Rich, full-bodied white with notes of blackberry, leather, and vanilla on the finish.",
            descEs: "Rich, full-bodied white with notes of blackberry, leather, and vanilla on the finish."
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
            <p class="textPlato idioma">${part.desc}</p>
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

const chevron = document.querySelectorAll(".simboloChevron");


chevron.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        btn.classList.toggle("down");
    });
});


// ----------------------------------------- COUNTER ---------------------------------------------------


let count = 0;
const btns = document.querySelectorAll(".btns");

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
            document.body.style.backgroundColor = "white";
        }
        value.textContent = count;

        if (!e.detail || e.detail == 1) { return true; }
        else { return false; }

    });

    function getRandomNumber() {
        return Math.floor(Math.random() * hexa.length);
    }
});


//--------------------------------- CAMBIO DE IDIOMA ----------------------------------------


const btnEsp = document.querySelectorAll(".btnEsp");
const btnIng = document.querySelectorAll(".btnIng");
const contents = document.querySelectorAll(".idioma");


btnEsp.forEach(function (btn) {
    btn.addEventListener("click", function () {
        mostrarContenido("es");
        btn.classList.add("underline");
        btnIng.forEach(function (btn1) {
            btn1.classList.remove("underline");
        });
    });
});

btnIng.forEach(function (btn) {
    btn.addEventListener("click", function () {
        mostrarContenido("en");
        btn.classList.add("underline");
        btnEsp.forEach(function (btn1) {
            btn1.classList.remove("underline");
        });
    });
});

function mostrarContenido(idioma) {
    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];
        var id = content.getAttribute("id");
        if (id === "content-" + idioma) {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }
}