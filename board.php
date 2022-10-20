<?php
    require_once('action/boardAction.php')

    $action = new boardAction();
    $data = $action->execute();

    require_once('partial/header.php')
?>

<div>

</div>

<?php
    require_once('partial/footer.php');