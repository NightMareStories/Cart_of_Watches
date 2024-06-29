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
    getTotal() {
        let total = 0;
        for (let key in this.items) {
            total += this.items[key]['count'] * this.items[key]['price'];
        }
        return total.toFixed(2);
    }
    setTotal(count, price) {
        let total = 0;
        total += count * price;
        return total.toFixed(2);
    }
    render() {
        let table = document.createElement('table'); // create table
        table.classList.add('cart-out__table');
        table.classList.add(this.cartClass); // add class from constructor

        let tb = document.createElement('tbody');
        table.append(tb);

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
        // do full total 

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
        
        return table;
    }
}
