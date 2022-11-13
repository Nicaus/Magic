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
        
            // $state = parent::callAPI("games/state", $data);
            $action = parent::callAPI("games/action", $data);
            $data["type"] = $action;

            return compact("action");
        }
    }
