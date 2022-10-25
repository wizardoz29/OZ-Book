'use strict';

const bookOfTheWeek = document.getElementById("bookoftheweek");
const bookOfTheWeekNumber = document.getElementById("bookoftheweeknumber");
const bookChapters = document.getElementById("bookchapters");


// Change Book Details BOTW
const changeBookDetails = function(){
    bookOfTheWeek.innerHTML = "Fellowship of the Ring";
    bookOfTheWeekNumber.innerHTML = "1";
    bookChapters.innerHTML = "(22)";
}

changeBookDetails();


// Event Listener 
const addEventOneLem = function(elem, type, callback){
    if (elem.length > 1){
        for (let i = 0; i < elem.length; i++ ){
            elem[i].addEventListener(type, callback);
        }
    } else{
        elem.addEventListener(type, callback);
    }
}

// Navbar Toggle

const navbar = document.querySelector('[data-navbar]'); 
// const navbar = document.getElementById('navbar');
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function(){
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

addEventOneLem(navToggler, "click", toggleNavbar);

const closeNavbar = function (){
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOneLem(navbarLinks, "click", closeNavbar);


// Header active on scroll 

const header = document.querySelector("[data-header]");
// const headero = document.getElementsByClassName("header"); 
let value = 100

const activeHeader = function (){
    if(window.scrollY > 100){
        header.classList.add("done");
    } else{
        header.classList.remove("done");
    }
}
addEventOneLem(window, "scroll", activeHeader);

// Tab filter 

const tabCard = document.querySelectorAll("[data-tab-card]");
// const tabCard = document.getElementsByClassName("tab-card");
 
let lastTabCard = tabCard[0];

const navigateTab = function(){
    lastTabCard.classList.remove("active");
    this.classList.add("active");
    lastTabCard = this;
}

addEventOneLem(tabCard, "click", navigateTab)