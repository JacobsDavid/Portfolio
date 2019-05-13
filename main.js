$(document).ready(function () {

    const listeA = $("#listeMenu a");

    listeA.on("click", function (e) {
        e.preventDefault();
        $("#contenu").load(this.href);
        listeA.css("color", "black");
        $(this).css("color", "white");
    });
});

window.onload = function(){
    $("#contenu").load("acceuil.html");
};