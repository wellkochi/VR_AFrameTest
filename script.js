var index = 0;

var picList = ["images/intro.png", "images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/plan.mp4"];

$(function () {

    $("#start").on("click", function () {
        document.getElementById("start").setAttribute("visible", "false");
        document.getElementById("play").setAttribute("visible", "true");
        document.getElementById("screen").setAttribute("src", picList[index++]);
        document.querySelector('[sound]').components.sound.playSound();
    })
    
    $("#play").on("click", function () {
        document.getElementById("screen").setAttribute("src", picList[index++]);
        console.log(index);

        if (index == 9) {
            document.getElementById("play").setAttribute("visible", "false");
            document.getElementById("yes").setAttribute("visible", "true");
            document.getElementById("no").setAttribute("visible", "true");
        }
    })

    $("#yes").on("click", function () {
        document.getElementById("screen").setAttribute("src", picList[9]);
        document.querySelector('[sound]').components.sound.stopSound();
        document.getElementById("yes").setAttribute("visible", "false");
        document.getElementById("no").setAttribute("visible", "false");
    })

    $("#no").on("click", function () {
        window.open("https://www.linkedin.com/in/gaoqiz");
        window.location.reload(); 
    })

})
