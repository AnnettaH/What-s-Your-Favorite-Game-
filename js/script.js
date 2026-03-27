const info = document.querySelector("#info");
info.insertAdjacentHTML(
  "beforeend",
  `
  <p>Welcome to <i>What's Your Favorite Game?</i> This site was made for curating lists ...</p>

  <p>For reviews, we recommend checking out <a href="https://www.ign.com/reviews/games" target="_blank">IGN</a>...</p>

  <h3>Here are a few of the games they have reviewed:</h3>

  <div class="review-container">

    <div class="review-section">
      <div class="review-text">
        <strong>The Outer Worlds 2 Review:</strong><br>
        <a href="https://www.ign.com/articles/the-outer-worlds-2-review" target="_blank">Read here</a>
      </div>
      <div class="rollover-wrap">
        <img src="/images/OW2.jpg" alt="Outer Worlds 2" class="review-image base">
        <img src="/images/OW2-Hover.jpg" alt="Outer Worlds 2 Hover" class="review-image hover">

      </div>
    </div>

    <div class="review-section">
      <div class="review-text">
        <strong>Fantasy Life i: The Girl Who Steals Time Review:</strong><br>
        <a href="https://www.ign.com/articles/fantasy-life-i-the-girl-who-steals-time-review" target="_blank">Read here</a>
      </div>
      <div class="rollover-wrap">
        <img src="/images/Fantasy.jpg" alt="Fantasy Life i" class="review-image base">
        <img src="/images/Fantasy-Hover.jpg" alt="Fantasy Life Hover" class="review-image hover">
      </div>
    </div>

  </div>
  `
);

// Select the header element
const header = document.querySelector("#colorHeader");

// Change color on mouse enter
header.addEventListener("mouseenter", () => {
  header.style.color = "teal"; // color
});

// Revert color on mouse leave
header.addEventListener("mouseleave", () => {
  header.style.color = "#ffc800"; // gold tone
});

const allGames = [
  {
    text: "Ghosts of Tsushima",
    developer: "Sucker Punch Productions, Nixxes Software",
    image: "images/ghost.jpg",
  },
  {
    text: "Ghost of Yōtei",
    developer: "Sucker Punch Productions",
    image: "images/ghost2.jpg",
  },
  {
    text: "Fashion Dreamer",
    developer: "syn Sophia",
    image: "images/fd2.jpg",
  },
  {
    text: "Life is Strange",
    developer: "Don't Nod",
    image: "images/LiS.jpg",
  },
  {
    text: "Fire Emblem: Awakening",
    developer:
      "Intelligent Systems, Nintendo, Nintendo Software Planning & Development",
    image: "images/fire.jpg",
  },
  {
    text: "Tales of Arise",
    developer: "BANDAI NAMCO Entertainment, BANDAI NAMCO Studios",
    image: "images/tales.jpg",
  },
  {
    text: "Code Vein",
    developer: "BANDAI NAMCO Studios",
    image: "images/code.jpg",
  },
  {
    text: "Kingdom Hearts 358/2 Days",
    developer: "Square Enix",
    image: "images/358.jpg",
  },
  {
    text: "Folklore",
    developer: "Game Republic, Shirogumi, Gaia",
    image: "images/folk.jpg",
  },
  {
    text: "Bloodborne",
    developer: "From Software",
    image: "../images/blood.jpg",
  },
];

const getTheDate = () => {
  let thedate = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  document.querySelector(
    "#displayDate"
  ).innerHTML = `<strong>${thedate.toLocaleDateString(
    "en-IE",
    options
  )}</strong>`;
};

/*string manipulation*/
const capitalise = (str) => {
  str = str.split(" ");
  str.forEach((item, index, arr) => {
    arr[index] = item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
  });
  return str.join(" ");
};

const getNewGame = () => {
  const index = Math.floor(Math.random() * allGames.length);
  const auth =
    allGames[index].developer !== null
      ? allGames[index].developer
      : "Anonymous";
  document.querySelector("#games").innerHTML = `<br>${capitalise(
    allGames[index].text
  )} <br> ${auth} <br>${
    allGames[index].image
      ? `<img src="${allGames[index].image}" alt="${auth}" class="quote-image">`
      : ""
  }
  `;
};
let btn = document.querySelector("button");

getTheDate();

getNewGame();

btn.addEventListener("click", getNewGame);
