$(document).ready(function () {
    console.log("kjuj")

    const popUp = document.createElement("div");
    popUp.className = "new";
    popUp.innerHTML = `<button style="background:red", "cursor:pointer">click me</button>
    `;
   // popUp.style.display = "none";
    popUp.style.width = "100%";
    popUp.style.height = "100%";
    popUp.style.top = 0;
    popUp.style.left = 0;
    popUp.style.background = "red";
    popUp.style.position = "absolute";
    popUp.style.zIndex = "1000000000000000000"

    const border = document.createElement("style");
    border.type = 'text/style';
    border.className = 'border';
    //border.innerHTML = ` .overlay {border: 5px solid red;}`;
    $('<style>').text(`.borderClass { box-shadow: 0 0 0 3px black;
        margin: 0;
        padding: 0;}`).appendTo(document.head)



    $("*").not("body").hover(

        function () {


            $(this).first().addClass("borderClass")
           
            // $(this).append(popUp);
            // $(".new").slideDown('medium')
        }, function () {
            $(".new").remove();
            $("*").not(this).removeClass("borderClass")

            //$(this).removeClass("borderClass")
        }
    )





})



console.log("lol -=-0---------------------")
