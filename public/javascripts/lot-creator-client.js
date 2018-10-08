function hrefToLotSubmit() {
    let lotName = document.getElementById('name-field').value;
    let lotDesc = document.getElementById('desc-field').value;
    let lotPrice = document.getElementById('price-field').value;
    let lotImage = document.getElementById('image-field').value;

    let link = 'lot-creator-submit?lotName=' + lotName;
    link += '&lotDescription=' + lotDesc;
    link += '&lotPrice=' + lotPrice;
    link += '&lotImage=' + lotImage;
    window.location.href = link;
}

window.onload = function () {
    let button = document.getElementById('submit-button');

    button.onclick = function () {
        hrefToLotSubmit();
    };
};
