

var sounds = ['sounds/crash.mp3','sounds/kick-bass.mp3','sounds/snare.mp3','sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3'];


console.log()
function plays(e){
    if(e.target.classList.contains('w')){
        var audio = new Audio(sounds[0]);
        console.log(e.keyCode)
    }else if(e.target.classList.contains('a')){
        var audio = new Audio(sounds[1]);
    }
    else if(e.target.classList.contains('s')){
        var audio = new Audio(sounds[2]);
    }
    else if(e.target.classList.contains('d')){
        var audio = new Audio(sounds[3]);
    }
    else if(e.target.classList.contains('j')){
        var audio = new Audio(sounds[4]);
    }
    else if(e.target.classList.contains('k')){
        var audio = new Audio(sounds[5]);
    }
    
    else if(e.target.classList.contains('l')){
        var audio = new Audio(sounds[6]);
    }
    
    
    audio.play();
}
for(i=0;i<=sounds.length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',plays);
    document.querySelectorAll('.drum')[i].addEventListener('keydown',kplays)
}

function kplays(e){
    if(e.keyCode === 87){
        var audio = new Audio(sounds[0]);
        console.log(e.keyCode)
    
    }else if(e.keyCode === 65){
        var audio = new Audio(sounds[1]);
    }
    else if(e.keyCode === 83){
        var audio = new Audio(sounds[2]);
    }
    else if(e.keyCode === 68){
        var audio = new Audio(sounds[3]);
    }
    else if(e.keyCode === 74){
        var audio = new Audio(sounds[4]);
    }
    else if(e.keyCode === 75){
        var audio = new Audio(sounds[5]);
    }
    
    else if(e.keyCode === 76){
        var audio = new Audio(sounds[6]);
    }
    audio.play();
}