var themed;

let logos = document.getElementsByClassName("logos");

document.getElementById("lg").addEventListener("click", function () {
    window.open("https://kaloyan.tech/", "_self");
});

// function to set a given theme/color-scheme

function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme

document.getElementById("dw_btn").addEventListener("click", function () {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
        for (var i = 0; i < logos.length; ++i) {
            logos[i].style.filter =
                "invert(100%) drop-shadow(5px 5px 5px var(--color-img))";
        }
        themed = false;
    } else {
        for (var i = 0; i < logos.length; ++i) {
            logos[i].style.filter =
                "invert(0%) drop-shadow(5px 5px 5px var(--color-img))";
        }
        setTheme("theme-dark");
        themed = true;
    }
});

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-dark");
        themed = true;
    } else {
        setTheme("theme-light");
        for (var i = 0; i < logos.length; ++i) {
            logos[i].style.filter =
                "invert(100%) drop-shadow(5px 5px 5px var(--color-img))";
        }
        themed = false;
    }
})();
