<?php
    require_once("action/StatsAction.php");
    require_once("action/dao/StatsDAO.php");

    $action = new StatsAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

<body style="background-image: url(img/login.png);">
    <button onclick="StatsDAO::empty()">Empty</button>
    <div id="infostats">

    </div>
</body>

<?php
    require_once("partial/footer.php");