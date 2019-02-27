const products = [
    {
        id: 1,
        title: 'Notebook',
        price: 2000
    },
    {
        id: 2,
        price: 20
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 200
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 50
    },
    {
        id: 5,
    },
];

const renderProduct = (title = "Noname", price = 0) => {
    if (title === "Noname" || price === 0) {
        console.log('Сбой базы');
    } else {
    return `<div class="product-item">
                <div class="productName">
                    <h3>${title}</h3>
                    <p>Price: ${price}</p>
                </div>
                <button class="buy-btn">Купить</button>
            </div>`
}};
const renderPage = (list = []) => {
    //const productsList = list.map(item => renderProduct(item.title, item.price));
    //document.querySelector('.products').innerHTML = productsList.join(''); //избавляемся от запятой, т.к. map возвращает массив, а шаблон преобразует в строку с ,
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join("");

};

renderPage(products);
