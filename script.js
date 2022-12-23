const slideQt = document.querySelectorAll(".slide").length;
document.querySelector("#sliders").style.width = `calc(${slideQt}*300px)`;

let a = 1;

const updateSlide = () => {
    let newMargin = (a*300);
    document.querySelector("#sliders").style.marginLeft = `-${newMargin}px`
}

const nextSlide = () => {
    if(a>(slideQt-1)){
        a=1
    }
    updateSlide();
    a++
}

setInterval(nextSlide,4000)


