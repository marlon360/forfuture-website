<?php
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

        echo json_encode($result);

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
                } catch (Exception $e) {
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