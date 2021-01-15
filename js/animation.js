var tlanim= new TimelineMax();

tlanim.staggerFrom('.anim', 1, {x: 150, y:150});

$('.card').hover(function() {
    TweenMax.to($(this), 0.5, { y:-10, scale: 1.03 });
    TweenMax.to($(this), 0.5, { boxShadow: '0 0 20px rgba(0,0,0,0.36)'  });
},
function() {
    TweenMax.to($(this), 0.5, { y:0, scale: 1 });
    TweenMax.to($(this), 0.5, { boxShadow: '0 0 20px rgba(0,0,0,0.06)'  });
});