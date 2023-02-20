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

waitForElm("#contents").then( function () {
    document.getElementById("contents").remove();
    console.log("%c Youtube is now optimized!", 'background: #222; color: #badada; font-size: 20px; font-weight: bold;');
});
