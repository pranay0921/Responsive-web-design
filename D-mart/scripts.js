/* =========================
   ANIMATED SEARCH TEXT
========================= */

const placeholderText =
    document.getElementById("placeholderText");

const searchInput =
    document.getElementById("searchInput");

const searchTexts = [
    "Biscuits",
    "Milk",
    "Curd",
    "Onion",
    "Potato",
    "Garlic"
];

let searchTextIndex = 0;


function changeSearchText() {

    placeholderText.classList.add("move-up");

    setTimeout(() => {

        searchTextIndex++;

        if (searchTextIndex >= searchTexts.length) {
            searchTextIndex = 0;
        }

        placeholderText.innerText =
            searchTexts[searchTextIndex];

        /* Start from bottom */

        placeholderText.style.transition = "none";
        placeholderText.style.transform =
            "translateY(30px)";
        placeholderText.style.opacity = "0";


        /* Animate upward */

        setTimeout(() => {

            placeholderText.style.transition =
                "transform 0.5s ease, opacity 0.5s ease";

            placeholderText.style.transform =
                "translateY(-50%)";

            placeholderText.style.opacity = "1";

        }, 50);

    }, 500);
}


/* Change every 2 seconds */

setInterval(changeSearchText, 2000);


/* Hide animated text when user searches */

searchInput.addEventListener("focus", () => {

    placeholderText.style.display = "none";

});


/* Show it again when input is empty */

searchInput.addEventListener("blur", () => {

    if (searchInput.value.trim() === "") {
        placeholderText.style.display = "block";
    }

}); 
 
 let arrayImage=[
       "image/slide1.jpeg",
        "image/slide2.jpeg",
       "image/slider4.webp",
    ]
    let image=document.getElementById('image')
    let index=0;

    function changeImage(){
        index++;
        if(index>=3){
            index=0
        }
        image.src=arrayImage[index]
    }
    setInterval(changeImage,1500)


    /* =========================
   POPULAR CATEGORY SLIDER
========================= */

const categoryViewport =
    document.getElementById("categoryViewport");

const categoryTrack =
    document.getElementById("categoryTrack");

const categoryCards =
    document.querySelectorAll(".category-card");

const categoryPrev =
    document.getElementById("categoryPrev");

const categoryNext =
    document.getElementById("categoryNext");

let categoryIndex = 0;


/* Get visible cards */

function getVisibleCategories() {

    if (!categoryCards.length) {
        return 1;
    }

    const cardWidth =
        categoryCards[0].offsetWidth;

    const gap =
        parseFloat(
            getComputedStyle(categoryTrack).gap
        ) || 0;

    return Math.max(
        1,
        Math.floor(
            (categoryViewport.clientWidth + gap) /
            (cardWidth + gap)
        )
    );
}


/* Update slider */

function updateCategorySlider() {

    if (
        window.innerWidth <= 767
    ) {
        categoryTrack.style.transform = "none";
        return;
    }

    const cardWidth =
        categoryCards[0].offsetWidth;

    const gap =
        parseFloat(
            getComputedStyle(categoryTrack).gap
        ) || 0;

    const visible =
        getVisibleCategories();

    const maxIndex =
        Math.max(
            0,
            categoryCards.length - visible
        );

    categoryIndex =
        Math.min(
            categoryIndex,
            maxIndex
        );

    categoryTrack.style.transform =
        `translateX(-${
            categoryIndex *
            (cardWidth + gap)
        }px)`;

    categoryPrev.disabled =
        categoryIndex === 0;

    categoryNext.disabled =
        categoryIndex >= maxIndex;
}


/* Next */

categoryNext.addEventListener("click", () => {

    const visible =
        getVisibleCategories();

    const maxIndex =
        Math.max(
            0,
            categoryCards.length - visible
        );

    if (categoryIndex < maxIndex) {

        categoryIndex++;

        updateCategorySlider();
    }
});


/* Previous */

categoryPrev.addEventListener("click", () => {

    if (categoryIndex > 0) {

        categoryIndex--;

        updateCategorySlider();
    }
});


/* Resize */

window.addEventListener(
    "resize",
    updateCategorySlider
);


/* Initial */

updateCategorySlider();
