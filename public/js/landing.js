window.onload = function (e) {
    setTimeout(loadNext, 8000);
    TweenMax.to('.panel', 1, { scaleY: 1, height: '100vh', ease: Power2.easeOut });
    TweenMax.to('#light', 1, { opacity: 1, y: 0, delay: 1, ease: Back.easeOut.config(1.7) });
    TweenMax.to('p', 1, { opacity: 1, x: 27, delay: 1, ease: Back.easeOut });
    TweenMax.to('.panel2', 1.5, { scaleY: 1, height: '100vh', delay: 2.5, ease: Power2.easeOut });
    TweenMax.to('.panel3', 1.5, { scaleY: 1, height: '100vh', delay: 5, ease: Power2.easeOut });

}




loadNext = function () {
    window.location.href = "/home";
}

