<?php
session_start();
// database connection
$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "music_app";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
	$output__ = json_encode(
		array(
			'type' => 'error',
			'message' => 'Connection failed:' . mysqli_connect_error() . '!',
		));
	die($output__);
} else {
	$output__ = json_encode(
		array(
			'type' => 'success',
			'message' => 'Successfully connected!',
		));
}
//
if (isset($_POST['upload_music'])) {
	$_SESSION['errors'] = array();
	$artist_name = $_POST['artist_name'];
	if ($artist_name == '') {
		$_SESSION['errors'][] = "Artist Name should not be empty!!!";
	}
	$filename = $_FILES['file']['name'];
	$file = $_FILES['file']['tmp_name'];
	$size = $_FILES['file']['size'];
	$extension = pathinfo($filename, PATHINFO_EXTENSION);
	$arr_filename = explode('.', $filename);
	$music_name = $arr_filename[0];
	$music_name = trim($music_name);
	$filename = $music_name . ".mp3";
	$destination = '../songs/' . $filename;

	echo $music_name;
	// get the file extension
	if (!in_array($extension, ['mp3'])) {
		$_SESSION['errors'][] = "You file extension must be .mp3";
	}
	if ($_FILES['file']['size'] > 104580000) {
		$_SESSION['errors'][] = "File too large!";
	}
	if (count($_SESSION['errors']) < 1) {
		$upload_query__ = "INSERT INTO `musics`(`song_name`, `artist_name`, `file_name`) VALUES ";
		$upload_query__ .= " ('{$music_name}','{$artist_name}','{$filename}')";
		if (mysqli_query($conn, $upload_query__)) {
			move_uploaded_file($file, $destination);
			$_SESSION['success'] = "{$music_name} Uploaded to server Successfully !";
			header("location:index.php");
		} else {
			$_SESSION['errors'][] = "Error" . mysqli_error($conn);
			header("location:index.php");
		}
	} else {
		header("location:index.php");
	}

}
?>