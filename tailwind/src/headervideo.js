var tag = document.createElement('script');
    
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var siteid = "none";
function startClick(id) {

    console.log("step1");

    siteid = id;
    player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
        playerVars: {
        'playsinline': 1,
        },
    events: {
        'onReady': startFunction,
        'onStateChange': onPlayerStateChange
    }
    });

    
}            

function startFunction() {  
    console.log("step2");  
    player.mute(); player.seekTo(1, true);  
    console.log(siteid);
    siteid.style.display = "block";   
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
   setTimeout(unMuteVideo, 1000);

    
  }
}

function unMuteVideo() { player.unMute();}
function stopClick() { stopVideo() }

function stopVideo() { 
    siteid.style.display = "none"; 
    player.destroy();
    player.stopVideo();
    console.log(siteid);
     
}