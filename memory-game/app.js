document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "fries",
      image: "images/fries.png",
    },
    {
      name: "fries",
      image: "images/fries.png",
    },
    {
      name: "pizza",
      image: "images/pizza.png",
    },
    {
      name: "pizza",
      image: "images/pizza.png",
    },
    {
      name: "hotdog",
      image: "images/hotdog.png",
    },
    {
      name: "hotdog",
      image: "images/hotdog.png",
    },
    {
      name: "cheeseburger",
      image: "images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      image: "images/cheeseburger.png",
    },
    {
      name: "milkshake",
      image: "images/milkshake.png",
    },
    {
      name: "milkshake",
      image: "images/milkshake.png",
    },
    {
      name: "ice-cream",
      image: "images/ice-cream.png",
    },
    {
      name: "ice-cream",
      image: "images/ice-cream.png",
    },
  ];
  const grid = document.querySelector(".grid");

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      //card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  createBoard();
});
