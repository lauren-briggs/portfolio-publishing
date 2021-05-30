const contactEl = $('#contact');
const infoEl = $('.info');

const ngvLi = $('#ngv-li');
const hyphenLi = $('#hyphen-li');
const esteLi = $('#este-li');
const amLi = $('#am-li');

// const echoImg = $('#echobeats-img');
// const weatherImg = $('#weather-img');
// const workdayImg = $('#workday-img');
// const codequizImg = $('#codequiz-img');

const ngvInfo = $('.ngv-info');
const hyphenInfo = $('.hyphen-info');
const esteInfo = $('.este-info');
const amInfo = $('.am-info');

const ngvClose = $('.ngv-close');
const hyphenClose = $('.hyphen-close');
const esteClose = $('.este-close');
const amClose = $('.am-close');

//contact pop up
contactEl.mouseenter(function () {
  infoEl.addClass('showme');
});

infoEl.mouseleave(function () {
  infoEl.removeClass('showme');
});

//NGV background img and info on hover
ngvLi.mouseenter(function () {
  ngvInfo.css('display', 'block');
  initSwiper();
})
ngvClose.click(function () {
  ngvInfo.css('display', 'none');
})

//HYPHEN background img on hover
hyphenLi.mouseenter(function () {
  hyphenInfo.css('display', 'block');
  initSwiper();
})

hyphenClose.click(function () {
  hyphenInfo.css('display', 'none');
})

//ESTE background img on hover
esteLi.mouseenter(function () {
  esteInfo.css('display', 'block');
  initSwiper();
})

esteClose.click(function () {
  esteInfo.css('display', 'none');
})

//AM background img on hover
amLi.mouseenter(function () {
  amInfo.css('display', 'block');
  initSwiper();
})

amClose.click(function () {
  amInfo.css('display', 'none');
})


// ----------------------------------------------------
// SWIPER CAROUSEL FOR PROJECT IMAGES
// ----------------------------------------------------
function initSwiper() {
  $(".swiper-container").each(function (index) {
    $(this).addClass("instance-" + index);
    let swiper = new Swiper(".instance-" + index, {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      // direction: 'vertical',
      effect: "fade",
      enabled: true,
      // init: false,
      loop: true,
      mousewheel: {
        invert: false,
        sensitivity: 3,
      },
      on: {
        init: function () {
          console.log('swiper initialized');
        },
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: 'true',
      //   dynamicBullets: true,
      // },
      speed: 2000,
    });

    swiper.slideNext(1500, true)
    swiper.slidePrev(1500, true)
  });
}
