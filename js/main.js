// dictionary for housing progression stats and reflection info
let badgeProgress = {
    'points-autonomy-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'points-autonomy-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-points-autonomy-reflection-box'
    },
    'points-competence-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'points-competence-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-points-competence-reflection-box'
    },
    'points-relatedness-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'points-relatedness-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-points-relatedness-reflection-box'
    },
    'badges-autonomy-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'badges-autonomy-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-badges-autonomy-reflection-box'
    },
    'badges-competence-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'badges-competence-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-badges-competence-reflection-box'
    },
    'badges-relatedness-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'badges-relatedness-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-badges-relatedness-reflection-box'
    },
    'progression-autonomy-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'progression-autonomy-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-progression-autonomy-reflection-box'
    },
    'progression-competence-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'progression-competence-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-progression-competence-reflection-box'
    },
    'progression-relatedness-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'progression-relatedness-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-progression-relatedness-reflection-box'
    },
    'story-autonomy-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'story-autonomy-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-story-autonomy-reflection-box'
    },
    'story-competence-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'story-competence-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-story-competence-reflection-box'
    },
    'story-relatedness-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'story-relatedness-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-story-relatedness-reflection-box'
    },
    'codesign-autonomy-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'codesign-autonomy-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-codesign-autonomy-reflection-box'
    },
    'codesign-competence-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'codesign-competence-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-codesign-competence-reflection-box'
    },
    'codesign-relatedness-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'codesign-relatedness-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-codesign-relatedness-reflection-box'
    },
    'collaboration-autonomy-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'collaboration-autonomy-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-collaboration-autonomy-reflection-box'
    },
    'collaboration-competence-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'collaboration-competence-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-collaboration-competence-reflection-box'
    },
    'collaboration-relatedness-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'collaboration-relatedness-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-collaboration-relatedness-reflection-box'
    },
    'competition-autonomy-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'competition-autonomy-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-competition-autonomy-reflection-box'
    },
    'competition-competence-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'competition-competence-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-competition-competence-reflection-box'
    },
    'competition-relatedness-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'competition-relatedness-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-competition-relatedness-reflection-box'
    },
    'roleplay-autonomy-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'roleplay-autonomy-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-roleplay-autonomy-reflection-box'
    },
    'roleplay-competence-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'roleplay-competence-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-roleplay-competence-reflection-box'
    },
    'roleplay-relatedness-reading': {
        meaningful: false,
        shallow: false,
        status: "hidden"
    },
    'roleplay-relatedness-writing': {
        reflection: false,
        textEntered: false,
        status: "hidden",
        reflectionBoxID: 'gm-roleplay-relatedness-reflection-box'
    }
}

let bigBadgeProgress = {
    'points': {
        autonomy: false,
        competence: false,
        relatedness: false
    },
    'badges': {
        autonomy: false,
        competence: false,
        relatedness: false
    },
    'progression': {
        autonomy: false,
        competence: false,
        relatedness: false
    },
    'story': {
        autonomy: false,
        competence: false,
        relatedness: false
    },
    'codesign': {
        autonomy: false,
        competence: false,
        relatedness: false
    },
    'collaboration': {
        autonomy: false,
        competence: false,
        relatedness: false
    },
    'competition': {
        autonomy: false,
        competence: false,
        relatedness: false
    },
    'roleplay': {
        autonomy: false,
        competence: false,
        relatedness: false
    }
}

const miniBadgeImgs = {
    hidden: "/assets/badges/gm-badge-hidden.png",
    partial: "/assets/badges/gm-checkbox-yellow.png",
    complete: "/assets/badges/gm-checkbox-green.png",
    sectionHidden: "/assets/badges/gm-checkbox-can-check.png"
}

const largeBadgeImgs = {
    hidden: "/assets/badges/gm-badge-hidden.png",
    points: "/assets/badges/gm-points-badge-active.png",
    badges: "/assets/badges/gm-badges-badge-active.png",
    progression: "/assets/badges/gm-progression-badge-active.png",
    story: "/assets/badges/gm-story-badge-active.png",
    codesign: "/assets/badges/gm-codesign-badge-active.png",
    collaboration: "/assets/badges/gm-collaboration-badge-active.png",
    competition: "/assets/badges/gm-competition-badge-active.png",
    roleplay: "/assets/badges/gm-roleplay-badge-active.png"
}

function clearData() {
    const confirmDelete = window.confirm("Warning: This will permanently delete all saved progress and reflections. Continue?");
    if (!confirmDelete) return;

    localStorage.clear();

    // get rid of text in text boxes
    document.querySelectorAll(".reflection-box").forEach(elem => {
        elem.value = "";
        elem.placeholder = "Use this space for notes or nothing at all...";
        elem.style.height = "auto";
        elem.rows = "4";
        autoResize(elem);
    });

    // reset badgeProgress dict
    for (const badgeKey in badgeProgress) {
        if (badgeKey.endsWith('reading')) {
            badgeProgress[badgeKey].meaningful = false;
            badgeProgress[badgeKey].shallow = false;
        }
        else if (badgeKey.endsWith('writing')) {
            badgeProgress[badgeKey].reflection = false;
            badgeProgress[badgeKey].textEntered = false;
        }
    }
    
    // remove "completed" class from all the section circles
    document.querySelectorAll(".mark-progress").forEach(elem => {
        elem.classList.remove("completed");
        elem.querySelector("img").src = miniBadgeImgs.sectionHidden;
    });

    // update visuals and localStorage
    updateMiniBadgeProgress();
}

function downloadData() {
    const confirmDownload = window.confirm("You are about to download a CSV file containing your Reflections. Continue?");
    if (!confirmDownload) return;

    // download reflections as csv file
    const rows = [["Game Mechanic", "SDT Need", "Reflections"]];

    // grab reflections from localStorage and add to array
    for (const badgeKey in badgeProgress) {
        if (badgeKey.endsWith('writing')) {
            const boxID = badgeProgress[badgeKey].reflectionBoxID;
            const boxData = localStorage.getItem(boxID);
            let reflectionText = "";
            if (boxData) {
                const parsedData = JSON.parse(boxData);
                reflectionText = parsedData.text || "";
            }
            console.log(reflectionText);
            // key is "<game mechanic>-<sdt need>-writing"
            // so only want to grab the first two items
            const gmSDTArray = badgeKey.split('-');
            rows.push([gmSDTArray[0], gmSDTArray[1], reflectionText]);
        }
    }

    ///////////////////////////////////////////////////////
    // Note: The remainder of the code was inspired and
    //       modified from the follwing sites:
    //       https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
    //       https://stackoverflow.com/questions/56154046/downloading-blob-with-type-text-csv-strips-unicode-bom
    //       https://stackoverflow.com/questions/46637955/write-a-string-containing-commas-and-double-quotes-to-csv
    ///////////////////////////////////////////////////////
    const csvData = rows.map(row => row.map(col => `"${col.replace(/"/g,'""')}"`).join(",")).join("\n");

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = "reflections.csv";
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    ///////////////////////////////////////////////////////
    // Note: End of code inspired and modified from the 
    //       following sites:
    //       https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
    //       https://stackoverflow.com/questions/56154046/downloading-blob-with-type-text-csv-strips-unicode-bom
    //       https://stackoverflow.com/questions/46637955/write-a-string-containing-commas-and-double-quotes-to-csv
    ///////////////////////////////////////////////////////
}

function toggleBadge(event, badgeID, badgeType) {
    // event is the "meaningful", "shallow" or "reflection" section's
    // circle that was clicked to "mark as completed"
    // 1. Get this event's info
    const toggleCompleteElement = event.currentTarget;
    const badgeKey = badgeID;
    const badgeClass = badgeID;

    // 2. Toggle the appropriate badge progress
    if (badgeType === 'reading') {
        // toggle between meaningful and shallow
        if (toggleCompleteElement.id.includes('meaningful')) {
            badgeProgress[badgeKey].meaningful = !badgeProgress[badgeKey].meaningful;
        }
        else if (toggleCompleteElement.id.includes('shallow')) {
            badgeProgress[badgeKey].shallow = !badgeProgress[badgeKey].shallow;
        }
    }
    else if (badgeType === 'writing') {
        // toggle reflection only
        badgeProgress[badgeKey].reflection = !badgeProgress[badgeKey].reflection;
    }

    toggleCompleteElement.classList.toggle("completed");
    toggleCompleteElement.querySelector("img").src = toggleCompleteElement.classList.contains("completed") ? miniBadgeImgs.complete : miniBadgeImgs.sectionHidden;

    updateMiniBadgeProgress();
}

// Function for switching tabs between SDT needs within game mechanics sections
function gmsdtTabSwitch(event, gmTabClass, gmContentClass, gmContentID) {
    ////////////////////////////////////////////////////
    // Code borrowed and modified from:
    // https://www.w3schools.com/howto/howto_js_tabs.asp
    ////////////////////////////////////////////////////

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

    ////////////////////////////////////////////////////
    // End of code borrowed and modified from:
    // https://www.w3schools.com/howto/howto_js_tabs.asp
    ////////////////////////////////////////////////////
}

function gmSectionSwitch(event, sectionID) {
    ////////////////////////////////////////////////////
    // Code borrowed and modified from:
    // https://www.w3schools.com/howto/howto_js_tabs.asp
    ////////////////////////////////////////////////////
    const gmSectionClass = ".act-V-gm-section"

    document.querySelectorAll(".gm-card").forEach(card => {
        card.classList.remove("active");
    });
    event.currentTarget.classList.add("active");

    document.querySelectorAll(gmSectionClass).forEach(section => {
        section.style.display = "none";
        section.classList.remove("active");
        if (section.id === sectionID) {
            section.style.display = "block";
            section.classList.add("active");
        }
    });
    ////////////////////////////////////////////////////
    // End of code borrowed and modified from:
    // https://www.w3schools.com/howto/howto_js_tabs.asp
    ////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////
// This function was inspired and modified from the following site:
// https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
///////////////////////////////////////////////////////////////////
function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}
///////////////////////////////////////////////////////////////////
// End of code inspired and modified from following site:
// https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
///////////////////////////////////////////////////////////////////

function resizeTextArea(event) {
    const box = event.currentTarget;
    autoResize(box);

    const key = box.id;
    const boxData = {
        text: box.value,
        height: box.scrollHeight
    };

    localStorage.setItem(key, JSON.stringify(boxData));

    updateMiniBadgeProgress();
}

// add event listeners to all reflection boxes for
// autonatic resizing and storing data in localStorage
document.querySelectorAll(".reflection-box").forEach(elem => {
    elem.addEventListener("input", resizeTextArea);
});


// this function updates the card badge progress based on stored data
function updateMiniBadgeProgress() {

    // update the visual badges on the cards
    for (const badgeKey in badgeProgress) {
        const badgeData = badgeProgress[badgeKey];
        const cardBadgeElement = document.getElementById(badgeKey);
        // writing
        if (badgeKey.endsWith('writing')) {
            const reflectKey = badgeData.reflectionBoxID;
            const reflectBoxData = localStorage.getItem(reflectKey);
            
            // if the reflection box has data, check if text is present
            if (reflectBoxData) {
                const reflectBoxText = JSON.parse(reflectBoxData);
                badgeData.textEntered = reflectBoxText.text.length > 0;
                badgeProgress[badgeKey].textEntered = badgeData.textEntered;
            }

            // if there is at least one character in the text box, then
            // textEntered is true
            // if the reflection circle button is pressed, reflection is true
            if (badgeData.reflection && badgeData.textEntered) {
                cardBadgeElement.src = miniBadgeImgs.complete;
            }
            else if (badgeData.reflection || badgeData.textEntered) {
                cardBadgeElement.src = miniBadgeImgs.partial;
            }
            else {
                cardBadgeElement.src = miniBadgeImgs.hidden;
            }
        }
        // reading
        else if (badgeKey.endsWith('reading')) {
            const badgeIDSplit = badgeKey.split('-');
            const bigBadgeID = badgeIDSplit[0];
            const sdtNeed = badgeIDSplit[1];

            if (badgeData.meaningful && badgeData.shallow) {
                cardBadgeElement.src = miniBadgeImgs.complete;
                bigBadgeProgress[bigBadgeID][sdtNeed] = true;
            }
            else if (badgeData.meaningful || badgeData.shallow) {
                cardBadgeElement.src = miniBadgeImgs.partial;
                bigBadgeProgress[bigBadgeID][sdtNeed] = false;
            }
            else {
                cardBadgeElement.src = miniBadgeImgs.hidden;
                bigBadgeProgress[bigBadgeID][sdtNeed] = false;
            }
        }
    }

    for (const bigBadgeKey in bigBadgeProgress) {
        console.log(bigBadgeKey);
        const bigBadgeData = bigBadgeProgress[bigBadgeKey];
        const bigBadgeElement = document.getElementById("gm-" + bigBadgeKey + "-big-badge");
        if (bigBadgeData.autonomy && bigBadgeData.competence && bigBadgeData.relatedness) {
            // all three SDT needs completed
            bigBadgeElement.src = largeBadgeImgs[bigBadgeKey];
            console.log(bigBadgeElement.src);
        }
        else {
            // not all three SDT needs completed
            bigBadgeElement.src = largeBadgeImgs.hidden;
        }

    }

    // update localStorage using badgeProgress dict info
    for (const badgeKey in badgeProgress) {
        localStorage.setItem(badgeKey, JSON.stringify(badgeProgress[badgeKey]));
    }

}


// Load saved data
function loadData() {
    // load reflection text area info from localStorage
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

    // update badgeProgress from localStorage
    for (const badgeKey in badgeProgress) {
        const storedBadgeData = localStorage.getItem(badgeKey);
        if (storedBadgeData) {
            badgeProgress[badgeKey] = JSON.parse(storedBadgeData);
        }
    }

    // update section circles/checkboxes from badgeProgress
    document.querySelectorAll(".mark-progress").forEach(elem => {
        const badgeID = elem.id.replace("mark-progress-", "").replace("-meaningful", "").replace("-shallow", "").replace("-reflection", "");
        const badgeData = badgeProgress[badgeID];
        if (badgeID.endsWith('reading')) {
            if (elem.id.includes('meaningful')) {
                if (badgeData.meaningful) {
                    elem.classList.add("completed");
                }
                else {
                    elem.classList.remove("completed");
                }
            }
            else if (elem.id.includes('shallow')) {
                if (badgeData.shallow) {
                    elem.classList.add("completed");
                }
                else {
                    elem.classList.remove("completed");
                }
            }
        }
        else if (badgeID.endsWith('writing')) {
            if (badgeData.reflection) {
                elem.classList.add("completed");
            }
            else {
                elem.classList.remove("completed");
            }
        }
        elem.querySelector("img").src = elem.classList.contains("completed") ? miniBadgeImgs.complete : miniBadgeImgs.sectionHidden;
    });
}

// initial code - load data and update badges
loadData();
updateMiniBadgeProgress();