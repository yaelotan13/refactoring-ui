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

document.querySelector(".labels-dashboard-value-left").addEventListener("click", () => {
    // toggle
    document.querySelector(".labels-dashboard-value-left").classList.add("toggle-value-active");
    document.querySelector(".labels-dashboard-value-right").classList.remove("toggle-value-active");

    // title
    document.querySelector(".labels-section-dashboard-card-heart-title").classList.remove("labels-section-dashboard-card-heart-title-good");
    document.querySelector(".labels-section-dashboard-card-heart-title").innerHTML = "Heart rate";

    // heart rate value
    document.querySelector(".labels-section-dashboard-card-heart-bpm").classList.remove("labels-section-dashboard-card-heart-bpm-good");
    document.querySelector(".labels-section-dashboard-card-heart-value").classList.remove("labels-section-dashboard-card-heart-value-good");
});

document.querySelector(".labels-dashboard-value-right").addEventListener("click", () => {
    // toggle
    document.querySelector(".labels-dashboard-value-left").classList.remove("toggle-value-active");
    document.querySelector(".labels-dashboard-value-right").classList.add("toggle-value-active");

    // title
    document.querySelector(".labels-section-dashboard-card-heart-title").classList.add("labels-section-dashboard-card-heart-title-good");
    document.querySelector(".labels-section-dashboard-card-heart-title").innerHTML = "HEART RATE";

    // heart rate value
    document.querySelector(".labels-section-dashboard-card-heart-bpm").classList.add("labels-section-dashboard-card-heart-bpm-good");
    document.querySelector(".labels-section-dashboard-card-heart-value").classList.add("labels-section-dashboard-card-heart-value-good");
});

// resizing the grid spacing example
const gridSpacingContainer = document.querySelector('.spacing-grid-section');
document.querySelector(".resizer").addEventListener('mousedown', initDragGridContainer, false);

let startX, startY, startWidth, startHeight;

function initDragGridContainer(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(gridSpacingContainer).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(gridSpacingContainer).height, 10);
    document.documentElement.addEventListener('mousemove', doDragGridContainer, false);
    document.documentElement.addEventListener('mouseup', stopDragGridContainer, false);
}

function doDragGridContainer(e) {
    const newWidth = startWidth + e.clientX - startX;
    const newHeight = startHeight + e.clientY - startY;

    if (newWidth < 950 && newWidth > 550) {
        gridSpacingContainer.style.width = (startWidth + e.clientX - startX) + 'px';
    }
    if (newHeight < 400 && newHeight> 300) {
        gridSpacingContainer.style.height = (startHeight + e.clientY - startY) + 'px';
    }
}

 function stopDragGridContainer() {
     document.documentElement.removeEventListener('mousemove', doDragGridContainer, false);
     document.documentElement.removeEventListener('mouseup', stopDragGridContainer, false);
}

document.querySelector(".spacing-grid-value-left").addEventListener("click", () => {
    // toggle
    document.querySelector(".spacing-grid-value-right").classList.remove("toggle-value-active");
    document.querySelector(".spacing-grid-value-left").classList.add("toggle-value-active");

    // hide grid column bar
    document.querySelectorAll(".spacing-grid-section-grid-column").forEach(column => {
        column.classList.remove("hide");
    });

    // side bar
    document.querySelector(".spacing-grid-section-side-bar").classList.remove("spacing-grid-section-side-bar-fixed");
});

document.querySelector(".spacing-grid-value-right").addEventListener("click", () => {
    // toggle
    document.querySelector(".spacing-grid-value-right").classList.add("toggle-value-active");
    document.querySelector(".spacing-grid-value-left").classList.remove("toggle-value-active");

    // hide grid column bar
    document.querySelectorAll(".spacing-grid-section-grid-column").forEach(column => {
        column.classList.add("hide");
    });

    // side bar
    document.querySelector(".spacing-grid-section-side-bar").classList.add("spacing-grid-section-side-bar-fixed");
});

document.querySelector(".spacing-white-space-value-left").addEventListener("click", () => {
    // toggle
    document.querySelector(".spacing-white-space-value-right").classList.remove("toggle-value-active");
    document.querySelector(".spacing-white-space-value-left").classList.add("toggle-value-active");

    // inner container padding
    document.querySelector(".spacing-white-space-content-container").classList.remove("spacing-white-space-content-container-space");
    document.querySelector(".spacing-white-space-content-container").classList.add("spacing-white-space-content-container-dense");

    // stars container margin top
    document.querySelector(".spacing-white-space-stars-container").classList.remove("spacing-white-space-stars-container-space");
    document.querySelector(".spacing-white-space-stars-container").classList.add("spacing-white-space-stars-container-dense");

    // star container margin
    document.querySelectorAll(".spacing-white-space-star-container").forEach(element => {
        element.classList.remove("spacing-white-space-star-container-space");
        element.classList.add("spacing-white-space-star-container-dense");
    });

    // add review content margin
    document.querySelector(".spacing-white-space-review-content").classList.remove("spacing-white-space-review-content-space");
    document.querySelector(".spacing-white-space-review-content").classList.add("spacing-white-space-review-content-dense");

    // add review text margin
    document.querySelector(".spacing-white-space-text").classList.remove("spacing-white-space-text-space");
    document.querySelector(".spacing-white-space-text").classList.add("spacing-white-space-text-dense");
});

document.querySelector(".spacing-white-space-value-right").addEventListener("click", () => {
    // toggle
    document.querySelector(".spacing-white-space-value-right").classList.add("toggle-value-active");
    document.querySelector(".spacing-white-space-value-left").classList.remove("toggle-value-active");

    // inner container padding
    document.querySelector(".spacing-white-space-content-container").classList.add("spacing-white-space-content-container-space");
    document.querySelector(".spacing-white-space-content-container").classList.remove("spacing-white-space-content-container-dense");

    // stars container margin top
    document.querySelector(".spacing-white-space-stars-container").classList.add("spacing-white-space-stars-container-space");
    document.querySelector(".spacing-white-space-stars-container").classList.remove("spacing-white-space-stars-container-dense");

    // star container margin
    document.querySelectorAll(".spacing-white-space-star-container").forEach(element => {
        element.classList.add("spacing-white-space-star-container-space");
        element.classList.remove("spacing-white-space-star-container-dense");
    });

    // add review content margin
    document.querySelector(".spacing-white-space-review-content").classList.add("spacing-white-space-review-content-space");
    document.querySelector(".spacing-white-space-review-content").classList.remove("spacing-white-space-review-content-dense");

    // add review text margin
    document.querySelector(".spacing-white-space-text").classList.add("spacing-white-space-text-space");
    document.querySelector(".spacing-white-space-text").classList.remove("spacing-white-space-text-dense");
});

document.querySelector(".responsive-white-space-value-left").addEventListener("click", () => {
    // toggle
    document.querySelector(".responsive-white-space-value-left").classList.add("toggle-value-active");
    document.querySelector(".responsive-white-space-value-right").classList.remove("toggle-value-active");

    // content container padding
    document.querySelector(".responsive-white-space-content-container").classList.add("responsive-white-space-content-container-full-width");
    document.querySelector(".responsive-white-space-content-container").classList.remove("responsive-white-space-content-container-smaller-width");

    // input width
    document.querySelector(".responsive-white-space-discount-input").classList.add("responsive-white-space-discount-input-full-width");
    document.querySelector(".responsive-white-space-discount-input").classList.remove("responsive-white-space-discount-input-smaller-width");
});

document.querySelector(".responsive-white-space-value-right").addEventListener("click", () => {
    // toggle
    document.querySelector(".responsive-white-space-value-right").classList.add("toggle-value-active");
    document.querySelector(".responsive-white-space-value-left").classList.remove("toggle-value-active");

    // content container padding
    document.querySelector(".responsive-white-space-content-container").classList.remove("responsive-white-space-content-container-full-width");
    document.querySelector(".responsive-white-space-content-container").classList.add("responsive-white-space-content-container-smaller-width");

    // input width
    document.querySelector(".responsive-white-space-discount-input").classList.remove("responsive-white-space-discount-input-full-width");
    document.querySelector(".responsive-white-space-discount-input").classList.add("responsive-white-space-discount-input-smaller-width");
});


document.querySelector(".responsive-columns-value-left").addEventListener("click", () => {
    // toggle
    document.querySelector(".responsive-columns-value-left").classList.add("toggle-value-active");
    document.querySelector(".responsive-columns-value-right").classList.remove("toggle-value-active");

    // inner content padding
    document.querySelector(".responsive-columns-content-container").classList.add("responsive-columns-content-container-one-column");
    document.querySelector(".responsive-columns-content-container").classList.remove("responsive-columns-content-container-two-columns");

    // inner content num columns
    document.querySelectorAll(".responsive-columns-inner-container").forEach(element => {
        element.classList.add("responsive-columns-inner-container-one-column");
    });

    document.querySelectorAll(".responsive-columns-inner-container").forEach(element => {
        element.classList.remove("responsive-columns-inner-container-two-columns");
    });

    // title section width
    document.querySelectorAll(".responsive-columns-title-section").forEach(element => {
        element.classList.remove("responsive-columns-title-section-two-columns");
    });

    // inputs section width
    document.querySelectorAll(".responsive-columns-inputs-section").forEach(element => {
        element.classList.remove("responsive-columns-inputs-section-two-columns");
    });

    // label margin
    document.querySelectorAll(".responsive-columns-input-label").forEach(element => {
        element.classList.remove("responsive-columns-input-label-two-columns");
    });
});

document.querySelector(".responsive-columns-value-right").addEventListener("click", () => {
    // toggle
    document.querySelector(".responsive-columns-value-left").classList.remove("toggle-value-active");
    document.querySelector(".responsive-columns-value-right").classList.add("toggle-value-active");

    // inner content padding
    document.querySelector(".responsive-columns-content-container").classList.remove("responsive-columns-content-container-one-column");
    document.querySelector(".responsive-columns-content-container").classList.add("responsive-columns-content-container-two-columns");

    // inner content num columns
    document.querySelectorAll(".responsive-columns-inner-container").forEach(element => {
        element.classList.remove("responsive-columns-inner-container-one-column");
    });

    document.querySelectorAll(".responsive-columns-inner-container").forEach(element => {
        element.classList.add("responsive-columns-inner-container-two-columns");
    });

    // title section width
    document.querySelectorAll(".responsive-columns-title-section").forEach(element => {
        element.classList.add("responsive-columns-title-section-two-columns");
    });

    // inputs section width
    document.querySelectorAll(".responsive-columns-inputs-section").forEach(element => {
        element.classList.add("responsive-columns-inputs-section-two-columns");
    });

    // label margin
    document.querySelectorAll(".responsive-columns-input-label").forEach(element => {
        element.classList.add("responsive-columns-input-label-two-columns");
    });
});

document.querySelector(".line-length-value-left").addEventListener("click", () => {
    // toggle
    document.querySelector(".line-length-value-left").classList.add("toggle-value-active");
    document.querySelector(".line-length-value-right").classList.remove("toggle-value-active");

    // description width
    document.querySelector(".line-length-description").classList.add("line-length-description-full");
    document.querySelector(".line-length-description").classList.remove("line-length-description-not-full");
});

document.querySelector(".line-length-value-right").addEventListener("click", () => {
    // toggle
    document.querySelector(".line-length-value-left").classList.remove("toggle-value-active");
    document.querySelector(".line-length-value-right").classList.add("toggle-value-active");

    // description width
    document.querySelector(".line-length-description").classList.remove("line-length-description-full");
    document.querySelector(".line-length-description").classList.add("line-length-description-not-full");
});
