# Привет!
&nbsp;

---
## Это приложение написано на "JavaScript ES6" с применением "LocalStorage" браузера.

&nbsp;
## Приложение имеет две версии: "development" - версия для разработки; "production" - версия с готовым проектом.

&nbsp;
## Если вы хотите посмотреть как я разрабатывал приложение, как работал с препроцессором и какие плагины использовал для сборщика проекта, то выбирайте версию "development".

&nbsp;
## Если вы хотите просто посмотреть на работу приложения, протестировать и посмотреть код, не устанавливая дополнительные плагины и т.д., то выбирайте версию "production" с готовым проектом.

&nbsp; 
# **Внимание!**
## **Версия "development" тестировалась и корректно работала используя сборщик проектов "Gulp" и его плагины. Для максимально корректной работы приложения - рекомендуется придерживаться шагов по тестированию приложения приведенных ниже!**

&nbsp;
## Если вы хотите протестировать работу приложения версии "development", то вам потребуется:

&nbsp; 
### **1. `Установить менеджер пакетов "`[Node.js](https://nodejs.org/)`" с официального сайта или другой аналог`;**
### **2. `Открыть терминал в вашем редакторе кода и ввести команду`;**
```
npm i
```
### **3. `После установки всех пакетов, можно запускать приложение командой`;**
```
gulp
```

&nbsp;
## Если вы хотите протестировать работу приложения версии "production", то выше перечисленные шаги вам не нужны, просто запускайте "index.html".

&nbsp; 

## **Наконец вы можете начинать тестировать приложение!**

---
&nbsp;

# 1. Введение
&nbsp;

---
### "Cart of watches" - приложение написанное на "JavaScript" с использованием "LocalStorage" браузера и применением "Classes" ставшее доступным в редакции "ES6". Это приложение использующее "ООП", позволяет добавлять товары в корзину, увеличивать, уменьшать или удалять их из корзины, при этом подсчитывая их сумму и количество.

&nbsp;
### Как это работает? В каталоге товаров вы выбираете понравившийся вам часы, добавляете их в корзину. При этом в браузере пользователя, в локальном хранилище, создается объект с товарами, которые вы добавили в корзину. Сама корзина получает из локального хранилища браузера ваши товары и количество, показываяя их на странице.

&nbsp;
### В итоге перейдя в корзину, вы увидите все товары которые вы добавили и сможете увеличивать или уменьшать их количество либо удалять из корзины.

&nbsp;
### В проекте я использовал препроцессор "SCSS" с приминением методологии CSS-классов по "БЭМ" и сборщик проектов "Gulp". Также проект полностью адаптирован под мобильные устройства.  
---
&nbsp;

# 2. Ознакомление
&nbsp;

---
### Давайте познакомимся с архитектурой проекта.

&nbsp;
### В версии "development" проекта, все файлы приложения лежат в папке "#src".

&nbsp;
### В файл "index.html" будет выводится каталог товаров, а в файл "cart.html" корзина товаров.

&nbsp;
### В папке "Class" лежит файл "Cart.js", в котором прописан "Класс" для создания корзины.

&nbsp;
### В папке "js" лежат два файла: "goods.js" - который выводит на страницу "index.html" каталог товаров и сохраняет в "LocalStorage" браузера товар добавленный в корзину; и "script.js" - который выводит созданную корзину в "cart.html" и изменяет количество товаров в ней.

&nbsp;
### В папке "fonts" лежат шрифты используемые в приложении.

&nbsp;
### В папке "img" лежат изображения используемые в приложении.

&nbsp;
### В папке "scss" лежат стили написанные на препроцессоре "SCSS": "fonts.scss" - содержит шрифты для подключения; "vars.scss" - содержит переменные для удобства; "main.scss" - содержит основные стили приложения; "style.scss" - содержит миксин для подключения шрифтов и импорты всех остальных файлов.

&nbsp;
### В папке "components" лежат два файла: "generalHeader.scss" - стили для главного заголовка страницы; "generalFooter.scss" - стили для главного подвала страницы. Эти компоненты присутсвуют во всех моих приложениях для общего для всех заголовка и подвала, и не являются частью приложения.

&nbsp;
### Версия "production" проекта, отличается от "development" простой архитектурой. Все файлы "js" находятся в папке "js", а папку "scss" заменяет папка "css" с уже собранными и готовыми стилями.
### Также у "production" есть минифицированные файлы в папках "css" и "js", они не подключены к приложению в отличии от их обычных версий и нужны только в продакшене, это позволяет вам удобно писать свой код или тестировать, если это необходимо. 
---
&nbsp;

# 3. Обзор
&nbsp;

---
### Теперь разберемся по-подробнее.

&nbsp;
### Работа приложения "Cart of watches" состоит из двух частей: первая часть отрисовывает на страницу товары и осуществляет добавление их в корзину; вторая часть отрисовывает саму корзину с добавленными в нее товарами и может проводить операции: по добавлению количества нужного товара, уменьшению его количества и удалению позиции товара.

&nbsp;
### Сначала рассмотрим часть с выводом товара и добавлением в корзину.
---
&nbsp;

---
### Товары мы будем выводить в файл "index.html", в специально подготовленный для этого элемент с CSS-классом "goods". Файл "goods.js" находящийся в папке "js" - будет выполнять всю работу по выводу. Давайте рассмотрим его.

&nbsp;
### Работу файла "goods.js", также можно разделить на две части: часть с выводом; и часть с добавлением товаров в корзину, а точнее в "Local Storage" браузера.

&nbsp;
### Вначале создаем объект "cart" с данными по товарам. Каждый товар будет иметь свой артикул и свои данные по нему, а именно: имя товара; ссылку на карточку товара (в данный момент не используется); картинку в двух форматах (jpg, webp); и цену за одну штуку.

```

const cart = {
    "p92779": {
        "name": "Wrist Watch CASIO G-2900F-8VER",
        "url": "#",
        "image": "../img/casio-g-2900f-8ver-img.jpg",
        "imageWebp": "../img/casio-g-2900f-8ver-img.webp",
        "price": 71.55
    },
    "p93039": {
        "name": "Wrist Watch CASIO AE-1000W-1AVEF",
        "url": "#",
        "image": "../img/casio-ae-1000w-1avef-img.jpg",
        "imageWebp": "../img/casio-ae-1000w-1avef-img.webp",
        "price": 35.64
    },
    "p63553250": {
        "name": "Wrist Watch CASIO W-800H-1AVES",
        "url": "#",
        "image": "../img/casio-w-800h-1aves-img.jpg",
        "imageWebp": "../img/casio-w-800h-1aves-img.webp",
        "price": 26.54
    },
    "p93127": {
        "name": "Wrist Watch CASIO EF-552-1AVEF",
        "url": "#",
        "image": "../img/casio-ef-552-1avef-img.jpg",
        "imageWebp": "../img/casio-ef-552-1avef-img.webp",
        "price": 124.76
    },
    "p79946990": {
        "name": "Wrist Watch CASIO EF-527D-1AVEF",
        "url": "#",
        "image": "../img/casio-ef-527d-1avef-img.jpg",
        "imageWebp": "../img/casio-ef-527d-1avef-img.webp",
        "price": 183.95
    },
    "p6533206": {
        "name": "Wrist Watch CASIO SGW-100-2BER",
        "url": "#",
        "image": "../img/casio-sgw-100-2ber-img.jpg",
        "imageWebp": "../img/casio-sgw-100-2ber-img.webp",
        "price": 109.15
    },
}

```

### Далее мы создадим переменную для хранения "html-кода" и назовем ее "out". Затем перебираем объект "cart" с товарами циклом "for in", и каждый товар отрисовываем на страницу присвоив в элемент с классом "goods" переменную "out".

```

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

```

### Здесь я хочу остановится и пояснить причину, почему я применил этот подход. Дело в том, что вначале я создавал элементы через "document.createElement()", что в свою очередь повлекло за собой проблему с читаемостью кода и большим количеством его строк. Так как я в проекте использовал методологию CSS - классов по "BEM", то столкнулся с добавлением огромного количества CSS-классов для каждого созданного элемента. Поэтому я использовал "html-код" для создания элементов, назначил им нужные мне классы, и привел это все в удобно-читаемый код. Для вывода выражений и переменных в "html-коде", я использовал интерполяцию строк ("`${} `") доступных в стандарте "ES6".
---
&nbsp;

---
### На этом часть с выводом товаров на страницу закончена, теперь разберем часть с добавлением товаров в корзину.

&nbsp; 
### В начале, нам понадобится новый объект в который мы получим уже добавленные товары из хранилища браузера и который мы будем отправлять в хранилище браузера добавив в него новые товары, назовем его "data".

```

let data = {}; // add items to cart here
let countCart = document.querySelector('.footer-content__count');
let sum = 0;

```

### Чтобы выводить внизу страницы количество добавленного товара, нам понадобится: элемент для рендеринга ("countCart"); и переменная "sum" для сложения количества товаров.

&nbsp; 
### Далее я проверяю, есть ли уже хранилище "cart" в браузере. Если есть, то записываю в объект "data" полученный и преобразованный объект с данными по товарам.

```

if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let cartData = cart;

    data = cartData;
    console.log(data);
}

```

### Затем на блок вывода товаров с классом "goods", вешаем событие клик через "addEventListener('click')". Внутри делаем проверку на наличие класса "cart" у элемента по которому кликнули, так мы получим кнопку.

```

document.querySelector('.goods').addEventListener('click', event => {    
    if (event.target.classList.contains('to-cart')) {
        let articul = event.target.dataset['articul'];
        sum = 0;
})

```

### У кнопок с классом "cart", которые мы ранее отрисовали в переменную "out", есть уникальный аттрибут с артикулом товара. Именно этот аттрибут нажатой кнопки мы получаем в переменную "articul" для дальнейшей работы с хранилищем.

&nbsp;
### Переменной "sum" присваивается "0", это нужно для правильного подсчета товаров и их количества.

&nbsp;
### Теперь нужно сделать проверку на наличие у объекта "data", объектов с ключами равными артикулам товаров, если такой объект есть, то значение ключа "count" увеличивается на единицу "++", если же такого объекта нет, то в объект "data" добавляется объект с таким артикулем из объекта "cart" и в него добавляется ключ "count", а в значение записывается "1".

```
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
})
```

### Ниже условий, идет работа цикла "for in" по объекту "data". Здесь мы получаем сумму добавленных в корзину товаров. В переменную "count", записываем количество каждого товара ("data[key].count").

```

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

```

### Далее в переменную "sum" записываем выражение равное: sum + count. Так мы сможем получить сумму всех добавленных товаров и их количества.
### Затем мы выводим полученную сумму на страницу в переменную "countCart". Напоследок создаем новое хранилище "cart" с преобразованными данными "data" и отправляем в "LocalStorage" браузера.

&nbsp;
### Осталось разобрать кое-что еще. При переходе на страницу с корзиной товаров и обратном переходе на страницу с ассортиментом товаров, сумма товаров и их количества будет равна "0". Чтобы это исправить нам надо при загрузке страницы, получить из "LocalStorage" объект с товарами, перебрать его и суммировать всё количество товаров.

&nbsp;
### В начале мы проверяем наличие хранилища "cart". Далее при успехе, получаем в константу "cart" данные по товарам из корзины.

```

if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let cartData = cart; // cart - an array of items in the cart

    for (let key in cartData) {
        let count = cartData[key].count;
        sum = count + sum;
    }

    countCart.textContent = sum;
}

```

### Потом константу "cart" помещаем в переменную "cartData" и уже с ней проводим операции по извлечению количества товаров.
### Перебираем "cartData" циклом "for in" и в переменную "count" помещаем значение из "data[key].count". Далее по аналогии выше, суммируем переменную "sum" с количеством товаров в "count".
### Наконец через "countCart" выводим сумму на страницу.

&nbsp;
### Теперь при загрузке страницы мы будем получать количество добавленных товаров из корзины.
---
&nbsp;

---
### Теперь разберем как работает корзина.

&nbsp;
### В корзине можно изменять количество добавленного товара или удалить его позицию, при этом сумма конретного товара будет увеличиваться или уменьшаться при изменении его количества.

&nbsp;
### Общая сумма всех товаров должна подсчитываться, в зависимости от операций с товарами, перечисленных выше, и выводиться на страницу внизу.

&nbsp;
### Для того чтобы реализовать работу перечисленную выше, нужно создать "Класс", в котором будет прописаны методы для увеличения, уменьшения и удаления товара из корзины. Там же должна рендериться сама корзина с товарами на странице.

&nbsp;
### Ещё нам понадобиться прописать взаимодействие данного "Класса" с хранилищем браузера, мы будем используя методы увеличения, уменьшения и удаления товара, отправлять в хранилище новые данные по количеству товаров, и получать их в "Классе" выводя на страницу.

&nbsp;
### Для этого потребуется, создать два файла: "Cart.js" - в котором будет создан "Класс" с методами для работы с товарами, и отрисовке этих товаров на страницу; и файл "script.js" - который будет работать с хранилищем браузера, изменяя те товары, которые были добавлены в корзину, используя методы прописанные в классе "Cart.js". 

&nbsp;
### Так как работа корзины взаимосвязанна между собой через код прописанный в "Cart.js" и "script.js", я буду описывать шаги работы параллельно между этими двумя файлами. 
---
&nbsp;

---
### Итак, начнем с файла "script.js".
### В начале проверяем на наличие в "LocalStorage" браузера объекта "cart".

```

if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
}

```

### В случае успеха в константу "cart" ложим полученный из "LocalStorage" преобразованный объект с данными по товарам.

&nbsp;
### Теперь перейдем к "Cart.js".
### В "Cart.js" создаем класс "Cart".

```

class Cart {
    constructor(
        items, // array with items in the cart 
        cartClass = 'cart',
        plusClass = 'plus',
        minusClass = 'minus',
        deleteClass = 'delete',
        currency = 'USD',
    )
}

```

### В параметрах конструктора прописываем: "items" - сюда мы будем передовать объект с добавленными товарами в корзину; "cartClass", "plusClass", "minusClass", "deleteClass" - по-умолчанию содержат "CSS-классы" которые будут добавляться элементам при отрисовке корзины, они помогут нам определить - какую кнопку нажал пользователь и как реагировать на это; "currency" - по-умолчанию содержит валюту, в которой представленна цена на товар.

&nbsp;
### С параметрами мы закончили, теперь разберемся с инициализацией этих параметров в самом конструкторе через "this" ("this.items" = "items").

```

class Cart {
    constructor(
        items, // array with items in the cart 
        cartClass = 'cart',
        plusClass = 'plus',
        minusClass = 'minus',
        deleteClass = 'delete',
        currency = 'USD',
    ) {
        this.items = items;
        this.plusClass = plusClass;
        this.minusClass = minusClass;
        this.deleteClass = deleteClass;
        this.cartClass = cartClass;
        this.currency = currency;
    }
}

```

### Теперь мы можем обращаться к прописанным свойствам через "this".
---
&nbsp;

---
### Как было сказано выше "items" - это объект с данными по товарам, добавленных в корзину.
### Чтобы показать это, вернемся к "script.js".

&nbsp;
### После объявления константы "cart", в которой лежит объект с добавленными товарами, мы создаем объект ("shopCart") на основе класса "Cart" и передаем в качестве параметра добавленные товары ("cart").

```

if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let shopCart = new Cart(cart); // cart - an array of items in the cart 
}

```

---
&nbsp;

---
### Вернемся к "Cart.js".
### В конструкторе прописаны методы для работы с товарами в корзине.
### Методы "goodsPlus", "goodsMinus", "goodsDelete" - получают в качестве параметра артикул товара и из объекта "items" вытаскивают нужный товар, уменьшая или увеличивая его количество, либо удаляя его из объекта "items".

```

goodsPlus(art) {
    this.items[art]['count']++;
}
goodsMinus(art) {
    if (this.items[art]['count'] - 1 == 0) {
        this.goodsDelete(art);
    }
    else {
        this.items[art]['count']--;
    }
}
goodsDelete(art) {
    delete this.items[art];
}

```

### В "goodsMinus" используется метод "goodsDelete" для удаления товара из корзины, если количество товара будет равно "0".

&nbsp;
### Далее, идут методы для вывода суммы каждого товара ("setTotal") и общая сумма всех товаров в корзине ("getTotal"), разберем их чуть позже.

&nbsp;
### В методе "render()" будет отрисовываться сама корзина с товарами.
### В начале я создаю элемент "table". Добавляю "table" "CSS-классы": "cart-out__table" - BEM-класс не играющий особой роли; "this.cartClass" - класс из конструктора ("cart"), тоже нужен для правильной структуры CSS-классов по "BEM".

```

render() {
    let table = document.createElement('table'); // create table
    table.classList.add('cart-out__table');
    table.classList.add(this.cartClass); // add class from constructor

    let tb = document.createElement('tbody');
    table.append(tb);
}

```

### Ниже я создаю элемент "tbody" и в элемент "table" вставляю его.

&nbsp;
### Далее я перебираю циклом "for in" объект "items", для удобства в переменную "goods" ложу объект с конкретным товаром ("this.items[key]") и в ранее созданный элемент "tbody", отрисовываю элементы таблицы ("tb.innerHTML").

```

for (let key in this.items) {
    let goods = this.items[key];
    
    tb.innerHTML += ...
}

```

### Для того чтобы выводить и вставлять "выражения" в "HTML-строку" я использовал "интерполяцию строк" ("this.deleteClass").
### Так для каждого товара, пока цикл перебирает объект "items", создаются колонки таблицы, в которых для кнопок задается "CSS-класс" из конструктора ("this.minusClass") и аттрибут равный артикулу товара ("key").

```

for (let key in this.items) {
    let goods = this.items[key];
    
    tb.innerHTML +=
        `<tr class="cart__row cart-cells">
            <td class="cart-cells__delete cell">
                <button class="cell__button ${this.deleteClass}" data-articul="${key}">X</button>
            </td>
            <td class="cart-cells__img cell">
                <div class="cell__img">
                    <a href="${goods.image}">
                        <picture>
                            <source srcSet="${goods.imageWebp}" type="image/webp" />
                            <img src="${goods.image}" class="cell__img_img"/>
                        </picture>
                    </a> 
                </div>
            </td>
            <td class="cart-cells__name cell">
                <h4 class="cell__title">${goods.name}</h4>
            </td>
            <td class="cart-cells__minus cell">
                <button class="cell__minus ${this.minusClass}" data-articul="${key}">-</button>
            </td>
            <td class="cart-cells__count cell">
                <span class="cell__count">${goods.count}</span>
            </td>
            <td class="cart-cells__plus cell">
                <button class="cell__plus ${this.plusClass}" data-articul="${key}">+</button>
            </td>
            <td class="cart-cells__total cell">
                <span class="cell__total">${this.setTotal(goods.count, goods.price)} ${this.currency}</span>
            </td>
        </tr>`;
}
```

### Картинка, название и количество товара выводятся в соответсвующие ячейки таблицы ("goods.count"). Сумма для каждого товара вычисляется с помощью метода "setTotal()", куда в качестве параметров передается количество товара ("goods.count") и его цена ("goods.price"). В конце выражения вставляется текущая валюта из конструктора ("this.currency").

&nbsp;
### В методе "setTotal(count, price)" описанном выше, в качестве параметров принимаются количество товара и его цена.

```

setTotal(count, price) {
    let total = 0;
    total += count * price;
    return total.toFixed(2);
}

render() {
    for (let key in this.items) {
        let goods = this.items[key];
        
        tb.innerHTML +=
            `<tr class="cart__row cart-cells">
                <td class="cart-cells__total cell">
                    <span class="cell__total">${this.setTotal(goods.count, goods.price)} ${this.currency}</span>
                </td>
            </tr>`;
    }
}

```

### Переменная "total" будет хранить сумму товара изначально равна "0". Затем в "total" записывается результат выражения: количество умножить на цену ("count * price"). Полученный "total" возвращается через "return" с применением метода "toFixed(2)", обрезая результат до двух чисел после запятой.

&nbsp;
### После перебора объекта "items", в "tbody" дописывается элементы таблицы с выводом общей суммы всех товаров в корзине.

```

tb.innerHTML += 
    `<tr class="cart__row cart-cells _sticky">
        <td class="cart-cells__ftotal cell">
            <div class="cell__ftotal total">
                Total: 
                <span class="cell__ftotal_sum">
                    ${this.getTotal()} ${this.currency}
                </span>
            </div>
        </td>
    </tr>`;

```

### Сумма подсчтитывается с помощью метода "getTotal()" и указывается валюта ("this.currency").

&nbsp;
### В методе "getTotal()" создаем переменную "total" и присваиваем ей "0".

```

    getTotal() {
        let total = 0;
        for (let key in this.items) {
            total += this.items[key]['count'] * this.items[key]['price'];
        }
        return total.toFixed(2);
    }

```

### Затем перебираем циклом "for in" объект с товарами "items" и в "total" записываем ("total +=...") выражение: количество товара умножить на его цену ("this.items[key]['count'] * this.items[key]['price']"). Обрезаем лишние числа и возвращаем результат ("return total.toFixed(2)").

&nbsp;
### После всех проделанных операций по созданию элементов таблицы, возвращаем готовую таблицу с товарами ("return table" ).

```

return table;

```

---
&nbsp;

---
### Теперь разберем как нам вывести нашу таблицу на страницу.
### В "script.js" создаем переменную "cartOut" и ложим в нее элемент со страницы, в который будем вставлять таблицу.

```

if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let shopCart = new Cart(cart); // cart - an array of items in the cart 
    let cartOut = document.querySelector('.cart-out');

    cartOut.innerHTML = ''; // clean output 
    cartOut.append(shopCart.render()); // draw a basket 
}

```

### Сначала очищаем вывод в элементе ("cartOut.innerHTML = "";"), затем с помощью "append()" вставляем нашу таблицу в элемент страницы ("cartOut.append(shopCart.render())").
### Вызов метода "render()" у объекта ("shopCart") на основе класса ("Cart"), вернет нам готовую таблицу, которую мы делали в "Cart.js".

&nbsp;
### И последнее что нужно разобрать - это работа кнопок в корзине.
### Первым делом, на "cartOut" вешается слушатель событий срабатывающий при клике на элементе. За ним следует, для удобства, переменной "target" присвоить тот элемент на котором сработало событие.

```

cartOut.addEventListener('click', (event) => {
    let target = event.target;
});

```

### Так как событие будет срабатывать по всему блоку в котором у нас выводится таблица, нужно через условия вытащить из блока нужную нам кнопку, для этого мы и добавляли те самые "CSS-классы" в конструкторе класса "Cart".

&nbsp;
### Итак, если клик сработал на элементе с CSS-классом "delete", то мы в объекте на основе класс "Cart", вызываем метод "delete" и передаем артикул товара в качестве параметра. Далее мы очищаем вывод элемента ("cartOut.innerHTML = "";") и вставляем снова уже измененную таблицу ("cartOut.append(shopCart.render());").

```

    cartOut.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('delete')) {
            shopCart.goodsDelete(target.dataset['articul']);

            cartOut.innerHTML = '';
            cartOut.append(shopCart.render());

            localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }
        else if (target.classList.contains('plus')) {
            shopCart.goodsPlus(target.dataset['articul']);

            cartOut.innerHTML = '';
            cartOut.append(shopCart.render());

            localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }
        else if (target.classList.contains('minus')) {
            shopCart.goodsMinus(target.dataset['articul']);

            cartOut.innerHTML = '';
            cartOut.append(shopCart.render());

            localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }
    });

```

### Теперь нам нужно заменить текущий объект из "LocalStorage" на новый с новыми данными по товарам. Для этого создаем новый объект для отправки в "LocalStorage" с помощью "setItem()", указываем название этого объекта ("cart") и отправляем преобразованный к строке объект "shopCart.items" с новыми данными по добавленным товарам. Те же самые операции мы проделываем с другими кнопками.
---
&nbsp; 

# 4. Заключение
&nbsp;

---
### Одно из моих любимых проектов! В отличие от "React", который заставляет тебя придерживаться компонентного подхода, то здесь свободы куда больше. Применение "ООП" через использование "Классов" - удобное и понятное. Если вспомнить как до этого приходилось использовать прототипы, наследования, то разница чувствуется. Прибавилось больше кода, но можно легко работать в "React", так как структура похожая. Приложение получилось простым и понятным, а главное рабочим, что не может не радовать. Это итересный опыт, я буду и дальше работать с "ООП" в "JavaScript", открывая для себя двери в "React JS".    
---
&nbsp;

# ___Спасибо за уделенное время!___  