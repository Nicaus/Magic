<?php
    require_once('action/loginAction.php');

    $action = new loginAction();
    $data = $action->execute();

    require_once('partial/header.php');
?>

<div class="login-form-frame">
    <form action="" method="post">
        <div>
            <label for="user">Nom d'usager: </label>
            <input type="text" name="user" id="user">
        </div>
        <div>
            <label for="pwd">Mot de passe: </label>
            <input type="text" name="pwd" id="pwd">
        </div>
        <div><button>envoyer</button></div>
    </form>
</div>

<?php
    require_once('partial/footer.php');