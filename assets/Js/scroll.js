window.onscroll = function ShowHeader() {
    let header = document.querySelector('nav')
    if (window.pageYOffset > 200) {
        header.classList.add('header__fixed')
        
    }
    else {
        header.classList.remove('header__fixed')
    }
}
