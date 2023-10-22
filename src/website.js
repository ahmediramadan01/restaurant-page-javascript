import renderHome from "./home";

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

    const aboutUsLink = document.createElement("a");
    aboutUsLink.href = "#";
    aboutUsLink.textContent = "About Us";
    aboutUsLink.classList.add("nav__link");

    const menuLink = document.createElement("a");
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    menuLink.classList.add("nav__link");

    const contactLink = document.createElement("a");
    contactLink.href = "#";
    contactLink.textContent = "Contact";
    contactLink.classList.add("nav__link");

    navigation.appendChild(homeLink);
    navigation.appendChild(aboutUsLink);
    navigation.appendChild(menuLink);
    navigation.appendChild(contactLink);

    return navigation;
};

const renderMain = function () {
    const mainSection = document.createElement("main");
    mainSection.classList.add("main");
    mainSection.appendChild(renderHome());

    return mainSection;
};

const renderWebsite = function () {
    const body = document.querySelector("body");

    body.appendChild(renderHeader());
    body.appendChild(renderMain());
};

export default renderWebsite;
