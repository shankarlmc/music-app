<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en" <?php if (isset($_COOKIE['theme'])) {echo 'data-theme="' . $_COOKIE['theme'] . '"';} else {echo 'data-theme="light"';}?>>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="fontawesom.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Music Player | Admin</title>
</head>
<body>
    <main class="music_uploader_main">
        <div class="uploader_header">
            <a href="#" class="button">
                <i class="fas fa-bars"></i>
            </a>
            <p>Upload Music</p>
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

        <form action="./upload-file.php" class="main_uploader_form" enctype="multipart/form-data" method="POST">
        <?php
if (isset($_SESSION['success'])) {
	echo '<div class="message success">' . $_SESSION['success'] . '</div>';
	unset($_SESSION['success']);
}
if (isset($_SESSION['errors'])) {
	if (count($_SESSION['errors']) > 0) {
		foreach ($_SESSION['errors'] as $err) {
			echo '<div class="message danger">' . $err . '</div>';
		}
	}
	unset($_SESSION['errors']);
}
?>
            <div class="form-row">
                <label for="name">Artist Name</label>
                <input type="text" name="artist_name" class="form_imput" placeholder="Artist Name..." required>
            </div>
            <div class="form-row">
                <label for="name">Select Music</label>
                <br>
                <input type="file" name="file" class="form_imput" required>
            </div>
            <input type="submit" name="upload_music" id="upload_music" value="Upload Music">
        </form>

    </main>
    <script src="jquery-3.5.1.min.js"></script>
    <script src="admin-script.js"></script>
</body>
</html>