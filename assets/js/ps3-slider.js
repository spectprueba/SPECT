const sliderPS3 = document.querySelector("#slider_services");
let sliderSectionPS3 = document.querySelectorAll(".slider_section_services");
let sliderSectionLastPS3 = sliderSectionPS3[sliderSectionPS3.length -1];

sliderPS3.insertAdjacentElement('afterbegin', sliderSectionLastPS3);

function NextPS3(){
    let sliderSectionFirstPS3 = document.querySelectorAll(".slider_section_services")[0];
    sliderPS3.style.marginLeft = "-200%";
    sliderPS3.style.transition = "all 4.5s";
    setTimeout(function(){
        sliderPS3.style.transition = "none";
        sliderPS3.insertAdjacentElement('beforeend', sliderSectionFirstPS3);
        sliderPS3.style.marginLeft = "-100%";
    }, 4500);
}
setInterval(function(){
    NextPS3();
}, 20000);