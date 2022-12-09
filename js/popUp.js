// const extensionId = chrome.runtime.id;
// console.log(extensionId)

// //const switchButton = document.getElementsByClassName('switch');

// // switchButton.addEventListener('click', () => {
// //     alert("ehhe")
// // })

// // Get a reference to the start and stop buttons
// const switchButton = document.querySelector("#click");
// const stopButton = document.querySelector("#click");
const selectElementBtn = document.querySelector(".observe-btn");

let extensionIsOn = true;

selectElementBtn.addEventListener("click", () => {

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].status === "complete") {
      chrome.tabs.sendMessage(tabs[0].id, { message: "launch-popup" });

      document.querySelector('.popUpPage').style.display= 'none';

      // extensionIsOn = !extensionIsOn;
      // let message = {
      //     popUp
      // }
      // chrome.tabs.sendMessage(tabs[0].id,message);
    }
  });
});
