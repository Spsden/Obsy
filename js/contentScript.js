// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message) => {
  if (message === true) {
    // Start the script
    //alert("hihi")
    console.log("true")
  } else if (message === false) {
    // Stop the script
    console.log("fals3")
    //alert("false")
  }
});





document.addEventListener("mouseover", (event) => {
  if (
    event.ctrlKey &&
    event.target.ownerDocument.URL.indexOf("popup.html") === -1
  ) {
    event.preventDefault();

    const element = event.target;

    element.addEventListener("click", (event) => {
      console.log(xpath(element));
    });
    element.style.boxShadow = "0 0 0 2px #00a0d2";
  }
});

document.addEventListener("mouseout", (event) => {
  const element = event.target;

  element.style.boxShadow = "";
});

function xpath(el) {
  if (typeof el == "string")
    return document.evaluate(el, document, null, 0, null);
  if (!el || el.nodeType != 1) return "";
  //if (el.id) return "//*[@id='" + el.id + "']"
  if (el.parentNode == null) return "/${el.tagName}/";
  let sames = [].filter.call(el.parentNode.children, function (x) {
    return x.tagName == el.tagName;
  });
  return (
    xpath(el.parentNode) +
    "/" +
    el.tagName.toLowerCase() +
    (sames.length > 1 ? "[" + ([].indexOf.call(sames, el) + 1) + "]" : "")
  );
}

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
