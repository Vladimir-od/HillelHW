"use strict";
function uniqYear(year) {
    if (year < 1000 || year > 9000) return console.log("come back later");
    let s = new Set(year+"");
    if (s.size < 4) {
        year++;
    } else {
        return console.log("next unique year is:", year);
    }
    uniqYear(year);
}
uniqYear(2019) // 2019
uniqYear(2021) // 2031
uniqYear(1900) // 1902
uniqYear(1931) // 1932
uniqYear(1290) // 1290
uniqYear(2000) // 2013
uniqYear(8999) // come back later




