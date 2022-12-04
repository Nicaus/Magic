<?php
    require_once("action/CommonAction.php");
    require_once("action/dao/StatsDAO.php");

    class AjaxStatsAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $uid = $_POST["uid"];
            $used = $_POST["used"];
            $ratio = $_POST["ratio"];

            $addstats = StatsDAO::addStats($uid, $used, $ratio);
            $getstats = StatsDAO::getStats();

            return compact("getstats");
        }
    }