<!DOCTYPE html>
<html lang="en" <?php if (isset($_COOKIE['theme'])) {echo 'data-theme="' . $_COOKIE['theme'] . '"';} else {echo 'data-theme="light"';}?>>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="copyright" content="Shankar Lamichhane" />
    <meta name="author" content="Shankar Lamichhane" />
    <meta name="contact" content="shankarlmc012@gmail.com" />
    <meta name="description" content="Music player using jquery, PHP, Ajax">
    <link rel="canonical" href="https://shankarlamichhane.com.np/">
    <script src="fontawesom.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Music Player Using jquery, Php, Ajax</title>
</head>
<body>
    <main class="music-app">
        <div class="app-header">
            <a href="#" id="musicVisiblity" class="button">
                <i class="fas fa-bars"></i>
            </a>
            <p>Now Playing</p>
            <a href="#" class="button" id="themeChanger">
            <?php
if (isset($_COOKIE['theme'])) {
	if ($_COOKIE['theme'] == 'light') {
		echo '<i class="fas fa-moon" id="themeIcon"></i>';
	} else if ($_COOKIE['theme'] == 'dark') {
		echo '<i class="fas fa-sun" id="themeIcon"></i>';
	}
} else {
	echo '<i class="fas fa-moon" id="themeIcon"></i>';
}
?>
            </a>
        </div>
        <img src="images/music.jpg" alt="music-image" id="image" class="image">
        <div class="music-details">
            <marquee behaviour="scroll" scrollamount="4" direction="left" width="50%"><h1 id="playlist_status"></h1></marquee>
            <p id="playlist_artist"></p>
        </div>
        <div class="music-duration">
            <div class="music-duration-time">
                <span id="currenttimetext" class="left">00:00</span>
                <span id="durationtimetext" class="right">00:00</span>
            </div>
            <div class="music-duration-bar">
                <input type="range" name="" id="slider" class="slider" min="0" max="100" value="0" step="1">
            </div>
        </div>
        <ul class="buttons">
            <span id="random" class="shuffle button button-sm">
                <i class="fas fa-random fa-sm"></i>
            </span>
            <span id="prevbtn" class="prev button button-md">
                <i class="fas fa-step-backward"></i>
            </span>
            <span id="playpausebtn" class="playpause button button-lg">
                <i class="fas fa-play fa-lg"></i>
                <i class="fas fa-pause fa-lg"></i>
            </span>
            <span id="nextbtn" class="next button button-md">
                <i class="fas fa-step-forward"></i>
            </span>
            <span id="repeat" class="loop button button-sm">
                <i class="fas fa-redo fa-sm"></i>
            </span>
        </ul>
        <div class="bar"></div>
        <div class="music-list">
            <div class="bar-header"></div>
            <div class="list-header">
                <div class="row">
                    <i class="fas fa-list"></i>
                    <span>Music List</span>
                </div>
                <span class="button button-sm" id="closeBtn"><i class="fas fa-times"></i></span>
            </div>
            <ul id="my_musics"></ul>
        </div>
    </main>
    <script src="jquery-3.5.1.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
<!-- Created By: Shankar Lamichhane -->
<!-- Visit My site: https://shankarlamichhane.com.np/; -->
<!-- facebook: https://facebook.com/shankarlmc012; -->