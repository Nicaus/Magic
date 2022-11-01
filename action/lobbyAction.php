<?php
    require_once("action/CommonAction.php");

    class lobbyAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = []; 
            $data["key"] = $_SESSION["key"];
            
            if (isset($_GET['quitter'])){
                
                $result = parent::callAPI("signout", $data);
                var_dump($result); exit; 

                if($result == "SIGNED_OUT"){
                    $key = $result->key;
                    $_SESSION["key"] = $key;
                    header("Location: index.php");
                }
                elseif($result == "INVALID_KEY"){

                }
            }
            return compact("data");
        }

        public function signout(){
            
        }
    }