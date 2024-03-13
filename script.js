let tracks=document.getElementsByClassName("track_name");
let audio=document.getElementsByClassName("player");
let tracklist=document.getElementById("Tracklist");
let tracklists = document.getElementsByClassName('Tracklist');
let lists = document.getElementsByClassName('List');
let cgnt=document.getElementById('Cgnt3comm');
let video=document.getElementById('video');
let back=document.getElementById('back');
function PlayAudio(id){
    for (let i=0 ; i<audio.length ;i++){
        if(i==id){
        audio[i].play();
    }
    else{
        audio[i].pause();

    }
 }
}






for(let i=0;i<tracks.length;i++){
    tracks[i].addEventListener('mouseenter',()=> PlayAudio(i))
}

for(let i=0;i<tracks.length;i++){
    tracks[i].addEventListener('mouseleave',()=> StopAudio(i))
}

function tracklistClick(id) {
    for (let i = 0; i < tracklists.length; i++) {
        if (i === id) {
            setTimeout(() => {
                tracklists[i].classList.toggle('open');
            }, 600)
        }
        else {
            tracklists[i].classList.remove('open');
        }
    }
}

for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', () => tracklistClick(i))
}

function StopAudio(id){
    for (let i=0 ; i<audio.length ;i++){
        if(i==id){
        audio[i].pause();
    }

}
}


function OpenVideo(){
    video.classList.toggle('open');
}

function CloseVideo(){
    video.classList.remove('open');
}
  
back.addEventListener('click', CloseVideo)
cgnt.addEventListener('click',OpenVideo);




