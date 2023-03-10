$(document).ready(function () {
  const navbar = document.querySelector("#header");
  const navbarHeight = navbar.getBoundingClientRect().height;
  document.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight) {
      navbar.classList.add("navbar_scroll");
    } else {
      navbar.classList.remove("navbar_scroll");
    }
  });

  // 1. gnb list index[0]번에 호버를 하면
  // 2. 그에 맞는 nav-undermenu active가 되는건데

  //nav hover
  const header = document.querySelector("#header");
  const gnbList = document.querySelectorAll(".gnb li");
  const gnbMenu = document.querySelectorAll(".nav-undermenu");
  const gnbItem1 = document.querySelector(".gnb_list1");
  const gnbMenu1 = document.querySelector(".nav-undermenu.one");
  const gnbItem2 = document.querySelector(".gnb_list2");
  const gnbMenu2 = document.querySelector(".nav-undermenu.two");
  const gnbItem3 = document.querySelector(".gnb_list3");
  const gnbMenu3 = document.querySelector(".nav-undermenu.three");
  const gnbItem4 = document.querySelector(".gnb_list4");
  const gnbMenu4 = document.querySelector(".nav-undermenu.four");

  header.addEventListener("mouseover", () => {
    header.classList.add("on");
  });

  // GNB
  gnbMenu.forEach((item) => {
    item.addEventListener("mouseleave", () => {
      item.classList.remove("active");
      header.classList.remove("on");
    });
  });

  for (let i = 0; i < gnbList.length; i++) {
    gnbList[i].addEventListener("mouseover", function () {
      for (let i = 0; i < gnbMenu.length; i++) {
        gnbMenu[i].className = "nav-undermenu";
      }
      document.getElementById(this.dataset.id).className = "nav-undermenu active";
    });
  }

  // 네비 메뉴
  $(".nav ul li").mouseenter(function () {
    var thisIdx = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".drop_menu").css({ display: "flex" });
    $(".drop_menu .depth01").eq(thisIdx).addClass("active").siblings().removeClass("active");
  });

  $(".drop_menu_box").mouseleave(function () {
    $(".drop_menu").hide();
    $(".nav ul li").removeClass("active");
  });

  $(".drop_menu .depth01").mouseenter(function () {
    var thisIdx = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".nav ul li").eq(thisIdx).addClass("active").siblings().removeClass("active");
  });

  // contains(active) => remove active => add active
  // = 지우고 추가해 ,
  // gnbItem1.addEventListener("mouseover", () => {
  //   gnbMenu1.classList.add("active");
  //   gnbMenu2.classList.remove("active");
  //   gnbMenu3.classList.remove("active");
  //   gnbMenu4.classList.remove("active");
  // });
  // gnbItem2.addEventListener("mouseover", () => {
  //   gnbMenu2.classList.add("active");
  //   gnbMenu1.classList.remove("active");
  //   gnbMenu3.classList.remove("active");
  //   gnbMenu4.classList.remove("active");
  // });
  // gnbItem3.addEventListener("mouseover", () => {
  //   gnbMenu3.classList.add("active");
  //   gnbMenu1.classList.remove("active");
  //   gnbMenu2.classList.remove("active");
  //   gnbMenu4.classList.remove("active");
  // });
  // gnbItem4.addEventListener("mouseover", () => {
  //   gnbMenu4.classList.add("active");
  //   gnbMenu1.classList.remove("active");
  //   gnbMenu2.classList.remove("active");
  //   gnbMenu3.classList.remove("active");
  // });

  header.addEventListener("focusout", () => {
    header.classList.remove("on");
  });

  $("gnb li").hover(function () {
    $(this).parent("li").addClass("on");
  });

  //toggle menu
  const tab = $(".burger");
  const menu = $("nav");
  const sitemap = $("#sitemapContent03");
  const closeBtn = $(".modal-close-btn");
  const FamilyBtn = $(".btn-toggle");
  const familyList = $(".family-list");
  const familyWrap = $(".family-list-wrap");

  tab.click(function () {
    menu.toggleClass("on");
    sitemap.toggleClass("on");
  });

  closeBtn.click(function () {
    sitemap.removeClass("on");
  });
  FamilyBtn.click(function () {
    familyList.toggleClass("on");
    familyWrap.toggleClass("on");
  });

  // section
  $(window).scroll(function () {
    let sct = $(window).scrollTop();

    $("section").each(function (index) {
      if (sct > $(this).offset().top - 500) {
        $(this).addClass("active");
      }
    });
  });

  // section3
  const slideTxt = $(".contextItem");
  const slide = $(".swiper-slide");
  const slideCount = slideTxt.length;
  let currentIdx = 0;
  function slideMove(num) {
    slideTxt.eq(num).show().siblings().hide();
    currentIdx = num;
  }
  slideMove(0);
  function autoSlide() {
    autoslide = setInterval(function () {
      let nextIdx = (currentIdx + 1) % slideCount;
      slideMove(nextIdx);
    }, 10000);
  }
  autoSlide();
  function stopSlide() {
    clearInterval(autoSlide);
  }
  slide.mouseenter(function () {
    stopSlide();
  });
  slide.mouseleave(function () {
    autoSlide();
  });

  //특정위치 스크롤 나타나는 애니메이션
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".f_top").css("opacity", "1");
    } else {
      $(".f_top").css("opacity", "0");
    }
  });

  //스크롤 top 이동
  $(".footer-arrow").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

function fnMove(seq) {
  var offset = $("#section" + seq).offset();
  $("html, body").animate(
    {
      scrollTop: offset.top,
    },
    800
  );
}
function fnMove2() {
  var offset = $("#footer").offset();
  $("html, body").animate(
    {
      scrollTop: offset.top,
    },
    800
  );
}

// location active
const mapIcon1 = document.querySelector(".map-icon.so");
const mapIcon2 = document.querySelector(".map-icon.gy");
const mapIcon3 = document.querySelector(".map-icon.se");
const mapIcon4 = document.querySelector(".map-icon.de");

const mapIcon = document.querySelectorAll(".map-icon");
const mapBox = document.querySelectorAll(".map-box dl");
function handlemapIcon() {
  for (let j = 0; j < mapIcon.length; j++) {
    mapIcon[j].classList.remove("on");
  }
}
function locationmap() {
  for (var j = 0; j < mapBox.length; j++) {
    mapBox[j].classList.remove("on");
  }
}
for (let i = 0; i < mapBox.length; i++) {
  mapBox[i].addEventListener("click", () => {
    if (mapBox[i].classList.contains("on")) {
      mapBox[i].classList.remove("on");
    } else {
      locationmap();
      mapBox[i].classList.add("on");
    }
  });
}
for (let i = 0; i < mapIcon.length; i++) {
  mapBox[i].addEventListener("click", () => {
    if (mapIcon[i].classList.contains("on")) {
      mapIcon[i].classList.remove("on");
    } else {
      handlemapIcon();
      mapIcon[i].classList.add("on");
    }
  });
}

$(".drawer-menu-button h2").click(function (e) {
  e.preventDefault();
  $(this).parent("li").toggleClass("active");
  $(this).siblings(".sitemap-2dep").stop().slideToggle();
  $(this).parent("li").siblings("li").children(".sitemap-2dep").slideUp();
  $(this).parent("li").siblings("li").removeClass("active");
});

const tabMenu = document.querySelector(".location-menu-con");
const tabArrow = document.querySelector(".cur-location");
tabArrow.addEventListener("click", () => {
  tabMenu.classList.toggle("on");
});
