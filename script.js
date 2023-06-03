function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

init()
gsap.to("#page2 #img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    // markers:true,
    start: "top 10%",
    end: "top -40%",
    scrub: true,
    pin: true
  }
})

gsap.from("#page3 h1", {
  rotate: 5,
  y: 100,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "#main",
    markers: true,
    start: "top 60%",
    end: "top 20%",
    scrub: 3,
  }
})
gsap.from("#page4 h1", {
  scale: 1.5,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top 0%",
    end: "top -20%",
    scrub: 2,
    pin: true,
    markers: true
  }
})
gsap.from("#page4 h2", {
  scale: 2,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top 0%",
    end: "top -20%",
    scrub: 2,
    pin: true,
    markers: true
  }
})

document.addEventListener("mousemove", function (dets) {
  document.querySelector("#curser").style.left = `${dets.x}px`
  document.querySelector("#curser").style.top = `${dets.y}px`
  console.log("jitu")
})



var flag = 0
document.querySelector("#menu").addEventListener("click", function () {
  if (flag == 0) {
    document.querySelector("#menu").style.height = "24px"
    document.querySelector("#line1").style.rotate = "47deg"
    document.querySelector("#line2").style.rotate = "-48deg"
    document.querySelector("#full-scr").style.top = 0
    flag = 1
  }
  else {
    document.querySelector("#menu").style.height = "12px"
    document.querySelector("#line1").style.rotate = "0deg"
    document.querySelector("#line2").style.rotate = "0deg"
    document.querySelector("#full-scr").style.top = "-100%"
    flag = 0
  }
})

var loader = gsap.timeline()

loader.to("#kuch-bhi h5", {
  y: -76,
  delay: 0.5,
  duration: 1.7,
})
  .to("#text-anime", {
    y: -50,
    rotateX: -90,
    duration: 0.6,
    opacity: 0
  })
  .to("#loader1", {
    height: 0,
    duration: 0.3,
    delay: 0.5
  }, "-=0.4")
  .to("#loader2", {
    height: 0,
    duration: 0.3,
  }, "-=0.2")
  .to("#loader3", {
    height: 0,
    duration: 0.3,
  }, "-=0.4")
  .to("#loader4", {
    height: 0,
    duration: 0.3,
  }, "-=0.5")
  .to("#loader", {
    top: "-100vh",
    duration: 0.1,
  })

var all = document.querySelectorAll(".box")
all.forEach(function (d) {

  d.addEventListener("mouseenter", function () {
    document.querySelector("#curser").innerHTML = "More"
    document.querySelector("#curser").style.scale = 3.5
    document.querySelector("#curser").style.borderColor = "#fff"
    document.querySelector("#curser").style.backgroundColor = "#fff"
  })
  d.addEventListener("mouseleave", function () {
    document.querySelector("#curser").innerHTML = ""
    document.querySelector("#curser").style.scale = 1
    document.querySelector("#curser").style.backgroundColor = "transparent"
    document.querySelector("#curser").style.borderColor = "#e1e1e1"
  })
})


var page6TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    markers: true,
    scrub: 2,
    pin: true
  }
})
page6TL.to("#page6 h1", {
  scale: 2,
  filter: "blur(20px)",
  opacity: 0,
})
page6TL.to("#page6 #para", {
  opacity: 1,
})

gsap.from("#page7 h5", {
  rotate: 5,
  y: 100,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#page7 ",
    scroller: "#main",
    markers: true,
    start: "top 60%",
    end: "top 38%",
    scrub: 3,
  }
})