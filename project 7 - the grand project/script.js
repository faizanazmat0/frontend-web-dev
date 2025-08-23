document.addEventListener("DOMContentLoaded", function () {
  // Navigation links smooth scrolling
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetText = this.textContent.trim();
      let targetSection;

      // Map navigation text to section IDs
      switch (targetText) {
        case "HOME":
          targetSection = document.querySelector(".nav-hero");
          break;
        case "MENU":
          targetSection = document.querySelector(".menu-container");
          break;
        case "ABOUT":
          targetSection = document.querySelector(".about-container");
          break;
        case "BOOK TABLE":
          targetSection = document.querySelector(".book-a-table-container");
          break;
      }

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update active nav link
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });
});

const filterMenuItems = document.querySelectorAll(".filter-menu li");
const menuCards = document.querySelectorAll(".menu-card");

// Add data attributes to menu cards for filtering
const menuData = [
  { element: menuCards[0], category: "pizza", title: "Delicious Pizza" },
  { element: menuCards[1], category: "burger", title: "Delicious Burger" },
  { element: menuCards[2], category: "pizza", title: "Delicious Pizza" },
  { element: menuCards[3], category: "pasta", title: "Pasta" },
  { element: menuCards[4], category: "fries", title: "Fries" },
  { element: menuCards[5], category: "pizza", title: "Delicious Pizza" },
];

// Set data attributes
menuData.forEach((item, index) => {
  if (item.element) {
    item.element.setAttribute("data-category", item.category);
  }
});

filterMenuItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active class from all filter items
    filterMenuItems.forEach((filterItem) =>
      filterItem.classList.remove("active")
    );
    // Add active class to clicked item
    this.classList.add("active");

    const filterValue = this.textContent.trim().toLowerCase();

    // Filter menu cards
    menuCards.forEach((card) => {
      if (filterValue === "all") {
        card.style.display = "flex";
        card.style.animation = "fadeIn 0.5s ease-in-out";
      } else {
        const cardCategory = card.getAttribute("data-category");
        if (cardCategory && cardCategory.includes(filterValue)) {
          card.style.display = "flex";
          card.style.animation = "fadeIn 0.5s ease-in-out";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
});
