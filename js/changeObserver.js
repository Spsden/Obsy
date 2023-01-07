const obsyList = "obsyList";

let listOfObservers = [];

chrome.storage.onChanged.addListener((changes, namespace) => {
  //console.log(changes)

  const oldValues = JSON.parse(changes["obsyList"]["oldValue"]);
  const newValues = JSON.parse(changes["obsyList"]["newValue"]);

 
          

  

 
  if(newValues.length > oldValues.length){
    console.log(newValues[newValues.length - 1]);
    addObsyObserver(newValues[newValues.length - 1])

  }
});

function addObsyObserver(obsyItem) {
  const duration = obsyItem["duration"];
  const id = obsyItem["id"] || Date.now() * Math.random();
  const xpathString = obsyItem["xPath"];
  const title = obsyItem["title"];

  const mutationObserver = new MutationObserver(entries => {
    alert(entries)
    console.log(entries);
    
    console.log("observed changes here");
  });

  const evalutadXPath = xpathEvaluator(xpathString);
  console.log("from funvtuon add " + evalutadXPath)

  mutationObserver.observe(evalutadXPath, {
    childList: true,
    attributes: true,
  });

  const mutationObj = {
    id: id,
    observer: mutationObserver,
    title: title,
  };
  listOfObservers.push(mutationObj);
  console.log(listOfObservers[0])
}

xpathEvaluator = (xpath) => {
  return document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
};
