// ==UserScript==
// @name Script for Jadwal Dosen in SIAP UNDIP
// @namespace Script Runner Pro
// @match *://*/*
// @grant none
// @version 1.0
// @description  Enable "Mata Kuliah" and "Kelas" in Jadwal Dosen SIAP UNDIP
// @description:id  Menambahkan baris "Mata Kuliah" dan "Kelas" di menu Jadwal Dosen SIAP UNDIP
// @author FADHIL PRAWIRA
// ==/UserScript==


document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        runScript();
    }
});

function runScript() {
    // check if the current page URL matches the pattern we want
    if (window.location.href.match(/^https:\/\/siap\.undip\.ac\.id\/master_perkuliahan\/mhs\/penjadwalan\/dosen\//)) {
        // select all "tr" elements that have a "data-search" attribute
        const trElements = document.querySelectorAll("[data-search]");

        // loop through all these elements and modify them
        for (let i = 0; i < trElements.length; i++) {
            const value = trElements[i].getAttribute("data-search");
            const idCode = trElements[i].getAttribute("data-idcode");

            // set the text content of the fourth child of the current tr element to the value of data-idcode
            trElements[i].children[3].textContent = idCode;

            // set the text content of the third child of the current tr element to the value of data-search
            trElements[i].children[2].textContent = value;
        }
    }
}


