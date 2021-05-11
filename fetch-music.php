<?php
// database connection
$connect = new PDO("mysql:host=localhost;dbname=music_app", "root", "");

if (isset($_POST["songs"])) {
	$sql = "SELECT * from `musics` order by s_id desc";
	$statement = $connect->prepare($sql);
	$statement->execute();
	$data = $statement->fetchAll();
	foreach ($data as $row) {
		$output[] = array(
			'music' => $row["song_name"],
			'artist' => $row["artist_name"],
			'playlist' => $row["playlist_name"],
			'file' => $row["file_name"],
			'image' => $row["image"],
		);
	}
	echo json_encode($output);
}
?>