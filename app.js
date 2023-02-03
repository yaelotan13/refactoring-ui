document.querySelector(".toggle-value-left").addEventListener("click", () => {
    // toggle
    document.querySelector(".toggle-value-right").classList.remove("toggle-value-active");
    document.querySelector(".toggle-value-left").classList.add("toggle-value-active");

    // container
    document.querySelector(".hero-section").classList.add("hero-section-top-color-serious");
    document.querySelector(".hero-section").classList.remove("hero-section-top-color-fun");

     // image
    document.querySelector(".hero-image").style.backgroundImage = "url('./personality-serious.jpg')";

    // content
    document.querySelector(".hero-content").style.fontFamily = "'Playfair Display', serif";
    document.querySelector(".hero-title").innerHTML = "Saving made simple";
    document.querySelector(".hero-text").innerHTML = "Explore our insurance, banking and retirement solutions";

    // button
    document.querySelector(".hero-button").classList.add("serious-hero-button");
    document.querySelector(".hero-button").classList.remove("fun-hero-button");
    document.querySelector(".hero-button").innerHTML = "Learn more";

    // icon
    document.querySelector(".hero-icon").style.backgroundImage = "url('./personality-serious-icon.png')";
    document.querySelector(".hero-icon-name").innerHTML = "City Bank";

    // tooltips
    document.querySelector(".hero-button-tooltip").innerHTML = "Button without any border radius looks more serious and formal";
    document.querySelector(".hero-title-tooltip").innerHTML = "Serif font family looks classic and elegant";
    document.querySelector(".hero-text-tooltip").innerHTML = "Using a less personal tone might feel more official or professional";
    document.querySelector(".hero-image-tooltip").innerHTML = "Real image is more classic and can easily convey a certain feeling";
    document.querySelector(".hero-color-tooltip").innerHTML = "Blue is a safe and familiar choice for primary color";
});

document.querySelector(".toggle-value-right").addEventListener("click", () => {
    // toggle
    document.querySelector(".toggle-value-left").classList.remove("toggle-value-active");
    document.querySelector(".toggle-value-right").classList.add("toggle-value-active");

    // container
    document.querySelector(".hero-section").classList.add("hero-section-top-color-fun");
    document.querySelector(".hero-section").classList.remove("hero-section-top-color-serious");

    // image
    document.querySelector(".hero-image").style.backgroundImage = "url('./personality-fun.jpg')";

    // content
    document.querySelector(".hero-content").style.fontFamily = "'Rubik', sans-serif";
    document.querySelector(".hero-title").innerHTML = "Welcome to your new banking experience";
    document.querySelector(".hero-text").innerHTML = "Tiered of complicated banking accounts? our Savings Account could be just right for you";

    // button
    document.querySelector(".hero-button").classList.add("fun-hero-button");
    document.querySelector(".hero-button").classList.remove("serious-hero-button");
    document.querySelector(".hero-button").innerHTML = "Check us out";

    // icon
    document.querySelector(".hero-icon").style.backgroundImage = "url('./personality-fun-icon.png')";
    document.querySelector(".hero-icon-name").innerHTML = "UBank";

    // tooltips
    document.querySelector(".hero-button-tooltip").innerHTML = "Border radius looks more playful";
    document.querySelector(".hero-title-tooltip").innerHTML = "Sans-serif font family looks playful";
    document.querySelector(".hero-text-tooltip").innerHTML = "Using friendlier, more casual language makes a site feel more approachable";
    document.querySelector(".hero-image-tooltip").innerHTML = "Illustrations is less serious, they feels younger and fun";
    document.querySelector(".hero-color-tooltip").innerHTML = "Pink is a fun young choice for a primary color";
});

// show and hide content to mouse-hover
document.addEventListener("mouseover", (e) => {
    if (e.target.classList && e.target.classList[0] === "tooltip-icon") {
        let target;

        e.target.classList.forEach(className => {
            if (className.startsWith("tooltip-name-")) {
                target = `.${className.slice("tooltip-name-".length)}-tooltip`;
                document.querySelector(target).style.display = "block";
            }
        })

        e.target.addEventListener("mouseleave", () => {
            document.querySelector(target).style.display = "none";
        })
    }
});


// show information tooltips
document.querySelector(".show-tooltip-checkbox").addEventListener("change", (e) => {
    document.querySelectorAll(".tooltip-icon").forEach(element => {
        element.style.display = e.target.checked ? "block" : "none";
    })
})