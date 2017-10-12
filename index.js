function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
<script>
var audio = new Audio("XXX x SKIMASK.mp3" ) ;

audio.oncanplaythrough = function(){
audio.play(XXX x SKIMASK.mp3);
}

audio.loop = true;

audio.onended = function(XXX x SKIMASK.mp3){
audio.play(XXX x SKIMASK.mp3);
}

</script>

<input type="image" src="http://button.png" onclick="audio.play()">
