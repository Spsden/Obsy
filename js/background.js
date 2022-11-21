chrome.contextMenus.create({
  "id" : "Obsy",
  "title" : "Start observing",
  "contexts" : ["all"]

})

chrome.contextMenus.onClicked.addListener((info, tab) => {
   
  alert(info);

})
