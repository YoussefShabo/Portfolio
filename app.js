const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
$(function () {
  $("#themeToggle").on("click", function () {
    $("body").toggleClass("dark-mode");
  });
});

hamburger.addEventListener("click", toggleMenu);

$(() => {
  const $openBtn = $("#openModal");
  const $modal = $("#modal");
  const $closeBtn = $("#close");

  const openModal = () => {
    $modal.css("display", "block");
  };
  $openBtn.on("click", openModal);

  const closeModal = () => {
    $modal.css("display", "none");
  };
  $closeBtn.on("click", closeModal);

  //Project Modal1
  const $openPBtn = $("#openPModal");
  const $projectModal = $("#projectmodal");
  const $closePBtn = $("#closeProject");

  const openPModal = () => {
    $projectModal.css("display", "block");
    closePModal2();
    closePModal3();
  };
  $openPBtn.on("click", openPModal);

  const closePModal = () => {
    $projectModal.css("display", "none");
  };
  $closePBtn.on("click", closePModal);

  //Project Modal2
  const $openPBtn2 = $("#openPModal2");
  const $projectModal2 = $("#projectmodal2");
  const $closePBtn2 = $("#closeProject2");

  const openPModal2 = () => {
    $projectModal2.css("display", "block");
    closePModal();
    closePModal3();
  };
  $openPBtn2.on("click", openPModal2);

  const closePModal2 = () => {
    $projectModal2.css("display", "none");
  };
  $closePBtn2.on("click", closePModal2);

  //Project Modal3
  const $openPBtn3 = $("#openPModal3");
  const $projectModal3 = $("#projectmodal3");
  const $closePBtn3 = $("#closeProject3");

  const openPModal3 = () => {
    $projectModal3.css("display", "block");
    closePModal();
    closePModal2();
  };
  $openPBtn3.on("click", openPModal3);

  const closePModal3 = () => {
    $projectModal3.css("display", "none");
  };
  $closePBtn3.on("click", closePModal3);

  // Carousel section:

  let currnetImgIndex = 0;
  const numOfImages = $(".carousel-images").children().length - 1;

  //Next button event
  $(".next").on("click", () => {
    $(".carousel-images").children().eq(currnetImgIndex).css("display", "none");
    if (currnetImgIndex < numOfImages) {
      currnetImgIndex++;
    } else {
      currnetImgIndex = 0;
    }
    $(".carousel-images")
      .children()
      .eq(currnetImgIndex)
      .css("display", "block");
  });
  //Previous button event
  $(".previous").on("click", () => {
    $(".carousel-images").children().eq(currnetImgIndex).css("display", "none");
    if (currnetImgIndex > 0) {
      currnetImgIndex--;
    } else {
      currnetImgIndex = numOfImages;
    }
    $(".carousel-images")
      .children()
      .eq(currnetImgIndex)
      .css("display", "block");
  });
  // Scroll button section
  const myButton = document.getElementById("btnUp");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }
  const $btn1 = $("#btn1");
  const $div1 = $("#div1");

  const openProject1 = () => {
    $div1.css("display", "block");
  };
  $btn1.on("click", openProject1);

  const $btn2 = $("#btn2");
  const $div2 = $("#div2");

  const openProject2 = () => {
    $div2.css("display", "block");
  };
  $btn2.on("click", openProject2);
});

// function toggleProjects() {
//   if ($btn1.click)
//   if ($btn1.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu);
