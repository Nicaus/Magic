<?php
    require_once("action/popAction.php");

    $action = new popAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

<div>

</div>

<?php
    require_once("partial/footer.php");