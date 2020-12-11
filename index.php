<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"/>
    <meta property="og:title" content="Ghost Behind The Door - Haunted Down Under">
    <meta property="og:url" content="http://www.developedbynick.com/projects/js/ghost_behind_the_door-beta">
    <meta property="og:site_name" content="Ghost Behind The Door - Haunted Down Under">
    <meta property="og:description" content="How long will you survive?">
    <meta property="og:image" content="cover.jpg">
    <link rel='shortcut icon' type='image/x-icon' href='./favicon.ico' />
    <title>Ghost Behind The Door - Haunted Down Under</title>
    <link rel="stylesheet" href="./style.css?version=4.9" />
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <script src="https://code.createjs.com/1.0.0/soundjs.min.js"></script>
</head>


<body onload="loadSound();">

    <div class="canvas hidden">

        <!-- P R E L O A D E R -->
        <div class="preloader">
            <div class="left"><img src="./assets/spinner.gif" alt="Loading"/></div>
            <div class="right"></div>
        </div>


        <!-- I N  G A M E  L O A D I N G  S C R E E N -->
        <div class="loading">
            <img src="./assets/spinner.gif" alt="Loading"/>
        </div>


        <!-- S C R E E N  -  S U B M I T  S C O R E -->
        <div class="submit-score">

            <div class="screen-title">Game Over</div>
            <span id="playerDead"></span>

            <span class="endGameStats">
                <span class="endGameScore">Score<span class="endScore"></span></span>
                <span class="endGameRank">Rank<span id="data"><img src="./assets/spinner.gif" alt="Loading"/></span></span>
            </span>

            <span id="getUsernameWrapper">
                <div class="endGameMessage"></div>
                <input id="getUsername" type="text" value="" maxlength="8" placeholder="Enter name" autocomplete="off"/>
                <span class="inputValidate"></span>
            </span>

            <button class="btn submit-score-btn disabled">Save Score</button>
            <button class="btn skip-score-btn">Dont Save</button>

            <div class="film"></div>

        </div>


        <!-- S C R E E N  -  G A M E O V E R -->
        <div class="gameoverScreen">

            <button class="btn back-btn reset"></button>

            <div class="screen-title">Highscores</div>

            <table id="leaderboardTableTop10">
                <tbody id="dataTop10"></tbody>
            </table>

            <div class="film"></div>
            <div class="glitchblack"></div>

        </div>  
                

        <!-- S C R E E N  -  L E A R N -->
        <div class="learnScreen">

            <button class="btn back-btn backLearn"></button>

            <div class="learnRulesScreen">
                <button class="btn back-btn backLearnRules"></button>

                <div class="screen-title drip6">Rules</div>
                    <div class="contentInner">
                        <p>The Haunted Down Under girls have been trapped in a haunted mansion. But this time the tables have turned, the ghost is hunting them! Can you help them avoid being possessed by the ghost?</p>
                        <p>The ghost is hiding behind a door! Try to open all the doors, but be careful! If you open the door with the ghost behind it, you'll become possessed! But this ghost is tricky. It moves to a new door every few seconds.</p>
                        <p>Luckily, the ghost might leave a coin behind when it moves to a new door. Time it right and you can use this to your advantage. Collect the coins to unlock ghost hunting equipment to help you along your way! You have 1 minute to complete each room.</p>
                    </div>
                    <div class="clouds"></div>
                    <div class="film"></div>
                </div>

            <div class="learnEquipmentScreen">

                <button class="btn back-btn backLearnEquipment"></button>

                <div class="screen-title drip7">Equipment</div>

                    <div class="contentInner">
                        <ul>
                            <li>
                                <img src="./assets/equipment-key.png" alt="Equipment Key">
                                <p><span>Golden Key</span> Opens all doors that the ghost has locked.</p>
                                <span><img src="./assets/coinx1.png" alt="Coins x1"></span>
                            </li>
                            <li>
                                <img src="./assets/equipment-crystalball.png" alt="Equipment Crystal Ball">
                                <p><span>Crystal Ball</span> See a prediction of the ghost's location.</p>
                                <span><img src="./assets/coinx1.png" alt="Coins x1"></span>
                            </li>
                            <li>
                                <img src="./assets/equipment-k2.png" alt="Equipment K2 Meter">
                                <p><span>K2 Meter</span> See an EMF reading of the doors.</p>
                                <span><img src="./assets/coinx2.png" alt="Coins x2"></span>
                            </li>
                            <li>
                                <img src="./assets/equipment-thermal.png" alt="Equipment Thermal Cam">
                                <p><span>Thermal Cam</span> See through the doors to reveal the ghost.</p>
                                <span><img src="./assets/coinx3.png" alt="Coins x3"></span>
                            </li>
                        </ul>
                    </div>

                    <div class="clouds"></div>
                    <div class="film"></div>

                </div>

            <div class="learnTarotScreen">

                <button class="btn back-btn backLearnTarot"></button>

                <div class="screen-title drip8">Tarot Cards</div>

                <div class="contentInner">
                    <p>After escaping from each room, you will be presented with a selection of tarot cards.</p>
                    <p>Based on your selection, you will either have good fortune, which will increase your coins by up to 3, or bad fortune, which will decrease your coins by up to 2.</p>
                    <p>You cannot skip playing the cards, for your future has already been decided.</p>
                </div>

                <div class="clouds"></div>
                <div class="film"></div>

            </div>

            <div class="learnWrapper">
                <div class="screen-title drip5">How To Play</div>
                <button class="btn drip3 learnRules">Rules</button>
                <button class="btn learnEquipment">Equipment</button>
                <button class="btn drip4 learnTarot">Tarot Cards</button>
            </div>

            <div class="clouds"></div>
            <div class="film"></div>

        </div>

        <!-- S C R E E N   -   C R E D I T S -->
        <div class="creditsScreen">

                <button class="btn back-btn backCredits"></button>

                <div class="screen-title drip6">Credits</div>

                <div class="contentInner">
                    <p>Made by Nicolas Menezes</p>
                    <p><a href="http://www.developedbynick.com" target="_blank">developedbynick.com</a></p>
                    <p>© 2020 MacabreFX</p>
                    <p>© 2020 Haunted Down Under</p>
                </div>

                <div class="clouds"></div>
                <div class="film"></div>

            </div>


        <!-- S C R E E N   -   S T A R T -->
        <div class="startScreen active">

            <div class="logo"><img src="./assets/game.png" alt=""></div> 

            <div class="buttons">
                <button class="startSetup btn drip1 go">Play</button>
                <button class="btn learn">Rules</button>
                <button class="btn drip2 scores">Cemetery</button>
                <button class="btn credits">Credits</button>
            </div>

            <div class="homeChars">
                <div class="home-char1 homechar"><img src="./assets/character/char2.png" /></div>
                <div class="home-char2 homechar"><img src="./assets/character/char1.png" /></div>
                <div class="home-char3 homechar"><img src="./assets/character/char4.png" /></div>
                <div class="home-char4 homechar"><img src="./assets/character/char3.png" /></div>
            </div>
            

            <div class="film"></div>
            <div class="load-google-font">hidden</div>
            <div class="clouds"></div>
            <div class="startBg"></div>

        </div>


        <!-- S C R E E N  -  C H A R A C T E R -->
        <div class="characterScreen">

            <button class="btn back-btn closeCharacter"></button>

            <div class="screen-title player-name">Select Player</div>

            <ul id="playerContainer" class="playerContainer">
                <li id="player2" class="player">
                    <img src="./assets/character/char2.png" />
                </li>
                <li id="player1" class="player">
                    <img src="./assets/character/char1.png" />
                </li>
                <li id="player4" class="player">
                    <img src="./assets/character/char4.png" />
                </li>
                <li id="player3" class="player">
                    <img src="./assets/character/char3.png" />
                </li>
                <input id="chooseplayer" type="text" name="chooseplayer" value="0">
            </ul>

            <button class="btn start disabled">Start</button>
            <div class="film"></div>
            <div class="clouds"></div> 

        </div>


        <!-- S C R E E N  -  G A M E -->
        <div class="game">

            <div class="controls">
                <div class="points">
                    <div class="round">ROOM<span class="roundcount">0</span></div>
                    <div class="ghostmove"><span id="timer"></span></div>
                    <div class="score">SCORE<span class="scorecount">0</span></div>
                </div>

                <div id="progressbar"></div>
            </div>

            <div class="generate"></div>
            <div id="possessedOverlay"></div>
            <div id="powerupOverlay"></div>
            <div class="clouds"></div> 

        </div>


            <div class="controlTerminal">

                <div class="playerInfo">
                    <div class="coins"><img src="./assets/coin.png" alt="Coins" /><span class="coincount">0</span></div>
                    <div id="player"><span id="playerId"></span></div>
                </div>

                <div class="equipment">
                    <div class="powerup key">
                        <span class="equipmentImg"><img src="./assets/equipment-key.png" alt="Equipment Key"/></span>
                        <span class="cost">1</span>
                    </div>
                    <div class="powerup crystalball">
                        <span class="equipmentImg"><img src="./assets/equipment-crystalball.png" alt="Equipment Crystal Ball"/></span>
                        <span class="inventoryCrystal"><span class="inventoryCrystalAmount">0</span></span>
                        <span class="cost">1</span>
                    </div>
                    <div class="powerup k2meter">
                        <span class="equipmentImg"><img src="./assets/equipment-k2.png" alt="Equipment K2 Meter"/></span>
                        <span class="inventoryK2"><span class="inventoryK2Amount">0</span></span>
                        <span class="cost">2</span>
                    </div>
                    <div class="powerup thermal">
                        <span class="equipmentImg"><img src="./assets/equipment-thermal.png" alt="Equipment Themral Cam"/></span>
                        <span class="inventoryThermal"><span class="inventoryThermalAmount">0</span></span>
                        <span class="cost">3</span>
                    </div>

                </div>      
            </div>
        </div>


    <!-- P R E L O A D  I M A G E S -->
    <div class="preload-images">

        <img src="./assets/game.png"/>
        <img src="./assets/bg_red.png"/>
        <img src="./assets/character/char1.png"/>
        <img src="./assets/character/char2.png"/>
        <img src="./assets/character/char3.png"/>
        <img src="./assets/character/char4.png"/>
        <img src="./assets/drip.png"/>
        <img src="./assets/ui-btn-back.png"/>
        <img src="./assets/spinner.gif"/>
        <img src="./assets/film.gif"/>
        <img src="./assets/prediction.gif"/>
        <img src="./assets/clouds2.png"/>
        <img src="./assets/grave.png"/>
        <img src="./assets/grave_gold.png"/>
        <img src="./assets/grave_silver.png"/>
        <img src="./assets/grave_bronze.png"/>
        <img src="./assets/equipment-thermal.png"/>
        <img src="./assets/equipment-crystalball.png"/>
        <img src="./assets/equipment-k2.png"/>
        <img src="./assets/hand.png"/>
        <img src="./assets/start-ghost.png"/>
        <img src="./assets/equipment-key.png"/>
        <img src="./assets/coinx3.png"/>
        <img src="./assets/coin.png"/>
        <img src="./assets/coinx2.png"/>
        <img src="./assets/padlock.png"/>
        <img src="./assets/coinx1.png"/>
        <img src="./assets/pattern1.png"/>
        <img src="./assets/drip_hover.png"/>
        <img src="./assets/k2_green.png"/>
        <img src="./assets/k2_orange.png"/>
        <img src="./assets/k2_red.png"/>
        <img src="./assets/character/char3_dead.png"/>
        <img src="./assets/character/char2_dead.png"/>
        <img src="./assets/character/char1_dead_ghost.png"/>
        <img src="./assets/character/char1_dead.png"/>
        <img src="./assets/character/char3_dead_ghost.png"/>
        <img src="./assets/character/char2_dead_ghost.png"/>
        <img src="./assets/character/char4_dead_ghost.png"/>
        <img src="./assets/character/char4_dead.png"/>
        <img src="./assets/doors/0.png"/>
        <img src="./assets/doors/1.png"/>
        <img src="./assets/doors/2.png"/>
        <img src="./assets/doors/3.png"/>
        <img src="./assets/doors/4.png"/>
        <img src="./assets/doors/5.png"/>
        <img src="./assets/doors/6.png"/>
        <img src="./assets/doors/7.png"/>
        <img src="./assets/doors/8.png"/>
        <img src="./assets/doors/9.png"/>
        <img src="./assets/doors/10.png"/>
        <img src="./assets/doors/11.png"/>
        <img src="./assets/doors/12.png"/>
        <img src="./assets/doors/13.png"/>
        <img src="./assets/doors/14.png"/>
        <img src="./assets/doors/15.png"/>
        <img src="./assets/doors/16.png"/>
        <img src="./assets/doors/17.png"/>
        <img src="./assets/doors/18.png"/>
        <img src="./assets/doors/19.png"/>
        <img src="./assets/doors/20.png"/>
        <img src="./assets/doors/21.png"/>
        <img src="./assets/doors/22.png"/>
        <img src="./assets/doors/23.png"/>
        <img src="./assets/doors/24.png"/>
        <img src="./assets/cards/1.png"/>
        <img src="./assets/cards/2.png"/>
        <img src="./assets/cards/3.png"/>
        <img src="./assets/cards/4.png"/>
        <img src="./assets/cards/5.png"/>
        <img src="./assets/cards/6.png"/>

    </div>


    <script src="./app.js?version=4.9"></script>
    <script>document.body.classList.add('loaded');</script>
</body>

</html>