<?php
    require_once("action/DeckAction.php");

    $action = new DeckAction();
    $data = $action->execute();

    require_once("partial/header.php");
?>
<body style="background-image: url(img/parlement.png);">
    <form method="post">
        <button name="back" class="b">Back</button>

        <div style="background-image: url(img/parlement.png);">
            <iframe style="width:100%;height:100vh;" src='https://magix.apps-de-cours.com/server/#/deck/<?=$_SESSION["key"]?>'></iframe>
        </div>
        
    </form>
</body>

<?php
    require_once("partial/footer.php");