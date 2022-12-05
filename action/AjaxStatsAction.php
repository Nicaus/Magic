<?php
    require_once("action/CommonAction.php");
    require_once("action/dao/StatsDAO.php");

    class AjaxStatsAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $stats = StatsDAO::getStats();
            $id = $_POST["id"];

            $addstats = StatsDAO::addStats($id);
        }
    }