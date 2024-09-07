const timelineItems = document.querySelectorAll(".timeline-item");
const contentTitle = document.getElementById("content-title");
const contentImage = document.getElementById("content-image");
const contentDescription = document.getElementById("content-description");
const contentContainer = document.querySelector(".timeline-content");

const contentData = {
  2018: {
    title: "April 2018",
    image: "assets/drone.jpg",
    description:
      "We are one of India's leading drone firms in providing end-to-end Drone Solutions.",
  },
  2019: {
    title: "April 2019",
    image: "assets/logo.jpeg",
    description:
      "This year, we expanded our services to global clients and introduced new technology.",
  },
  2020: {
    title: "April 2020",
    image: "assets/drone.jpg",
    description:
      "Despite the global challenges, we achieved significant milestones in drone innovation.",
  },
  2021: {
    title: "April 2021",
    image: "assets/logo.jpeg",
    description:
      "A year of breakthroughs, setting new standards in drone efficiency and reliability.",
  },
  2022: {
    title: "April 2022",
    image: "assets/drone.jpg",
    description:
      "We launched next-gen drones with AI integration, revolutionizing various industries.",
  },
  2023: {
    title: "April 2023",
    image: "assets/logo.jpeg",
    description:
      "Marking our 5th anniversary with cutting-edge advancements in drone technology.",
  },
  2024: {
    title: "April 2024",
    image: "assets/drone.jpg",
    description:
      "Our future-focused roadmap includes ambitious projects across multiple sectors.",
  },
};

function updateContent(year) {
  contentContainer.classList.remove("active");

  setTimeout(() => {
    contentTitle.textContent = contentData[year].title;
    contentImage.src = contentData[year].image;
    contentDescription.textContent = contentData[year].description;

    contentContainer.classList.add("active");
  }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
  timelineItems[0].classList.add("active");
  updateContent("2018");
});

timelineItems.forEach((item) => {
  item.addEventListener("click", () => {
    timelineItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
    const year = item.getAttribute("data-year");
    updateContent(year);
  });
});
