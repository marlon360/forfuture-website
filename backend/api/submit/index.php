<?php

function array_to_csv_download($array, $filename = "export.csv", $delimiter=";") {
    // open raw memory as file so no temp files needed, you might run out of memory though
    $f = fopen('php://memory', 'w');
	fputs($f, $bom =( chr(0xEF) . chr(0xBB) . chr(0xBF) ));
	fputcsv($f, array_keys($array[0]), $delimiter); 
    // loop over the input array
    foreach ($array as $line) { 
        // generate csv lines from the inner arrays
        fputcsv($f, $line, $delimiter); 
    }
    // reset the file pointer to the start of the file
    fseek($f, 0);
    // tell the browser it's going to be a csv file
    header('Content-Type: application/csv');
    // tell the browser we want to save it instead of displaying it
    header('Content-Disposition: attachment; filename="'.$filename.'";');
    // make php send the generated csv lines to the browser
    fpassthru($f);
}

error_reporting(E_ALL);
ini_set('display_errors', 'on');

    require_once '../../vendor/autoload.php';

    header("Content-Type: application/json; charset=UTF-8");

    $dotenv = Dotenv\Dotenv::createImmutable('../../');
    $dotenv->load();

    $dsn = 'mysql:host='.getenv('DB_HOST').';dbname='.getenv('DB_NAME').';charset=utf8mb4';
    $usr = getenv('DB_USER');
    $pwd = getenv('DB_PWD');

    $pdo = new \FaaPz\PDO\Database($dsn, $usr, $pwd);

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
        // SELECT * FROM users WHERE id = ?
        $selectStatement = $pdo->select()->from('Submissions');

        $stmt = $selectStatement->execute();
        $data = $stmt->fetchAll();

        $result["success"] = true;
        $result["submissions"] = $data;

		if (isset($_GET["csv"])) {
			array_to_csv_download($data);
		} else {
			echo json_encode($result, JSON_UNESCAPED_UNICODE);
		}
        

    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        try {
            // Takes raw data from the request
            $json = file_get_contents('php://input');

            // Converts it into a PHP object
            $post_data = json_decode($json);

            $requiredkeys = ["age", "sex", "future", "source"];

            $success = true;
            foreach ($requiredkeys as $value) {
                if (!isset($post_data->{$value})) {
                    $success = false;
                }
            }

            $keys = ["age", "sex", "future", "democracy", "money", "success", "education", "health", "environment", "family", "futurelist", "changefuture", "climatechange", "sustainability", "sustainabilityscale", "nosustainability", "sustainabilityeveryday", "sustainabilityactions", "nosustainabilitymotivation", "sustainabilitymotivation", "source"];

            $insert_arr = array();
            foreach ($keys as $key) {
                if (isset($post_data->{$key})) {
                    if (is_array($post_data->{$key})) {
                        $insert_arr[$key] = join(", ",$post_data->{$key});
                    } else {
                        $insert_arr[$key] = $post_data->{$key};
                    }
                }
            }

            if ($success) {
                try {
                    $insertStatement = $pdo->insert($insert_arr)
                    ->into("Submissions");
                    $insertId = $insertStatement->execute(false);
                    $result["success"] = true;
                    $result["message"] = $insertId;
                    $result["workshop"] = true;

                } catch (Exception $e) {
                    $result["success"] = false;
                    $result["message"] = "Es ist ein Fehler aufgetreten.";
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