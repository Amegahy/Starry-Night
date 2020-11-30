/* DOCUMENT INFORMATION
    - Document: Start generation scripts
    - Author: Alex Megahy
    - Description: All start generation scripts
------------------------------------------- */

/* Generate and insert star */
function generateStars(){
    var height = $(".sky").height() - $(".ground").height();
    var width = $(".sky").width();
    for(let i = 0; i <= randomise(20, 100); i++){
        var star = document.createElement("div"); 
        var starContainer = document.createElement("div"); 
        
        //Star Container
        $(starContainer).addClass("starContainer");
        $(starContainer).css("top", randomise(0, height) + "px");
        $(starContainer).css("right", randomise(0, width) + "px");

        // Star
        $(star).addClass("star");
        
        // Append
        $(starContainer).append(star);
        $(".sky").append(starContainer);
    }
}

/* Randomise the number of stars */
function randomise(min, max){
    return Math.floor(Math.random() * max) + min;
}