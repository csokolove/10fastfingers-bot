/* 10 FAST FINGERS BOT
Copy and paste the code below not commented out into the console in your browser tab (Ctrl + Shift + J on Chrome). While on the typing page, do NOT type anything. After pasting 
the below code into the console, press "Enter", and let it work!*/
 
var word_idx = 0;
var interval_per_word = 250; // in milliseconds (the smaller the number, the faster it types. Cannot be 0, as that makes it undefined)
function speedtype(){
    if(word_idx<words.length){
        $('#inputfield').val(words[word_idx] + ' ');
        var keyup = jQuery.Event('keyup');
        keyup.which = 32;
        $('#inputfield').trigger(keyup);
        word_idx++;
        setTimeout('speedtype()', interval_per_word);
    }
}
setTimeout('speedtype()', interval_per_word);
 
// Created by Pixepel#9094
