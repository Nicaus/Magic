<?php
    require_once('action/GameAction.php');

    $action = new GameAction();
    $data = $action->execute();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/global.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
        <link rel="manifest" href="img/site.webmanifest">
        <link rel="manifest" href="img/site.webmanifest">
        <link rel="stylesheet" href="css/game.css" />
        <script src="./js/game.js"></script>
        <title>Magix - Pratique</title>
    </head>
    <body style="background-image: url(img/login.png);">
        <div onload="state()" >

            <div id="opponentinfo" class="even">
                <div class="eventop">
                    <div id="enemyboxed">
                        <div id="opusername" class="middle"></div>
    
                        <div id="enemy">
                            <div id="opimage"></div>
                            <div id="optext"></div>
                            <div id="opclass"></div>
                            <div id="optalent"></div>
                        </div>
    
                        <div id=opinfo>
                            <div id="ophp" class="middle"></div>
                            <div id="opmp" class="middle"></div>
                            <div id="opcardcount" class="middle"></div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div id="opponentboard" class="even">
                <div id="opboard" class="evendiv" method="post">

                </div>
            </div>


            <div id="yourboard" class="even">
                <div id="board" class="evendiv" method="post"> 

                </div>
            </div>    


            <div id="bot">
                <div id="info">
                    <div id="yourturn"></div>
                    <div id="heropowerused"></div>
                    <div id="heroclass"></div>
                    <div id="talent"></div>
                    <div id="error"></div>

                    <div id="containerinfo">
                        <div class="row">
                            <div id="turntime" class="time middleinfo"></div>
                            <div id="remainingcardcount" class="rest middleinfo"></div>
                        </div>
                        <div class="row">
                            <div id="hp" class="hpp middleinfo"></div>
                            <div id="mp" class="mp middleinfo"></div>
                        </div>
                    </div>
                </div>    

                <div id="yourhand">
                    <div id="hand" method="post">

                    </div>
                </div>

                <div id="buttons" action="" method="post">
                    <button id="endturn" name="endturn" class="b">End Turn</button>
                    <button id="surrender" name="surrender" class="b">Surrender</button>
                </div>
            </div>
        </div>
    </body>
</html>