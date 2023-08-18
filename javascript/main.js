const navigationHeader = document.querySelector("#container_header_nav");
const headerNavigationButton = document.querySelector("#container_header_btnmenu");
// const btnclose = document.querySelector("#container_header_nav_btnclose");

document.addEventListener("DOMContentLoaded", function() {
    const navigationHeader = document.querySelector("#container_header_nav");
    const headerNavigationButton = document.querySelector("#container_header_btnmenu");

    headerNavigationButton.addEventListener("click", () => {
        navigationHeader.style.visibility = navigationHeader.style.visibility === "hidden" ? "visible" : "hidden"
    
    });

    document.addEventListener("click", function (event) {
        const targetElement = event.target;

        if (targetElement !== headerNavigationButton && !navigationHeader.contains(targetElement)) {
            navigationHeader.style.visibility = "hidden";
        }
    })
});



// document.addEventListener("DOMContentLoaded", function() {
//     const headerMenuButton = document.getElementById("#container_header_btnmenu");
//     const headerMenu = document.getElementById("#container_header_nav");

//     headerMenuButton.addEventListener("click", function() {
//         headerMenu.style.display = headerMenu.style.display === "none" ? "block" : "none";
//     });

//     document.addEventListener("click", function (event) {
//         const targetElement = event.target;

//         if (targetElement !== headerMenuButton && !headerMenu.contains(targetElement)) {
//             headerMenu.style.display = "none"
//         }
//     });
// });








// let btnopen = document.querySelector("#container_header_btnmenu"); 
// let nav = document.querySelector("#container_header_nav");

// //Function show and hide
// function showHide(e) {
//     e.preventDefault();
//     e.stopPropagation()

//     if (nav.style.visibility == "hidden") {
//         nav.style.visibility = "visible";
//     } else if (nav.style.visibility == "visible") { 
//         nav.style.visibility = "hidden";
//     }
// }

// btnopen.addEventListener("click", showHide, false);

// document.addEventListener("click", function(e) {
//     var click = e.target;

//     if (nav.style.visibility == "visible" && click != nav) {
//         nav.style.visibility = "hidden";
//     }

// }, false)