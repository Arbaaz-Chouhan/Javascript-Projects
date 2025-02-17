const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

//select items

const img = document.getElementById("preson-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const intro = document.getElementById("intro");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting items

let currenItem = 0;

// load intial item

window.addEventListener("DOMContentLoaded", () => {
    showPerson();
});

// show person based on item

function showPerson() {
    const item = reviews[currenItem];
    img.scr = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    intro.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
    currenItem++;
    if (currenItem > reviews.length - 1) {
        currenItem = 0;
    }
    showPerson();
})

//show prev person
    
prevBtn.addEventListener("click", () => {
    currenItem--;
    if (currenItem < 0) {
        currenItem = reviews.length - 1
    }
    showPerson();
})

// show random person

randomBtn.addEventListener("click",()=>{
    currenItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});

