

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
gsap.from(".about", {
    scrollTrigger:{
    trigger: ".about",
    toggleActions: "restart resume restart resume"
    } ,
    opacity: 0,
    delay: 4,
    duration: 4

})

gsap.from(".block-5", {
    scrollTrigger:{
    trigger: ".block-5",
    toggleActions: "restart resume resume restart"
    } ,
    x: 600,
    y: -400,
    delay: 3,
    duration: 3

})




// =======================
// Third Section Animation
// =======================
gsap.from(".third-section", {
    scrollTrigger:{
    trigger: ".third-section",
    
    toggleActions: "restart resume resume restart"
    } ,
    opacity: 0,
    delay: 1,
    ease: Expo.easeInOut,
    duration: 1

})

gsap.from(".title-1", {
    scrollTrigger:{
    trigger: ".third-section",
    
    toggleActions: "restart resume resume restart"
    } ,
    y: -200,
    delay: 2,
    duration: 2

})

gsap.from(".apps", {
    scrollTrigger:{
    trigger: ".third-section",
    
    toggleActions: "restart resume resume restart"
    } ,
    y: 400,
    delay: 2,
    duration: 2

})


// =======================
// Forth Section Animation
// =======================
gsap.from(".forth-section", {
    scrollTrigger:{
    trigger: ".forth-section",
   
    toggleActions: "restart resume resume restart "
    } ,
    opacity: 0,
    delay: 1,
    ease: Expo.easeInOut,
    duration: 1

})
gsap.from(".anim-left", {
    scrollTrigger:{
    trigger: ".anim-left",
    toggleActions: "restart resume resume restart"
    } ,
    x: -200,
    delay: 2,
    ease: Expo.easeInOut,
    duration: 2,


})
gsap.from(".anim-right", {
    scrollTrigger:{
    trigger: ".anim-right",
    toggleActions: "restart resume resume restart"
    } ,
    x: 200,
    delay: 2,
    ease: Expo.easeInOut,
    duration: 2,
    

})



