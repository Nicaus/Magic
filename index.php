<?php
    require_once('action/indexAction.php');

    $action = new indexAction();
    $data = $action->execute();

    require_once('partial/header.php');
?>

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
        
        <div><button>envoyer</button></div>
    </form>
</div>

<?php
    require_once('partial/footer.php');