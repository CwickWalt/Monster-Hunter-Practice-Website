//frontpage carousel

var autoSlideIndex = 0;
showSlidesAuto();


function showSlidesAuto() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {autoSlideIndex = 1} 
    slides[autoSlideIndex-1].style.display = "block"; 
    setTimeout(showSlidesAuto, 4500);
}