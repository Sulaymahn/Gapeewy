const offset = -200;
let isSticky = false;

const navBar = document.getElementById('navigation-bar');
const hero_one = document.getElementById('hero-one');
const navigation_brand_image = document.getElementById('navigation-brand-logo');
let slideId = null;

if (navBar) {
    window.addEventListener('scroll', (event) => {
        if (!isSticky && hero_one.getBoundingClientRect().top < offset) {
            navBar.style.transform = "translateY(" + (-navBar.getBoundingClientRect().height) + "px)";
            navigation_brand_image.src = "assets/images/gapeewy_logo.png";
            isSticky = true;
            clearTimeout(slideId);

            slideId = setTimeout(() => {
                navBar.classList.add("nav-sticky");
                navBar.style.transform = "translateY(0)";
            }, 200);
        } else if (isSticky && hero_one.getBoundingClientRect().top >= offset) {
            navBar.classList.remove("nav-sticky");
            navigation_brand_image.src = "assets/images/gapeewy_logo_light.png";
            navBar.style.transform = "";
            isSticky = false;
        }
    });
}