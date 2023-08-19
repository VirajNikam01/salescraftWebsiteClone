var crsr = document.querySelector("#curser")
var blur = document.querySelector("#curser-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-150 +"px"
    blur.style.top = dets.y-150 +"px"
})

gsap.to("#navbar",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        // markers:true,
        start : "top -10%",
        scrub: 3
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller :"body",
        // markers:true,
        start:"top -30%",
        end : "top -80%",
        scrub:"2"
    }
})


gsap.from(".btn",{
       y:8,
       duration:1,
       repeat: -1,
       yoyo: true,
       backgroundColor: "green",
})