<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');

		// *** SMTP *** //

		 // require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		 // const HOST = '';
		 // const LOGIN = '';
		 // const PASS = '';
		 // const PORT = '';

		// *** /SMTP *** //
   
    const SENDER = 'tarasraihel@gmail.com';
    const CATCHER = 'tarassraihel@gmail.com';
    const SUBJECT = 'Заявка з сайту';
    const CHARSET = 'UTF-8';
    