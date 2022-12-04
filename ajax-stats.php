<?php
    require_once("action/AjaxStatsAction.php");

    $action = new AjaxStatsAction();
    $data = $action->execute();

    echo json_encode($data["getstats"]);