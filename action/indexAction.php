<?php
    require_once("action/CommonAction.php");

    class IndexAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = []; 

            if (!empty($_POST["user"])){

                $data["username"] = $_POST["user"];
                $data["password"] = $_POST["pwd"];
             
                $result = parent::callAPI("signin", $data);
                
                if ($result == "INVALID_USERNAME_PASSWORD") { 
                    // err
                    echo $result;
                } else {  
                    // Pour voir les informations retournées : var_dump($result);exit; 
                    // var_dump($result); exit; 
                    $key = $result->key;
                    $_SESSION["key"] = $key;
                    echo $key;
                    header("Location: lobby.php");
                }
            }
            return compact("data");
        }
    }