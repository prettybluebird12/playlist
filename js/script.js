/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sweet Caroline", "Belle", "Money","Sicko Mode"];
var imageLinks =["https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/75449/75449_v9_ba.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DNeil%2BDiamond&h=1440&w=1080&tbnid=SVlxWUfa-caHHM:&q=neil+diamond&tbnh=186&tbnw=139&usg=AI4_-kT7fqylTQ1D_cJrhHZpYoxJ2s9Mew&vet=1&docid=pOSoVz6hC_A44M&itg=1&sa=X&sqi=2&pjf=1&ved=2ahUKEwjzoomlre7fAhVaeysKHZH-DwEQ_B0wIHoECAEQBg","https://cdn-03.independent.ie/incoming/article30941643.ece/6547c/AUTOCROP/w620/beauty%20and%20the%20beast%20belle.jpg","https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.complex.com%2Fcomplex%2Fimages%2Fc_limit%2Cw_680%2Ffl_lossy%2Cpg_1%2Cq_auto%2Fdgqxp701db16qamnrieu%2Fcardi&imgrefurl=https%3A%2F%2Fwww.complex.com%2Fmusic%2F2018%2F04%2Fcardi-b-struggling-with-fame&docid=JVa9yPije0MafM&tbnid=CClC1V87bbZ5cM%3A&vet=10ahUKEwjkioLYre7fAhWDVt8KHRsqB3gQMwhtKAUwBQ..i&w=680&h=440&hl=en&authuser=0&bih=641&biw=1366&q=cardi%20b&ved=0ahUKEwjkioLYre7fAhWDVt8KHRsqB3gQMwhtKAUwBQ&iact=mrc&uact=8","https://www.google.com/imgres?imgurl=https%3A%2F%2Fs1.r29static.com%2F%2Fbin%2Fentry%2F8ca%2F720x864%2C85%2F1855877%2Fimage.jpg&imgrefurl=https%3A%2F%2Fwww.refinery29.com%2Fen-us%2F2017%2F09%2F173702%2Ftravis-scott-kanye-west-relationship&docid=IEyUn_vwAjpMGM&tbnid=IZtFy08D-4PR0M%3A&vet=10ahUKEwi07Pnnre7fAhUSTt8KHW9oAWoQMwh3KAowCg..i&w=720&h=864&hl=en&authuser=0&bih=641&biw=1366&q=travis%20scott&ved=0ahUKEwi07Pnnre7fAhUSTt8KHW9oAWoQMwh3KAowCg&iact=mrc&uact=8"]
var artists = ["Neil Diamond", "Emma Watson", "Cardi B", "Travis Scott"]
var songLength = [205,336,209,315]
var songLink = ["https://www.youtube.com/watch?v=2UYvF8jsx4Y", "https://www.youtube.com/watch?v=egQbaDRMxGI", "https://www.youtube.com/watch?v=zUOh09GoQgk", "https://www.youtube.com/watch?v=6ONRf7h3Mdk"]
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
imageLinks.forEach(function(img){
$("#images").append("<img src=" + img + ">");
});
songs.forEach(function(song){
$("#songs").append("<p>" + song + "</p>")
});
artists.forEach(function(artist){
   $("#artists").append("<p>" + artist + "</p>"); 
});
songLength.forEach(function(length){
    $("#lengths").append("<p>" + length + "</p>");
});
songLink.forEach(function(links){
    $("#links").append("<a href=" + links + ">Listen</a>");
});
}

function emptySongInfo(){
    // Use jQuery to empty all of the remaining divs
$("#add").click(function(){
    var songlist= $("#songs").val();
songs.push(songlist);
$("#songs").empty();
songs.forEach(function(songname){
   $("#songs").append("<p>" + songname + "</p>"); 
});

});

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
