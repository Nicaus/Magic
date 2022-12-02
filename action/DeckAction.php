<?php
    require_once("action/CommonAction.php");

    class DeckAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = []; 
            $data["key"] = $_SESSION["key"];
            
            if (isset($_POST['back'])) {
                header("Location: lobby.php");
            } 
            return compact("data");
        }
    }