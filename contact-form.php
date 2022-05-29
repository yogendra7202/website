<?php
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phno=$_POST['phno'];
	$message=$_POST['message'];

	$email_from = 'yogendrasingh0980@gmail.com';

	$email_subject = 'New Contact Message';

	$email_body = "Name : $name.\n".
					"Email : $email.\n".
					"Mobile no : $phno.\n".
					"Message : $message.\n";

	$to = "yogendrasingh7202@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers = "Replt-To : $email \r\n";

	mail($to,$email_subject,$email_body,$headers);

	header("Location : new.html";)
?>