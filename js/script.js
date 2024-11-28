const rightArrow = document.querySelector(
  ".scrollable-tabs-container .right-arrow "
);
const leftArrow = document.querySelector(
  ".scrollable-tabs-container .left-arrow "
);

const tabsList = document.getElementById("tabs-list");

const manageArrows = () => {
  if (tabsList.scrollLeft <= 0) {
    rightArrow.classList.add("active");
  } else {
    rightArrow.classList.remove("active");
  }

  let maxScrollValue = tabsList.clientWidth - tabsList.scrollWidth;

  if (tabsList.scrollLeft != maxScrollValue) {
    leftArrow.classList.add("active");
    console.log("yes");
  } else {
    leftArrow.classList.remove("active");
    console.log("no");
  }
};

leftArrow.addEventListener("click", () => {
  tabsList.scrollLeft -= 200;
  manageArrows();
});
rightArrow.addEventListener("click", () => {
  tabsList.scrollLeft += 200;
  manageArrows();
});

tabsList.addEventListener("scroll", manageArrows);

/* const manageArrows = () => {
  let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth; // The max scrollable width

  // Remove or show the left arrow when at the leftmost position
  if (tabsList.scrollLeft <= 0) {
    leftArrow.classList.remove("active");
  } else {
    leftArrow.classList.add("active");
  }

  // Remove or show the right arrow when at the rightmost position
  if (tabsList.scrollLeft >= maxScrollValue) {
    rightArrow.classList.remove("active");
  } else {
    rightArrow.classList.add("active");
  }

  // Debugging logs
  console.log("Current scroll position: ", tabsList.scrollLeft);
  console.log("Max scroll value: ", maxScrollValue);
};

leftArrow.addEventListener("click", () => {
  tabsList.scrollLeft -= 200;  // Scroll 200px to the left
  manageArrows();  // Update arrows based on new scroll position
});

rightArrow.addEventListener("click", () => {
  tabsList.scrollLeft += 200;  // Scroll 200px to the right
  manageArrows();  // Update arrows based on new scroll position
});

// Listen to the scroll event on the container to dynamically update the arrows
tabsList.addEventListener("scroll", manageArrows);

// Initial check to hide/show arrows based on current scroll position
manageArrows(); */

// //////////////////////////////////////////////////////////////////////////////////////

// fill tabs list

var accordion = document.getElementById("accordionForOptions");
var accordionBody = document.getElementById("accordion-body");

var listItems = [
  "التموين",
  "التوثيق",
  "السجل التجارى",
  "التأمين الإجتماعى",
  "مركباتى",
  "رخصى",
  "المحاكم",
  "دار الإفتاء",
  "الحالة الشخصية",
  "الكهرباء",
  "الشهر لعقارى",
  "الإسكان الاجتماعى",
  "الضرائب العقارية",
  "التأمين الصحي الشامل",
  "الزراعة"
];

function listContentLg(item) {
  let content = `<li>
                    <button
                      href="#"
                      class="border-0 bg-white user-select-none text-nowrap rounded-5 p-2 px-5 text-secondary "
                      style="font-size: 18px"
                      onclick="setContent(${listItems.indexOf(item)})"
                    >
                      ${item}
                    </button>
                  </li>`;

  tabsList.innerHTML += content;
}

function fillListContent() {
  tabsList.innerHTML = "";
  listItems.map((i) => {
    listContentLg(i);
  });
}

fillListContent();

// active class edit
const tabs = document.querySelectorAll(".scrollable-tabs-container button");
const removeAllActiveClasses = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    removeAllActiveClasses();
    tab.classList.add("active");
  });
});

// ///////////////////////////////////////////////////////////////////////////////////////
var contentParent = document.getElementById("services-content");

var allbuttons = [
  Supply,
  Documentation,
  Commercial_register,
  Social_insurance,
  My_vehicles,
  license,
  Courts,
  Fatwa_House,
  Personal_situation,
  electricity,
  Real_estate_month,
  Social_housing,
  Taxes,
  agriculture,
  Health_insurance
];

// set default content
function setDefault(data) {
  contentParent.innerHTML = "";
  tabs[0].classList.add("active");
  data.map((item) => {
    fillContentLg(item);
  });
}
setDefault(Supply);

// fill content in lg screens
function fillContentLg(x) {
  let content = `<div class="col-xl-4 col-lg-6 justify-content-lg-between d-lg-flex d-none d-lg-inline-block px-0">
                <a href="${x.url}">
                  <div
                    class=" px-3 py-4 rounded-4 h-100"
                  >
                    <p class="fw-light" style="color: #1c304c; font-size: 18px;">${x.title}</p>
                    <p class="text-secondary">
                    ${x.body}
                    </p>
                  </div>
                </a>
              </div>`;

  contentParent.innerHTML += content;
}

// fill content in small screen


// show content on click
function setContent(id) {
  contentParent.innerHTML = "";
  allbuttons[id].map((i) => {
    fillContentLg(i);
  });
}

// accordion in small screen

var accordionContainer = document.getElementById("accordionForOptions");
accordionContainer.innerHTML ="";


listItems.forEach(function (category, index) {
  var categoryData = allbuttons[index];

  var itemId = "flush-collapse" + (index + 1);
  var accordionItem = `
    <div class="accordion-item border-dark  border-1 d-block d-lg-none">
      <h2 class="accordion-header ">
        <button
          class="accordion-button collapsed justify-content-between custom-arrow flex-row-reverse fs-6 px-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#${itemId}"
          aria-expanded="false"
          aria-controls="${itemId}"
          style="background-color:var(--light) ; font-weight:600;"
        >
          ${category}
        </button>
      </h2>
      <div
        id="${itemId}"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionForOptions"
        style="background-color:var(--light)"
      >
        <div class="accordion-body border-top border-dark">
          <!-- Dynamic child items -->
          ${categoryData
            .map(
              (item) => `
                <div>
                  <a href="${item.url}">
                    <div
                      class="d-flex justify-content-between align-items-center mt-3"
                    >
                      <div>
                        <p class="m-0" style="color: #1c304c;">${item.title}</p>
                        <p class="m-0 text-secondary">${item.body}</p>
                      </div>
                      <div>
                        <i class="fa-solid fa-angle-left fs-4"></i>
                      </div>
                    </div>
                  </a>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  // Append to the accordion container
  accordionContainer.innerHTML += accordionItem;
});
// 