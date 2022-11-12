<?php
    require_once("action/CommonAction.php");

    class AjaxStateAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = [];
            $data["key"] = $_SESSION["key"];
            $retour = $_SESSION["success"];
        
            $state = parent::callAPI("games/state", $data);
            // $action = parent::callAPI("games/action", $data);

            // $data["type"] = $action

            // switch($action){
            //     case "INVALID_KEY":
            //         break;
            //     case "INVALID_KEY":
            //         break;
            //     case "INVALID_ACTION":
            //         break;
            //     case "ACTION_IS_NOT_AN_OBJECT":
            //         break;
            //     case "NOT_ENOUGH_ENERGY":
            //         break;
            //     case "BOARD_IS_FULL ":
            //         break;
            //     case "CARD_NOT_IN_HAND":
            //         break;
            //     case "CARD_IS_SLEEPING":
            //         break;
            //     case "MUST_ATTACK_TAUNT_FIRST":
            //         break;
            //     case "OPPONENT_CARD_NOT_FOUND":
            //         break;
            //     case "OPPONENT_CARD_HAS_STEALTH":
            //         break;
            //     case "CARD_NOT_FOUND":
            //         break;
            //     case "ERROR_PROCESSING_ACTION":
            //         break;
            //     case "INTERNAL_ACTION_ERROR":
            //         break;
            //     case "HERO_POWER_ALREADY_USED":
            //         break;
            //     }
            return compact("state");
        }

        public function temp() {
            // if ($retour == "JOINED_TRAINING") {
                
                // header("Location: game.php");
        }
        
    }