<?php
    require_once('action/indexAction.php')

    $action = new indexAction();
    $data = $action->execute();

    require_once('partial/header.php')
?>

<div>

</div>

<?php
    require_once('partial/footer.php');