const cards = {
  interior: {
    element: document.getElementById("interior-card"),
    content: [
      {
        title: "Interior 1",
        description:
          "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Interior 2",
        description:
          "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Interior 3",
        description:
          "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Interior 4",
        description:
          "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Interior 5",
        description:
          "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
      },
    ],
  },
  architecture: {
    element: document.getElementById("architecture-card"),
    content: [
      {
        title: "Architecture 1",
        description: "architecture description",
      },
      {
        title: "Architecture 2",
        description: "architecture description",
      },
      {
        title: "Architecture 3",
        description: "architecture description",
      },
      {
        title: "Architecture 4",
        description: "architecture description",
      },
    ],
  },
  planning: {
    element: document.getElementById("planning-card"),
    content: [
      {
        title: "Planning 1",
        description:
          "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Planning 2",
        description:
          "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Planning 3",
        description:
          "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Planning 4",
        description:
          "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Planning 5",
        description: "Lorem ipsum dolor amet consectetur adipiscing elit",
      },
      {
        title: "Planning 6",
        description: "Lorem ipsum dolor amet consectetur adipiscing elit",
      },
      {
        title: "Planning 7",
        description: "Lorem ipsum dolor amet consectetur adipiscing elit",
      },
    ],
  },
};

function filter(type) {
  let spinner = document.getElementById("loading-container");
  let cardsContainer = document.getElementById("cards-container");
  let cardsContainerHeight = cardsContainer.offsetHeight;

  spinner.style.height = `${cardsContainerHeight}px`;
  cardsContainer.innerHTML = "";
  spinner.style.display = "flex";

  [...document.getElementsByClassName("navigation__button")].forEach((el) => {
    el.classList.remove("active");
  });

  setTimeout(() => {
    let elementsArray = [];

    if (type) {
      document.getElementById(type + "-button").classList.add("active");

      let baseCardElement = cards[type].element;

      elementsArray = cards[type].content.map((cardContent) => {
        let newCard = baseCardElement.cloneNode(true);
        newCard.querySelector(".content__header").innerHTML = cardContent.title;
        newCard.querySelector(".content__description").innerHTML =
          cardContent.description;

        return newCard;
      });
    } else {
      document.getElementById("all-button").classList.add("active");

      elementsArray = Object.keys(cards).map((cardType) => {
        let newCard = cards[cardType].element.cloneNode(true);
        newCard.querySelector(".content__header").innerHTML =
          cards[cardType].content[0].title;
        newCard.querySelector(".content__description").innerHTML =
          cards[cardType].content[0].description;

        return newCard;
      });
    }

    spinner.style.display = "none";
    spinner.style.height = null;
    elementsArray.forEach((cardNode) => {
      cardsContainer.appendChild(cardNode);
    });
  }, 500);
}
