const products = [
  {
    id: "1",
    title: "Baby Yoda",
    description:
      "Цей милий стікер із Baby Yoda додасть унікальності вашому ноутбуку, пляшці для води або будь-якому іншому аксесуару. Виготовлений з високоякісного вінілу, стікер водостійкий і довговічний. Ідеальний подарунок для фанатів 'Star Wars'!",
    image: "img/stickerz/baby-yoda.svg",
    price: 9.99,
  },
  {
    id: "2",
    title: "Banana",
    description:
      "Стікер із яскравим бананом наповнить ваш день позитивом і кольоровим настроєм! Легко кріпиться на ноутбук, телефон або блокнот. Водостійкий і міцний, цей стікер стане чудовим доповненням до вашої колекції.",
    image: "img/stickerz/banana.svg",
    price: 7.99,
  },
  {
    id: "3",
    title: "Girl",
    description:
      "Стікер із стильним дизайном дівчини додасть вишуканості вашим речам. Чудово підійде для прикраси ноутбука, пляшки з водою або зошита. Високоякісний вініл забезпечує довговічність і водостійкість.",
    image: "img/stickerz/girl.svg",
    price: 8.99,
  },
  {
    id: "4",
    title: "Viking",
    description:
      "Могутній стікер із зображенням вікінга для справжніх шанувальників скандинавської культури. Ідеальний для персоналізації вашого гаджета чи аксесуару. Виготовлений із міцного вінілу, стікер не боїться води та витримує знос.",
    image: "img/stickerz/viking.svg",
    price: 10.99,
  },
];

function productsRender(products) {
  let productHtml = '';
  for (const product of products) {
    productHtml += `
    <article class="products__item">
      <img
        class="products__image"
        src="${product.image}"
        alt="${product.title}"
      />
      <h3 class="priducts__name">${product.title}</h3>
      <p class="products__description">
        ${product.description}
      </p>
      <div class="products__actions">
        <button
          class="products__button products__button--info button button-card"
        >
          Info
        </button>
        <button
          class="products__button products__button--buy button button-card"
        >
          Buy - ${product.price}
        </button>
      </div>
    </article>`;
  }

  document.querySelector(".products__list").innerHTML = productHtml;
}

productsRender(products);