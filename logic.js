gsap.to("#main", {
    opacity: 1,
    duration: 0.4
});

gsap.from("nav h3", {
    y: -50,
    opacity: 0,
    duration: 0.3,
    delay: 0.2,
    stagger: 0.1
});

gsap.from(".mt-el", {
    opacity: 0,
    delay: 0.2,
    duration: 0.7
});

gsap.from("#mt-1 h1", {
    y: 100,
    rotate: 5,
    opacity: 0.5,
    duration: 0.4,
    delay: 0.2
});

gsap.from("#mt-2 h1", {
    y: 100,
    rotate: -5,
    opacity: 0.5,
    duration: 0.4,
    delay: 0.3
});

gsap.from("#mt-3 h1", {
    y: 100,
    rotate: 5,
    opacity: 0.5,
    duration: 0.4,
    delay: 0.4
});

gsap.from(".img", {
    y: 300,
    opacity: 0.0,
    duration: 0.6,
    delay: 0.4
});
gsap.from(".img", {
    width: 20,
    left: "45%",
    duration: 0.7,
    delay: 0.6
});

gsap.to("#img1", {
    rotate: 0,
    delay: 0.7,
    duration: 0.8
});

gsap.to("#img2", {
    rotate: -5,
    delay: 0.8,
    duration: 1.1,
    left: "38%"
});

gsap.to("#img3", {
    rotate: 5,
    left: "34%",
    delay: 1,
    duration: 0.9
});

gsap.from(".fts h3", {
    delay: 0.5,
    duration: 0.4,
    y: 100
});