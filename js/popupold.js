import { getCurrentTab } from "./utils";



const addNewBookmark = (bookMarksElement, bookmark) => {
    const bookmarkTitleElement = document.createElement("div");
    const newBookmarkElement = document.createElement("div");

    bookmarkTitleElement.textContent = bookmark.desc;
    bookmarkTitleElement.className = "bookmark-title";

    newBookmarkElement.id = "bookmark-" + bookmark.time;
    newBookmarkElement.className = "bookmark";
    newBookmarkElement.setAttribute("timestamp", bookmark.time);

    newBookmarkElement.appendChild(bookmarkTitleElement);
    bookMarksElement.appendChild(newBookmarkElement);
};

const viewBookmarks = (currentBookmarks = []) => {
    const bookMarksElement = document.getElementById("bookmarks");
    bookMarksElement.innerHTML = "";

    if(currentBookmarks.length > 0){
        for(let i = 0; i < currentBookmarks.length; i++){
            const bookmark = currentBookmarks[i];
            addNewBookmark(bookMarksElement,bookmark);
        }
    } else {
        bookMarksElement.innerHTML = '<i  class = "row">No bookmarks to show</i>';
    }
};

const onPlay = e => {};

const onDelete = e => {};

const setBookmarkAttributes =  () => {};

document.addEventListener("DOMContentLoaded", async() => {
    const activaTab = await getCurrentTab();
    const queryParameters = activaTab.url.split("?")[1];

    const urlParameters = new URLSearchParams(queryParameters);
    const currentVideo = urlParameters.get("v");

    if(activaTab.url.includes("youtube.com/watch") && currentVideo){
        chrome.storage.sync.get([currentVideo], (data) => {
            const currentVideoBookmarks = data[currentVideo] ? JSON.parse(data[currentVideo]) : [];
        })
    } else {
        const container = document.getElementsByClassName("container")[0];
        container.innerHTML = '<div class = "title">This is not youtube video page</div>'
    }

});
