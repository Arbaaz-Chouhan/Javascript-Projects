const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore voluptas consectetur sunt architecto iusto!`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore voluptas consectetur sunt architecto iusto!`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://www.mariefranceasia.com/wp-content/uploads/sites/7/2015/11/Robert-Timms-490x410.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore voluptas consectetur sunt architecto iusto!`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://static.wixstatic.com/media/5f869d_cfa679aeae334e0daabdc7e31c5ca010~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/5f869d_cfa679aeae334e0daabdc7e31c5ca010~mv2.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore voluptas consectetur sunt architecto iusto!`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSffmUjyKDXUx4s2dpf1VxX7_Oa9yqkLUWJN9C52e8svucIoD4Ri62p7Vmw7z58qJ9NY&usqp=CAU",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore voluptas consectetur sunt architecto iusto!`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "data:image/jpeg;base64,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",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore voluptas consectetur sunt architecto iusto!`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://munchyesta.com/wp-content/uploads/2021/09/the-best-vegan-bacon-recipe.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore voluptas consectetur sunt architecto iusto!`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-JKC1pIrpZ7rz5bJdhs1DmvhzCsm_Rl69w&s",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore voluptas consectetur sunt architecto iusto!`,
  },
  {
    id: 9,
    title: "Rosted Chicken",
    category: "shakes",
    price: 16.99,
    img: "https://i0.wp.com/spadesspatulasandspoons.com/wp-content/uploads/2023/02/yXA4PprSR2E6tSQqZn3gw_thumb_a4fc.jpg?fit=619%2C344&ssl=1",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore voluptas consectetur sunt architecto iusto!`,
  },
  {
    id: 10,
    title: "Sharbat",
    category: "dinner",
    price: 22.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYR35fVq0VNwUkCW7e01nyBhGFJzoQPVLuQ&s",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore voluptas consectetur sunt architecto iusto!`,
  },
]

const sectcionCenter = document.querySelector(".section-center");
const filterBtn = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItem(menu);
})

// filter item
filterBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      };
    });
    if (category === "all") {
      displayMenuItem(menu);
    } else {
      displayMenuItem(menuCategory)
    }

  });
});



function displayMenuItem(MenuItems) {
  let displayMenu = MenuItems.map((item) => {
    return `  <article class="menu-item">
    <img src="${item.img}" class="photo" alt="">
    <div class="item-intro">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}<pLorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore voluptas consectetur sunt architecto iusto!>
    </div>
</article>`
  })

  displayMenu = displayMenu.join("");
  sectcionCenter.innerHTML = displayMenu;
};