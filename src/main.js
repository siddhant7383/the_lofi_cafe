const chatBox = document.getElementById("chat-box");
const chatToggle = document.getElementById("chat-toggle");
const backGround = document.getElementById("bg");
const musicBox = document.getElementById("music-box");
const musicToggle = document.getElementById("music-toggle");

var chatBoxHidden = true;
var musicBoxHidden = true;

backGround.onclick = hideTabs;

window.onresize = function(){
    console.log(window.innerHeight / window.innerWidth);
    if(window.innerHeight / window.innerWidth > 1){
        
        return;
    }
    
}

function toggleChatBox(){
    if(chatBoxHidden){
        showChatBox();
        return;
    }
    hideChatBox();
}

function hideChatBox(){
    chatBox.style.transform = "translateY(-90%)";
    chatToggle.innerHTML = "Open";
    chatBoxHidden = true;
}

function showChatBox(){
    chatBox.style.transform = "translateY(0%)";
    chatToggle.innerHTML = "Close";
    chatBoxHidden = false;
}

function toggleMusicBox(){
    if(musicBoxHidden){
        showMusicBox();
        return;
    }
    hideMusicBox();
}

function hideMusicBox(){
    musicBox.style.transform = "translateY(-80%)";
    // musicBox.style.width = "40%";
    musicToggle.innerHTML = "Open";
    musicBoxHidden = true;
}

function showMusicBox(){
    musicBox.style.transform = "translateY(0%)";
    // musicBox.style.width = "50%";
    musicToggle.innerHTML = "Close";
    musicBoxHidden = false;
}

function hideTabs(){
    hideMusicBox();
    hideChatBox();
}