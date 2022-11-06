<?php
    require_once("action/CommonAction.php");

    class GameAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = [];
            $data["key"] = $_SESSION["key"];
            $retour = $_SESSION["success"];
            echo $retour;

            // if (isset($_POST['pratique'])) {
                $result = parent::callAPI("games/state", $data);

                var_dump($result); exit;

                if ($result == "WAITING") { 
                    // err
                    echo $result;
                } elseif ($result == "LAST_GAME_WON") {  
                    // Pour voir les informations retournées : var_dump($result);exit; 
                    // var_dump($result); exit; 
                    $key = $result->key;
                    $_SESSION["key"] = $key;

                    // header("Location: lobby.php");
                } elseif ($result == "LAST_GAME_LOST") {
                    
                } elseif ($result == "INVALID_KEY") {

                } else {

                }
            // }

            {
            $data = [];
            $data["key"] = $_SESSION["key"];
            $retour = $_SESSION["success"];
            echo $retour;

            if (isset($_POST['pratique'])) {
                $data["type"] = "END_TURN";
                $data["type"] = "SURRENDER";
                $data["type"] = "HERO_POWER";
                $data["type"] = "PLAY";
                $data["uid"] = $_SESSION["uid"];
                $data["type"] = "ATTACK";
                $data["uidattack"] = $_SESSION["uidattack"];
                $result = parent::callAPI("games/action", $data);

                echo($result);

                switch($result){
                    case "INVALID_KEY":
                        break;
                    case "INVALID_KEY":
                        break;
                    case "INVALID_ACTION":
                        break;
                    case "ACTION_IS_NOT_AN_OBJECT":
                        break;
                    case "NOT_ENOUGH_ENERGY":
                        break;
                    case "BOARD_IS_FULL ":
                        break;
                    case "CARD_NOT_IN_HAND":
                        break;
                    case "CARD_IS_SLEEPING":
                        break;
                    case "MUST_ATTACK_TAUNT_FIRST":
                        break;
                    case "OPPONENT_CARD_NOT_FOUND":
                        break;
                    case "OPPONENT_CARD_HAS_STEALTH":
                        break;
                    case "CARD_NOT_FOUND":
                        break;
                    case "ERROR_PROCESSING_ACTION":
                        break;
                    case "INTERNAL_ACTION_ERROR":
                        break;
                    case "HERO_POWER_ALREADY_USED":
                        break;
                }
            }

            return [];
        }
    }