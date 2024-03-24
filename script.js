function highlight(element) {
    var navLinks = document.querySelectorAll('.navbar nav ul li a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    element.classList.add('active');
}