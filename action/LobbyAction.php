<?php
    require_once("action/CommonAction.php");

    class LobbyAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = []; 
            $data["key"] = $_SESSION["key"];

            if (isset($_POST['pratique'])) {
                $data["type"] = 'TRAINING';
                $result = parent::callAPI("games/auto-match", $data);

                if ($result == "JOINED_TRAINING"){
                    $type = $result->type;
                    $_SESSION["type"] = $type;
                    $_SESSION["success"] = $result;
                    header("Location: game.php");
                }
                
            } elseif (isset($_POST['jouer'])) {
                $data["type"] = 'PVP';
                $result = parent::callAPI("games/auto-match", $data);

                if ($result == "JOINED_PVP" || $result == "CREATED_PVP"){
                    $type = $result->type;
                    $_SESSION["type"] = $type;
                    $_SESSION["success"] = $result;
                    header("Location: game.php");
                } elseif ($result == "INVALID_KEY"){
                    echo "Clé invalide";
                } else if ($result == "DECK_INCOMPLETE"){
                    echo "Votre deck est incomplet";
                }
                
            } elseif (isset($_POST['quit'])) {
                $result = parent::callAPI("signout", $data);

                if ($result == "SIGNED_OUT"){
                    $key = $result->key;
                    $_SESSION["key"] = $key;
                    $_SESSION["success"] = $result;

                    header("Location: index.php");
                } elseif ($result == "INVALID_KEY"){
                    header("Location: index.php");
                }
            } elseif (isset($_POST['stats'])) {
                header("Location: stats.php");
                
            } elseif (isset($_POST['deck'])) {
                header("Location: deck.php");
                
            } 
            return compact("data");
        }
    }