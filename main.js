
function show() {
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
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
}
show()

var nav1=document.querySelector(".navbaar");
var text=document.querySelector(".main-content");
var cur=document.querySelector(".circle2");
nav1.addEventListener("mouseover",function(){
  document.querySelector(".circle2").style.transform="scale(2.5) translate(-50%,-50%)"
  document.querySelector(".circle").style.display="none"

  

})
nav1.addEventListener("mouseleave",function(){
  document.querySelector(".circle2").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".circle").style.display="initial"

  

})

// text.addEventListener("mouseover",function(){
//   document.querySelector(".circle2").style.transform="scale(5) translate(-50%,-50%)"
//   document.querySelector(".circle").style.display="none"
//   document.querySelector(".circle2").style.backgroundColor=`white`


  

// })
// text.addEventListener("mouseleave",function(){
//   document.querySelector(".circle2").style.transform="scale(0) translate(-50%,-50%)"
//   document.querySelector(".circle").style.display="initial"
//   document.querySelector(".circle2").style.backgroundColor=`none`


  

// })
// cursor 2 animation --------------------------------------------------------------------------------

// document.querySelector(".main-content>h1").addEventListener("mouseover",function(){
//   document.querySelector(".circle2").style.transform="scale(4) translate(-50%,-50%)"
//   document.querySelector(".circle").style.display="none"
//   document.querySelector(".circle2").style.display="initial"

  

// })
// document.querySelector(".main-content>h1").addEventListener("mouseleave",function(){
//   document.querySelector(".circle2").style.transform="scale(0) translate(-50%,-50%)"
//   document.querySelector(".circle").style.display="initial"
//   document.querySelector(".circle2").style.display="none"


  

// })

///////////////////////////////////////////////////////////////////////////



window.addEventListener("mousemove",function(e){
  setTimeout(function(){

      document.querySelector(".circle2").style.left = `${e.x}px`
      document.querySelector(".circle2").style.top = `${e.y}px`
  },130)

})















  window.addEventListener("mousemove",function(e){
    setTimeout(function(){
  
        document.querySelector(".cusor2>svg").style.left = `${e.x}px`
        document.querySelector(".cusor2>svg").style.top = `${e.y}px`
    },135)
  
})
  


  

window.addEventListener("mousemove",function(e){
  setTimeout(function(){

      document.querySelector(".ero>svg ").style.left = `${e.x}px`
      document.querySelector(".ero>svg").style.top = `${e.y}px`
  },135)

})
////////////////////////////////////////////////////////////////

document.querySelector("#lastbox").addEventListener("mousemove",function(e){
  setTimeout(function(){

      document.querySelector(".email").style.left = `${e.x*.2}px`
      document.querySelector(".email").style.top = `${e.y*.1}px`
  },30)

})
document.querySelector("#lastbox").addEventListener("mouseover",function(e){



  document.querySelector(".circle").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".circle2").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".circle").style.display="initial"



  document.querySelector(".circle2").style.transform="scale(2.3) translate(-50%,-50%)"
  document.querySelector(".circle").style.display="none"



})

document.querySelector("#lastbox").addEventListener("mouseleave",function(e){
  document.querySelector(".circle").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".circle2").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".circle").style.display="initial"






})




// addEventListener("mousemove", function(dets){
//   elem.children[1].style.opacity = 1;
//   elem.children[1].style.transform = `translate(-50%,-50%) translate(${dets.screenX*.3}px, -${dets.screenY*.05}px) rotate(${dets.screenX*.03}deg)`;
// });




///////////////////////////////////////////////

window.addEventListener("mousemove",function(e){
  setTimeout(function(){

      document.querySelector(".circle").style.left = `${e.x}px`
      document.querySelector(".circle").style.top = `${e.y}px`
  },110)

})

window.addEventListener("mouseover",function(e){



  document.querySelector(".circle").style.transform="scale(1) translate(-50%,-50%)"

})

window.addEventListener("mouseleave",function(e){



  document.querySelector(".circle").style.transform="scale(0) translate(-50%,-50%)"

})





document.querySelector("#img1").addEventListener("mouseover",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="initial"
  document.querySelector(".ero>svg").style.display="initial"

  document.querySelector(".circle").style.display="none"
  document.querySelector(".page1").style.backgroundColor=`#FFC72C`
 

gsap.to(".img1",{
    scale:1.3,
    duration:10,

  })

  

})


document.querySelector("#img1").addEventListener("mouseleave",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="none"
  document.querySelector(".ero>svg").style.display="none"

  document.querySelector(".circle").style.display="initial"
  document.querySelector(".page1").style.backgroundColor="white"

  

gsap.to(".img1",{
    scale:0.95,
    duration:5,

  })

  

  

  

})

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.querySelector("#img2").addEventListener("mouseover",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="initial"
  document.querySelector(".ero>svg").style.display="initial"

  document.querySelector(".circle").style.display="none"
  document.querySelector(".page1").style.backgroundColor=`#EC533B`



gsap.to(".img2",{
    scale:1.3,
    duration:10,

  })

  

})
document.querySelector("#img2").addEventListener("mouseleave",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="none"
  document.querySelector(".ero>svg").style.display="none"

  document.querySelector(".circle").style.display="initial"
  document.querySelector(".page1").style.backgroundColor="white"

  

gsap.to(".img1",{
    scale:0.95,
    duration:5,

  })

  

  

  

})


///////////////////////////////////////////////////////////////////////////////



document.querySelector("#img3").addEventListener("mouseover",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="initial"
  document.querySelector(".ero>svg").style.display="initial"


  document.querySelector(".circle").style.display="none"
  document.querySelector(".page1").style.backgroundColor=`#0657A2`


gsap.to(".img3",{
    scale:1.3,
    duration:10,

  })

  

})
document.querySelector("#img3").addEventListener("mouseleave",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="none"
  document.querySelector(".ero>svg").style.display="none"


  document.querySelector(".circle").style.display="initial"
  document.querySelector(".page1").style.backgroundColor="white"

  

gsap.to(".img3",{
    scale:0.95,
    duration:5,

  })

  

  

  

})


//////////////////////////////////////////////////////////////////////////////////////////////


document.querySelector("#img4").addEventListener("mouseover",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="initial"
  document.querySelector(".ero>svg").style.display="initial"


  document.querySelector(".circle").style.display="none"
  document.querySelector(".page1").style.backgroundColor=`#0D1A26`

 

gsap.to(".img4",{
    scale:1.3,
    duration:10,

  })

  

})
document.querySelector("#img4").addEventListener("mouseleave",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="none"
  document.querySelector(".ero>svg").style.display="none"


  document.querySelector(".circle").style.display="initial"
  document.querySelector(".page1").style.backgroundColor="white"

  

gsap.to(".img4",{
    scale:0.95,
    duration:5,

  })

  

  

  

})




//////////////////////////////////////////////////////////////////////////



document.querySelector("#img5").addEventListener("mouseover",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="initial"
  document.querySelector(".ero>svg").style.display="initial"


  document.querySelector(".circle").style.display="none"
  document.querySelector(".page1").style.backgroundColor="#FF3F21"


gsap.to(".img5",{
    scale:1.3,
    duration:10,

  })

  

})
document.querySelector("#img5").addEventListener("mouseleave",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="none"
  document.querySelector(".ero>svg").style.display="none"


  document.querySelector(".circle").style.display="initial"
  document.querySelector(".page1").style.backgroundColor="white"

  

gsap.to(".img5",{
    scale:0.95,
    duration:5,

  })

  

  

  

})


///////////////////////////////////////////////////////////////


document.querySelector("#img6").addEventListener("mouseover",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(1) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="initial"
  document.querySelector(".ero>svg").style.display="initial"


  document.querySelector(".circle").style.display="none"
  document.querySelector(".page1").style.backgroundColor="#85BEE2"
  document.querySelector("#lets").style.backgroundColor="#85BEE2"
  document.querySelector(".khali").style.backgroundColor="#85BEE2"



gsap.to(".img6",{
    scale:1.3,
    duration:10,

  })

  

})
document.querySelector("#img6").addEventListener("mouseleave",function(e){
  document.querySelector(".cusor2>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".ero>svg").style.transform="scale(0) translate(-50%,-50%)"
  document.querySelector(".cusor2>svg").style.display="none"
  document.querySelector(".ero>svg").style.display="none"


  document.querySelector(".circle").style.display="initial"
  document.querySelector(".page1").style.backgroundColor="white"
  document.querySelector("#lets").style.backgroundColor="white"
  document.querySelector(".khali").style.backgroundColor="white"

  

gsap.to(".img6",{
    scale:0.95,
    duration:5,

  })

  

  

  

})




gsap.from("#img1",{
  scrollTrigger:{
      scroller:"#main",
      trigger:"#img1",
      // markers:true,
      start:"top 85%",
      end:"bottom 20%",
  
  },
  y:50,
  
  duration:1.5,

  ease:"linear"
})

gsap.from("#img2",{
  scrollTrigger:{
      scroller:"#main",
      trigger:"#img2",
      // markers:true,
      start:"top 85%",
      end:"bottom 20%",
  
  },
  opacity:0,
  y:50,
  
  duration:1.5,

  ease:"linear"
})

gsap.from("#img3",{
  scrollTrigger:{
      scroller:"#main",
      trigger:"#img3",
      // markers:true,
      start:"top 85%",
      end:"bottom 20%",
  
  },
  opacity:0,
  y:50,
  
  duration:1.5,

  ease:"linear"
})

gsap.from("#img4",{
  scrollTrigger:{
      scroller:"#main",
      trigger:"#img4",
      // markers:true,
      start:"top 85%",
      end:"bottom 20%",
  
  },
  opacity:0,
  y:50,
  
  duration:1.5,

  ease:"linear"
})


gsap.from("#img5",{
  scrollTrigger:{
      scroller:"#main",
      trigger:"#img5",
      // markers:true,
      start:"top 85%",
      end:"bottom 20%",
  
  },
  opacity:0,
  y:50,
  
  duration:1.5,

  ease:"linear"
})



gsap.from("#img6",{
  scrollTrigger:{
      scroller:"#main",
      trigger:"#img6",
      // markers:true,
      start:"top 85%",
      end:"bottom 20%",
  
  },
  opacity:0,
  y:50,
  
  duration:1.5,

  ease:"linear"
})



var a=gsap.timeline();


a.from("#lets>h2:nth-child(2)", {

    onStart: function () {
        $('#lets>h2:nth-child(2)').textillate({
            in: {
                effect: 'fadeInUp',
                callback:function(){
                    $('#lets>h2:nth-child(2)').textillate('out')

                }

            },
            out: { effect: 'fadeOutUp' }
        });
    },

    opacity:0



})

a.from("#lets>h2:nth-child(3)", {

  onStart: function () {
      $('#lets>h2:nth-child(3)').textillate({
          in: {
              effect: 'fadeInUp',
              callback:function(){
                  $('#lets>h2:nth-child(2)').textillate('out')

              }

          },
          out: { effect: 'fadeOutUp' }
      });
  },

  opacity:0



})
