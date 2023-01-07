const obsyList = "obsyList";
const fetchObserveList = () => {
  return new Promise((resolve) => {
    chrome.storage.sync.get([obsyList], (result) => {
      resolve(result[obsyList] ? JSON.parse(result[obsyList]) : []);
    });
  });
};

chrome.runtime.onMessage.addListener(async (message) => {
  if (message.from === "content_script") {
    
    const currentList = await fetchObserveList();
    message['url'] = await getTab();
    console.log(message);
    console.log(currentList);
    chrome.storage.sync.set(
      {
        [obsyList]: JSON.stringify([...currentList, message]),
      },
      () => {
        console.log("data stored");
      }
    );
  }
});

async function getTab() {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs[0].url;
}
