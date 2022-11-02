<?php
    require_once("action/CommonAction.php");

    class lobbyAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = []; 
            $data["key"] = $_SESSION["key"];
            if (isset($_POST['pratique'])){
                $result = parent::callAPI("auto-match", $data);

                if ($result == "JOINED_TRAINING"){
                    $key = $result->key;
                    $_SESSION["key"] = $key;
                    $type = $result->type;
                    $_SESSION["type"] = $type;

                    header("Location: board.php");
                }
            }
            if (isset($_POST['joueur'])){
                $result = parent::callAPI("games", $data);

                if ($result == "CREATED_PVP" || $result == "JOINED_PVP"){
                    $key = $result->key;
                    $_SESSION["key"] = $key;
                    $type = $result->type;
                    $_SESSION["type"] = $type;
                    
                    header("Location: board.php");
                }
            }
            if (isset($_POST['quit'])){
                
                $result = parent::callAPI("signout", $data);
                // var_dump($result); exit; 

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