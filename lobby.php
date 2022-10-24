<?php
    require_once("action/lobbyAction.php");

    $action = new lobbyAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>
<div>
    <a href="">Pratique</a>
</div>
<div>
    <a href="">Jouer</a>
</div>
<div>
    <a href="">Quitter</a>
</div>

<iframe style="width:700px;height:240px;" 
    onload="applyStyles(this)"
    src='https://magix.apps-de-cours.com/server/#/chat/<?=$_SESSION["key"]?>'> </iframe>

<?php
    require_once("partial/footer.php");