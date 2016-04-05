var main = function() {


  $('.myman').box2d({'shape':'circle','density':1.5, 'restitution':0.8, 'friction':.1, 'y-velocity': 30});
  $('.notmyman').box2d({'shape':'circle','density':0, 'restitution':1, 'friction':.1, 'y-velocity': 50});
  
  var audio = document.getElementById("audio1");
  audio.addEventListener('ended', function() {
  	this.currentTime = 0;
  	this.play();
  }, false);
    
    
  audio.play();  
  
  $("#volume").slider({
  min: 0,
  max: 100,
  value: 0,
  range: "min",
  animate: true,
  slide: function(event, ui) {
    setVolume((ui.value) / 100);
  }
});

var myMedia = document.createElement('audio');
$('#player').append(myMedia);
myMedia.id = "myMedia";
playAudio('http://iviewsource.com/exercises/audioslider/audio/ViewSource', 0);

function playAudio(fileName, myVolume) {
  var mediaExt = (myMedia.canPlayType('audio/mp3')) ? '.mp3' :
    (myMedia.canPlayType('audio/ogg')) ? '.ogg' :
    '';
  if (mediaExt) {
    myMedia.src = fileName + mediaExt;
    myMedia.setAttribute('loop', 'loop');
    setVolume(myVolume);
    myMedia.play();
  }
}

function setVolume(myVolume) {
  var myMedia = document.getElementById('myMedia');
  myMedia.volume = myVolume;
  
}
  
    /* $('.myman').click(function() {
	    audio.play();
	    });
     */

}

$(document).ready(main);