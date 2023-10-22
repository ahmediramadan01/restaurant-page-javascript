import pizzaImage from "./assets/pizza-top.png";

const renderHome = function () {
    const homeSection = document.createElement("section");
    homeSection.classList.add("home");

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "LA CARAVANA";

    const paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
    paragraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.
        Vestibulum ut felis et lorem porta congue vitae nec turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.`;

    const image = document.createElement("img");
    image.src = pizzaImage;

    homeSection.appendChild(heading);
    homeSection.appendChild(paragraph);
    homeSection.appendChild(image);

    return homeSection;
};

function loadHome() {
    const mainSection = document.createElement("main");
    mainSection.classList.add("main");
    mainSection.textContent = "";
    mainSection.appendChild(renderHome());

    return mainSection;
}

export default loadHome;
