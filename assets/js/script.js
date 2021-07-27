const tm = TweenMax;
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tm.to(".block-1", 2, {
  x: "-280",
  y: "-200",
  scale: "2.4",
  ease: Expo.easeInOut,
});

tm.to(".block-2", 2, {
  x: "-180",
  y: "200",
  scale: "1.2",
  ease: Expo.easeInOut,
});

tm.to(".block-3", 2, {
  x: "180",
  y: "-240",
  scale: "1.6",
  ease: Expo.easeInOut,
});

tm.to(".block-4", 2, {
  x: "580",
  y: "140",
  scale: "0.8",
  ease: Expo.easeInOut,
});

tm.to(".box", 2.4, {
  y: "-100%",
  ease: Expo.easeInOut,
});

tm.from(".navbar > div", 1.6, {
  opacity: 0,
  y: 60,
  ease: Expo.easeInOut,
  delay: 0.6,
});
tm.from(".social", 1.6, {
  opacity: 0,
  y: 60,
  ease: Expo.easeInOut,
  delay: 0.6,
});

// =======================
// Secound Section Animation
// =======================
tl.from(".fab", 1, {
  x: "-100",
  opacity: 0,
  stagger: 0.15,
  delay: 1.5,
  scale: ".8",
  ease: Expo.easeInOut,
});

gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    toggleActions: "restart resume restart resume",
  },
  opacity: 0,
  delay: 4,
  duration: 4,
});

gsap.from(".block-5", {
  scrollTrigger: {
    trigger: ".secound-section",
    toggleActions: "restart resume resume restart",
  },
  x: 600,
  y: -300,
  delay: 3,
  duration: 3,
});

// =======================
// Third Section Animation
// =======================
gsap.from(".third-section", {
  scrollTrigger: {
    trigger: ".third-section",

    toggleActions: "restart resume resume restart",
  },
  opacity: 0,
  delay: 1,
  ease: Expo.easeInOut,
  duration: 1,
});

gsap.from(".title-1", {
  scrollTrigger: {
    trigger: ".third-section",

    toggleActions: "restart resume resume restart",
  },
  y: -200,
  delay: 2,
  duration: 2,
});

gsap.from(".apps", {
  scrollTrigger: {
    trigger: ".third-section",

    toggleActions: "restart resume resume restart",
  },
  y: 400,
  delay: 2,
  duration: 2,
});

// =======================
// Forth Section Animation
// =======================
gsap.from(".forth-section", {
  scrollTrigger: {
    trigger: ".forth-section",

    toggleActions: "restart resume resume restart ",
  },
  opacity: 0,
  delay: 1,
  ease: Expo.easeInOut,
  duration: 1,
});
gsap.from(".anim-left", {
  scrollTrigger: {
    trigger: ".anim-left",
    toggleActions: "restart resume resume restart",
  },
  x: -200,
  delay: 2,
  ease: Expo.easeInOut,
  duration: 2,
});
gsap.from(".anim-right", {
  scrollTrigger: {
    trigger: ".anim-right",
    toggleActions: "restart resume resume restart",
  },
  x: 200,
  delay: 2,
  ease: Expo.easeInOut,
  duration: 2,
});

var controller = new ScrollMagic.Controller();

$(function () {
  //var tween = TweenMax.to(".block-list", 1, {className: "+=scrollend"});

  var $block_list = $(".block-list"),
    $block_item = $block_list.find(".block-list__item"),
    block_list_width = $block_list.outerWidth(),
    block_item_width = $block_item.outerWidth(),
    total_width = block_item_width * $block_item.length,
    travel_distance = total_width - block_list_width + 20;

  var scene = new ScrollMagic.Scene({
    triggerElement: "#second",
    duration: "200%",
    triggerHook: 0,
  })
    .setPin(".block-list")
    //.setTween(tween)
    .addTo(controller);

  scene.on("progress", function (e) {
    var progress = e.progress,
      move = -travel_distance * progress + "px";
    $block_list.css({
      transform: "translateX(" + move + ")",
    });
  });
});
