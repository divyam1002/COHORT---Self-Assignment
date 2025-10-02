gsap.from(".logo",{
    duration: .8,
    y: -50,
    opacity: 0,
    delay: 7.2,
})

gsap.from("a", {
    duration: .8,
    y: -50,
    opacity: 0,
    stagger: 0.2
})

gsap.from(".footer",{
    duration: .6,
    y: 100,
    opacity: 0,
    delay: 1,
    stagger: 0.8
})


gsap.from("span",{
    duration: 0.6,
    y: -100,
    opacity: 0,
    delay: 1.5,
    stagger: 0.3,
})

gsap.from("img",{
    duration: 1,
    x: 1200,
    stagger: 0.2,
    borderRadius: "50%",
    delay: 3.5,
    rotate: 720,
    stagger: 1,
})

gsap.from(".left",{
    duration: 1,
    x: -1200,
    opacity: 0,
    stagger: 0.2,
    delay: 6,
})