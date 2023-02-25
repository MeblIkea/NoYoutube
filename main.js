function getStored(item, key) {
    let value = item[key];
    if (value === undefined) {
        browser.storage.sync.set({[key]: true});
        value = true
    }
    return [key, value];
}

browser.storage.sync.get("homepage", function (item) {
    if (getStored(item, "homepage")[1] === true) {
        waitForElm("#contents").then( function () {
            document.getElementById("contents").remove();
            console.log("Videos removed");
        });}
})
browser.storage.sync.get("shorts_button", function (item) {
    if (getStored(item, "shorts_button")[1] === true) {
    waitForElm(".ytd-guide-section-renderer").then( function () {
    for (let element of document.getElementsByTagName("a")) {
        if (element.getAttribute("title") === "Shorts") {element.remove();console.log("Shorts button removed")}
    }});}
})

browser.storage.sync.get("shorts_suggestions", function (item) {
    if (getStored(item, "shorts_suggestions")[1] === true) {
    waitForElm(".ytd-guide-section-renderer").then( function () {
    for (let element of document.getElementsByTagName("ytd-rich-shelf-renderer")) {
        if (element.getAttribute("is-shorts") !== null) {element.remove();console.log("Shorts suggestions removed")}
    }});}
})
browser.storage.sync.get("suggestion_part", function (item) {
    if (getStored(item, "suggestion_part")[1] === true) {
    waitForElm(".ytd-watch-next-secondary-results-renderer").then( function () {
    for (let element of document.getElementsByClassName("ytd-watch-next-secondary-results-renderer")) {
        if (element.getAttribute("id") === "items") {element.remove();console.log("Videos suggestions removed")}
    }});}
})

function remove_end_suggestions() {
    waitForElm(".html5-endscreen").then( function () {
    for (let element of document.getElementsByClassName("html5-endscreen")) {
        element.remove();console.log("Videos suggestions removed");remove_end_suggestions();
    }});
}
browser.storage.sync.get("end_video_suggestions", function (item) {
    if (getStored(item, "end_video_suggestions")[1] === true) {remove_end_suggestions();}
})

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(function () {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}