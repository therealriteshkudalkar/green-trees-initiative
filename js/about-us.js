let carouselItems = document.getElementsByClassName("carousel__item");
let indicatorItems = document.getElementsByClassName("carousel__button");
let lastSelectedItemIndex = 0;

function displayNextItem(reverse) {
    if (lastSelectedItemIndex == carouselItems.length - 1 && !reverse) {
        displayItem(0);
    } else if (lastSelectedItemIndex == 0 && reverse) {
        displayItem(carouselItems.length - 1);
    } else if (reverse) {
        displayItem(lastSelectedItemIndex - 1);
    } else {
        displayItem(lastSelectedItemIndex + 1);
    }
}

function displayItem(n) {
    //make last selected item invisible
    carouselItems.item(lastSelectedItemIndex).style.display = "none";
    indicatorItems.item(lastSelectedItemIndex).classList.remove("carousel__button--selected");

    //make the nth item visible
    carouselItems.item(n).style.display = "block"
    indicatorItems.item(n).classList.add("carousel__button--selected");
    lastSelectedItemIndex = n;
}

displayItem(0);