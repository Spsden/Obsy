

const extensionId = chrome.runtime.id;
console.log(extensionId)


//const switchButton = document.getElementsByClassName('switch');

// switchButton.addEventListener('click', () => {
//     alert("ehhe")
// })

// Get a reference to the start and stop buttons
const switchButton = document.querySelector('#click');
const stopButton = document.querySelector('#click');

let extensionIsOn = true;

switchButton.addEventListener('click', () => {
    chrome.tabs.query({active:true,currentWindow:true}, (tabs) => {
        
        if(tabs[0].status === 'complete'){
            extensionIsOn = !extensionIsOn;
            chrome.tabs.sendMessage(tabs[0].id,extensionIsOn);
        }

    })
})



