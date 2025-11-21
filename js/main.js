// Function for switching tabs between SDT needs within game mechanics sections
function gmsdtTabSwitch(event, gmTabClass, gmContentClass, gmContentID) {
    // Code borrowed and modified from:
    // https://www.w3schools.com/howto/howto_js_tabs.asp

    // gmContentClass is the class for this gm-<game_mechanic>
    // gmContentID is the id for the gm-<game_mechanic>-<sdt_need> tab
    var i, gmTabContent, gmTabSwitches;
    const activeClassName = "active";

    // Grab all of the gm-tab options
    gmTabContent = document.getElementsByClassName(gmContentClass);
    for (i = 0; i < gmTabContent.length; i++) {
        gmTabContent[i].style.display = "none";
    }

    gmTabSwitches = document.getElementsByClassName(gmTabClass);
    for (i = 0; i < gmTabSwitches.length; i++) {
        gmTabSwitches[i].classList.remove(activeClassName);
    }
    document.getElementById(gmContentID).style.display = "block";
    event.currentTarget.classList.add(activeClassName);
}