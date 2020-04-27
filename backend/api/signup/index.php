<?php

error_reporting(E_ALL);
ini_set('display_errors', 'on');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception as MailException;

    require_once '../../vendor/autoload.php';

    header("Content-Type: application/json; charset=UTF-8");

    $dotenv = Dotenv\Dotenv::createImmutable('../../');
    $dotenv->load();

    $dsn = 'mysql:host='.getenv('DB_HOST').';dbname='.getenv('DB_NAME').';charset=utf8';
    $usr = getenv('DB_USER');
    $pwd = getenv('DB_PWD');

    $pdo = new \FaaPz\PDO\Database($dsn, $usr, $pwd);

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
        // SELECT * FROM users WHERE id = ?
        $selectStatement = $pdo->select()->from('Signups');

        $stmt = $selectStatement->execute();
        $data = $stmt->fetchAll();

        $result["success"] = true;
        $result["signups"] = $data;

        echo json_encode($result, JSON_UNESCAPED_UNICODE);

    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        try {
            // Takes raw data from the request
            $json = file_get_contents('php://input');

            // Converts it into a PHP object
            $post_data = json_decode($json);

            $keys = ["firstname", "lastname", "email", "age", "message"];

            $success = true;
            foreach ($keys as $value) {
                if (!isset($post_data->{$value})) {
                    $success = false;
                }
            }

            if ($success) {
                try {
                    $insertStatement = $pdo->insert(array(
                        "firstname" => $post_data->firstname,
                        "lastname" => $post_data->lastname,
                        "email" => $post_data->email,
                        "age" => $post_data->age,
                        "message" => $post_data->message
                    ))
                    ->into("Signups");
                    $insertId = $insertStatement->execute(false);
                    $result["success"] = true;
                    $result["message"] = $insertId;

                    // send mail

                    $mail = new PHPMailer(true);

                    //Server settings
                    $mail->CharSet = PHPMailer::CHARSET_UTF8;
                    $mail->SetLanguage('de');
                    $mail->isSMTP();                                            // Send using SMTP
                    $mail->Host       = getenv('MAIL_HOST');                    // Set the SMTP server to send through
                    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                    $mail->Username   = getenv('MAIL_USER');                     // SMTP username
                    $mail->Password   = getenv('MAIL_PWD');                               // SMTP password
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                    $mail->Port       = getenv('MAIL_PORT');                                  // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
                
                    //Recipients
                    $mail->setFrom(getenv('MAIL_ADDRESS'), 'ForFuture Info');
                    $mail->addAddress(getenv('MAIL_ADDRESS'), 'ForFuture Info');     // Add a recipient
                        
                    // Content
                    $mail->isHTML(true); // Set email format to HTML
                    $mail->Subject = 'Neue Workshop Anmeldung ('. html_entity_decode($post_data->firstname).' '.html_entity_decode($post_data->lastname).')';

                    $mail_content =  'Vorname: '.html_entity_decode($post_data->firstname).'<br/>';
                    $mail_content .= 'Nachname: '.html_entity_decode($post_data->lastname).'<br/>';
                    $mail_content .= 'Alter: '.html_entity_decode($post_data->age).'<br/>';
                    $mail_content .= 'Nachricht: '.html_entity_decode($post_data->message).'<br/>';
                    $mail_content .= 'E-Mail: '.html_entity_decode($post_data->email).'<br/>';
                    $mail->Body = $mail_content;

                    $mail->send();

                } catch (MailException $e) {
                    $result["debug"] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                }catch (Exception $e) {
                    $result["success"] = false;
                    $result["message"] = "Du hast dich bereits angemeldet.";
                    $result["debug"] = $e->getMessage();
                }
            } else {
                $result["success"] = false;
                $result["message"] = "Es wurden nicht alle erforderlichen Daten übermittelt.";
            }
            echo json_encode($result);
        } catch (Exception $e) {
            $result["success"] = false;
            $result["message"] = "Es ist ein Fehler aufgetreten.";
            $result["debug"] = $e->getMessage();
            echo json_encode($result);
        }
    }

?>