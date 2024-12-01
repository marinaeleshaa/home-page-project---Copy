const rightArrow = document.querySelector(
  ".scrollable-tabs-container .right-arrow"
);
const leftArrow = document.querySelector(
  ".scrollable-tabs-container .left-arrow"
);
const tabsList = document.getElementById("tabs-list");

// Determine scroll direction and position
const getScrollPosition = () => {
  const isRTL = getComputedStyle(tabsList).direction === "rtl";
  const maxScroll = tabsList.scrollWidth - tabsList.clientWidth;

  if (isRTL) {
    return {
      current: Math.abs(tabsList.scrollLeft),
      max: maxScroll,
    };
  }

  return {
    current: tabsList.scrollLeft,
    max: maxScroll,
  };
};

// Manage arrow visibility
const manageArrows = () => {
  const { current, max } = getScrollPosition();

  if (current <= 0) {
    leftArrow.classList.remove("active");
  } else {
    leftArrow.classList.add("active");
  }

  if (current >= max) {
    rightArrow.classList.remove("active");
  } else {
    rightArrow.classList.add("active");
  }
};

// Scroll actions with smooth animation
leftArrow.addEventListener("click", () => {
  const scrollAmount = 500; // Increased scroll distance for larger movement
  const isRTL = getComputedStyle(tabsList).direction === "rtl";

  tabsList.scrollBy({
    left: isRTL ? scrollAmount : -scrollAmount,
    behavior: "smooth", // Smooth scrolling effect
  });

  setTimeout(manageArrows, 50);
});

rightArrow.addEventListener("click", () => {
  const scrollAmount = 500; // Increased scroll distance for larger movement
  const isRTL = getComputedStyle(tabsList).direction === "rtl";

  tabsList.scrollBy({
    left: isRTL ? -scrollAmount : scrollAmount,
    behavior: "smooth", // Smooth scrolling effect
  });

  setTimeout(manageArrows, 50);
});

// Handle manual scrolling
tabsList.addEventListener("scroll", manageArrows);

// Initialize arrows on page load
document.addEventListener("DOMContentLoaded", manageArrows);



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

  // Adding 7 additional divs for the Supply tab
  if (data === Supply) {
    disabledContent()
  }
}
setDefault(Supply);

// fill content in lg screens
function fillContentLg(x) {
  let content = `<div class="col-xl-4 col-lg-6 justify-content-lg-between d-lg-flex d-none d-lg-inline-block px-0 ">
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



// show content on click
function setContent(id) {
  contentParent.innerHTML = "";
  allbuttons[id].map((i) => {
    fillContentLg(i);
  });

  // Adding 7 additional divs for the Supply tab
  if (id === 0) { // Assuming Supply is the first tab
    disabledContent()
  }
}

function disabledContent(){
  for (let i = 0; i < 7; i++) {
    let additionalDiv = `
      <div class="col-xl-4 col-lg-6 justify-content-lg-between d-lg-flex d-none d-lg-inline-block px-0 disabled-div">
  <a href="#" tabindex="-1" aria-disabled="true">
    <div class="px-3 py-4 rounded-4 h-100">
      <p class="fw-light" style="color: #1c304c; font-size: 18px;">Coming Soon</p>
      <p class="text-secondary">Details will be available shortly.</p>
      <button class="btn text-white rounded-5" >تأتيكم قريبا</button>
    </div>
  </a>
</div>
`;
    contentParent.innerHTML += additionalDiv;
  }
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








const openPageBtn = document.getElementById("openPageBtn");
const closePageBtn = document.getElementById("closePageBtn");
const fullscreenPage = document.getElementById("fullscreenPage");

// Open fullscreen page when button is clicked
openPageBtn.addEventListener("click", () => {
  // Check if screen is smaller than lg
  if (window.innerWidth <= 991) {
    fullscreenPage.classList.add("open");
  }
});

// Close fullscreen page when close button is clicked
closePageBtn.addEventListener("click", () => {
  fullscreenPage.classList.remove("open");
});

