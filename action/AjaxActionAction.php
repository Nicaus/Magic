<?php
    require_once("action/CommonAction.php");

    class AjaxActionAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = [];
            $data["key"] = $_SESSION["key"];
            $data["type"] = $_POST["type"];
        
            $action = parent::callAPI("games/action", $data);

            return compact("action");
        } 
    }