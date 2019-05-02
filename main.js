$(document).ready(function () {

    const listeA = $("#listeMenu a");
    
    listeA.click(function (e) {
        e.preventDefault();
        $("#contenu").load(this.href);
        listeA.css("color", "black");
        $(this).css("color", "white");
    });
});

window.onload = function(){
    $("#contenu").load("acceuil.html");
};