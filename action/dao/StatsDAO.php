<?php
    require_once("actions/DAO/Connect.php");

    class AnswerDAO{
        public static function getStats(){
            $connection = Connect::getConnection();
            
            $answers = $connection->prepare("SELECT * FROM stats");
            $answers->setFetchMode(PDO::FETCH_ASSOC);
            $answers->execute();

            return $answers->fetchAll();
        }

        public static function addStats($uid, $ratio){
            $connection = Connect::getConnection();
            
            $add = $connection->prepare("INSERT INTO stack_answers(uid, ratio) VALUES (?, ?)");
            $add->bindParam(2, $uid);
            $add->bindParam(3, $ratio);
            $add->execute();
        }

        public static function getCount(){
            $connection = Connect::getConnection();

            $counter = $connection->prepare("SELECT used FROM stats");
            $counter->setFetchMode(PDO::FETCH_ASSOC);
            $counter->execute();

            return $counter->fetchAll();
        }

        public static function getTotal(){
            $connection = Connect::getConnection();
            
            $total = $connection->prepare("SELECT count(*) FROM stats");
            $total->setFetchMode(PDO::FETCH_ASSOC);
            $total->execute();

            return $total->fetchAll();
        }

        public static function empty(){
            $connection = Connect::getConnection();
            
            $empty = $connection->prepare("TRUNCATE TABLE stats");
            $empty->execute();
        }

        
    }