const artworks = [
  {
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    description: "I look at the stars and with all my being feel that I am a part of one of these stars.",
    image: "starry night.jpg",
    date: "June 1889",
  },
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    description: "A portrait of enigmatic charm and mystery.",
    image: "monalisa.jpg",
    date: "1503",
  },
  {
    title: "The Persistence of Memory",
    artist: "Salvador Dali",
    description: "A surreal representation of melting clocks.",
    image: "persistence of memory.jpg",
    date: "1931",
  },
  {
    title: "The Scream",
    artist: "Edvard Munch",
    description: "A depiction of existential dread and human anxiety.",
    image: "the-scream.jpg",
    date: "1893",
  },
  {
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    description: "A masterful depiction of light and emotion.",
    image: "girl with pearl earring.jpeg",
    date: "1665",
  },
  {
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    description: "One of the most famous depictions of Christ and his apostles.",
    image: "last supper.jpg",
    date: "1499",
  },
  {
    title: "Guernica",
    artist: "Pablo Picasso",
    description: "A haunting representation of war and destruction.",
    image: "guernica.jpg",
    date: "1937",
  },
  {
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    description: "A celebration of divine beauty and mythology.",
    image: "birth of venus.jpg",
    date: "1510",
  },
  {
    title: "Sunflowers",
    artist: "Vincent van Gogh",
    description: "A vibrant study of nature and color.",
    image: "sunflowers.jpg",
    date: "1888",
  },
  {
    title: "The Night Watch",
    artist: "Rembrandt",
    description: "A dynamic group portrait showcasing light and shadow.",
    image: "the night watch.jpg",
    date: "1642",
  },
];

const artworkContainer = document.querySelector(".artwork-container");

let currentIndex = 0;

// Populate artworks
function populateArtworks() {
  artworkContainer.innerHTML = artworks
    .map(
      (art) => `
      <div class="artwork">
        <img src="${art.image}" alt="${art.title}">
        <div class="info">
          <h2>${art.title}</h2>
          <p>${art.description}</p>
          <p><strong>${art.artist}</strong> - ${art.date}</p>
        </div>
      </div>
    `
    )
    .join("");
}

// Render artworks
function renderArtworks() {
  artworkContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Navigation
function navigate(direction) {
  if (direction === "next") {
    currentIndex = (currentIndex + 1) % artworks.length;
  } else {
    currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
  }
  renderArtworks();
}

// Event listeners for navigation
document.querySelector(".next-btn").addEventListener("click", () => navigate("next"));
document.querySelector(".prev-btn").addEventListener("click", () => navigate("prev"));

// Initial setup
populateArtworks();
renderArtworks();
