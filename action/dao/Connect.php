<?php
    require_once("constants.php");

    class Connect {
        private static $connection = null;

        public static function getConnection() {
            if (empty(Connect::$connection)) {
                Connect::$connection = new PDO(DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
                Connect::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                Connect::$connection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            }

            return Connect::$connection;
        }
    }