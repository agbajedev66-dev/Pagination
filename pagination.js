const articles = [
  {
    category: "Design",
    title: "Modern Landing Page",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Colorful design materials on a desk",
    description:
      "Explore a clean interface system built for fast product launches and stronger user attention.",
    date: "Jan 12",
    readTime: "4 min read",
  },
  {
    category: "Marketing",
    title: "Growth Campaign Ideas",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Analytics dashboard displayed on a laptop",
    description:
      "Learn how smart funnels and content planning can improve conversion and customer retention.",
    date: "Jan 14",
    readTime: "6 min read",
  },
  {
    category: "Coding",
    title: "Reusable UI Patterns",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Laptop with code on screen",
    description:
      "Build scalable components that save time and create consistency across product teams.",
    date: "Jan 18",
    readTime: "7 min read",
  },
  {
    category: "Business",
    title: "Startup Planning Basics",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Planning notes and charts on a desk",
    description:
      "Keep your roadmap clear with practical steps for product research, pricing, and validation.",
    date: "Jan 22",
    readTime: "5 min read",
  },
  {
    category: "Performance",
    title: "Speed Optimization Tips",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Close-up of computer hardware",
    description:
      "From image compression to smarter queries, simple changes can drastically improve site speed.",
    date: "Jan 28",
    readTime: "8 min read",
  },
  {
    category: "Analytics",
    title: "Tracking User Behavior",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Charts and metrics on a computer screen",
    description:
      "Measure the right events to understand how visitors move through your site and where they drop off.",
    date: "Feb 02",
    readTime: "5 min read",
  },
  {
    category: "Product",
    title: "Build Better User Flows",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Product design sketches and interface planning",
    description:
      "Create smoother journeys by cutting friction, reducing decisions, and designing clearer next steps.",
    date: "Feb 05",
    readTime: "4 min read",
  },
  {
    category: "Strategy",
    title: "Prioritize What Matters",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Notebook with a written plan and calendar",
    description:
      "Strong teams focus on high-impact opportunities first and use consistent goals to guide the work.",
    date: "Feb 08",
    readTime: "6 min read",
  },
  {
    category: "Content",
    title: "Writing for Online Audiences",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Open notebook and pen ready for writing",
    description:
      "Shorter paragraphs, stronger hooks, and helpful structure can keep readers engaged.",
    date: "Feb 10",
    readTime: "3 min read",
  },
  {
    category: "Leadership",
    title: "Simple Team Communication",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Colleagues collaborating around a table",
    description:
      "Clear updates, honest feedback, and shared priorities improve team momentum and reduce confusion.",
    date: "Feb 12",
    readTime: "7 min read",
  },
  {
    category: "UX",
    title: "Design Systems That Scale",
    image:
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Interface design displayed on a computer",
    description:
      "Standardize colors, spacing, and typography so your product feels polished across every screen.",
    date: "Feb 15",
    readTime: "8 min read",
  },
  {
    category: "Technology",
    title: "A Practical Guide to APIs",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Technology components on a circuit board",
    description:
      "Understand how APIs connect services and help teams build more flexible applications.",
    date: "Feb 18",
    readTime: "5 min read",
  },
  {
    category: "Dealership",
    title: "Simple Team Communication",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Team members sharing ideas in a meeting",
    description:
      "Clear updates, honest feedback, and shared priorities improve team momentum and reduce confusion.",
    date: "Feb 12",
    readTime: "7 min read",
  },
  {
    category: "UI",
    title: "Design Systems That Scale",
    image:
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Digital interface design on a monitor",
    description:
      "Standardize colors, spacing, and typography so your product feels polished across every screen.",
    date: "Feb 15",
    readTime: "8 min read",
  },
  {
    category: "AI",
    title: "A Practical Guide to APIs",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Abstract artificial intelligence illustration",
    description:
      "Understand how APIs connect services and help teams build more flexible applications.",
    date: "Feb 18",
    readTime: "5 min read",
  },
];
const paginationContainer = document.getElementById("pagination-content");
const buttonContainer = document.getElementById("pagination-buttons");
const prevBTN = document.getElementById("prev");
const nextBTN = document.getElementById("next");

// Creating all needed variables

const itemsPerPage = 3;
let currentPages = 1;
let totalPages = Math.ceil(articles.length / itemsPerPage);
let windowStart = 1;
// console.log(windowStart);

// This function shows only the articles for the current page.
// It calculates the range of items to display based on the current page number,
// slices the articles array, and then creates a card for each item.
function displayArticles() {
  paginationContainer.innerHTML = "";

  // Calculating starting and ending position
  const startPosition = (currentPages - 1) * itemsPerPage;
  const endPosition = startPosition + itemsPerPage;
  const currentArticles = articles.slice(startPosition, endPosition);

  currentArticles.forEach((article) => {
    const paginationCards = document.createElement("div");
    Object.assign(paginationCards.style, {
      display: "grid",
      gridTemplateColumns: "1fr",
      alignContent: "start",
      background: "rgba(255, 255, 255, 0.88)",
      border: "1px solid rgba(120, 92, 27, 0.15)",
      borderRadius: "18px",
      padding: "20px",
      boxShadow: "0 10px 24px rgba(46, 42, 28, 0.08)",
    });

    const image = document.createElement("img");
    image.src = article.image;
    image.alt = article.imageAlt;
    Object.assign(image.style, {
      width: "100%",
      aspectRatio: "16 / 9",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "18px",
    });
    paginationCards.appendChild(image);

    const category = document.createElement("h2");
    category.innerHTML = article.category;
    Object.assign(category.style, {
      gridColumn: "1 / -1",
      justifySelf: "start",
      background: "#f4e7ad",
      color: "#6d5610",
      fontSize: "0.75rem",
      fontWeight: "700",
      padding: "6px 10px",
      borderRadius: "999px",
      marginBottom: "16px",
    });
    paginationCards.append(category);
    const title = document.createElement("h4");
    title.innerHTML = article.title;
    Object.assign(title.style, {
      gridColumn: "1 / -1",
      fontSize: "1.3rem",
      color: "#202020",
      marginBottom: "12px",
    });
    paginationCards.appendChild(title);

    const paragraph = document.createElement("p");
    paragraph.textContent = article.description;
    Object.assign(paragraph.style, {
      gridColumn: "1 / -1",
      color: "#4f4f4f",
      lineHeight: "1.6",
      marginBottom: "18px",
    });
    paginationCards.appendChild(paragraph);

    const date = document.createElement("p");
    date.textContent = article.date;
    Object.assign(date.style, {
      fontSize: "0.8rem",
      color: "#7b6d42",
      borderTop: "1px solid #efe8d0",
      paddingTop: "12px",
    });
    paginationCards.appendChild(date);

    const readTime = document.createElement("p");
    readTime.textContent = article.readTime;
    Object.assign(readTime.style, {
      fontSize: "0.8rem",
      color: "#7b6d42",
      borderTop: "1px solid #efe8d0",
      paddingTop: "12px",
      textAlign: "right",
    });
    paginationCards.appendChild(readTime);

    paginationContainer.appendChild(paginationCards);
  });

  handleButtons();
  handleButtonStyles();
}

displayArticles();

// This function creates the page number buttons for the pagination section.
function paginationButton() {
  const windowEnd = Math.min(windowStart + 3, totalPages);

  console.log(windowEnd);
  for (let i = windowStart; i < windowEnd; i++) {
    const button = document.createElement("button");

    button.innerHTML = i;
    button.dataset.page = i;
    Object.assign(button.style, {
      background: "#d7b954",
      hover: {
        transform: "translateY(-2px)",
        boxShadow: "0 8px 18px rgba(76, 60, 19, 0.15)",
      },
      width: "40px",
      height: "40px",
      margin: "0px 6px",
    });

    // console.log(buttonContainer);
    // console.log(button);
    buttonContainer.appendChild(button).addEventListener("click", () => {
      currentPages = i;
      moveWindow(i);
      displayArticles();
    });
  }
}

paginationButton();

// This function moves to the previous page if the current page is greater than 1.
// It decreases the page number and calls the article display function again.
function previousPage() {
  if (currentPages > 1) {
    currentPages = Math.max(currentPages - 1, 1);
    moveWindow(currentPages);
    // currentPages--;
    // displayArticles();
    // handleButtons();
  }
}

// This function moves to the next page if the current page is less than the total page count.
// It increases the page number and refreshes the article list for that page.
function nextPage() {
  if (currentPages < totalPages) {
    currentPages = Math.min(currentPages + 1, totalPages);
    moveWindow(currentPages);
    // currentPages++;
    // displayArticles();
    // handleButtons();
  }
}

// This function controls whether the previous and next buttons are enabled or disabled.
// It checks the current page position and disables one side when you're at the first or last page.
function handleButtons() {
  prevBTN.disabled = currentPages === 1;
  nextBTN.disabled = currentPages === totalPages;
  // if (currentPages === 1) {
  //   prevBTN.setAttribute("disabled", "");
  // } else if (currentPages === totalPages) {
  //   nextBTN.setAttribute("disabled", "");
  // } else {
  //   prevBTN.removeAttribute("disabled");
  //   nextBTN.removeAttribute("disabled");
  // }
}

function handleButtonStyles() {
  const buttons = buttonContainer.querySelectorAll("button");

  buttons.forEach((button) => {
    const pageNumber = Number(button.dataset.page);
    if (pageNumber === currentPages) {
      console.log(pageNumber);

      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

handleButtonStyles();

function moveWindow(pageNumber) {
  windowStart = pageNumber;
  buttonContainer.innerHTML = "";
  paginationButton();
  displayArticles();
  handleButtonStyles();
  handleButtons();
}
