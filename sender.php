<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
	$text = $_POST['text'];

	$to = "senior.listik@gmail.com"; 
	$from = $email;
	$subject = "Заявка з сайту";

	
	$msg="
    Ім'я: $name /n
    Пошта: $email /n
    Кількість людей: $number /n
    Дата і час: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

