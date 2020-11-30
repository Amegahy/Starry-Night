/* DOCUMENT INFORMATION
    - Document: index.html scripts
    - Author: Alex Megahy
    - Description: All index.html import scripts
------------------------------------------- */

$(document).ready(function(){
    $.getScript('js/components/stars.js', function() {
        generateStars();
    });
}); 