<?php
    require_once("action/lobbyAction.php");

    $action = new lobbyAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>
<div class="circle">
    <button href="">Pratique</button>
</div>
<div class="buttonT">
    <button href="">Jouer</button>
</div>
<div class="buttonT">
    <button href="index.php" methos>Quitter</button>
</div>
<div class="circle">test</div>

<!-- https://stackoverflow.com/questions/20738329/how-to-call-a-php-function-on-the-click-of-a-button -->

<iframe style="width:700px;height:240px;" 
    onload="applyStyles(this)" 
    src='https://magix.apps-de-cours.com/server/#/chat/<?=$_SESSION["key"]?>'> </iframe>

<?php
    require_once("partial/footer.php");