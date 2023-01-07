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
    message["interval"] = toMilliseconds(
      message["timeInt"],
      message["duration"]
    );

    message["url"] = await getTab();
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

const toMilliseconds = (timeInt, type) => {
  duration = parseInt(timeInt);
  switch (type) {
    case "min":
      return duration * 60000;
    case "sec":
      return duration * 1000;
    case "hrs":
      return duration * 3600000;
    case "days":
      return duration * 86400000;
  }
};
