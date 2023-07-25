// Menu data structure
// 3.0 // 5.0
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" }
    ]
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" }
    ]
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" }
    ]
  }
];

// Task 1.0
const mainEl = document.querySelector("main");
console.log(mainEl);

// Task 1.1
mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Task 1.3
mainEl.setAttribute("class", "flex-ctr");

// Task 2.0
const topMenuEl = document.getElementById("top-menu");

// Task 2.1
topMenuEl.style.height = "100%";

// Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3
topMenuEl.setAttribute("class", "flex-around");



// Task 3.1

for (let i = 0; i < menuLinks.length; i++) {
  const newElem = document.createElement("a");
  newElem.setAttribute("href", menuLinks[i].href);
  newElem.textContent = menuLinks[i].text;
  topMenuEl.append(newElem);
}

// Task 4.0
const subMenuEl = document.getElementById("sub-menu");

// Task 4.1
subMenuEl.style.height = "100%";

// Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3
subMenuEl.setAttribute("class", "flex-around");

// Task 4.4
subMenuEl.style.position = "absolute";

// Task 4.5
subMenuEl.style.top = "0";


// Task 5.1
const topMenuLinks = topMenuEl.querySelectorAll("a");
let showingSubMenu = false;

//5.2
topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  console.log(event.target.textContent);
  //5.3
  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  //5.4
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }
  //5.5
  event.target.classList.add("active");

  // task 5.6
  const anchorName = event.target.textContent;
  const menuLink = menuLinks.find((link) => {
    
    return link.text === anchorName; 
  });

  if (menuLink === undefined) {
    return;
  }

  if (menuLink.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  //task 5.7 +5.8
  const buildSubMenu = (sublinks) => {
    subMenuEl.innerHTML = "";
    for (let i = 0; i < sublinks.length; i++) {
      const newAnchor = document.createElement("a");
      newAnchor.setAttribute("href", sublinks[i].href);
      newAnchor.textContent = sublinks[i].text;
      subMenuEl.append(newAnchor);
    }
  };

  if (showingSubMenu) {
    buildSubMenu(menuLink.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }

  //task 6.4
  if (anchorName === "about") {
    mainEl.innerHTML = "<h1>about</h1>";
  }
});


// Task 6.0
subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  console.log(event.target.textContent);

  // task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  // task 6.2
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }

  // task 6.3
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});
