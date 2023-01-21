const header = document.querySelector(".header"),
main = document.querySelector(".main"),
aside = document.querySelector(".aside"),
footer = document.querySelector(".footer");

const tl = gsap.timeline()
gsap.from(header, {
    y: "-100%",
    duration: 1
})
gsap.from(main, {
    x: "-100%",
    duration: 1,
    delay: .5
})
gsap.to(aside, {
    y: "0",
    duration: 3,
    delay: .5,
    ease: "bounce"
})
gsap.from(footer, {
    x: "-100%",
    duration: 1,
    delay: 1.5
})