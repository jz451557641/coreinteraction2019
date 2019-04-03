var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('topic', .5, {x:100, opacity: 0});

tl.from('#w1', .5, {x:100, opacity: 0});

tl.from('span', .5, { width: 0}, "=-.5");

tl.from('#i1', 1, {x:-100, opacity: 0,ease: Power4.easeInOut}, "=-1");

tl2.from("#box", 1, {opacity: 0, scale: 0});
tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12,
boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})

const scene = new ScrollMagic.Scene({
  triggerElement: ".p1",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".p1")
  .setTween(tl)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "topic"
})
  .setTween(tl2)
		.addTo(controller);


function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}
