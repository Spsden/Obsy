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
  ///console.log(window.location.hostname)

  let bottomMenu = document.createElement("div");

  bottomMenu.className = "obsyBottomPopUp";
  bottomMenu.style.position = "fixed";
  bottomMenu.style.height = "350px";
  bottomMenu.style.width = "500px";
  bottomMenu.style.backgroundColor = "#1f2633";
  bottomMenu.style.bottom = "5px";
  bottomMenu.style.right = "5px";
  bottomMenu.style.color = "white";
  bottomMenu.style.borderRadius = "8px";
  bottomMenu.style.padding = "8px";
  bottomMenu.style.display = "flex";
  bottomMenu.style.justifyContent = "space-evenly";
  bottomMenu.style.flexDirection = "column";
  bottomMenu.style.boxSizing = "border-box";
  bottomMenu.style.zIndex = "1000";

  bottomMenu.innerHTML = bottomPopup;

  document.body.appendChild(bottomMenu);

  HoverSelector(bottomMenu);
}

function HoverSelector(bottomDiv) {
  const hoverDisplayBox = bottomDiv.querySelector("#info_boxes");
  const startButton = bottomDiv.getElementsByClassName("observe-btn")[0];
  const xPathDisplayBox = bottomDiv.querySelector("#xpath_box");
  const titleInputBox = bottomDiv.querySelector("#title-input");
  const timeIntBox = bottomDiv.querySelector("#timeInt");
  const duration = bottomDiv.querySelector("#duration");
  let chosenOrNot = false;
  let observeElementTitle;
  let observeXpath;

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
      observeElementTitle = hoveredElement.innerText.slice(0, 100).trim();
      observeXpath = xPath;
      chosenOrNot = true;
      xPathDisplayBox.value = xPath;

      console.log(xPath);
    }
  });

  startButton.addEventListener("click", () => {
    if (!chosenOrNot) {
      alert(
        "Please select an element. \n To select an element hold ctrl button and click on the element you want to be observed"
      );
    } else {
      const inputTitle = titleInputBox.value;
      const timeIntData = timeIntBox.value;
      console.log(timeIntBox.value);
      const durationData = duration.value;

      let startObject = {
        from: "content_script",
        id: Date.now() * Math.random(),
        icon:
          "http://www.google.com/s2/favicons?domain=" +
          window.location.hostname,
        title: inputTitle || observeElementTitle,
        xPath: observeXpath,
        timeInt: timeIntData || "1",
        duration: durationData || "min",
      };

      chrome.runtime.sendMessage(startObject);
    }
    console.log("heheh");

    document.body.querySelector(".obsyBottomPopUp").style.display = "none";
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
<div style="height:50%;width:100%;height;display:block;", class="hover-box">
   <label style="margin:5px;font-size:15px;" for="hovering_over", class="labels">Hovering over</label
      ><br />
   <iframe
      style="padding:3px;width:100%;height:100px;border-radius:8px;background-color:white",
      id="info_boxes"
      ></iframe>
</div>
<br>
<div style="display:flex;width:100%;flex-wrap: wrap;align-items:center">
   <label style="width:100%;font-size:15px;", for="xpath">Xpath</label><br />
   <input
      style= "padding:5px;
      flex-grow:100;
      height:30px;
      border-radius:8px;
      margin-right:10px;
      box-sizing: border-box;"
      type="text" , id="xpath_box" ,name="xpath" readonly/>
   <button 
   style="border-radius:8px;
   padding: 10px 10px;
   color: #fff;
   background-color: #405cf5;
   cursor: pointer;box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
   border-width: 0;
   appearance: button;
   box-sizing: border-box;"
   class="copy-btn">Copy</button>
</div>
<br>
<div style="display:flex;justify-content:space-between;align-items:center">

    <input style= "padding:5px;
    height:30px;
    border-radius:8px;
    margin-right:10px;
    box-sizing: border-box;" type='text' id='title-input' placeholder="Title" name='title-input'>


    
    <div>
    <input style="; position: relative; width: 35px;height:30px;border-radius:8px; margin-right: 0; box-sizing: border-box;
    " id='timeInt'/>
  <select style="padding:1px;height:30px;border-radius:8px;" id='duration'>
    <option>min</option>
    <option>sec</option>
    <option>hrs</option>
    <option>days</option>
  </select>
    </div>
   
   

   <button 
   style="border-radius:8px;
   padding: 10px 15px;
   color: #fff;
   background-color: #405cf5;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;border-width: 0; 
    appearance: button; 
    box-sizing: border-box;" 
    class="observe-btn">Start Observing</button>
    <br>

  
</div>
`;
