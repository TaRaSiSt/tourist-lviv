(async function () {

    const cards = [{
            id: 1,
            image: "img/lvivNote.jpg",
            title: "Золота Підкова",
            description: "Один із найпопулярніших туристичних маршрутів Львівщини. Екскурсія справді вражає своєю архітектурою та багатовіковою історією.",
            date: "Щодня 09.00 – 17.00 (крім пон.)",
            time: "8 год.",
            price: 400,
            childPrice: 250,
            productId: 11,
            adultId: "011",
            childId: "012"
        },
        {
            id: 2,
            image: "img/lvivNote.jpg",
            title: "Озеро Синевир та водоспад Шипіт",
            description: "Мальовнича і незабутня подорож до «Блакитного ока» Карпат — озера Синевир, одного із Семи Чудес України — водоспаду Шипіт та одної з найвищих вершин Боржави — гори Гемби.",
            date: "Щодня 07.00 – 23.00",
            time: "Тривалість: 15 год.",
            price: 600,
            childPrice: 450,
            productId: 12,
            adultId: "011",
            childId: "012"
        },
        {
            id: 3,
            image: "img/lvivNote.jpg",
            title: "Фортеця Тустань та водоспад Кам'янка",
            description: "Хочете побувати у наймальовничішому куточку львівських Карпат, познайомитись із традиціями Бойківщини, дізнатися славну історію, збережену у природніх могутніх скелях і просто провести незабутній день у горах? Тоді гайда з нами у наш одноденний тур «Фортеця Тустань, водоспад Кам’янка і Мертве озеро»",
            date: "Щодня 09.00 – 19.00",
            time: "10 год.",
            price: 450,
            childPrice: 250,
            productId: 13,
            adultId: "011",
            childId: "012"
        },
        {
            id: 4,
            image: "img/lvivNote.jpg",
            title: "Королівська Жовква та Крехівський монастир",
            description: "Одноденна поїздка до «Ідеального» міста Жовкви та грандіозної святині в Крехові — монастиря святого Миколая Отців Василіян поєднує в собі усе, щоб програма була насиченою і водночас приємною та легкою. Тут Ви побачите: замок, затишні старовинні міські вулички, музей, святе джерело, ліс, грандіозну оборонну святиню…",
            date: "Щопонеділка 10.00 – 17.00",
            time: "7 год.",
            price: 350,
            childPrice: 250,
            productId: 14,
            adultId: "011",
            childId: "012"
        },
        {
            id: 5,
            image: "img/lvivNote.jpg",
            title: "Велике коло",
            description: "Основна оглядова автобусна екскурсія містом, під час якої наш гід познайомить Вас зі Львовом, його історією та найцікавішими пам’ятками архітектури міста Лева.",
            date: "Щодня о 13.00 та 15.00",
            time: "1 год.",
            price: 200,
            childPrice: 150,
            productId: 15,
            adultId: "011",
            childId: "012"
        }, {
            id: 6,
            image: "img/lvivNote.jpg",
            title: "Підйом на Говерлу та Яремче",
            description: "Шукаєте гострих відчуттів, бажаєте відчути незабутні враження на все життя? Тоді Вам точно у цей тур!",
            date: "Щосуботи 7.00 - 23.50",
            time: "17 год.",
            price: 600,
            childPrice: 450,
            productId: 16,
            adultId: "011",
            childId: "012"
        }
    ];

    function renderCards(cards) {
        const cardsContainer = document.querySelector('.productCardBoxRight');
        for (const card of cards) {
            cardsContainer.innerHTML += `
            <div class="productCard">
                        <img src="${card.image}" alt="">
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
                            <br>
                            <div class="product__quantity"></div>
                            <div>
                                <a class="productCardButton" data-sb-id-or-vendor-code="${card.productId}"
                                    data-sb-product-name = "${card.title}: "
                                    data-sb-product-price = "${card.price}"
                                    data-sb-product-quantity = "2"
                                    data-sb-product-img = "${card.image}"
                                    href = "#" >
                                    Забронювати</a>
                            </div>
                    </div>
            `
        }
    }
    renderCards(cards);
})();