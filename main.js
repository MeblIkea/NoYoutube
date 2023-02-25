function getStored(item, key) {
    console.log(item)
    console.log(item[key])
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
        });
    }
})
browser.storage.sync.get("shorts_button", function (item) {
    if (getStored(item, "shorts_button")[1] === true) {
    waitForElm(".ytd-guide-section-renderer").then( function () {
    for (let element of document.getElementsByTagName("a")) {
        if (element.getAttribute("title") === "Shorts") {element.remove();console.log("Shorts button removed")}
    }});
    }
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

browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "hello")
      sendResponse({farewell: "goodbye"});
  }
);