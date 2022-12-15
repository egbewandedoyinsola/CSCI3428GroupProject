/*
  This file controlls the map configurations, tooltips, highlights, and changes.
  Authors: Rodion Marienko
*/

 /*
    This JQuery function enable highlight of the regions for the two maps
   Authors: Rodion Marienko
  */
$(function() {
    $('.maparea').maphilight();
    $('.maparea2').maphilight();
});

 /*
    This function changes maps and adjusts the zoom setting to fit each one
   Authors: Rodion Marienko
  */
function myFunction() {
    if (currmap == 1) {
        document.getElementById("map1").style = "display: none";
        document.getElementById("map2").style = "";
        document.body.style.zoom = "55%";
        currmap = 2;
    } else {
        document.getElementById("map1").style = "";
        document.getElementById("map2").style = "display: none";
        document.body.style.zoom = "87%";
        currmap = 1;
    }

}

 /*
    This function is used on load to let the map highlighter apply to the second map before it is hidden
   Authors: Rodion Marienko
  */
async function loadf() {
    document.body.style.zoom = "87%";
    await sleep(1000)
    document.getElementById("map2").style.display = "none";
    currmap = 1
}
 /*
    This is a helper sleep function
   Authors: Rodion Marienko
  */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
