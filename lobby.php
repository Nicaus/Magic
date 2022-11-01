<?php
    require_once("action/lobbyAction.php");

    $action = new lobbyAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>

<form class=evendiv action="" method="post">
        <div>
            <button name="pratique" href="">Pratique</button>
        </div>
        <div>
            <button name="jouer" href="">Jouer</button>
        </div>
        <div>
            <button name="quit" href="">Quitter</button>
        </div>
</form>

<!-- https://stackoverflow.com/questions/20738329/how-to-call-a-php-function-on-the-click-of-a-button -->
<div class="evendiv">
    <iframe style="width:700px;height:240px" 
        onload="applyStyles(this)" 
        src='https://magix.apps-de-cours.com/server/#/chat/<?=$_SESSION["key"]?>'> </iframe>
</div>

<?php
    require_once("partial/footer.php");