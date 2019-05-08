$(function() {

  $('[data-scrollmagic]').each(function (index, elem) {

    var scrollMagicController = new ScrollMagic();


    var title = $(elem).find('h3'),
        text = $(elem).find('p'),
        btn = $(elem).find('a');
        bot = $(elem).find('#botton');


    var tl = new TimelineMax({pause: true});
    tl.add("start")
      .fromTo(title, 0.4, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(text, 0.4, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(btn, 0.4, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(bot, 0.4, { y: '80px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")


    var scene = new ScrollScene({
      triggerElement: elem,
      offset: 0
    })
    .setTween(tl)
    .addTo(scrollMagicController);


  });
});
