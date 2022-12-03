<?php
    require_once("action/StatsAction.php");

    $action = new StatsAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

<body style="background-image: url(img/login.png);">
    <div id="stats">


    </div>
</body>

<?php
    require_once("partial/footer.php");