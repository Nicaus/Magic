<?php
    $data = [];
    $data["key"] = $_SESSION["key"];
    $retour = $_SESSION["success"];
    echo $retour;

    $result = parent::callAPI("games/state", $data);

    echo("je passe ici");
    // var_dump($result); exit;

    if ($result == "WAITING") { 
        // err
        echo $result;
    } elseif ($result == "LAST_GAME_WON") {  
        // Pour voir les informations retournées : var_dump($result);exit; 
        // var_dump($result); exit; 
        $key = $result->key;
        $_SESSION["key"] = $key;

        // header("Location: lobby.php");
    } elseif ($result == "LAST_GAME_LOST") {
        
    } elseif ($result == "INVALID_KEY") {

    }