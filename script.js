function scrollAppear(){
    var textContent = document.querySelector(".container section .text-section .text-content");
    var textContentPosition = textContent.getBoundingClientRect().top;
    var headerBoxShadow = document.getElementsByTagName("header");
    var sectionImg = document.querySelector(".container section img");
    var sectionImgPosition = sectionImg.getBoundingClientRect().top;
    var header = document.getElementById("hdr");
    var headerh1 = document.querySelector(".container header h1");
    var headerPosition = headerh1.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    console.log(textContentPosition);
    if(textContentPosition < screenPosition / 2){
        textContent.classList.add("text-appear");  
        textContent.style.transform = "scale(1.2)";
        headerBoxShadow[0].style.boxShadow = "0px 0px 200px white";
    }
    else {
        textContent.classList.remove("text-appear");   
        textContent.style.transform = "scale(1)" ;
        headerBoxShadow[0].style.boxShadow = "0px 0px 0px white";
    }

    if(sectionImgPosition < screenPosition / 2){
        sectionImg.classList.add("imgAfter");
    }
    else {
        sectionImg.classList.remove("imgAfter");
        sectionImg.style.animaiton = "none";
    }

    if(headerPosition * 3 > screenPosition){
        header.classList.add("afterHeader");
        headerh1.style.transform = "scale(1.2)";
        headerh1.style.color = "white";
    }
    else {
        header.classList.remove("afterHeader");
        headerh1.style.transform = "scale(1)";
        headerh1.style.color = "rgb(23, 32, 42)";
    }
}

window.addEventListener("scroll",scrollAppear);