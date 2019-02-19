$(document).ready(function () {
    $(".about").click(function () {
        $("#aboutDiv").toggle();
    });

    $(".howToPlay").click(function () {
        $("#howToPlayDiv").toggle();
    });

    $(".closeAbout").click(function () {
        $("#aboutDiv").hide();
    });

    $(".closeHowToPlay").click(function () {
        $("#howToPlayDiv").hide();
    });
});