<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$number = $_POST['number'];
$date = $_POST['date'];
$message = $_POST['details'];

$email_from = 'rtprojects.24@gmail.com';
$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "User Number: $number.\n".
                "User Deadline: $date.\n".
                "User Details: $message .\n";

$to = 'shaikalthaf1768@gmail.com';
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);
header("Location: 3dprint.html");


?>
