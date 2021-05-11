// set variables
var audio , playbtn ,listItemPlay, title , poster , artists , slider , seeking=false , seekto, currenttimetext , durationtimetext , playlist_status , dir , playlist , ext , agent , playlists_artists , repeat , random;
// setting the default songs for first time
var songs = 'songs';
var playlist = ["Cartoon - On & On.mp3"];
var title = ["Cartoon - On & On"];
var poster = ["images/music.jpg"];
var artists = ['Shankar'];

// fetch music on page load
fetch_musics();
// directory for songs
dir = "songs/";

// at first music index is 0
playlist_index = 0;


playbtn = document.getElementById("playpausebtn");
nextbtn = document.getElementById("nextbtn");
prevbtn = document.getElementById("prevbtn");
slider = document.getElementById("slider");
currenttimetext = document.getElementById("currenttimetext");
durationtimetext = document.getElementById("durationtimetext");
playlist_status = document.getElementById("playlist_status");
playlists_artists = document.getElementById("playlist_artist");
repeat = document.getElementById("repeat");
randomSong = document.getElementById("random");

audio = new Audio();
audio.src = dir+playlist[0];
audio.loop = false;
// console.log(audio.duration);
playlist_status.innerHTML = title[playlist_index];
playlists_artists.innerHTML = artists[playlist_index];

$(playbtn).click(playPause);
$(nextbtn).click(nextSong);
$(prevbtn).click(prevSong);

$(slider).on('mousedown', function(event){
    seeking=true;
    seek(event);
});
$(slider).on('mousemove', function(event){
    seek(event);
});
$(slider).on('mouseup', function(){
    seeking=false;
});
$(audio).on('timeupdate', function(){
    seektimeupdate();
});

$(audio).on("ended",function(){
    switchTrack();
});

$(repeat).on("click", loop);

$(randomSong).on("click", random);

// functions

// fetch all the musics from db
function fetch_musics(){
    $.ajax({
        url:'fetch-music.php',
        method:"POST",
        data:{songs:songs},
        dataType:"json",
        success:function(data){
            var obj = JSON.parse(JSON.stringify(data));
            
            for ( var i in obj){
                playlist.push(obj[i].file);
                title.push(obj[i].music);
                poster.push(obj[i].image);
                artists.push(obj[i].artist);
            }
            add_to_list();
        }
    });
}
// add all the music to the music modal 
function add_to_list(){
    for(var count = 0; count < title.length; count++){
        html = '';
        html += '<li class="listItemPlay " onclick="play_music('+count+')" data-item="'+count+'">';
        html += '<div class="row">';
        html += '<span>'+title[count]+'</span>';
        html += '<p>'+artists[count]+'</p>';
        html += '</div>';
        html += '<span class="currentPlaying'+count+' button button-sm"><i class="fas fa-play"></i><i class="fas fa-pause"></i></span>';
        html += '</li>';
        $('#my_musics').append(html);
    }
    
} 

// play the music from music list
function play_music(data){
    playlist_index = data;
    if($('.music-list ul li').eq(playlist_index).hasClass('playing')) {
        for(var count = 0; count < title.length; count++){
            $('.currentPlaying'+count).removeClass('active');
            $('.listItemPlay').removeClass('playing');
            $('.playpause').removeClass('active');
        }
        audio.pause();
        $(".playpause").removeClass("active");
        $(".image").removeClass("active");
    } else {
        $('.listItemPlay').removeClass('playing');
        for(var count = 0; count < title.length; count++){
            $('.currentPlaying'+count).removeClass('active');
        }
        $('.music-list ul li').eq(playlist_index).addClass('playing');
        $('.playpause').addClass('active');
        $('.currentPlaying'+playlist_index).addClass('active');
        $("#image").attr("src",poster[playlist_index]);
        $(".image").addClass("active");
        playlist_status.innerHTML = title[playlist_index];
        playlist_artist.innerHTML = artists[playlist_index];

        audio.src = dir+playlist[playlist_index];
        audio.play();
        
    }
}
// music details
function fetchMusicDetail(){
    $("#image").attr("src",poster[playlist_index]);
    playlist_status.innerHTML = title[playlist_index];
    playlist_artist.innerHTML = artists[playlist_index];

    audio.src = dir+playlist[playlist_index];
    audio.play();
}

// generate random number
function getRandomNumber(min , max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
// play songs randomly
function random(){
    let randomIndex = getRandomNumber(0 , playlist.length-1);
    playlist_index = randomIndex;
    fetchMusicDetail();
    $(".playpause").addClass("active");
    $("#random").addClass("active");
    $(".image").addClass("active");
}
// set loop active or inactive
function loop(){
    if(audio.loop){
        audio.loop = false;
        $(".loop").removeClass("active");
    }else{
        audio.loop = true;
        $(".loop").addClass("active");
    }
}
// play the next song
function nextSong(){
    $(".playpause").addClass("active");
    $(".image").addClass("active");
    if($('.listItemPlay').hasClass('playing')){
        $('.listItemPlay').removeClass('playing')
    }
    playlist_index++;
    if(playlist_index > playlist.length - 1){
        playlist_index = 0;
    }
    $('.music-list ul li').eq(playlist_index).addClass('playing');
    fetchMusicDetail();
}
// play the previous song
function prevSong(){
    $(".playpause").addClass("active");
    $(".image").addClass("active");
    if($('.listItemPlay').hasClass('playing')){
        $('.listItemPlay').removeClass('playing')
    }
    playlist_index--;
    if(playlist_index < 0){
        playlist_index = playlist.length - 1;
    }
    $('.music-list ul li').eq(playlist_index).addClass('playing');
    fetchMusicDetail();
}

// play pause funcction
function playPause(){
    if(audio.paused){
        audio.play();
        $(".playpause").addClass("active");
        $(".image").addClass("active");
        if($('.listItemPlay').hasClass('playing')){
            $('.listItemPlay').removeClass('playing')
        }
        $('.music-list ul li').eq(playlist_index).addClass('playing');
        // console.log(playlist_index)
    }else{
        audio.pause();
        $('.music-list ul li').eq(playlist_index).removeClass('playing');
        $(".playpause").removeClass("active");
        $(".image").removeClass("active");
    }
}
// switch the music
function switchTrack(){
    $('.listItemPlay').removeClass('playing');
    if(playlist_index == (playlist.length - 1)){
        playlist_index = 0;
        $('.music-list ul li').eq(playlist_index).addClass('playing');
    }else{
        playlist_index++;
        $('.music-list ul li').eq(playlist_index).addClass('playing');
    }
    fetchMusicDetail();
}
// event for seektime
function seek(event){
    if(audio.duration == 0){
        null
    }else{
        if(seeking){
            slider.value = event.clientX - slider.offsetLeft;
            seekto = audio.duration * (slider.value / 100);
            audio.currentTime = seekto;
        }
    }
}

// update the seeking time of audio
function seektimeupdate(){
    if(audio.duration){
        var nt = audio.currentTime * (100 / audio.duration);
        slider.value = nt;
        var curmins = Math.floor(audio.currentTime / 60); 
        var cursecs = Math.floor(audio.currentTime - curmins * 60); 
        var durmins = Math.floor(audio.duration / 60); 
        var dursecs = Math.floor(audio.duration - durmins * 60); 
        if(cursecs < 10){ cursecs = "0"+cursecs; }
        if(dursecs < 10){ dursecs = "0"+dursecs; }
        if(curmins < 10){ curmins = "0"+curmins; }
        if(durmins < 10){ durmins = "0"+durmins; }
        currenttimetext.innerHTML = curmins+":"+cursecs;
        durationtimetext.innerHTML = durmins+":"+dursecs;
    }else{
        currenttimetext.innerHTML = "00"+":"+"00";
        durationtimetext.innerHTML = "00"+":"+"00";
    }
}


$('#themeChanger').on('click', function(){
    var currTheme = $(document.documentElement).attr('data-theme');
    if(currTheme == 'light'){
        $('#themeIcon').toggleClass('fa-sun');
        update_theme('dark');
        $(document.documentElement).attr('data-theme', 'dark');
    } else if (currTheme == 'dark'){
        update_theme('light');
        $('#themeIcon').toggleClass('fa-moon');
        $(document.documentElement).attr('data-theme', 'light');
    }
});

let modalBtn = document.querySelector('#musicVisiblity');
let modalCloseBtn = document.querySelector('#closeBtn');
var modalDiv = document.querySelector('.music-list');
// show on click
$(modalBtn).on('click',function(){
    $(modalDiv).slideDown(700);
    $('.music-list').addClass('active');
})
// close modal on click 
$(modalCloseBtn).on('click',function(){
    modalDiv.classList.remove('active');
    $(modalDiv).slideUp(1000);
})

function update_theme(type){
    $.ajax({
        url:'update_theme.php',
        method:"POST",
        data:{theme_type:type},
        success:function(){
            console.log("your current theme is "+type);
        }
    });
}
// alert(screen.width)