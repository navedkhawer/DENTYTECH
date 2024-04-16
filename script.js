function imagehoverAnimation() {
  var img1 = document.querySelector("#img1");
  var img2 = document.querySelector("#img2");
  var img3 = document.querySelector("#img3");
  var img4 = document.querySelector("#img4");

  img1.addEventListener("mouseenter", function () {
    const tempSrc = img1.src;
    img1.src = img4.src;
    img4.src = tempSrc;
  });
  img2.addEventListener("mouseenter", function () {
    const tempSrc = img2.src;
    img2.src = img4.src;
    img4.src = tempSrc;
  });
  img3.addEventListener("mouseenter", function () {
    const tempSrc = img3.src;
    img3.src = img4.src;
    img4.src = tempSrc;
  });
}
imagehoverAnimation()

function rotationAnimation(){
    var tl = gsap.timeline();
tl.to(".bounding h1", {
  y: 0,
  duration: 2,
  ease: Expo.easeInOut,
  stagger: 0.2,
});
tl.to(
  "#img3",
  {
    duration: 1,
    xPercent: -50,
    yPercent: -50,
    rotation: -10,
    left: "50%",
    top: "50%",
    position: "absolute",
    stagger: 0.2,
  },
  "anim"
);
tl.to(
  "#img2",
  {
    duration: 1,
    xPercent: -50,
    yPercent: -50,
    rotation: -20,
    left: "50%",
    top: "50%",
    position: "absolute",
    stagger: 0.2,
  },
  "anim"
);
tl.to(
  "#img1",
  {
    duration: 1,
    xPercent: -50,
    yPercent: -50,
    rotation: -30,
    left: "50%",
    top: "50%",
    position: "absolute",
    stagger: 0.2,
  },
  "anim"
);
}
rotationAnimation()

function nav(){
  gsap.from(".nav",{
    opacity:0,
    y:-70,
    duration:1,
    ease: Power2,
    stagger:{
      amount:0.5
    }
  })
}
function bottom(){
  nav()
gsap.from(".social-icons i, .right-bottom h5",{
  opacity:0,
  duration:1,
  delay:1
})
gsap.from("#bottom-textleft",{
  opacity:0,
  duration:1,
  delay:1
})
}
bottom()