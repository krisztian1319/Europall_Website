
var inOpacity = 1;
var outOpacity = .5;
var fadeStop;
var fadeBegin;
var pageSelect;

window.onload = allOnLoad;

function allOnLoad() {
    fadeStart();
    slideshow1Start();
}

function fadeStart() {
    fadeBegin = setInterval(fadeIn, 25);
}

function fadeIn() {
    outOpacity += .02;
    document.getElementById("fade").style.opacity = outOpacity;
    
    if (outOpacity >=.99) {
        clearInterval(fadeBegin);
        outOpacity = .5;
    }
}

function pick1() {
    pageSelect = "Europall_imp.html"
    fadeOutPage();
}

function pick2() {
    pageSelect = "Work.html"
    fadeOutPage();
}

function pick3() {
    pageSelect = "Contact.html"
    fadeOutPage();
}

function pick4() {
    pageSelect = "Services.html"
    fadeOutPage();
}

function fadeOutPage() {
    location.replace(pageSelect);
}





var slideCount = 0;
var whichSlide = 1;
var slideBegin;
var slideAnim;
var slideBool = 0;
var slideFactor = 13;

var x1 = document.
getElementById("slideshowimg1").getBoundingClientRect().left;

var x2 = document
.getElementById("slideshowimg2").getBoundingClientRect().left;



function slideshow1Start() {
    slideBegin = setInterval(slide, 15);
}

function slide() {
    slideCount++;
    if (slideCount == 200) {
        slideAnim = setInterval(slideOver, 15);
        slideCount = 0;
        clearInterval(slideBegin);
        if (whichSlide == 0) {
            whichSlide = 1;
        }
    }
}


function slideOver() {
    x1 -= slideFactor;
    x2 -= slideFactor;
    

    document.getElementById("slideshowimg1")
    .style.left = x1 + "PX";
    document.getElementById("slideshowimg2")
    .style.left = x2 + "PX";

    if (x1 <= -400) {
        rightStop = 0;
        clearInterval(slideAnim);
        slideBegin = setInterval(slide, 15);
        x1 = 400;
        if (whichSlide == 2) {
            document.getElementById("slideshowimg1").
            src = "IMG/Slide4.png";
            whichSlide++;
        }
        else if (whichSlide == 4) {
            document.getElementById("slideshowimg1").
            src = "IMG/Slide2.png";
            whichSlide = 0;
        }
    }

    else if (x2 <= -400) {
        rightStop = 0;
        clearInterval(slideAnim);
        slideBegin = setInterval(slide, 15);
        x2 = 400;
        if (whichSlide == 1) {
            document.getElementById("slideshowimg2").
            src = "IMG/Slide3.png";
            whichSlide++;
        }
        
        else if (whichSlide == 3) {
            document.getElementById("slideshowimg2").
            src = "IMG/Slide1.png";
            whichSlide++;
        }
        
    }
}

var rightStop = 0;

function moveRight() {
    if (slideCount != 0 && rightStop == 0) {
        if (whichSlide == 0) {
            whichSlide = 1;
        }
        clearInterval(slideBegin);
        slideAnim = setInterval(slideOver, 15);
        rightStop = 1;
    
        slideCount = 0;
    }
}

var leftStop = 0;
var slideLeftStart;



function moveLeft() {
    if (slideCount != 0 && leftStop == 0) {
        
        if (x1 >= 400) {
            document.getElementById("slideshowimg1")
            .style.left = "-400px";
            x1 = -400;
        }
        else if (x2 >= 400) {
            document.getElementById("slideshowimg2")
            .style.left = "-400px";
            x2 = -400;
        }
    
        clearInterval(slideBegin);
        slideLeftStart = setInterval(slideLeft, 15);
        leftStop = 1;
        slideCount = 0;
    }

   
}


function slideLeft() {
    x1 += slideFactor;
    x2 += slideFactor;
    console.log(x1);

    document.getElementById("slideshowimg1")
    .style.left = x1 + "PX";
    document.getElementById("slideshowimg2")
    .style.left = x2 + "PX";

    if (x1 >= 400) {
        leftStop = 0;
        clearInterval(slideLeftStart);
        slideBegin = setInterval(slide, 15);
        x1 = -400;
        if (whichSlide == 2) {
            document.getElementById("slideshowimg1").
            src = "IMG/Slide4.png";
            whichSlide--;
        }
        else if (whichSlide == 4) {
            document.getElementById("slideshowimg1").
            src = "IMG/Slide2.png";
            whichSlide--;
        }
        document.getElementById("slideshowimg1")
        .style.left = "-400px";
        x1 = -400;
    }

    else if (x2 >= 400) {
        leftStop = 0;
        clearInterval(slideLeftStart);
        slideBegin = setInterval(slide, 15);
        x2 = -400;
        if (whichSlide == 1) {
            document.getElementById("slideshowimg2").
            src = "IMG/Slide3.png";
            whichSlide = 4;
        }
        
        else if (whichSlide == 3) {
            document.getElementById("slideshowimg2").
            src = "IMG/Slide1.png";
            whichSlide--;
        }
        document.getElementById("slideshowimg2")
        .style.left = "-400px";
        x2 = -400;
    }
}
