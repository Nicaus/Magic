<?php
    require_once('action/IndexAction.php');

    $action = new IndexAction();
    $data = $action->execute();

    require_once('partial/header.php');
?>
<body style="background-image: url(img/parlement.png);">
    <div class="middle">
        <div class="login-form-frame">
            <h1>Magix</h1>
            
            <form action="" method="post">
                <div>
                    <input type="text" name="user" id="user" placeholder="Nom d'usager">
                </div>
                <div>
                    <input type="password" name="pwd" id="password" placeholder="Mot de passe">
                </div>
                
                <div class="evendiv">
                    <button class="b">envoyer</button>
                </div>
            </form>
        </div>
    </div>
</body>

<?php
    require_once('partial/footer.php');