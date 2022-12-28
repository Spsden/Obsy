const obsyList = "obsyList";
const infoCardHtml = `
<head>
  <link rel="stylesheet"
   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<div 
style="margin:5px;
height:100px;
padding: 3px;
border: 1px solid black;
background-color:#151515;
border-radius:8px;
color:white;">
  <div style="display: flex; align-items: center; margin-bottom: 5px;">
    <img 
    src="https://s3-symbol-logo.tradingview.com/amazon--big.svg"
    alt="website-icon" 
    style="height: 20px; 
    width: 20px; 
    border-radius: 50%; 
    margin: 0 10px;" 
    id = "avatar" />
    <h3 style="  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  word-wrap: normal;
  text-overflow: ellipsis;
  width: 60%;" id = "element-name">Obsy demo extension sale hehehehehhe</h3>
  </div>

  <div style="display: flex; align-items: center; ">
  <label style="font-size:10px;text-align:bottom;margin:5px;">Checks every</label>
    <input style="; position: relative; width: 15px; margin-right: 0;
      " />
    <select style="padding:1px">
      <option>min</option>
      <option>sec</option>
      <option>hrs</option>
      <option>days</option>
    </select>
    <div style="display: flex; margin-left: auto; ">
      <button style="margin: 0 5px;"><i class="fa fa-pause fa-1x"></i></button>
      <button style=" margin: 0 5px;" class = "delete-btn"><i class="fa fa-trash fa-1x"></i></button>
      <button style=" margin: 0 5px;"><i class="fa fa-edit fa-1x"></i></button>
    </div>
  </div>
</div>

`;

const selectElementBtn = document.querySelector(".observe-btn");

let extensionIsOn = true;

selectElementBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].status === "complete") {
      chrome.tabs.sendMessage(tabs[0].id, { message: "launch-popup" });

      document.querySelector(".popUpPage").style.display = "none";
    }
  });
});

const listy = document.getElementById("listy");

const showObserveList = (observeList) => {
  observeList.forEach((item) => {
    let infoCard = document.createElement("div");
    infoCard.style.margin = "0";
    infoCard.innerHTML = infoCardHtml;
    const faviconAvatar = infoCard.querySelector("#avatar");
    const titleDiv = infoCard.querySelector("#element-name");
    const deleteButton = infoCard.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      console.log("dripppppy");
      const newObserveList = observeList.filter((e) => e.id != item.id);
      chrome.storage.sync.set({ [obsyList]: JSON.stringify(newObserveList) });
      window.location.reload();
    });

    faviconAvatar.src = item.icon;
    titleDiv.innerHTML = item.title;

    //infoCard.innerText = item;
    listy.appendChild(infoCard);
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  console.log("FROM POPUPJS");
  chrome.storage.sync.get([obsyList], (result) => {
    const observeList = result[obsyList] ? JSON.parse(result[obsyList]) : [];
    showObserveList(observeList);
  });
});
