<?php
    require_once("action/LobbyAction.php");

    $action = new LobbyAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>
<script src="./js/lobby.js"></script>
<body style="background-image: url(img/game.png);">
    <form class=evendiv action="" method="post">
            <div>
                <button name="pratique" class="b">Pratique</button>
            </div>
            <div>
                <button name="jouer" class="b">Jouer</button>
            </div>
            <div>
                <button name="quit" class="b">Quitter</button>
            </div>
            <div>
                <button name="stats" class="b">Stats</button>
            </div>
            <div>
                <button name="deck" class="b">Deck</button>
            </div>
    </form>
    
    <!-- https://stackoverflow.com/questions/20738329/how-to-call-a-php-function-on-the-click-of-a-button -->
    <div class="evendiv">
        <iframe style="width:700px;height:240px; background-color:white" 
            src='https://magix.apps-de-cours.com/server/#/chat/<?=$_SESSION["key"]?>'> </iframe>
    </div>
</body>

<?php
    require_once("partial/footer.php");