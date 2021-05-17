

const tm = TweenMax;



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
    y: "-340",
    scale: "1.6",
    ease: Expo.easeInOut,
});

tm.to(".block-4", 2, {
    x: "580",
    y: "240",
    scale: "0.8",
    ease: Expo.easeInOut,
});

tm.to(".box", 2.4, {
    y: "-100%",
    ease: Expo.easeInOut,
});


gsap.to(".about", {
    scrollTrigger:{
    trigger: ".about",
    markers: true,
    toggleActions: "restart pause resume pause"
    } ,
    scale: "1.1",
    ease: Expo.easeInOut,
    duration: 3

})



