var index = 0;

var picList = ["/contents/introscreen.png", "/contents/content/1.png", "/contents/content/2.png", "/contents/content/3.png", "/contents/content/4.png", "/contents/content/5.png", "/contents/content/6.png", "/contents/content/7.png", "/contents/content/8.png"];

$(function () {

    document.getElementById("screen").setAttribute("src", picList[index]);


    $("#start").on("fusing", function () {
        document.querySelector('a-scene').querySelector('#cursor').emit("Fuse");
    })

    $("#start").on("click", function () {
        document.getElementById("start").setAttribute("visible", "false");
        document.getElementById("play").setAttribute("visible", "true");
        document.getElementById("screen").setAttribute("src", picList[index++]);
    })

    $("#play").on("fusing", function () {
        document.querySelector('a-scene').querySelector('#cursor').emit("Fuse");
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

    $("#yes").on("fusing", function () {
        document.querySelector('a-scene').querySelector('#cursor').emit("Fuse");
    })

    $("#yes").on("click", function () {
        window.open("https://www.linkedin.com/in/gaoqiz");
    })

    $("#no").on("fusing", function () {
        document.querySelector('a-scene').querySelector('#cursor').emit("Fuse");
    })

    $("#no").on("click", function () {
        location.reload();
    })

})
