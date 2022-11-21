<?php
    require_once('action/IndexAction.php');

    $action = new IndexAction();
    $data = $action->execute();

    require_once('partial/header.php');
?>
<body style="background-image: url(img/parlement.png);">
    <div class="login-form-frame">
        <h1>Magix</h1>
        
        <form action="" method="post">
            <div>
                <label for="user">Nom d'usager: </label>
                <input type="text" name="user" id="user">
            </div>
            <div>
                <label for="pwd">Mot de passe: </label>
                <input type="password" name="pwd" id="password">
            </div>
            
            <div class="evendiv">
                <button class="b">envoyer</button>
            </div>
        </form>
    </div>
</body>

<?php
    require_once('partial/footer.php');