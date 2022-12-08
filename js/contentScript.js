chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "launch-popup") {
    console.log("hehe");
    launchPopUp();
  }
});

function hehe() {
  document.body.style.background = "red";

  console.log("testing");
}
const bottom = document.getElementsByClassName("bottom-box");

function launchPopUp() {
  // Create the floating window

  let window = document.createElement("div");
  window.className = "obsyBottomPopUp"
  window.style.position = "fixed";
  window.style.height = "350px";
  window.style.width = "500px";
  window.style.backgroundColor = "#1f2633";
  window.style.bottom = "5px";
  window.style.right = "5px";
  window.style.color = "white";
  window.style.borderRadius = "8px";
  window.style.padding = "8px";
  window.style.display = "flex";
  window.style.justifyContent = "space-evenly";
  window.style.flexDirection = "column";

  window.innerHTML = bottomPopup;

  document.body.appendChild(window);

  HoverSelector(window);
}

function HoverSelector(bottomDiv) {
  const hoverDisplayBox = bottomDiv.querySelector("#info_boxes");
  const startButton = bottomDiv.getElementsByClassName("observe-btn")[0];
  const xPathDisplayBox = bottomDiv.querySelector("#xpath_box");
  console.log(xPathDisplayBox);
  startButton.addEventListener("click", () => {
    console.log("starthd");
  });
  let hoveredElement = null;

  document.addEventListener("mouseover", (event) => {
    if (
      event.ctrlKey &&
      event.target.ownerDocument.URL.indexOf("popup.html") === -1
    ) {
      event.preventDefault();

      hoveredElement = event.target;

      hoveredElement.style.boxShadow = "0 0 0 2px #00a0d2";
      hoverDisplayBox.src =
        "data:text/html;charset=utf-8," + encodeURI(hoveredElement.innerHTML);
    }
  });

  document.addEventListener("mouseout", (event) => {
    if (hoveredElement != null) {
      hoveredElement.style.boxShadow = "";
      hoveredElement = null;
    }
  });

  document.addEventListener("click", (event) => {
    if (hoveredElement && hoveredElement.isEqualNode(event.target)) {
      event.preventDefault();

      const xPath = xpath(hoveredElement);
      xPathDisplayBox.value = xPath;

      console.log(xPath);
    }
  });
}

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

const bottomPopup = `
<div style="height:50%;width:100%;display:block", class="hover-box">
   <label for="hovering_over" , class="labels">Hovering over</label
      ><br />
   <iframe
      style="padding:3px;width:100%;height:100%;border-radius:8px;background-color:white",
      id="info_boxes"
      ></iframe>
</div>
<br><br><br>
<div style="display:flex;width:100%;flex-wrap: wrap;align-items:center">

   <label style="width:100%", for="xpath">Xpath</label><br />
   <input
      style= "padding:5px;flex-grow:100;height:30px;border-radius:8px;margin-right:10px;box-sizing: border-box;"
      type="text" , id="xpath_box" ,name="xpath" readonly/>
      
         <button style="border-radius:8px;padding: 10px 10px;color: #fff;background-color: #405cf5; cursor: pointer;box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;border-width: 0; appearance: button; box-sizing: border-box;" class="observe-btn">Copy</button>
</div>



<br>

<div>
   <button style="border-radius:8px;padding: 10px 25px;color: #fff;background-color: #405cf5; cursor: pointer;box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;border-width: 0; appearance: button; box-sizing: border-box;" class="observe-btn">Start Observing</button>
</div>
`;

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
