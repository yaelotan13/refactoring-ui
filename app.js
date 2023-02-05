document.querySelector(".hero-value-left").addEventListener("click", () => {
    // toggle
    document.querySelector(".hero-value-right").classList.remove("toggle-value-active");
    document.querySelector(".hero-value-left").classList.add("toggle-value-active");

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

document.querySelector(".hero-value-right").addEventListener("click", () => {
    // toggle
    document.querySelector(".hero-value-left").classList.remove("toggle-value-active");
    document.querySelector(".hero-value-right").classList.add("toggle-value-active");

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
});

document.querySelector(".hierarchy-value-left").addEventListener("click", () => {
    // toggle
    document.querySelector(".hierarchy-value-right").classList.remove("toggle-value-active");
    document.querySelector(".hierarchy-value-left").classList.add("toggle-value-active");

    // title
    document.querySelector(".hierarchy-title").classList.remove("hierarchy-good-title");
    document.querySelector(".hierarchy-title").classList.add("hierarchy-bad");

    // text
    document.querySelector(".hierarchy-text").classList.remove("hierarchy-text-good");
    document.querySelector(".hierarchy-text").classList.add("hierarchy-bad");

    // price number
    document.querySelector(".hierarchy-price").classList.remove("hierarchy-price-good");
    document.querySelector(".hierarchy-price").classList.add("hierarchy-bad");

    // price label
    document.querySelector(".hierarchy-price-label").classList.remove("hierarchy-price-good");
    document.querySelector(".hierarchy-price-label").classList.add("hierarchy-bad");

    // review text
    document.querySelector(".hierarchy-review-text").classList.remove("hierarchy-text-good-small");
    document.querySelector(".hierarchy-review-text").classList.add("hierarchy-bad");

    // recommendation
    document.querySelector(".hierarchy-recommendation").classList.remove("hierarchy-text-good");
    document.querySelector(".hierarchy-recommendation").classList.add("hierarchy-bad");

    // book now button
    document.querySelector(".hierarchy-cta").classList.remove("hierarchy-cta-good");
    document.querySelector(".hierarchy-cta").classList.add("hierarchy-cta-bad");
});

document.querySelector(".hierarchy-value-right").addEventListener("click", () => {
    // toggle
    document.querySelector(".hierarchy-value-left").classList.remove("toggle-value-active");
    document.querySelector(".hierarchy-value-right").classList.add("toggle-value-active");

    // title
    document.querySelector(".hierarchy-title").classList.add("hierarchy-good-title");
    document.querySelector(".hierarchy-title").classList.remove("hierarchy-bad");

    // text
    document.querySelector(".hierarchy-text").classList.remove("hierarchy-bad");
    document.querySelector(".hierarchy-text").classList.add("hierarchy-text-good");

    // price number
    document.querySelector(".hierarchy-price").classList.remove("hierarchy-bad");
    document.querySelector(".hierarchy-price").classList.add("hierarchy-price-good");

    // text
    document.querySelector(".hierarchy-price-label").classList.remove("hierarchy-bad");
    document.querySelector(".hierarchy-price-label").classList.add("hierarchy-text-good");

    // review text
    document.querySelector(".hierarchy-review-text").classList.remove("hierarchy-bad");
    document.querySelector(".hierarchy-review-text").classList.add("hierarchy-text-good-small");

    // recommendation
    document.querySelector(".hierarchy-recommendation").classList.remove("hierarchy-bad");
    document.querySelector(".hierarchy-recommendation").classList.add("hierarchy-text-good-small");

    // book now button
    document.querySelector(".hierarchy-cta").classList.remove("hierarchy-cta-bad");
    document.querySelector(".hierarchy-cta").classList.add("hierarchy-cta-good");
});


document.querySelector(".labels-person-value-left").addEventListener("click", () => {
    // toggle
    document.querySelector(".labels-person-value-right").classList.remove("toggle-value-active");
    document.querySelector(".labels-person-value-left").classList.add("toggle-value-active");

    document.querySelectorAll(".labels-section-person-card-label").forEach(labelElement => {
        labelElement.style.display = "inline";
    });

    document.querySelector(".labels-section-person-card-name-value").classList.remove("labels-section-person-card-name-value-good");
    document.querySelector(".labels-section-person-card-job-title-value").classList.remove("labels-section-person-card-job-title-value-good");
    document.querySelector(".labels-section-person-card-email-value").classList.remove("labels-section-person-card-email-value-good");
    document.querySelector(".labels-section-person-card-phone-value").classList.remove("labels-section-person-card-phone-value-good");
});

document.querySelector(".labels-person-value-right").addEventListener("click", () => {
    // toggle
    document.querySelector(".labels-person-value-left").classList.remove("toggle-value-active");
    document.querySelector(".labels-person-value-right").classList.add("toggle-value-active");

    document.querySelectorAll(".labels-section-person-card-label").forEach(labelElement => {
        labelElement.style.display = "none";
    });

    document.querySelector(".labels-section-person-card-name-value").classList.add("labels-section-person-card-name-value-good");
    document.querySelector(".labels-section-person-card-job-title-value").classList.add("labels-section-person-card-job-title-value-good");
    document.querySelector(".labels-section-person-card-email-value").classList.add("labels-section-person-card-email-value-good");
    document.querySelector(".labels-section-person-card-phone-value").classList.add("labels-section-person-card-phone-value-good");
});

document.querySelector(".labels-product-value-left").addEventListener("click", () => {
    // toggle
    document.querySelector(".labels-product-value-right").classList.remove("toggle-value-active");
    document.querySelector(".labels-product-value-left").classList.add("toggle-value-active");

    document.querySelector(".labels-section-product-card-stock-container-good").classList.add("hide");
    document.querySelector(".labels-section-product-card-stock-container-good").classList.remove("display-inline");
    document.querySelector(".labels-section-product-card-stock-container-bad").classList.remove("hide");
    document.querySelector(".labels-section-product-card-stock-container-bad").classList.add("display-block");
});

document.querySelector(".labels-product-value-right").addEventListener("click", () => {
    // toggle
    document.querySelector(".labels-product-value-left").classList.remove("toggle-value-active");
    document.querySelector(".labels-product-value-right").classList.add("toggle-value-active");

    document.querySelector(".labels-section-product-card-stock-container-bad").classList.add("hide");
    document.querySelector(".labels-section-product-card-stock-container-bad").classList.remove("display-block");
    document.querySelector(".labels-section-product-card-stock-container-good").classList.remove("hide");
    document.querySelector(".labels-section-product-card-stock-container-good").classList.add("display-inline");
});