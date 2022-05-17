(async function () {

    const cards = [{
            id: 1,
            image: "img/roofLviv/one.jpg",
            title: "Дахами Львова",
            description: "Надзвичайно мальовнича та інстаграмна екскурсія, що дає можливість сповна насолодитися красою Львова з висоти пташиного польоту.",
            date: "Щодня о 13.00 та 15.00",
            time: "1 год.",
            price: 150,
            childPrice: 100,
            productId: 11,
            adultId: "01",
            childId: "02"
        },
        {
            id: 2,
            image: "img/oldTown/one.jpg",
            title: "Старе місто",
            description: "Пішохідна оглядова екскурсія середньовічною частиною Львова, ідеальний варіант екскурсії для гостей Львова, які відвідують місто вперше та бажають сповна поринути в атмосферу Львова, ознайомитись із його історією та традиціями.",
            date: "Щодня о 11.00 та 15.00",
            time: "2 год.",
            price: 100,
            childPrice: 50,
            productId: 12,
            adultId: "01",
            childId: "02"
        },
        {
            id: 3,
            image: "img/seven/one.jpg",
            title: "7 чудес Львова",
            description: "Пішохідна екскурсія Сім Чудес Львова — класичний варіант для тих, хто хоче побачити Львів із найвитонченішої і найаристократичнішої сторони.",
            date: "Щодня о 15.00",
            time: "3 год.",
            price: 100,
            childPrice: 50,
            productId: 13,
            adultId: "01",
            childId: "02"
        },
        {
            id: 4,
            image: "img/underground/one.jpg",
            title: "Підземелля Львова",
            description: "Пішохідна екскурсія вечірнім Личаківським кладовищем — неймовірна подорож у минулі століття, яка подарує Вам незабутні відчуття та масу нових вражень.",
            date: "Щодня о 12.00 та 15.00",
            time: "2 год.",
            price: 150,
            childPrice: 100,
            productId: 14,
            adultId: "01",
            childId: "02"
        },
        {
            id: 5,
            image: "img/lychakivNight/one.jpg",
            title: "Нічний Личаків",
            description: "Пішохідна екскурсія вечірнім Личаківським кладовищем — неймовірна подорож у минулі століття, яка подарує Вам незабутні відчуття та масу нових вражень.",
            date: "Щодня о 18.00",
            time: "2 год.",
            price: 150,
            childPrice: 100,
            productId: 15,
            adultId: "01",
            childId: "02"
        },
        {
            id: 6,
            image: "img/lvivNight/one.jpg",
            title: "Вечірній Львів",
            description: "Затишні і мальовничі львівські дворики, вулички, оповиті легкою музикою та запашним ароматом кави, суто львівські, типові кнайпи, інтер’єри львівських храмів, цікаві містичні та цілком реальні історичні розповіді — усе це, в добавок до романтичного вечірнього освітлення вуличних ліхтарів чекає Вас на нашій екскурсії Вечірній Львів.",
            date: "Щодня о 19.30",
            time: "2 год.",
            price: 150,
            childPrice: 100,
            productId: 16,
            adultId: "01",
            childId: "02"
        }
    ];

    function renderCards(cards) {
        const cardsContainer = document.querySelector('.productCardBoxLeft');
        for (const card of cards) {
            cardsContainer.innerHTML += `
            <div class="productCard">
                        <div><img src="${card.image}" alt=""></div>
                        <div>
                        <h3>${card.title}</h3>
                            <p>${card.description}</p>
                            <div class="product-info">
                                <p><b>${card.date}</b></p>
                                <p><b>Тривалість: ${card.time}</b></p>
                            </div>
                            <div class="product__price">
                                <b><span class="product__price-number">${card.price}</span> ₴</b>
                            </div>
                            <div class="product__type">
                                <div class="product__type-element" data-sb-curent-price="${card.price}"
                                    data-sb-curent-size="дорослий" data-sb-curent-id-or-vendor-code="${card.adultId}">Дорослий</div>
                                <div class="product__type-element" data-sb-curent-price="${card.childPrice}"
                                    data-sb-curent-size="дитячий" data-sb-curent-id-or-vendor-code="${card.childId}">Дитячий</div>
                            </div>
                            <div class="product__quantity"></div>
                            <div>
                                <a class="productCardButton" data-sb-id-or-vendor-code="${card.productId}"
                                    data-sb-product-name = "${card.title}: "
                                    data-sb-product-price = "${card.price}"
                                    data-sb-product-quantity = "1"
                                    data-sb-product-img = "${card.image}"
                                    href = "#" >
                                    Забронювати</a>
                            </div>
                        </div>
                    </div>
            `
        }
    }
    renderCards(cards);
})();