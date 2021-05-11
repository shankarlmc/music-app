<?php
if (isset($_POST['theme_type'])) {
	$theme = $_POST['theme_type'];
	setcookie('theme', $theme, time() + (30 * 60 * 60 * 24), '/');
}
?>