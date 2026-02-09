(
    function initilizeAnimation() {
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".flip-card", {
                opacity:1,
                duration: 0.1,
                ease: "none"
            });
            const tl = gsap.timeline();

            tl.from(".flip-card-inner", {
                y: -500,
                rotateY: 360,
                duration: 1,
                ease: "none"
            })
            .to(".flip-card-inner", {
                scale: 3,
                duration: 0.5,
                ease: "none"
            })
            .to("#loader", {
                opacity:0,
                duration:1,
                oncomplete:()=>{
                    document.getElementById('loader').style.display="none";
                }
            });

            const tl2 = gsap.timeline({
                ScrollTrigger:{
                    trigger:'#sectionOne',
                    pin:true,
                    start:'top 90%',
                    end:'+=500',
                    scrub:true,
                    markers:true
                }
            });
            tl2.to('.scrollPaper',{
                height:500,
                duration:1,
                ease:'none'
            })
        });
    }
)()

