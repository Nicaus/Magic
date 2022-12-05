<?php
    require_once("action/CommonAction.php");

    class StatsAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {

            $count = StatsDAO::getCount();
            $total = StatsDAO::getTotal();

            return compact('count', 'total');
        }
    }