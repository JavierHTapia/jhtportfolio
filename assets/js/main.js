/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener("click",() => {
        navMenu.classList.add('show-sidebar')
    })
}
/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener("click",() => {
        navMenu.classList.remove('show-sidebar')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink =  document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('sidebar')
    navMenu.classList.remove('show-sidebar')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== SKILLS TABS ===============*/
const   tabs = document.querySelectorAll('[data-target]'),
        tabContent = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener("click",() => {
        const target = document.querySelector(tab.dataset.target)
        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills__active')
        })        
        target.classList.add('skills__active')
        tabs.forEach(tab => {
            tab.classList.remove('skills__active')
        })
        tab.classList.add('skills__active')
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container',{
    selectors:{
        target: '.work__card'
    },
    animation: {
        duration: 700
    }
})
/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')
function activeWork(){
    linkWork.forEach(l=>l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l=>l.addEventListener("click", activeWork))
/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}
document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup)
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-title span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-cat span").innerHTML = portfolioItem.querySelector(".work__cat").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
modelBtns = document.querySelectorAll('.services__button'),
modalCloses = document.querySelectorAll('.services__modal-close')
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modelBtns.forEach((modelBtn, i)=>{
    modelBtn.addEventListener('click',()=>{
        modal(i)
    })
})
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonials__container",{
    spaceBetween: 24,
    loop: true,
    grabCursor:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        576:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
            spaceBetween:48,
        }
    }
});
/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");
function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}
inputs.forEach((input)=>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll",navHighlighter);
function navHighlighter(){
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp= () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})
sr.reveal(`.home__social,.home__img,.footer__description, .footer__content, .footer__info`)
sr.reveal(`.my__info`,{origin:'bottom'})
sr.reveal(`.home__data,.about__data,.education,.skills__tabs,.contact__info`,{origin:'left'})
sr.reveal(`.about__img,.experience,.skills__content,.testimonials__container`,{origin:'right'})
sr.reveal(`.contact__form`,{interval:100})
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'light-theme'
const iconTheme = 'bxs-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'light':'dark'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)?'bxs-sun': 'bxs-moon'
if(selectedTheme){
    document.body.classList[selectedTheme === 'light'  ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bxs-sun'? 'add':'remove'](iconTheme)
}
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())    
})
/*=============== cursor on mousemove ===============*/ 
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
});
//cursos effects on mouseout
document.addEventListener("mouseout", () =>{
    cursor.style.display = "none"
});