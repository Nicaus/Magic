<?php
    require_once("action/CommonAction.php");

    class AjaxActionAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = [];
            $error = "";
            $data["key"] = $_SESSION["key"];
            $data["type"] = $_POST["type"];
            $data["uid"] = $_POST["uid"];
            $data["targetuid"] = $_POST["targetuid"];
        
            $action = parent::callAPI("games/action", $data);

            switch($action){
                case "INVALID_KEY":
                    $error = "Clé invalide, deloggez-vous et ressayez"; break;
                case "INVALID_ACTION":
                    $error = "Action invalide"; break;
                case "ACTION_IS_NOT_AN_OBJECT":
                    $error = "Votre action n'est pas un objet!"; break;
                case "NOT_ENOUGH_ENERGY":
                    $error = "Pas assez d'énergie ;("; break;
                case "BOARD_IS_FULL ":
                    $error = "Trop de carte en jeu "; break;
                case "CARD_NOT_IN_HAND":
                    $error = "Il n'y a pas de carte dans votre main"; break;
                case "CARD_IS_SLEEPING":
                    $error = "Carte endormie"; break;
                case "MUST_ATTACK_TAUNT_FIRST":
                    $error = "Attacker le Taunt en premier"; break;
                case "OPPONENT_CARD_NOT_FOUND":
                    $error = "Carte visé n'existe pas"; break;
                case "OPPONENT_CARD_HAS_STEALTH":
                    $error = "Carte visé est invisible"; break;
                case "CARD_NOT_FOUND":
                    $error = "Carte non trouvé"; break;
                case "ERROR_PROCESSING_ACTION":
                    $error = "Votre action n'a pas été traité"; break;
                case "INTERNAL_ACTION_ERROR":
                    $error = "Erreur interne"; break;
                case "HERO_POWER_ALREADY_USED":
                    $error = "Hero Power a déja été utilisé"; break;
            }
            
            return compact("action");
        } 
    }