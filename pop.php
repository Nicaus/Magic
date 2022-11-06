<?php
    require_once("action/PopAction.php");

    $action = new PopAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

<div>

</div>

<?php
    require_once("partial/footer.php");