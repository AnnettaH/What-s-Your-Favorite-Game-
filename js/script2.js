// Page introduction
document.querySelector(
  "#intro"
).innerHTML = `<p><strong>Welcome to Your Games!</strong> Here, you can add your favorite games,
  view them in a table, and explore titles you might love. Use the form below to add your record.</p>`;

// Store text and image data for each option
const ideas = {
  Simulation: {
    title: "Style Savvy: Styling Star",
    text: "Gameplay involves running a fashion boutique that is bequeathed to the player by their uncle Tim. The player is responsible for choosing fashion items or full outfits that fit the specifications given by the customer. ",
    image: "images/style.jpg",
  },
  Horror: {
    title: "Resident Evil",
    text: "It consists of survival horror, third-person shooter and first-person shooter games, with players typically surviving in environments inhabited by zombies and other mutated creatures.",
    image: "images/resi.png",
  },
  RPG: {
    title: "Persona 3",
    text: "In Persona 3, the player assumes the role of a high school student who joins the 'Specialized Extracurricular Execution Squad' (SEES), a group of students investigating a temporal anomaly known as the 'Dark Hour', during which its members can enter Tartarus, a tower containing monsters called Shadows.",
    image: "images/p3.jpg",
  },
};

$(".ui.radio.checkbox").checkbox(); // initialize Semantic/Fomantic UI checkboxes
// Get elements

// ---- Build Popup HTML using createElement ---- //
const popup = document.getElementById("popup");

// Create outer container
const popupContent = document.createElement("div");
popupContent.id = "popup-content";

// Close button
const closeBtn = document.createElement("span");
closeBtn.id = "close-popup";
closeBtn.innerHTML = "&times;";

// Title
const popupTitle = document.createElement("h3");
popupTitle.id = "popup-title";

// Text
const popupText = document.createElement("p");
popupText.id = "popup-text";

// Image
const popupImage = document.createElement("img");
popupImage.id = "popup-image";
popupImage.alt = "Genre Image";

// Append elements into popup content
popupContent.appendChild(closeBtn);
popupContent.appendChild(popupTitle);
popupContent.appendChild(popupText);
popupContent.appendChild(popupImage);

// Add popup content to popup container
popup.appendChild(popupContent);

const radios = document.querySelectorAll('input[name="ideas"]');

// When a radio button is selected
radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    // Look up the correct object in ideas
    const choice = ideas[event.target.value];

    // Fill popup with correct info
    popupTitle.textContent = choice.title;
    popupText.textContent = choice.text;
    popupImage.src = choice.image;

    // Show popup
    popup.style.display = "flex";
  });
});

// Close popup when X is clicked or when background is clicked
closeBtn.addEventListener("click", () => (popup.style.display = "none"));
popup.addEventListener("click", (event) => {
  if (event.target === popup) popup.style.display = "none";
});

// Table Creation and Local Storage Initialization
$(".ui.dropdown").dropdown();
// Games stored in localStorage

let games = localStorage.getItem("games")
  ? JSON.parse(localStorage.getItem("games"))
  : [
      { title: "Kingdom Hearts", release: "2002", country: "Japan" },
      { title: "Elden Ring", release: "2022", country: "Japan" },
      { title: "Fallout 3", release: "2008", country: "U.S." },
    ];

document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table");
  const toggleBtn = document.querySelector("#toggle");
  const form = document.querySelector("#game-form");
  const submitBtn = document.querySelector("#submit-btn");
  const clearBtn = document.querySelector("#clear-btn");

  // Initialize Fomantic UI dropdowns
  $(".ui.dropdown").dropdown();

  // Initialize modal
  $("#game-modal").modal();

  // Open modal when "Add a Record" button is clicked
  toggleBtn.addEventListener("click", () => $("#game-modal").modal("show"));

  // Close modal when Cancel button is clicked
  document
    .querySelector("#close-modal")
    .addEventListener("click", () => $("#game-modal").modal("hide"));

  // Add new game
  submitBtn.addEventListener("click", () => form.requestSubmit());

  // Clear form
  clearBtn.addEventListener("click", () => {
    form.reset();
    form.elements[0].focus(); // optional: put focus back on first field
  });

  // Form submission
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    // Handle image upload or default
    let imgFile = form.elements.file.files[0];
    let imgPath = imgFile ? "images/" + imgFile.name : "images/default.jpg";

    const newgame = {
      title: form.elements.title.value,
      release: form.elements.release.value,
      country: form.elements.country.value,
      image: imgPath,
    };

    games.push(newgame);
    updateTable();

    form.reset();
    form.elements[0].focus();

    // Hide modal
    $("#game-modal").modal("hide");
  });

  // Submit button triggers form submit
  document.querySelector("#submit-btn").addEventListener("click", () => {
    form.requestSubmit();
  });

  // ---------------------------
  // Handlebars Setup
  // ---------------------------
  const template = Handlebars.compile(
    document.querySelector("#game-template").innerHTML
  );

  // ---------------------------
  // Updates table + localStorage
  // ---------------------------
  const updateTable = () => {
    localStorage.setItem("games", JSON.stringify(games));
    table.innerHTML = template(games);
  };

  // Render table on initial load
  updateTable();

  // ---------------------------
  // Delete a record
  // ---------------------------
  table.addEventListener("click", (evt) => {
    if (evt.target.matches("button")) {
      const deleteIndex = games.findIndex(
        (g) => g.title === evt.target.dataset.id
      );
      games.splice(deleteIndex, 1);
      updateTable();
    }
  });
});
