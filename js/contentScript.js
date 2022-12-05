// $(document).ready(function () {

//   console.log("kjuj");

//   const popUp = document.createElement("div");
//   popUp.id = "contextMenuObsy";
//   popUp.className = "contextClassObsy";
//   popUp.innerHTML = `
//     <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style="display:block;position:static;margin-bottom:5px;">
//     <li><a tabindex="-1" href="#">Action 1</a>
//     </li>
//     <li><a tabindex="-1" href="#">Action 2</a>
//     </li>
//     <li><a tabindex="-1" href="#">Some More Actions</a>
//     </li>
//     <li class="divider"></li>
//     <li><a tabindex="-1" href="#">Final Action</a>
//     </li>
//   </ul>
//     `;
//   popUp.style.display = "none";
//   popUp.style.height = "200px";

//   popUp.style.background = "white";
//   popUp.style.position = "absolute";
//   popUp.style.zIndex = "1000000000000000000";

//   //document.body.appendChild(popUp);

//   $("<style>")
//     .text(
//       `.borderClass { box-shadow: 0 0 0 3px black;
//         background : '#c9e8f7';
//         margin: 0;
//         position:relative;
//         padding: 0;}`
//     )
//     .appendTo(document.head);

//   const contextMenu = document.body.getElementsByClassName("contextClassObsy");

//   $("*")
//     .not("body")
//     .hover(
//       function () {
//         $(this).first().addClass("borderClass");
//       },
//       function () {
//         // $(".new").remove();

//         $("*").not(this).removeClass("borderClass");
//         // $(".contextClassObsy").css({
//         //     display:"none"

//         // })

//         //$(this).removeClass("borderClass")
//       }
//     );
// });

// console.log("lol -=-0---------------------");

const selectButton = document.createElement("button");
selectButton.innerText = "Select";

// overlay.style.display = "table-cell";
// overlay.style.verticalAlign = "middle";
// overlay.style.textAlign = "center";

document.addEventListener("mouseover", (event) => {
  if (
    event.ctrlKey &&
    event.target.ownerDocument.URL.indexOf("popup.html") === -1
  ) {
    // Get the element the mouse is currently over.
    const element = event.target;

    // if(event.target.classList.contains("popUpPage")){
    //   console.log("yess")

    // }

    // element.style.background = rgba(0, 255, 0, 0.2);
    element.style.boxShadow = "0 0 0 2px #00a0d2";

    //element.appendChild(selectButton);
  }
});

document.addEventListener("mouseout", (event) => {
  const element = event.target;

  // Remove the highlight from the element.
  //element.style.color = "";
  element.style.boxShadow = "";
  // element.removeChild(selectButton);
});
