window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        changeNavbarStyle("#555", "10px 0");
    } else {
        changeNavbarStyle(getRandomHexColor(), "15px 0");
    }
}

function changeNavbarStyle(backgroundColor, padding) {
    var navbar = document.getElementById("navbar");
    navbar.style.backgroundColor = backgroundColor;
    navbar.style.padding = padding;
    navbar.style.fontWeight = 'bold'
}

function getRandomHexColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
