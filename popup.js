function getStored(item, key) {
    let value = item[key];
    if (value === undefined) {
        browser.storage.sync.set({[key]: true});
        value = true
    }
    return [key, value];
}


document.getElementById("about").onclick = function () {
    open("https://github.com/MeblIkea/NoYoutube");
}

homepage_label = document.getElementById("dhomepage");
shorts_suggestions_label = document.getElementById("dshortssuggestions");
shorts_button_label = document.getElementById("dshortsbutton");
end_video_label = document.getElementById("dendvideo");
video_suggestion_label = document.getElementById("dsuggestionpart");

browser.storage.sync.get("homepage", function (item) {
    if (getStored(item, "homepage")[1] !== homepage_label.getElementsByTagName("input")[0].checked) {
        homepage_label.getElementsByTagName("input")[0].click();
    }
})
browser.storage.sync.get("shorts_suggestions", function (item) {
    if (getStored(item, "shorts_suggestions")[1] !== shorts_suggestions_label.getElementsByTagName("input")[0].checked) {
        shorts_suggestions_label.getElementsByTagName("input")[0].click();
    }
})
browser.storage.sync.get("shorts_button", function (item) {
    if (getStored(item, "shorts_button")[1] !== shorts_button_label.getElementsByTagName("input")[0].checked) {
        shorts_button_label.getElementsByTagName("input")[0].click();
    }
})
browser.storage.sync.get("end_video_suggestions", function (item) {
    if (getStored(item, "end_video_suggestions")[1] !== end_video_label.getElementsByTagName("input")[0].checked) {
        end_video_label.getElementsByTagName("input")[0].click();
    }
})
browser.storage.sync.get("suggestion_part", function (item) {
    if (getStored(item, "suggestion_part")[1] !== video_suggestion_label.getElementsByTagName("input")[0].checked) {
        video_suggestion_label.getElementsByTagName("input")[0].click();
    }
})

homepage_label.getElementsByTagName("input")[0].onclick = function () {
    if (homepage_label.getElementsByTagName("input")[0].checked) {
        homepage_label.getElementsByTagName("span")[0].innerText = "Enabled";
        if (!shorts_suggestions_label.getElementsByTagName("input")[0].checked) {
            shorts_suggestions_label.getElementsByTagName("input")[0].click();
            shorts_suggestions_label.getElementsByTagName("input")[0].disabled = true;
        }
        browser.storage.sync.set({"homepage": true});
    } else {
        homepage_label.getElementsByTagName("span")[0].innerText = "Disabled";
        shorts_suggestions_label.getElementsByTagName("input")[0].click();
        shorts_suggestions_label.getElementsByTagName("input")[0].disabled = false;
        browser.storage.sync.set({"homepage": false});
    }
}
shorts_suggestions_label.getElementsByTagName("input")[0].onclick = function () {
    if (shorts_suggestions_label.getElementsByTagName("input")[0].checked) {
        shorts_suggestions_label.getElementsByTagName("span")[0].innerText = "Enabled";
        browser.storage.sync.set({"shorts_suggestions": true});
    } else {
        shorts_suggestions_label.getElementsByTagName("span")[0].innerText = "Disabled";
        browser.storage.sync.set({"shorts_suggestions": false});
    }
}
shorts_button_label.getElementsByTagName("input")[0].onclick = function () {
    if (shorts_button_label.getElementsByTagName("input")[0].checked) {
        shorts_button_label.getElementsByTagName("span")[0].innerText = "Enabled";
        browser.storage.sync.set({"shorts_button": true});
    } else {
        shorts_button_label.getElementsByTagName("span")[0].innerText = "Disabled";
        browser.storage.sync.set({"shorts_button": false});
    }
}
end_video_label.getElementsByTagName("input")[0].onclick = function () {
    if (end_video_label.getElementsByTagName("input")[0].checked) {
        end_video_label.getElementsByTagName("span")[0].innerText = "Enabled";
        browser.storage.sync.set({"end_video_suggestions": true});
    } else {
        end_video_label.getElementsByTagName("span")[0].innerText = "Disabled";
        browser.storage.sync.set({"end_video_suggestions": false});
    }
}
video_suggestion_label.getElementsByTagName("input")[0].onclick = function () {
    if (video_suggestion_label.getElementsByTagName("input")[0].checked) {
        video_suggestion_label.getElementsByTagName("span")[0].innerText = "Enabled";
        browser.storage.sync.set({"suggestion_part": true});
    } else {
        video_suggestion_label.getElementsByTagName("span")[0].innerText = "Disabled";
        browser.storage.sync.set({"suggestion_part": false});
    }
}