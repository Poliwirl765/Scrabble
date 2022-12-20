/*
    File: javascript.js
    Patryk Piwowarczyk, patryk_piwowarczyk@student.uml.edu
    Completed on 12/20/2022

    Sources:
    1. https://api.jquery.com/on/
    2. https://www.htmlgoodies.com/css/working-with-tables-using-jquery/
    3. https://api.jquery.com/html/
    4. https://stackoverflow.com/questions/12350259/original-position-of-a-draggable-in-jquery-ui
    5. https://stackoverflow.com/questions/5562853/jquery-ui-get-id-of-droppable-element-when-dropped-an-item
    6. https://api.jqueryui.com/draggable/
    7. https://stackoverflow.com/questions/885144/how-to-get-current-position-of-an-image-in-jquery
    8. https://stackoverflow.com/questions/9704087/jquery-add-image-at-specific-co-ordinates
    9. https://www.tutorialspoint.com/jqueryui/jqueryui_draggable.htm
    10. https://api.jqueryui.com/droppable/
    11. https://www.geeksforgeeks.org/jquery-ui-draggable-and-droppable-methods/
    12. http://www.java2s.com/Tutorial/JavaScript/0571__jQuery/Slidereventschangeslidestartstop.htm
    13. http://www.java2s.com/Tutorial/JavaScript/0571__jQuery/Slidereventschangeslidestartstop.htm
    14. https://stackoverflow.com/questions/20109934/how-to-do-make-a-drop-function-with-jquery
    15. https://www.w3schools.com/jsref/prop_style_csstext.asp
    16. https://forum.jquery.com/topic/drop-if-content-matches
    17. https://stackoverflow.com/questions/12284456/drag-drop-check-item-was-dropped-in-the-correct-place
    18. https://www.rexegg.com/regex-quickstart.html
    19. https://www.w3schools.com/jsref/jsref_match.asp
    20. https://api.jquery.com/removeattr/
    21. https://www.geeksforgeeks.org/html-dom-childelementcount-property/
    22. https://www.tutorialkart.com/javascript/how-to-get-number-of-child-elements-of-html-element-in-javascript/
    23. https://www.programiz.com/javascript/examples/get-random-item
    24. https://www.tutorialspoint.com/javascript-how-to-pick-random-elements-from-an-array
*/
// Use to update the total score
var word_score;
var Rack = [];
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
var temp = 0;

//Source 1 and previous assignmnets in class were used for this primarily
$(document).on("ready", (function() {
    bRestart(); //initializes game mechanics including letter value and letter count
    Draggable();
    Droppable(); //ensure everything compliant

    $("#reset").on("click", (function() { // restarting the game button
        bRestart(); 
        Draggable();
        Droppable(); // Drag and Drop function is allowed users to drag and drop tiles
    }));
    $("#retTiles").on("click", (function() { //returning tiles back to rack button
        returnTiles();
        Draggable();
        Droppable(); 
    }));
    $("#submitW").on("click", (function() { //submitting the word button
        submitButton();
        selectTiles();
    }));
}));

// Taken from the .zip file, changed the '-' to a '_'  
// Source:  /~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original_distribution" : 9,  "number_remaining" : 9  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original_distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original_distribution" : 12, "number_remaining" : 12 } ;
ScrabbleTiles["F"] = { "value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original_distribution" : 3,  "number_remaining" : 3  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original_distribution" : 9,  "number_remaining" : 9  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original_distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original_distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original_distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original_distribution" : 6,  "number_remaining" : 6  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original_distribution" : 8,  "number_remaining" : 8  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original_distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original_distribution" : 6,  "number_remaining" : 6  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original_distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original_distribution" : 6,  "number_remaining" : 6  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original_distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original_distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original_distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original_distribution" : 2,  "number_remaining" : 2  } ;

// Function for Generating the One Line of Scrabble, sources 2,3
function scrabbleLine() {
    var table = ""; // initialize table
    table += '<table id="singleLine">';
    table += '<td class="regular"></td>';
    table += '<td class="lTriple regular">Triple<br>Letter</td>';
    table += '<td class="regular"></td>';
    table += '<td class="regular"></td>';
    table += '<td class="regular"></td>';
    table += '<td class="lTriple regular">Triple<br>Letter</td>';
    table += '<td class="regular"></td>';
    table += '<td class="regular"></td>';
    table += '<td class="regular"></td>';
    table += '<td class="lTriple regular">Triple<br>Letter</td>';
    table += '<td class="regular"></td>';
    table += '<td class="regular"></td>';
    table += '<td class="regular"></td>';
    table += '<td class="lTriple regular">Triple<br>Letter</td>';
    table += '<td class="regular"></td>';
    table += '</table>';
    $("#scrabble").html(table);
}

// Sources 6,7,9, 12
function Draggable() {
    for (var i = 0; i < 7; i++) {
        $("#drag_tile_" + i).draggable({
            revert: "invalid", // check that tile is only on the board and the rack 
            start: function(ev, ui) {
                startPos = ui.helper.position(); 
            },
            stop: function() {
                // if dragged elsewhere, return to rack or board (depending on where it started in the sequence of the drag and drop)
                $(this).draggable('option', 'revert', 'invalid');
            }
        }); 
    } 
}

// Sources 10,11,14,15,16,17,18,19,20
function Droppable() {
    $("#scrabble td").droppable({
        accept: ".ui-draggable", //work together with draggable
        revert: "invalid", //make sure tile can be placed/dropped 
        drop: function(event, ui) {
            if ($(this).attr('id') == undefined) {
                $(this)[0].id = $(this)[0].id + " dropped"; 
                ui.draggable[0].style.cssText = ""; 
                var img = ui.draggable[0].outerHTML;

                var strID = String($(this)[0].id); // get the id from the table
                var match = strID.match(/(.+)(dropped)/);

                // create tag name for the tiles
                var newTD = '<td class="' + $(this)[0].className + '" id="' + match[2] + '">' + img + '</td>';

                // find the image that matches the tile to get its value
                var getTile = img.match(/tile_space_(\w)/); 
                var scorePiece = ScrabbleTiles[getTile[1]].value;

                //calculate the values for the tiles on the Single Line based on position
                if ($(newTD).hasClass("lTriple")) { 
                    scorePiece = scorePiece + (scorePiece/2);
                    word_score = scorePiece + word_score;
                }
                if ($(newTD).hasClass("regular")) {
                    word_score = scorePiece + word_score;
                }

                $(this)[0].outerHTML = newTD;
                // stop dragging
                ui.draggable[0].outerHTML = "";
                // call the drag and drop function
                Draggable();
                Droppable();
                // remove the tile's place from rack
                removeDragID();
            } else {
                // if a letter exists in the space where another tile was attempted to be dropped, return tile back to rack
                ui.draggable.draggable('option', 'revert', true);
                return;
            }
        },
        // remove id if the letter is dragged to other place from the table cell
        out: function(event, ui) {
        }
    });

    // If user changes mind and wants tile back on the rack
    $("#Tiles td").droppable({
        accept: ".ui-draggable",
        drop: function(event, ui) { 
            var tileID = $("#scrabble").find('td');
            tileID.each(function() {
                if (String($(this)[0].id) === "dropped")
                $(this).removeAttr('id'); 
            });
        },
        out: function(event, ui) {
            $(this).removeAttr('id');
        }
    });
}
// function to remove ID element once dropped in the Single Line (so return works properly), sources 20,21,22
function removeDragID() {
    var tileID = $("#scrabble").find('td');

    // loop through table to find element so we can remove its ID
    tileID.each(function() {
        if ($(this)[0].childElementCount == 0 && $(this)[0].id != "") {
            $(this).removeAttr('id'); 
        }
    });
}
// manually create the table for the letters remaining and update the count, sources 2,3
function updateCount() {
    var remain = "";
    // Add table class for css purposes
    remain += '<table class="rTable">';
    // Create the title of the table
    remain += '<tr><td class="rTile" colspan="7">These Are The Remaining Tiles</td></td>';
    // Create the first row of tiles
    remain += '<tr><td class="rTile">' + "A: " + ScrabbleTiles["A"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "B: " + ScrabbleTiles["B"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "C: " + ScrabbleTiles["C"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "D: " + ScrabbleTiles["D"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "E: " + ScrabbleTiles["E"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "F: " + ScrabbleTiles["F"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "G: " + ScrabbleTiles["G"].number_remaining + '</td></td>';

    // Create the second row of tiles
    remain += '<tr><td class="rTile">' + "H: " + ScrabbleTiles["H"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "I: " + ScrabbleTiles["I"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "J: " + ScrabbleTiles["J"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "K: " + ScrabbleTiles["K"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "L: " + ScrabbleTiles["L"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "M: " + ScrabbleTiles["M"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "N: " + ScrabbleTiles["N"].number_remaining + '</td></td>';

    // Create the third row of tiles
    remain += '<tr><td class="rTile">' + "O: " + ScrabbleTiles["O"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "P: " + ScrabbleTiles["P"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "Q: " + ScrabbleTiles["Q"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "R: " + ScrabbleTiles["R"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "S: " + ScrabbleTiles["S"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "T: " + ScrabbleTiles["T"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "U: " + ScrabbleTiles["U"].number_remaining + '</td>';
    
    //Create the fourth row of tiles
    remain += '<tr><td class="rTile">' + "V: " + ScrabbleTiles["V"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "W: " + ScrabbleTiles["W"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "X: " + ScrabbleTiles["X"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "Y: " + ScrabbleTiles["Y"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "Z: " + ScrabbleTiles["Z"].number_remaining + '</td>';
    remain += '<td class="rTile">' + "_: " + ScrabbleTiles["_"].number_remaining + '</td></td>';
    remain += '<td class="rTile">' + " " + '</td></td>'; //empty tile just for aesthetics and symmetry, could've done different rows but was too wide or long

    remain += '</table>';

    $("#remTiles").html(remain);
}
//**************************************************************************************************** 

// Function to Initialize Rack with Letters, Sources 23,24
function initRack() {
    console.log(Rack);
    Rack = [];
    console.log(Rack);
    var tile = "";
    tile += '<table id="TileRack"><tr>';
    for (var i = 0; i < (7 - temp); i++) { //started attempt to remember the tiles before hitting submit but couldn't get it to work in time
        // Get random tile uisng a JavaScript array
        var index = Math.floor(Math.random() * letters.length);
        // check amount of letters remaining
        while (ScrabbleTiles[letters[index]].number_remaining === 0) {
            index = Math.floor(Math.random() * letters.length);
        }
        // get the image of the tiles
        var linkTiles = "images/Scrabble_Tile_" + letters[index] + ".jpg";
        tile += "<td><img id='drag_tile_" + i + "' class='tile_space_" + letters[index] + "' src='" + linkTiles + "'></img></td>";

        ScrabbleTiles[letters[index]].number_remaining = ScrabbleTiles[letters[index]].number_remaining - 1; 

        //create the index and values for the letters for Rack[]
        Rack.push({
            "letters": letters[index],
            "value": ScrabbleTiles[letters[index]].value
        })
    }
    tile += '</tr></table>';
    //update the score and tiles on the webpage
    $("#scoreID").html(word_score);
    $("#Tiles").html(tile);

    updateCount(); 
}

// Place random tiles on rack and give them the ability to be dragged and dropped, source 3,16,23
function selectTiles() {
    var rackID = $("#scrabble").find('td');
    rackID.each(function() {
        if ($(this)[0].id == "dropped") {
            $(this)[0].innerHTML = "";
            removeDragID();
        }
    });
    for (var i = 0; i < Rack.length; i++) {
        var letter = Rack[i].letters;
    }
    initRack();
    Draggable();
    Droppable();
}

// Restart the game
function bRestart() {
    //set number remaining to original starting amount
    for (var i = 0; i < letters.length; i++) {
        ScrabbleTiles[letters[i]].number_remaining = ScrabbleTiles[letters[i]].original_distribution;
    }
    //reset the score and start up the game
    word_score = 0;
    scrabbleLine();
    initRack();
}

// Function to submit the word and keep track of score values, source 3
function submitButton() {
    var score = word_score;
    $("#scoreID").html(score);
    scrabbleLine();
    return word_score;
}

// Function to put any tiles in the single line of scrabble back to the rack, source 2,3,23
function returnTiles() {
    //similar procedure to the other functions, find each element in table
    var rackID = $("#scrabble").find('td');
    rackID.each(function() {
        if (String($(this)[0].id) === "dropped") {
            $(this).removeAttr('id');
            $(this)[0].firstChild.outerHTML = "";
        }
    });

    //return each tile to the tile rack using the tile images (not just the value)
    var tile = "";
	var x = 0;
    tile += '<table id="TileRack"><tr>';
    rackID = $("#Tiles").find('td');
    for (var i = 0; i < rackID.length; i++) {
        if (i < rackID.length) {
            var index = Rack[x].letters;
            //get the reference to the tiles using their image name and index
            var linkTiles = "images/Scrabble_Tile_" + index + ".jpg";
            tile += "<td><img id='drag_tile_" + i + "' class='tile_space_" + index + "' src='" + linkTiles + "'></img></td>";
            x++;
        } else {
            tile += "<td></td>";
        }
    }
    tile += '</tr></table>';
    //make it visible on the webpage
    $("#Tiles").html(tile);
}