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

//change navbar position onscroll

// window.onScroll = moveNavbar;


// function moveNavbar() {
// 	var navbar = document.getElementById('navbar'),
// 		document.getElementById('monsters');

// 		if(document.body.scrollTop > monsters.getBoundingClientRect().top) {
// 			navbar.classList.toggle('navbar--rotated')
// 		} else {
// 			navbar.classList.toggle('navbar--rotated')
// 		}
		
// }