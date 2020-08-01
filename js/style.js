var themed;

let tog = document.getElementById('toggle')
let logo = document.getElementById('lg')

let strlw = logo.getAttribute('src');
let strlb = strlw.replace(/w/g , 'b');

let strtw = tog.getAttribute('src');
let strtb = strtw.replace('sun' , 'moon');

document.getElementById('lg').addEventListener('click' , function(){
    window.open('https://kaloyan.tech/' , '_self')
});

// function to set a given theme/color-scheme


function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme


document.getElementById('dw_btn').addEventListener('click' , function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        tog.setAttribute('src' , strtb)
        logo.setAttribute('src' , strlb)
        themed = false;
    } else {
        setTheme('theme-dark');
        tog.setAttribute('src' , strtw)
        logo.setAttribute('src' , strlw)
        themed = true;
    }
});


// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        themed = true;
    } else {
        setTheme('theme-light');
        tog.setAttribute('src' , strtb)
        logo.setAttribute('src' , strlb)
        themed = false;
    }
})();   