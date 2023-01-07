const obsyList = "obsyList";

let listOfObservers = [];

chrome.storage.onChanged.addListener((changes, namespace) => {
  //console.log(changes)

  const oldValues = JSON.parse(changes["obsyList"]["oldValue"]);
  const newValues = JSON.parse(changes["obsyList"]["newValue"]);

  if (newValues.length > oldValues.length) {
    console.log(newValues[newValues.length - 1]);
    // addObsyObserver(newValues[newValues.length - 1])
  }
});

async function addObsyObserver(obsyItem) {
  const duration = obsyItem["interval"];
  const id = obsyItem["id"] 
  const xpathString = obsyItem["xPath"];
  const title = obsyItem["title"];
  const url = obsyItem["url"];

  let newSetInterval = setInterval(async() => {

    
  }, duration);


   
}

xpathEvaluator = async (xpath, url) => {
  const doc = await loadHTML(url);
  console.log(doc);
  console.log(xpath);

  return await doc.evaluate(
    xpath,
    doc,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
};
