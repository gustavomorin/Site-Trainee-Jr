//login e registro
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-default');
const btnPopupmobile = document.querySelector('.mobile_menu .btn-default');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

btnPopupmobile.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    console.log('ola')
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


//mobile menu

$(document).ready(function(){
    $('.mobile_btn').on('click', function(){
        $('.mobile_menu').toggleClass('active');
        $('.mobile_btn').find('i').toggleClass('fa-x');
    });
});
