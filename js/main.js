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


function resizeTextArea(event) {
    const box = event.currentTarget;
    autoResize(box);

    const key = box.id;
    const boxData = {
        text: box.value,
        height: box.scrollHeight
    };

    localStorage.setItem(key, JSON.stringify(boxData));
}

document.querySelectorAll(".reflection-box").forEach(elem => {
    elem.addEventListener("input", resizeTextArea);
});


// const box = document.getElementById("gm-points-autonomy-reflection-box");
// const storageKey = "points_autonomy_reflection";

function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

// Load saved data
function loadData() {
    document.querySelectorAll(".reflection-box").forEach(elem => {
        const storedData = localStorage.getItem(elem.id);
        if (!storedData) return;

        const data = JSON.parse(storedData);

        elem.value = data.text || "";

        if (data.height) {
            elem.style.height = data.height + "px";
        }
        else {
            autoResize(elem);
        }
    });
}
//   const saved = localStorage.getItem(storageKey);
//   if (!saved) return;

//   const data = JSON.parse(saved);

//   // Restore text
//   box.value = data.text || "";

//   // Restore height (if available)
//   if (data.height) {
//     box.style.height = data.height + "px";
//   } else {
//     autoResize(box); // fallback
//   }
// }

loadData();

// Save data on input
// box.addEventListener("input", () => {
//   autoResize(box);

//   const boxData = {
//     text: box.value,
//     height: box.scrollHeight
//   };

//   localStorage.setItem(storageKey, JSON.stringify(dataToSave));
// });