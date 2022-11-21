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

            <div id="opponentinfo">
                <div class="evendiv">
                    <div id="opusername"></div>
                    <div id="opclass"></div>
                    <div id="ophp"></div>
                    <div id="opmaxhp"></div>
                    <div id="opmp"></div>
                    <div id="opmaxmp"></div>
                    <div id="optext"></div>
                    <div id="opcardcount"></div>
                    <div id="ophandsize"></div>
                    <div id="optrophycount"></div>
                    <div id="opwincount"></div>
                    <div id="oplosscount"></div>
                    <div id="optalent"></div>
                </div>
            </div>

            <div id="opponentboard">
                <div>
                    <div id="opboard" class="evendiv">

                    </div>
                </div>
            </div>


            <div id="yourboard">
                <div>
                    <div id="board" class="evendiv"> 

                    </div>
                </div>
            </div>    


            <div id="bot">
                <div class="evenbot">
                    <div id="info">
                        <div id="turntime"></div>
                        <div id="yourturn"></div>
                        <div id="heropowerused"></div>
                        <div id="hp"></div>
                        <div id="maxhp"></div>
                        <div id="mp"></div>
                        <div id="maxmp"></div>
                        <div id="welcometext"></div>
                        <div id="heroclass"></div>
                        <div id="talent"></div>
                        <div id="remainingcardcount"></div>
                    </div>    

                    <div id="yourhand">
                        <div id="hand" class="evendiv" method="post">

                        </div>
                    </div>

                    <div id="buttons" action="" method="post">
                        <button id="endturn" name="endturn" class="b">End Turn</button>
                        <button id="surrender" name="surrender" class="b">Surrender</button>
                    </div>
                </div>
            </div>

            <!-- <div id="actionlist">
                <div id="lastestactions"></div>
            </div> -->


        </div>
    </body>
</html>