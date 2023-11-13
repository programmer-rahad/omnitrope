
var selector = (selector, areAll) => {
    const all = document.querySelectorAll(selector)
    const single = document.querySelector(selector)
    return areAll ? all : single
}
function Header() {
    this.loginLogout = selector('header .login-logout');
    this.menuIcon = selector('header .container>div>div:last-child svg');
    this.navbar = selector('header nav');

    this.navSlideToggle = function(){ 
        this.menuIcon.addEventListener('click',function(){
            this.navbar.classList.toggle('active');        
        }.bind(this))
    } 

    this.activate = function(){
        // Login Logout Size 
        if(this.loginLogout) {
            const length = this.loginLogout.innerText.length 
            this.loginLogout.style.width = length <= 5 ? '48px' : '60px';
        }

        if(this.menuIcon) {
            /// Nav Slide Toggle
            this.navSlideToggle();
        }
    }

    this.activate();
}
// dome content loaded 
window.addEventListener('DOMContentLoaded', function () {
    // Header
    const header = new Header();

})

window.addEventListener('load', function () { 
    var welcomeModal = new bootstrap.Modal(document.getElementById('welcome-modal'), {
        keyboard: false,
        backdrop: 'static'
    })
    welcomeModal.show();

    var balancePopupModal = new bootstrap.Modal(document.getElementById('balance-popup-modal'), {
        keyboard: false,
        backdrop: 'static'
    })
    balancePopupModal.show();


    // setTimeout(function(){
    //     myModal.hide();
    // },2000)
})

// jQuery
$('.play-button').magnificPopup({
    type: 'iframe'
    // other options
  });