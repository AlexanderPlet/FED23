let toggled = false;

function toggleDropdown() {
    toggled = true;
    const dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function changeBackground() {
    if (localStorage.getItem("selectedTheme") === "light") {
        localStorage.setItem("selectedTheme", "dark");
        document.body.style.background = "#EEEAEA";
    } else {
        localStorage.setItem("selectedTheme", "light");
        document.body.style.background = "#FFF";
    }
}

window.onload = function () {
    document.body.style.background = (localStorage.getItem("selectedTheme") === "light" ? "#FFF" : "#EEEAEA");
}

window.onclick = function (event) {
    if (toggled) {
        toggled = false;
        return;
    }
    var navBody = document.getElementById('navBody');
    var clickedInsidePopup = navBody.contains(event.target);

    if (!event.target.matches('.myDropDown') && !clickedInsidePopup) {
        const dropdown = document.getElementById("myDropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}