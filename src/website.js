import loadHome from "./home";
import loadAbout from "./about";

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
    aboutUsLink.classList.add("nav__link--menu");

    const contactLink = document.createElement("a");
    contactLink.href = "#";
    contactLink.textContent = "Contact";
    contactLink.classList.add("nav__link");
    aboutUsLink.classList.add("nav__link--contact");

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
    const body = document.querySelector("body");
    body.appendChild(renderHeader());
    const mainElement = renderMain(loadHome);
    body.appendChild(mainElement);

    const homeLink = document.querySelector(".nav__link--home");
    homeLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
        mainElement.innerHTML = ""; // Clear the current main content
        mainElement.appendChild(loadHome()); // Load and display the "Home" content
    });

    const aboutLink = document.querySelector(".nav__link--about");
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        mainElement.innerHTML = "";
        mainElement.appendChild(loadAbout());
    });
};

export default renderWebsite;
