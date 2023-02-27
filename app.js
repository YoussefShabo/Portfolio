const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
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

hamburger.addEventListener("click", toggleMenu);




$(() =>{
    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');
    
    
    
    const openModal = () => {
        $modal.css('display', 'block')
    }
    $openBtn.on('click', openModal)
    
    const closeModal = () => {
        $modal.css('display', 'none')
    }
    $closeBtn.on('click', closeModal)
    
    // setTimeout(openModal, 5000)
    // setTimeout(closeModal, 10000)
    

    // Carousel section:

    let currnetImgIndex = 0
const numOfImages = $('.carousel-images').children().length - 1
    //Next button event
    $('.next').on('click', () => {
      $('.carousel-images').children().eq(currnetImgIndex).css('display','none')
      if (currnetImgIndex < numOfImages) {
        currnetImgIndex++
    }else {
      currnetImgIndex = 0
  }
  $('.carousel-images').children().eq(currnetImgIndex).css('display', 'block')
})
//Previous button event
$('.previous').on('click', () => {
    $('.carousel-images').children().eq(currnetImgIndex).css('display','none')
    if (currnetImgIndex > 0) {
        currnetImgIndex--
    } else {
        currnetImgIndex = numOfImages
    }
    $('.carousel-images').children().eq(currnetImgIndex).css('display', 'block')
    })
    // Scroll button section
const myButton = document.getElementById("btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none"
    }
}
    })