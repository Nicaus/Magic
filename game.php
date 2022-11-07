<?php
    require_once('action/GameAction.php');

    $action = new GameAction();
    $data = $action->execute();

    require_once('partial/header.php');
?>

<div onload="state()">
    test
</div>

<?php
    require_once('partial/footer.php');