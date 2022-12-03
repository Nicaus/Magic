<?php
    require_once("actions/DAO/Connect.php");

    class AnswerDAO{
        public static function getAnswers(){
            $connection = Connect::getConnection();
            
            $answers = $connection->prepare("SELECT * FROM stats");
            $answers->setFetchMode(PDO::FETCH_ASSOC);
            $answers->execute();

            return $answers->fetchAll();
        }

        public static function addAnswer($uid, $used, $ratio){
            $connection = Connect::getConnection();
            
            $add = $connection->prepare("INSERT INTO stack_answers (uid, used, ratio) VALUES (?, ?, ?)");
            $add->bindParam(1, $uid);
            $add->bindParam(2, $used);
            $add->bindParam(3, $ratio);
            $add->execute();
        }
    }