import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";
import loadContact from "./contact";

import appleFavIcon from "./assets/favicons/apple-touch-icon.png";
import favIcon32 from "./assets/favicons/favicon-32x32.png";
import favIcon16 from "./assets/favicons/favicon-16x16.png";

const renderHeader = function () {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantLogo = document.createElement("a");
    restaurantLogo.href = "#";
    restaurantLogo.textContent = "LA CARAVANA";
    restaurantLogo.classList.add("header__logo");

    header.appendChild(restaurantLogo);
    header.appendChild(renderNavigation());

    return header;
};

const renderNavigation = function () {
    const navigation = document.createElement("nav");
    navigation.classList.add("nav");

    const homeLink = document.createElement("a");
    homeLink.href = "#";
    homeLink.textContent = "Home";
    homeLink.classList.add("nav__link");
    homeLink.classList.add("nav__link--home");

    const aboutUsLink = document.createElement("a");
    aboutUsLink.href = "#";
    aboutUsLink.textContent = "About Us";
    aboutUsLink.classList.add("nav__link");
    aboutUsLink.classList.add("nav__link--about");

    const menuLink = document.createElement("a");
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    menuLink.classList.add("nav__link");
    menuLink.classList.add("nav__link--menu");

    const contactLink = document.createElement("a");
    contactLink.href = "#";
    contactLink.textContent = "Contact";
    contactLink.classList.add("nav__link");
    contactLink.classList.add("nav__link--contact");

    navigation.appendChild(homeLink);
    navigation.appendChild(aboutUsLink);
    navigation.appendChild(menuLink);
    navigation.appendChild(contactLink);

    return navigation;
};

const renderMain = function (renderSection) {
    const mainSection = document.createElement("main");
    mainSection.classList.add("main");
    const section = renderSection();
    mainSection.appendChild(section);

    return mainSection;
};

const renderWebsite = function () {
    // Create link elements
    const appleTouchIconLink = document.createElement("link");
    const favicon32Link = document.createElement("link");
    const favicon16Link = document.createElement("link");

    // Set attributes for each link element
    appleTouchIconLink.setAttribute("rel", "apple-touch-icon");
    appleTouchIconLink.setAttribute("sizes", "180x180");
    appleTouchIconLink.setAttribute("href", appleFavIcon);

    favicon32Link.setAttribute("rel", "icon");
    favicon32Link.setAttribute("type", "image/png");
    favicon32Link.setAttribute("sizes", "32x32");
    favicon32Link.setAttribute("href", favIcon32);

    favicon16Link.setAttribute("rel", "icon");
    favicon16Link.setAttribute("type", "image/png");
    favicon16Link.setAttribute("sizes", "16x16");
    favicon16Link.setAttribute("href", favIcon16);

    // Get the head element of the document
    const head = document.head;

    // Append the link elements to the head
    head.appendChild(appleTouchIconLink);
    head.appendChild(favicon32Link);
    head.appendChild(favicon16Link);

    const body = document.querySelector("body");
    body.appendChild(renderHeader());
    const mainElement = renderMain(loadHome);
    body.appendChild(mainElement);

    const homeLink = document.querySelector(".nav__link--home");
    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        mainElement.innerHTML = "";
        mainElement.appendChild(loadHome());
    });

    const aboutLink = document.querySelector(".nav__link--about");
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        mainElement.innerHTML = "";
        mainElement.appendChild(loadAbout());
    });

    const menuLink = document.querySelector(".nav__link--menu");
    menuLink.addEventListener("click", function (event) {
        event.preventDefault();
        mainElement.innerHTML = "";
        mainElement.appendChild(loadMenu());
    });

    const contactLink = document.querySelector(".nav__link--contact");
    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        mainElement.innerHTML = "";
        mainElement.appendChild(loadContact());
    });
};

export default renderWebsite;
