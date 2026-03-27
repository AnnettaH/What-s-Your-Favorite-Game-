// Simple page introduction
document.querySelector(
  "#intro"
).innerHTML = `<p><strong>Welcome to Our Picks!</strong> Wanna see what games we have on our backlog? Take a look through the dropdown list!</p>`;

const titles = [
  {
    name: "Kingdom Hearts",
    developer: "Square Enix",
    image: "../images/KH3.jpg",
    genre: "JRPG",
    release: 2002,
  },
  {
    name: "Elden Ring",
    developer: "From Software",
    image: "../images/Elden.jpg",
    genre: "Fantasy/RPG",
    release: 2022,
  },
  {
    name: "Infinity Nikki",
    developer: "InFold Games, Papergames, InFold Pte. Ltd.",
    image: "images/Infinity.jpg",
    genre: "Simulation",
    release: 2024,
  },
  {
    name: "Fantasy Life i:The Girl Who Steals Time",
    developer: "Level-5",
    image: "../images/Fantasy.jpg",
    genre: "Cozy",
    release: 2025,
  },
  {
    name: "Fallout 3",
    developer: "Bethesda",
    image: "images/f3.jpg",
    genre: "Open World",
    release: 2008,
  },
  {
    name: "Silent Hill f",
    developer: "NeoBards Entertainment Limited",
    image: "images/sf.jpg",
    genre: "Horror",
    release: 2025,
  },
];

const form = document.querySelector("form");
const selmenu = form.elements.genre;

selmenu.addEventListener("change", (evt) => {
  let selectedItem = selmenu.value; // .value: calling the option list  <option value = "Simulation">Simulation</option>
  console.log(selectedItem);

  let genre = form.elements.genre.value; //Chosen value from dropdown list.
  let filtered_titles = titles.filter(
    (titles) => titles.genre.toLocaleLowerCase() === genre.toLocaleLowerCase()
  ); //Comapring against the dropdown list with information from each record.
  let cards = document.querySelector(".cards");
  cards.innerHTML = ""; //Clears the code.
  filtered_titles.forEach((titles) =>
    cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
    <img src="${titles.image}" alt="${titles.name}" >
    <div class="text">
      <h3>${titles.developer}</h3>
      <p>
       <i>${titles.name}</i> is a ${titles.genre} game.
      </p>
	  <p><i class="fa fa-user"></i> ${titles.release} Release</p>
    </div>
   </div>`
    )
  );
});

// Carousel
var ang = 0;

document.querySelector(".prev-btn").addEventListener("click", function () {
  ang = ang + 24; // 360 / 15 images = 24 degrees per step
  document.documentElement.style.setProperty("--carousel-angle", ang);
});

document.querySelector(".next-btn").addEventListener("click", function () {
  ang = ang - 24;
  document.documentElement.style.setProperty("--carousel-angle", ang);
});
