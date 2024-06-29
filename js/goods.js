const cart = {
    "p92779": {
        "name": "Wrist Watch CASIO G-2900F-8VER",
        "url": "#",
        "image": "./img/casio-g-2900f-8ver-img.jpg",
        "imageWebp": "./img/casio-g-2900f-8ver-img.webp",
        "price": 71.55
    },
    "p93039": {
        "name": "Wrist Watch CASIO AE-1000W-1AVEF",
        "url": "#",
        "image": "./img/casio-ae-1000w-1avef-img.jpg",
        "imageWebp": "./img/casio-ae-1000w-1avef-img.webp",
        "price": 35.64
    },
    "p63553250": {
        "name": "Wrist Watch CASIO W-800H-1AVES",
        "url": "#",
        "image": "./img/casio-w-800h-1aves-img.jpg",
        "imageWebp": "./img/casio-w-800h-1aves-img.webp",
        "price": 26.54
    },
    "p93127": {
        "name": "Wrist Watch CASIO EF-552-1AVEF",
        "url": "#",
        "image": "./img/casio-ef-552-1avef-img.jpg",
        "imageWebp": "./img/casio-ef-552-1avef-img.webp",
        "price": 124.76
    },
    "p79946990": {
        "name": "Wrist Watch CASIO EF-527D-1AVEF",
        "url": "#",
        "image": "./img/casio-ef-527d-1avef-img.jpg",
        "imageWebp": "./img/casio-ef-527d-1avef-img.webp",
        "price": 183.95
    },
    "p6533206": {
        "name": "Wrist Watch CASIO SGW-100-2BER",
        "url": "#",
        "image": "./img/casio-sgw-100-2ber-img.jpg",
        "imageWebp": "./img/casio-sgw-100-2ber-img.webp",
        "price": 109.15
    },
}

let out = '';

for (let key in cart) {
    out +=
     `<div class="goods__item item-goods">
        <div class="item-goods__title">
            <h2>${cart[key]['name']}</h2>
        </div>
        <div class="item-goods__img">
            <a href="${cart[key]['image']}">
                <picture>
                    <source srcSet="${cart[key]['imageWebp']}" type="image/webp" />
                    <img src="${cart[key]['image']}" class="item-goods__img_img" />
                </picture>
            </a>
        </div> 
        <div class="item-goods__price">
            <p>${cart[key]['price']} USD</p>
        </div>
        <div class="item-goods__btn">
            <button class="to-cart" data-articul="${key}">Add to cart</button>
        </div>
     </div>`;
}

document.querySelector('.goods').innerHTML = out;

let data = {}; // add items to cart here
let countCart = document.querySelector('.footer-content__count');
let sum = 0;

if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let cartData = cart;

    data = cartData;
    console.log(data);
}

document.querySelector('.goods').addEventListener('click', event => {    
    if (event.target.classList.contains('to-cart')) {
        let articul = event.target.dataset['articul'];
        sum = 0;

        if (data[articul] !== undefined) {
            data[articul]['count']++;
        }
        else {
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }

        for (let key in data) {
            let count = data[key].count;
            sum = sum + count;
        }

        countCart.textContent = sum;
        localStorage.setItem('cart', JSON.stringify(data));
    }
})

if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let cartData = cart; // cart - an array of items in the cart

    for (let key in cartData) {
        let count = cartData[key].count;
        sum = count + sum;
    }

    countCart.textContent = sum;
}