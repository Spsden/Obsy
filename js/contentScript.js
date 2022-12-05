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

// const overlay = document.createElement('div');
// overlay.style.position = 'absolute';
// overlay.style.top = 0;
// overlay.style.left = 0;
// overlay.style.right = 0;
// overlay.style.bottom = 0;
// overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
// overlay.style.color = '#fff';
// overlay.style.textAlign = 'center';
// overlay.style.verticalAlign = 'middle';
// overlay.style.display = 'none';
// document.body.appendChild(overlay);



document.addEventListener("mouseover", (event) => {
 
  if (
    event.ctrlKey &&
    event.target.ownerDocument.URL.indexOf("popup.html") === -1
  ) {
    event.preventDefault();
    // Get the element the mouse is currently over.
    const element = event.target;

    element.addEventListener('click', (event) => {
      console.log(event.target);

    })

    // overlay.innerText = element.tagName;
    // overlay.style.top = `${element.offsetTop}px`;
    // overlay.style.left = `${element.offsetLeft}px`;
    // overlay.style.width = `${element.offsetWidth}px`;
    // overlay.style.height = `${element.offsetHeight}px`;

    // overlay.style.display = 'block';

    

    element.style.boxShadow = "0 0 0 2px #00a0d2";

  }
});

document.addEventListener("mouseout", (event) => {
  const element = event.target;


  //overlay.style.display = 'none';
  element.style.boxShadow = "";
  // element.removeChild(selectButton);
});
