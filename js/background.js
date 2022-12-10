const obsyList = "obsyList";
const fetchObserveList = () => {
    return new Promise((resolve) => {
        chrome.storage.sync.get([obsyList],(result)=>{
            resolve(result[obsyList] ? JSON.parse(result[obsyList]) : [])
        })
    })
}

chrome.runtime.onMessage.addListener(async (message) => {
  if (message.from === "content_script") {
    console.log(message);
    const currentList = await fetchObserveList();
    console.log(currentList);
    chrome.storage.sync.set(
      {
        [obsyList]: JSON.stringify([...currentList,message]),
      },
      () => {
        console.log("data stored");
      }
    );
  }
});
