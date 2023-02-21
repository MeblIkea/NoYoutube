document.getElementById("about").onclick = function () {
    open("https://github.com/MeblIkea/NoYoutube")
}

homepage_label = document.getElementById("dhomepage");
shorts_suggestions_label = document.getElementById("dshortssuggestions");
shorts_button_label = document.getElementById("dshortsbutton");

homepage_label.getElementsByTagName("input")[0].onclick = function () {
    if (homepage_label.getElementsByTagName("input")[0].checked) {
        homepage_label.getElementsByTagName("span")[0].innerText = "Enabled";
        shorts_suggestions_label.getElementsByTagName("input")[0].click();
        shorts_suggestions_label.getElementsByTagName("input")[0].disabled = true;
    } else {
        homepage_label.getElementsByTagName("span")[0].innerText = "Disabled";
        shorts_suggestions_label.getElementsByTagName("input")[0].disabled = false;
        shorts_suggestions_label.getElementsByTagName("input")[0].click();
    }
}
shorts_suggestions_label.getElementsByTagName("input")[0].onclick = function () {
    if (shorts_suggestions_label.getElementsByTagName("input")[0].checked) {
        shorts_suggestions_label.getElementsByTagName("span")[0].innerText = "Enabled";
    } else {
        shorts_suggestions_label.getElementsByTagName("span")[0].innerText = "Disabled";
    }
}
shorts_button_label.getElementsByTagName("input")[0].onclick = function () {
    if (shorts_button_label.getElementsByTagName("input")[0].checked) {
        shorts_button_label.getElementsByTagName("span")[0].innerText = "Enabled";
    } else {
        shorts_button_label.getElementsByTagName("span")[0].innerText = "Disabled";
    }
}