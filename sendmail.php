<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('pizza_mania@kuku.com', 'Мой проект');
$mail->addAddress('senior.listik@gmail.com');
$mail->Subject = 'Приветик! Хочешь пиццы?)';

$body = '<h1>Встречайте супер письмо!</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Е-mail:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['number']))){
    $body.='<p><strong>Количество людей:</strong> '.$_POST['number'].'</p>';
}
if(trim(!empty($_POST['text']))){
    $body.='<p><strong>Дата и время:</strong> '.$_POST['text'].'</p>';
}

$mail->Body = $body;

if(!$mail->send()) {
    $message = 'Oшибкa';
}else{
    $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>