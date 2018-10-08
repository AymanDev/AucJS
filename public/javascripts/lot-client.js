function hrefToLotSubmit(lotName) {
    let link = 'lot-submit?lotName=' + lotName;
    link += '&lotPrice=';
    link += document.getElementById('priceBox').value;
    window.location.href = link;
}

window.onload = function () {
    let button = document.getElementById('submit-button');

    button.onclick = function () {
        let urlParams = new URLSearchParams(window.location.search);
        let lotName = urlParams.get('lotName');
        hrefToLotSubmit(lotName);
    };
};
