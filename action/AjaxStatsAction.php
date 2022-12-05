<?php
    require_once("action/CommonAction.php");
    require_once("action/dao/StatsDAO.php");

    class AjaxStatsAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $uid = $_POST["uid"];
            $ratio = StatsDAO::getCount() / StatsDAO::getTotal();

            $addstats = StatsDAO::addStats($uid, $ratio);
            $getstats = StatsDAO::getStats();

            return compact("getstats");
        }
    }