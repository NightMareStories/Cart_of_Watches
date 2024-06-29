# Hello!
&nbsp;

---
## This application is written in "JavaScript ES6" using the browser's "LocalStorage".

&nbsp;
## Application has two versions: "development" - development version; "production" - version with finished project.

&nbsp;
## If you want to see how I developed the application, how I worked with the preprocessor and what plugins I used for the project builder, then select the "development" version from the "development" branch.

&nbsp;
## If you just want to see how the application works, test and see the code without installing additional plugins, etc., then choose the "production" version with a ready-made project from the "production" branch.

&nbsp;
# **Attention!**
## **The "development" version was tested and worked correctly using the "Gulp" project builder and its plugins. For the most correct operation of the application - it is recommended to follow the steps for testing the application below!**

&nbsp;
## If you want to test the "development" version of the application, you will need:

&nbsp;
### **1. `First you need to install `"[NodeJS](https://nodejs.org/)"` on your computer. To check its presence on your PC, enter the command in the terminal:`**

```
node --version 
```

```
npm --version
```

### `If the commands work and display versions, then "Node" and "NPM" are already installed;`
### **2. `Before installing packages, you must first install "Gulp" globally on your system:`**

```
npm i --global gulp-cli
```

### `And then from the folder with "gulpfile.js" install all the plugins from "package.json" using the command in your terminal:`

```
npm i -D
```

### **3. `After installing all the packages, you can run the application with the command`;**
```
gulp
```

&nbsp;
## If you want to test the "production" version of the app, you don't need the above steps, just run "index.html".

&nbsp;

## **You can finally start testing the app!** 

---
&nbsp;

# 1. Introduction
&nbsp;

---
### "Cart of Watches" is an application written in "JavaScript" using "LocalStorage" browser and using "Classes" made available in "ES6" edition. This application using "OOP" allows you to add items to the cart, increase, decrease or remove them from the cart, while counting their amount and quantity.

&nbsp;
### How it works? In the catalog of goods you choose the watch you like, add it to the basket. At the same time, an object with the goods that you added to the cart is created in the user's browser, in the local storage. The cart itself retrieves your items and quantities from the browser's local storage and displays them on the page.

&nbsp;
### As a result, by going to the basket, you will see all the products that you have added and you can increase or decrease their quantity or remove them from the basket.

&nbsp;
### In the project, I used the "SCSS" preprocessor using the "BEM" CSS-class methodology and the "Gulp" project builder. Also, the project is fully adapted for mobile devices.  
---
&nbsp;

# 2. Familiarization
&nbsp;

---
### Let's get acquainted with the architecture of the project.

&nbsp;
### In the "development" version of the project, all application files are in the "#src" folder.

&nbsp;
### The catalog of goods will be displayed in the file "index.html", and the basket of goods will be displayed in the file "cart.html".

&nbsp;
### The "Class" folder contains the "Cart.js" file, which contains the "Class" for creating the cart.

&nbsp;
### There are two files in the "js" folder: "goods.js" - which displays the product catalog on the "index.html" page and saves the product added to the cart in the "LocalStorage" of the browser; and "script.js" - which displays the created cart in "cart.html" and changes the number of products in it.

&nbsp;
### The "fonts" folder contains the fonts used in the application.

&nbsp;
### The "img" folder contains images used in the application.

&nbsp;
### The "scss" folder contains styles written in the "SCSS" preprocessor: "fonts.scss" - contains fonts for connection; "vars.scss" - contains variables for convenience; "main.scss" - contains the main styles of the application; "style.scss" - contains a mixin for connecting fonts and imports of all other files.

&nbsp;
### There are two files in the "components" folder: "generalHeader.scss" - styles for the main page header; "generalFooter.scss" - styles for the main page footer. These components are present in all my applications for a common header and footer, and are not part of the application.

&nbsp;
### The "production" version of the project differs from the "development" version in a simple architecture. All "js" files are located in the "js" folder, and the "scss" folder is replaced by the "css" folder with already assembled and ready-made styles.
### Also "production" has minified files in "css" and "js" folders, they are not connected to the application unlike their normal versions and are only needed in production, this allows you to conveniently write your own code or test if necessary.  
---
&nbsp;

# 3. Overview
&nbsp;

---
### Now let's take a closer look.

&nbsp;
### The operation of the "Cart of Watches" application consists of two parts: the first part draws products on the page and adds them to the cart; the second part draws the basket itself with the goods added to it and can carry out operations: adding the quantity of the desired product, reducing its quantity and deleting the position of the product.

&nbsp;
### First, consider the part with the output of the product and adding to the cart.
---
&nbsp;

---
### We will display the goods in the "index.html" file, in an element specially prepared for this with the "goods" CSS-class. The "goods.js" file located in the "js" folder will do all the output work. Let's take a look at it.

&nbsp;
### The work of the "goods.js" file can also be divided into two parts: the output part; and the part with adding goods to the cart, or rather in the "LocalStorage" of the browser.

&nbsp;
### First, we create a "cart" object with product data. Each product will have its own article and its data, namely: the name of the product; link to the product card (currently not used); image in two formats (jpg, webp); and price per piece.

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

### Next, we will create a variable to store the "html-code" and call it "out". Then we iterate over the "cart" object with the goods in the "for in" loop, and render each product on the page by assigning the "out" variable to the element with the class "goods".

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

### Here I want to stop and explain the reason why I took this approach, the fact is that in the beginning I created the elements through "document.createElement()", which in turn led to a problem with the readability of the code and a large number of its lines. Since I was using "BEM" CSS-class methodology in the project, I was faced with adding a huge amount of CSS classes for each created element, so I used "html-code" to create the elements, assigned them the classes I needed, and brought this all in readable code To output expressions and variables in "html-code", I used string interpolation ("`${} `") available in the "ES6" standard. 
---
&nbsp;

---
### This completes the part with displaying products on the page, now let's analyze the part with adding products to the cart.

&nbsp; 
### First, we need a new object in which we will receive the already added products from the browser storage and which we will send to the browser storage after adding new products to it, let's call it "data".

```

let data = {}; // add items to cart here
let countCart = document.querySelector('.footer-content__count');
let sum = 0;

```

### To display the number of added goods at the bottom of the page, we need: an element for rendering ("countCart"); and the variable "sum" to add up the number of items.

&nbsp;
### Next, I check to see if the "cart" store already exists in the browser. If there is, then I write to the "data" object the received and converted object with data on goods.

```

if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let cartData = cart;

    data = cartData;
    console.log(data);
}

```

### Then, on the goods output block with the "goods" class, we hang the click event via "addEventListener('click')". Inside, we check for the presence of the "cart" class on the element that was clicked, so we get a button.

```

document.querySelector('.goods').addEventListener('click', event => {    
    if (event.target.classList.contains('to-cart')) {
        let articul = event.target.dataset['articul'];
        sum = 0;
})

```

### The buttons with the "cart" class, which we previously rendered into the "out" variable, have a unique attribute with the product SKU. It is this attribute of the pressed button that we get into the "articul" variable for further work with the storage.

&nbsp;
### The variable "sum" is assigned "0", this is necessary for the correct calculation of goods and their quantity.

&nbsp;
### Now you need to check for the presence of the "data" object, objects with keys equal to the articles of the goods, if there is such an object, then the value of the "count" key is increased by one "++", if there is no such object, then into the "data" object an object with such an article is added from the object "cart" and the key "count" is added to it, and "1" is written to the value.

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

### Below the conditions, the "for in" loop works on the "data" object. Here we get the amount of items added to the cart. In the variable "count", we write down the quantity of each product ("data[key].count").

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

### Next, in the "sum" variable, we write the expression equal to: sum + count. So we can get the sum of all added products and their quantities.
### Then we display the received amount on the page in the "countCart" variable. Finally, we create a new storage "cart" with the converted data "data" and send it to the "LocalStorage" of the browser.

&nbsp;
### There's just one more thing left to figure out. When you go to the page with a basket of goods and go back to the page with an assortment of goods, the sum of the goods and their quantity will be equal to "0". To fix this, when loading the page, we need to get an object with goods from the "LocalStorage", iterate through it and sum up the entire number of goods.

&nbsp;
### First, we check for the presence of the "cart" store. Further, if successful, we get the data on the goods from the cart into the "cart" constant.

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

### Then we put the constant "cart" into the variable "cartData" and we already carry out operations with it to extract the number of goods.
### We iterate over "cartData" with the "for in" loop and put the value from "data[key].count" into the "count" variable. Further, by analogy above, we sum the "sum" variable with the number of goods in "count".
### Finally, through "countCart" we display the amount on the page.

&nbsp;
### Now, when loading the page, we will receive the number of items added from the cart.
---
&nbsp;

---
### Now let's see how the cart works.

&nbsp;
### In the shopping cart, you can change the quantity of the added product or delete its position, while the amount of the specific product will increase or decrease when its quantity changes.

&nbsp;
### The total amount of all goods should be calculated, depending on the transactions with the goods listed above, and displayed on the page below.

&nbsp;
### In order to implement the work listed above, you need to create a "Class", which will contain methods for increasing, decreasing and removing goods from the basket. The basket itself with the goods on the page should also be rendered there.

&nbsp;
### We also need to register the interaction of this "Class" with the browser storage, we will use the methods of increasing, decreasing and deleting goods, send new data on the number of goods to the storage, and receive them in the "Class" by displaying them on the page.

&nbsp;
### To do this, you need to create two files: "Cart.js" - in which a "Class" will be created with methods for working with products, and drawing these products on the page; and the "script.js" file - which will work with the browser's storage, changing those products that have been added to the cart, using the methods prescribed in the "Cart.js" class.

&nbsp;
### Since the operation of the cart is interconnected through the code written in "Cart.js" and "script.js", I will describe the steps of working in parallel between these two files.
---
&nbsp;

---
### So let's start with the "script.js" file.
### First, we check for the presence of the "cart" object in the "LocalStorage" of the browser.

```

if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
}

```

### In case of success, in the constant "cart" we put the transformed object with data on goods received from "LocalStorage".

&nbsp;
### Now let's move on to "Cart.js".
### In "Cart.js" we create the "Cart" class.

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

### In the constructor parameters we write: "items" - here we will pass the object with the added goods to the cart; "cartClass", "plusClass", "minusClass", "deleteClass" - by default contain "CSS classes" that will be added to the elements when the cart is rendered, they will help us determine which button the user pressed and how to react to it; "currency" - by default contains the currency in which the price of the product is presented.

&nbsp;
### We are done with the parameters, now let's deal with the initialization of these parameters in the constructor itself through "this" ("this.items" = "items").

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

### Now we can access the assigned properties through "this".
---
&nbsp;

---
### As mentioned above, "items" is an object with data on the items added to the cart.
### To show this, let's go back to "script.js".

&nbsp;
### After declaring the "cart" constant, which contains the object with the added products, we create an object ("shopCart") based on the "Cart" class and pass the added products ("cart") as a parameter.

```

if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let shopCart = new Cart(cart); // cart - an array of items in the cart 
}

```

---
&nbsp;

---
### Let's go back to Cart.js.
### The constructor contains methods for working with items in the cart.
### Methods "goodsPlus", "goodsMinus", "goodsDelete" - receive the article of goods as a parameter and pull out the necessary goods from the "items" object, reducing or increasing its quantity, or deleting it from the "items" object.

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

### "goodsMinus" uses the "goodsDelete" method to remove a product from the cart if the quantity of the product is "0".

&nbsp;
### Next, there are methods for displaying the amount of each product ("setTotal") and the total amount of all products in the basket ("getTotal"), we will analyze them a little later.

&nbsp;
### In the "render()" method, the cart itself will be rendered with goods.
### First, I create a "table" element. I add "table" "CSS-classes": "cart-out__table" - BEM-class that doesn't play a special role; "this.cartClass" - a class from the constructor ("cart"), is also needed for the correct structure of CSS classes according to "BEM".

```

render() {
    let table = document.createElement('table'); // create table
    table.classList.add('cart-out__table');
    table.classList.add(this.cartClass); // add class from constructor

    let tb = document.createElement('tbody');
    table.append(tb);
}

```

### Below I create a "tbody" element and insert it into the "table" element.

&nbsp;
### Next, I loop through the "for in" object "items", for convenience, in the variable "goods" I put an object with a specific product ("this.items[key]") and in the previously created element "tbody", draw the elements of the table ("tb.innerHTML").

```

for (let key in this.items) {
    let goods = this.items[key];
    
    tb.innerHTML += ...
}

```

### In order to output and insert "expressions" into an "HTML string" I used "string interpolation" ("this.deleteClass").
### So for each product, while the loop iterates over the "items" object, table columns are created in which the "CSS-class" from the constructor ("this.minusClass") and the attribute equal to the product SKU ("key").

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

### The picture, name and quantity of the product are displayed in the corresponding cells of the table ("goods.count"). The amount for each product is calculated using the "setTotal()" method, where the quantity of the product ("goods.count") and its price ("goods.price") are passed as parameters. The current currency from the constructor ("this.currency") is inserted at the end of the expression.

&nbsp;
### In the "setTotal(count, price)" method described above, the quantity of the product and its price are taken as parameters.

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

### The variable "total" will store the amount of goods initially equal to "0". Then the result of the expression is written to "total": the quantity multiplied by the price ("count * price"). The resulting "total" is returned via "return" using the "toFixed(2)" method, truncating the result to two numbers after the decimal point.

&nbsp;
### After iterating over the "items" object, the elements of the table are added to the "tbody" with the output of the total amount of all goods in the basket.

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

### The amount is calculated using the "getTotal()" method and the currency ("this.currency") is specified.

&nbsp;
### In the "getTotal()" method, create the "total" variable and assign "0" to it.

```

    getTotal() {
        let total = 0;
        for (let key in this.items) {
            total += this.items[key]['count'] * this.items[key]['price'];
        }
        return total.toFixed(2);
    }

```

### Then we loop through the "for in" object with the goods "items" and in "total" we write ("total +=") the expression: the quantity of the product is multiplied by its price ("this.items[key]['count'] * this.items[key]['price']"). Trim the extra numbers and return the result ("return total.toFixed()").

&nbsp;
### After all the operations done to create the table elements, we return the finished table with the goods ("return table" ).

```

return table;

```

---
&nbsp;

---
### Now let's figure out how to display our table on the page.
### In "script.js" we create the "cartOut" variable and put the element from the page into it, into which we will insert the table.

```

if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let shopCart = new Cart(cart); // cart - an array of items in the cart 
    let cartOut = document.querySelector('.cart-out');

    cartOut.innerHTML = ''; // clean output 
    cartOut.append(shopCart.render()); // draw a basket 
}

```

### We first clear the output in the element ("cartOut.innerHTML = "";"), then use "append()" to insert our table into the page element ("cartOut.append(shopCart.render())").
### Calling the "render()" method on the object ("shopCart") based on the class ("Cart") will return us the finished table that we made in "Cart.js".

&nbsp;
### And the last thing you need to disassemble is the operation of the buttons in the basket.
### First of all, an event listener is attached to "cartOut" that fires when the element is clicked. It is followed, for convenience, by assigning the variable "target" to the element on which the event fired.

```

cartOut.addEventListener('click', (event) => {
    let target = event.target;
});

```

### Since the event will be triggered throughout the block in which we display the table, we need to pull the button we need from the block through the conditions, for this we added the same "CSS classes" in the constructor of the "Cart" class.

&nbsp;
### So, if the click worked on an element with the "delete" CSS class, then we are in an object based on the "Cart" class, call the "delete" method and pass the product SKU as a parameter. Next, we clear the output of the element ("cartOut.innerHTML = "";") and insert the modified table again ("cartOut.append(shopCart.render());").

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

### Now we need to replace the current object from "LocalStorage" with a new one with new product data. To do this, we create a new object to be sent to "LocalStorage" using "setItem()", specify the name of this object ("cart") and send the "shopCart.items" object converted to a string with new data on the added products. We do the same operations with other buttons. 
---
&nbsp;

# 4. Conclusion
&nbsp;

---
### One of my favorite projects! Unlike "React", which forces you to stick to the component approach, there is much more freedom here. The use of "OOP" through the use of "Classes" is convenient and understandable. If you remember how before that you had to use prototypes, inheritance, then the difference is felt. More code has been added, but you can easily work in "React" since the structure is similar. The application turned out to be simple and understandable, and most importantly, working, which is good news. This is an interesting experience, I will continue to work with "OOP" in "JavaScript", opening the doors for myself in "React JS". 
---
&nbsp;

# ___Thank you for your time!___ 