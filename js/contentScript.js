$(document).ready(function () {
  console.log("kjuj");

  const popUp = document.createElement("div");
  popUp.id = "contextMenuObsy";
  popUp.className = "contextClassObsy";
  popUp.innerHTML = `
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style="display:block;position:static;margin-bottom:5px;">
    <li><a tabindex="-1" href="#">Action 1</a>
    </li>
    <li><a tabindex="-1" href="#">Action 2</a>
    </li>
    <li><a tabindex="-1" href="#">Some More Actions</a>
    </li>
    <li class="divider"></li>
    <li><a tabindex="-1" href="#">Final Action</a>
    </li>
  </ul>
    `;
  popUp.style.display = "none";
  popUp.style.height = "200px";

  popUp.style.background = "white";
  popUp.style.position = "absolute";
  popUp.style.zIndex = "1000000000000000000";

  //document.body.appendChild(popUp);

  $("<style>")
    .text(
      `.borderClass { box-shadow: 0 0 0 3px black;
        background : '#c9e8f7';
        margin: 0;
        position:relative;
        padding: 0;}`
    )
    .appendTo(document.head);

  const contextMenu = document.body.getElementsByClassName("contextClassObsy");

  $("*")
    .not("body")
    .hover(
      function () {
        $(this).first().addClass("borderClass");
      },
      function () {
        // $(".new").remove();

        $("*").not(this).removeClass("borderClass");
        // $(".contextClassObsy").css({
        //     display:"none"

        // })

        //$(this).removeClass("borderClass")
      }
    );
});

console.log("lol -=-0---------------------");
