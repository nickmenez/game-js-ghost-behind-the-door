/*
           W E L C O M E
*/
console.log('👻 Version 1.2');
console.log('🔨 Nicolas Menezes');
console.log('👉🏻 www.developedbynick.com');
console.log('👉🏻 www.haunteddownunder.com');



/*
           M I S C
*/
var selection = window.getSelection ? window.getSelection() : document.selection ? document.selection : null;
if (!!selection) selection.empty ? selection.empty() : selection.removeAllRanges();

document.addEventListener('dragstart', function (e) {
    e.preventDefault();
});


/*
           V A R I A B L E S
*/
var doorAmount = 0; //Check media query before generating doors
const canvas = document.querySelector('.game');
const startGameBtn = document.querySelector('.start');
const canvasDoors = document.querySelector('.generate');
const controls = document.querySelector('.controlTerminal');
const closeLearn = document.querySelector('.backLearn');
const startSetup = document.querySelector('.characterScreen');
const closeCharacter = document.querySelector('.closeCharacter');
const resetBtn = document.querySelector('.reset');
const learnBtn = document.querySelector('.learn');
const scoresBtn = document.querySelector('.scores');
const openDoor = document.getElementsByClassName('door');
const startSetupBtn = document.querySelector('.startSetup');
const startScreen = document.querySelector('.startScreen');
const learnScreen = document.querySelector('.learnScreen');
const gameOverScreen = document.querySelector('.gameoverScreen');
const gameOver = document.querySelector('.gameoverScreen');
const openLearnRules = document.querySelector('.learnRules');
const openLearnEquipment = document.querySelector('.learnEquipment');
const openLearnTarot = document.querySelector('.learnTarot');
const closeLearnRules = document.querySelector('.backLearnRules');
const closeLearnEquipment = document.querySelector('.backLearnEquipment');
const closeLearnTarot = document.querySelector('.backLearnTarot');
const closeCredits = document.querySelector('.backCredits');
const openCredits = document.querySelector('.credits');
const popupRules = document.querySelector('.learnRulesScreen');
const popupEquipment = document.querySelector('.learnEquipmentScreen');
const popupCredits = document.querySelector('.creditsScreen');
const popupTarot = document.querySelector('.learnTarotScreen');
const powerThermal = document.querySelector('.thermal');
const powerCrystal = document.querySelector('.crystalball');
const powerK2 = document.querySelector('.k2meter');
const powerKey = document.querySelector('.key');
const loadingModal = document.querySelector('.loading');
const submitScore = document.querySelector('.submit-score');
const submitScoreBtn = document.querySelector('.submit-score-btn');
const skipScoreBtn = document.querySelector('.skip-score-btn');
const playerIdentity = document.querySelector('.player-name');
const glitchBlack = document.querySelector('.glitchblack');
const canvasWrapper = document.querySelector('.canvas');
const getCemetery = document.querySelector('#dataTop10');



/*
           U S E R  A G E N T
*/


controls.addEventListener('click', scrollToTop);
getCemetery.addEventListener('click', scrollToTop);
popupEquipment.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scrollTo(0, 0);
}

var userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test(userAgent),
    ios = /iphone|ipod|ipad/.test(userAgent);

if (ios) {
    if (safari)
        canvasWrapper.classList.add('in-ios-browser');
    else if (!safari)
        canvasWrapper.classList.add('in-app-browser');
}



var setLock;
var ghostAction = 10000;
var round = 0; //Set initial round
var score = 0; //Set initial score
var coins = 20; //Set initial starting coins
var countDown = 0; //Set timer to initial state
var gameCountDown = 10; //Set game countdown to initial state
var inventoryThermalAmount = 999; //Set maximum inventory amount for Equipment = Thermal
var inventoryCrystalAmount = 999; //Set maximum inventory amount for Equipment = CrystalBall
var inventoryK2Amount = 999; //Set maximum inventory amount for Equipment = K2 meter
var bgColors = ['#2d1b26', '#261b2d', '#1b1e2d', '#1b292d', '#1b2d20', '#272d1b', '#2d281b', '#2d1b1b']; //Generate background colours
var getRandomBg = document.querySelector('.game');
var getHasGhost = canvas.getElementsByClassName('has-ghost');
var getDoors = document.getElementsByClassName('door');



/*
           S P E E C H  B U B B L E S
*/
var speechReset = 5;
var speech = 5;
var sp, speech;

function speechCount() {
    sp = setTimeout("speechCount();", 1000);

    if (speech <= 0) {
        setRandomClass();
        speech = speechReset;
    }
    speech--;
}

function speechPause() {
    clearTimeout(sp);
}
speechCount();

function setRandomClass() {
    var ul = document.querySelector('.homeChars');
    var items = ul.children;
    var number = items.length;
    var random = Math.floor((Math.random() * number));
    var getSpeechBubble = document.querySelectorAll('.bubble');
    var randomSpeech = ['please help!', 'can you escape?', 'i dont want to die..', 'we shouldnt be here..', 'let us out!', 'will you survive?', 'we cant escape!', 'help!', 'can you get out?', 'rip', 'i have a bad feeling..', 'i dont link this..', 'did you hear that?', 'be careful..'];
    var chooseRandomSpeech = Math.floor((Math.random() * randomSpeech.length));
    const speechBubble = document.createElement('span');
    speechBubble.classList.add('bubble');
    speechBubble.innerHTML = randomSpeech[chooseRandomSpeech];

    for (var i = 0; i < number; i++) {
        items[random].appendChild(speechBubble);

        if (random === 0) {
            items[random].classList.add('first');
            items[random].parentNode.classList.add('1');
            items[i].classList.remove('second');
            items[i].classList.remove('third');
            items[i].classList.remove('fourth');
        }
        if (random === 1) {
            items[random].classList.add('second');
            items[random].parentNode.classList.add('2');
            items[i].classList.remove('first');
            items[i].classList.remove('third');
            items[i].classList.remove('fourth');
        }
        if (random === 2) {
            items[random].classList.add('third');
            items[random].parentNode.classList.add('3');
            items[i].classList.remove('first');
            items[i].classList.remove('second');
            items[i].classList.remove('fourth');
        }
        if (random === 3) {
            items[random].classList.add('fourth');
            items[random].parentNode.classList.add('4');
            items[i].classList.remove('first');
            items[i].classList.remove('second');
            items[i].classList.remove('third');
        }
    }

    for (var i = 0, all = getSpeechBubble.length; i < all; i++)
        getSpeechBubble[i].remove();

}



/*
           M E D I A  Q U E R I E S
*/
const sizeMobile = window.matchMedia("(min-width: 768px)");
if (matchMedia) {
    const sizeMobile = window.matchMedia("(min-width: 768px)");
    sizeMobile.addListener(WidthChange);
    WidthChange(sizeMobile);
}

function WidthChange(sizeMobile) {
    if (sizeMobile.matches)
        doorAmount = 40; //Amount of doors to load on tablet & desktop
    else
        doorAmount = 42; //Amount of doors to load on mobile
}



/*
           G A M E  A U D I O
*/
var soundSelectBtnBack = "Select Button Back";
var soundEquipmentCrystalBall = "Crystalball";
var soundDoorKnocking = "Door Knocking";
var soundGoodFortune = "Good Fortune";
var soundEquipmentThermal = "Thermal";
var soundSelectBtn = "Select Button";
var soundDoorLocked = "Door Locked";
var soundDoorUnlock = "Door Unlock";
var soundBadFortune = "Bad Fortune";
var soundCoinMinus = "Coin Minus";
var soundCemetery = "Cemetery";
var soundEquipmentK2 = "K2";
var soundSelect = "Select";
var soundScream = "Scream";
var soundSwoosh = "Swoosh";
var soundGypsy = "Gypsy";
var soundMusic = "Music";
var soundCards = "Cards";
var soundAlarm = "Alarm";
var soundType = "Type";
var soundDoor = "Door";
var soundCoin = "Coin";
var soundTick = "Tick";

function loadSound() {
    createjs.Sound.registerSound("./assets/audio/select.mp3", soundSelect);
    createjs.Sound.registerSound("./assets/audio/selectbtn.mp3", soundSelectBtn);
    createjs.Sound.registerSound("./assets/audio/selectbtnback.mp3", soundSelectBtnBack);
    createjs.Sound.registerSound("./assets/audio/type.mp3", soundType);
    createjs.Sound.registerSound("./assets/audio/music.mp3", soundMusic);
    createjs.Sound.registerSound("./assets/audio/door.mp3", soundDoor);
    createjs.Sound.registerSound("./assets/audio/doorknocking.mp3", soundDoorKnocking);
    createjs.Sound.registerSound("./assets/audio/doorlocked.mp3", soundDoorLocked);
    createjs.Sound.registerSound("./assets/audio/doorunlock.mp3", soundDoorUnlock);
    createjs.Sound.registerSound("./assets/audio/coin.mp3", soundCoin);
    createjs.Sound.registerSound("./assets/audio/cards.mp3", soundCards);
    createjs.Sound.registerSound("./assets/audio/goodfortune.mp3", soundGoodFortune);
    createjs.Sound.registerSound("./assets/audio/badfortune.mp3", soundBadFortune);
    createjs.Sound.registerSound("./assets/audio/gypsy.mp3", soundGypsy);
    createjs.Sound.registerSound("./assets/audio/crystalball.mp3", soundEquipmentCrystalBall);
    createjs.Sound.registerSound("./assets/audio/k2meter.mp3", soundEquipmentK2);
    createjs.Sound.registerSound("./assets/audio/thermal.mp3", soundEquipmentThermal);
    createjs.Sound.registerSound("./assets/audio/alarm.mp3", soundAlarm);
    createjs.Sound.registerSound("./assets/audio/scream.mp3", soundScream);
    createjs.Sound.registerSound("./assets/audio/swoosh.mp3", soundSwoosh);
    createjs.Sound.registerSound("./assets/audio/coinminus.mp3", soundCoinMinus);
    createjs.Sound.registerSound("./assets/audio/cemetery.mp3", soundCemetery);
    createjs.Sound.registerSound("./assets/audio/clocktick.mp3", soundTick);
}

function stopAudio() { createjs.Sound.stop(); }
function playAudioSelect() { createjs.Sound.play(soundSelect); }
function playAudioSelectBtn() { createjs.Sound.play(soundSelectBtn); }
function playAudioSelectBtnBack() { createjs.Sound.play(soundSelectBtnBack); }
function playAudioType() { createjs.Sound.play(soundType); }
function playAudioDoor() { createjs.Sound.play(soundDoor); }
function playAudioDoorLocked() { createjs.Sound.play(soundDoorLocked); }
function playAudioDoorUnlock() { createjs.Sound.play(soundDoorUnlock); }
function playAudioCoin() { createjs.Sound.play(soundCoin); }
function playAudioCoinMinus() { createjs.Sound.play(soundCoinMinus); }
function playAudioCards() { createjs.Sound.play(soundCards); }
function playAudioGoodFortune() { createjs.Sound.play(soundGoodFortune); }
function playAudioBadFortune() { createjs.Sound.play(soundBadFortune); }
function playAudioGypsy() { createjs.Sound.play(soundGypsy); }
function playAudioEquipmentCrystalball() { createjs.Sound.play(soundEquipmentCrystalBall); }
function playAudioEquipmentK2() { createjs.Sound.play(soundEquipmentK2); }
function playAudioEquipmentThermal() { createjs.Sound.play(soundEquipmentThermal); }
function playAudioAlarm() { createjs.Sound.play(soundAlarm); }
function playAudioScream() { createjs.Sound.play(soundScream); }
function playAudioSwoosh() { createjs.Sound.play(soundSwoosh); }
function playAudioCemetery() { createjs.Sound.play(soundCemetery); }
function playAudioTick() { createjs.Sound.play(soundTick); }
function playAudioMusic() {
    var props = new createjs.PlayPropsConfig().set({ loop: -1 });
    createjs.Sound.play(soundMusic, props);
}
function playAudioDoorKnocking() {
    var props = new createjs.PlayPropsConfig().set({ loop: -1 });
    createjs.Sound.play(soundDoorKnocking, props);
}



/*
           C H O O S E  C H A R A C T E R
*/
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player3 = document.getElementById('player3');
const player4 = document.getElementById('player4');
const playerCard = document.querySelectorAll('.player');
const characterInputId = document.getElementById('chooseplayer');

player1.addEventListener('click', chooseplayer1);
player2.addEventListener('click', chooseplayer2);
player3.addEventListener('click', chooseplayer3);
player4.addEventListener('click', chooseplayer4);

player1.addEventListener('click', checkCharacter);
player2.addEventListener('click', checkCharacter);
player3.addEventListener('click', checkCharacter);
player4.addEventListener('click', checkCharacter);

function checkCharacter() {
    if (characterInputId.value > 0)
        startGameBtn.classList.remove('disabled');
}

function chooseplayer1() {
    playAudioSelect();
    characterInputId.value = '1';
    playerIdentity.innerHTML = "Caitlin";
    for (var i = 0; i < playerCard.length; i++)
        playerCard[i].className = '';
    player1.classList.add("active");
}

function chooseplayer2() {
    playAudioSelect();
    characterInputId.value = '2';
    playerIdentity.innerHTML = "Nadine";
    for (var i = 0; i < playerCard.length; i++)
        playerCard[i].className = '';
    player2.classList.add("active");
}

function chooseplayer3() {
    playAudioSelect();
    characterInputId.value = '3';
    playerIdentity.innerHTML = "Celine";
    for (var i = 0; i < playerCard.length; i++)
        playerCard[i].className = '';
    player3.classList.add("active");
}

function chooseplayer4() {
    playAudioSelect();
    characterInputId.value = '4';
    playerIdentity.innerHTML = "Hailey";
    for (var i = 0; i < playerCard.length; i++)
        playerCard[i].className = '';
    player4.classList.add("active");
}


function getPlayerId() {
    var playerId = document.querySelector('#playerId');
    playerId.innerText = characterInputId.value;
    if (playerId.innerText === '1') playerId.innerHTML = '<img src="./assets/character/char1.png"/>';
    else if (playerId.innerText === '2') playerId.innerHTML = '<img src="./assets/character/char2.png"/>';
    else if (playerId.innerText === '3') playerId.innerHTML = '<img src="./assets/character/char3.png"/>';
    else if (playerId.innerText === '4') playerId.innerHTML = '<img src="./assets/character/char4.png"/>';
    else playerId.innerHTML = null;
}

function getPlayerDead() {
    var playerDead = document.querySelector('#playerDead');
    playerDead.innerText = characterInputId.value;
    if (playerDead.innerText === '1') playerDead.innerHTML = '<img src="./assets/character/char1_dead.png"/><img class="player-ghost" src="./assets/character/char1_dead_ghost.png"/>';
    else if (playerDead.innerText === '2') playerDead.innerHTML = '<img src="./assets/character/char2_dead.png"/><img class="player-ghost" src="./assets/character/char2_dead_ghost.png"/>';
    else if (playerDead.innerText === '3') playerDead.innerHTML = '<img src="./assets/character/char3_dead.png"/><img class="player-ghost" src="./assets/character/char3_dead_ghost.png"/>';
    else if (playerDead.innerText === '4') playerDead.innerHTML = '<img src="./assets/character/char4_dead.png"/><img class="player-ghost" src="./assets/character/char4_dead_ghost.png"/>';
    else playerDead.innerHTML = null;
}



/*
           E V E N T  L I S T E N E R S
*/
learnBtn.addEventListener('click', openLearn);
closeLearn.addEventListener('click', closeLearnScreen);
closeCharacter.addEventListener('click', closeCharacterScreen);
startSetupBtn.addEventListener('click', startSetupScreen);
resetBtn.addEventListener('click', resetGame);
scoresBtn.addEventListener('click', openScores);
openLearnRules.addEventListener('click', openLearnRulesScreen);
openLearnEquipment.addEventListener('click', openLearnEquipmentScreen);
openLearnTarot.addEventListener('click', openLearnTarotScreen);
closeLearnRules.addEventListener('click', closeLearnRulesScreen);
closeLearnEquipment.addEventListener('click', closeLearnEquipmentScreen);
closeLearnTarot.addEventListener('click', closeLearnTarotScreen);
closeCredits.addEventListener('click', closeCreditsScreen);
openCredits.addEventListener('click', openCreditsScreen);

function openLearnRulesScreen() {
    playAudioSelectBtn();
    popupRules.classList.add("active");
}

function openLearnEquipmentScreen() {
    playAudioSelectBtn();
    popupEquipment.classList.add("active");
}

function openLearnTarotScreen() {
    playAudioSelectBtn();
    popupTarot.classList.add("active");
}

function openCreditsScreen() {
    playAudioSelectBtn();
    popupCredits.classList.add("active");
}

function closeCreditsScreen() {
    playAudioSelectBtnBack();
    popupCredits.classList.remove("active");
}

function closeLearnRulesScreen() {
    playAudioSelectBtnBack();
    popupRules.classList.remove("active");
}

function closeLearnEquipmentScreen() {
    playAudioSelectBtnBack();
    popupEquipment.classList.remove("active");
}

function closeLearnTarotScreen() {
    playAudioSelectBtnBack();
    popupTarot.classList.remove("active");
}

function openScores() {
    playAudioSelectBtn();
    gameOver.classList.add('active');
    startScreen.classList.remove("active");
    getTop10();
    loadingModal.classList.add('active');
    setTimeout(function () {
        loadingModal.classList.remove('active');
        glitchBlack.classList.add('active');
        playAudioCemetery();
    }, 3000);

    setTimeout(function () {
        glitchBlack.classList.remove('active');
    }, 6000);
}

function closeCharacterScreen() {
    playAudioSelectBtnBack();
    startSetup.classList.remove("active");
    startScreen.classList.add("active");
    startGameBtn.removeEventListener('click', loadInit);
}

function getTop10() {
    document.querySelector('#dataTop10').innerHTML = '';
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "get_top10.php", true);
    ajax.send();
    position = 1;
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var html = "";
            for (var a = 0; a < data.length; a++) {
                var userName = data[a].username_column;
                userNameClean = userName.replace(/\s/g, "");
                var userScore = data[a].highscore_column;
                html += "<tr>";
                html += "<td>" + position++ + "</td>";
                html += "<td>" + userNameClean + "</td>";
                html += "<td>" + userScore + "</td>";
                html += "</tr>";
            }
            document.getElementById("dataTop10").innerHTML = html;
        }
    };
}



/*
           F U N C T I O N S
*/

// R o u n d  t i m e r
function createProgressbar(id, duration, callback) {
    var progressbar = document.getElementById(id);
    progressbar.className = 'progressbar';
    var progressbarinner = document.createElement('div');
    progressbarinner.className = 'inner';
    progressbarinner.style.animationDuration = duration;
    if (typeof (callback) === 'function')
        progressbarinner.addEventListener('animationend', callback);
    progressbar.appendChild(progressbarinner);
    progressbarinner.style.animationPlayState = 'running';
}



// L e a r n  s c r e e n
function openLearn() {
    playAudioSelectBtn();
    const howTo = document.querySelector('.learnScreen');
    howTo.classList.toggle("active");
    startScreen.classList.remove("active");
}

function closeLearnScreen() {
    playAudioSelectBtnBack();
    const howTo = document.querySelector('.learnScreen');
    howTo.classList.remove("active");
    startScreen.classList.add("active");
}



// S e t u p  s c r e e n
function startSetupScreen() {
    playAudioSelectBtn();
    startScreen.classList.remove('active');
    startSetup.classList.add('active');
    startGameBtn.addEventListener('click', loadInit);
}

function loadInit() {
    initGame();
    window.scrollTo(0, 0);
}

function initGame() {
    startSetup.classList.remove('active');
    startGame();
    playAudioMusic();
    playAudioDoorKnocking();
    speechPause();

}


// S t a r t  g a m e 
function checkTimers() {
    //Change ghost time to 8 seconds from round 5
    if (round > 4) {
        ghostAction = 8000;
        ghostcountReset = 8;
    }

    //Change ghost time to 6 seconds from round 10
    if (round > 9) {
        ghostAction = 6000;
        ghostcountReset = 6;
    }

    //Change ghost time to 4 seconds from round 15
    if (round > 14) {
        ghostAction = 4000;
        ghostcountReset = 4;
    }
}

var ghostcountReset = 10;
var ghostcount = 10;
var t, ghostcount;

function cddisplay() {
    document.getElementById('timer').innerHTML = ghostcount;
}

function countdown() {
    t = setTimeout("countdown();", 1000);
    cddisplay();
    if (ghostcount <= 0) {
        for (var i = 0; i < getHasGhost.length; i++)
            getHasGhost[i].classList.remove('has-ghost');
        conjureGhost();
        playAudioSwoosh();
        ghostcount = ghostcountReset;
    }
    ghostcount--;
    playAudioTick();
}

function cdpause() {
    clearTimeout(t);
}

function cdreset() {
    cdpause();
    ghostcount = ghostcountReset;
    cddisplay();
}

function startGame() {
    countdown();
    getRandomBg.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    const createFader = document.createElement('div');
    createFader.classList.add('fadeoutOverlay');
    canvas.appendChild(createFader);
    createFader.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    setTimeout(function () { createFader.remove(); }, 2000);
    canvas.classList.add('active');
    controls.classList.add('active');

    powerUps();
    makeDoors();
    getInventoryThermal();
    getInventoryCrystal();
    getInventoryK2();
    getScore();
    getPlayerId();
    getPlayerDead();
    getCoins();
    getRound();
    checkPowerUps();
    randomGift();

    const progressBar = document.createElement('div');
    progressBar.setAttribute("id", "progressbar");
    const controlBar = document.querySelector('.controls');
    controlBar.appendChild(progressBar);

    createProgressbar('progressbar', '60s', function () {
        endGame();
    });

    conjureGhost();
    playAudioSwoosh();
}



// V a r i a b l e  t o t a l s
function getInventoryThermal() {
    var amount = document.querySelector('.inventoryThermalAmount');
    inventoryThermalAmount;
    amount.textContent = inventoryThermalAmount.toString();
}

function getInventoryCrystal() {
    var amount = document.querySelector('.inventoryCrystalAmount');
    inventoryCrystalAmount;
    amount.textContent = inventoryCrystalAmount.toString();
}

function getInventoryK2() {
    var amount = document.querySelector('.inventoryK2Amount');
    inventoryK2Amount;
    amount.textContent = inventoryK2Amount.toString();
}

function getRound() {
    var count = document.querySelector('.roundcount');
    round++;
    count.textContent = round.toString();
}

function getScore() {
    var count = document.querySelector('.scorecount');
    score;
    count.textContent = score.toString();
}

function getCoins() {
    var count = document.querySelector('.coincount');
    count.textContent = coins.toString();
}
function subtractCoins() {
    var count = document.querySelector('.coincount');
    coins;
    count.textContent = coins.toString();
    checkPowerUps();
}



// C h e c k  i f  l a s t  d o o r
function checkDoors() {
    const doorCount = canvas.getElementsByClassName('door').length; //Get the number of doors on canvas
    const lastDoor = canvas.querySelector('.door'); //Get the number of doors on canvas
    if (doorCount === 1) {
        newRound(); //Start New Round
        getScore();
    }
}



// G e n e r a t e  d o o r s
function makeDoors() {
    var randomDoor = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
    var chooseRandomDoor = Math.floor((Math.random() * 25));
    var doors = document.createElement('div');
    doors.classList.add('door');
    doors.innerHTML = `<span class='emoji'><img src='./assets/doors/${randomDoor[chooseRandomDoor]}.png'/></span>`;
    for (var i = 0; i < doorAmount; i++) {
        canvasDoors.appendChild(doors.cloneNode(true)); //Generate 30 doors and add it to the canvas
        openDoor[i].onclick = function () {
            if (this.classList.contains('has-ghost')) {
                if (this.classList.contains('is-locked')) {
                    // console.log('door is locked')
                } else {
                    endGame();
                }
            } else if (this.classList.contains('door')) {
                playAudioDoor();
                this.classList.add('opened');
                this.classList.remove('door');
                score += 10;
                getScore();
                checkDoors();
            }
            if (this.classList.contains('has-coin'))
                this.classList.remove('has-coin');
        };
    }
    checkPowerUps();
}



// G a m e o v e r  S c r e e n
function removeRemainingGifts() {
    var getLeftOverGifts = document.querySelectorAll(".randomGiftItem");
    for (var i = 0, all = getLeftOverGifts.length; i < all; i++)
        getLeftOverGifts[i].remove();
}

function removeRemainingLocks() {
    var getLeftOverLocks = document.querySelectorAll(".is-locked");
    for (var i = 0, all = getLeftOverLocks.length; i < all; i++)
        getLeftOverLocks[i].classList.remove('is-locked');
}

function removeRemainingDoors() {
    var getLeftOverDoors = document.querySelectorAll(".door");
    for (var i = 0, all = getLeftOverDoors.length; i < all; i++) {
        getLeftOverDoors[i].classList.add('opened');
        getLeftOverDoors[i].classList.remove('door');
    }
}


function endGame() {
    cdreset();
    document.getElementById('timer').innerHTML = '';
    var getProgressBar = document.querySelector('.progressbar');
    getProgressBar.remove();
    const endGhost = document.querySelector('.ghost');
    endGhost.classList.add('possessed');
    stopAudio();
    clearTimeout(setLock);

    controls.classList.add('ui-disabled');
    const possessedOverlay = document.getElementById('possessedOverlay');

    setTimeout(function () {
        endGhost.remove();
        canvasDoors.innerHTML = ""; //Reset Game Container
        submitScoreScreen();
    }, 4000);

    function submitScoreScreen() {

        document.querySelector('#dataTop10').innerHTML = '';
        var getUserName = document.getElementById('getUsername');
        getUserName.addEventListener('keyup', playAudioType);
        getUserName.addEventListener('keyup', badWordCatch);
        submitScore.classList.add('active');
        const getEndScore = document.querySelector('.endScore');
        getEndScore.innerHTML = score;

        function badWordCatch() {
            var getUsernameInput3 = document.getElementById('getUsername').value;
            var getValidationMessage2 = document.querySelector('.inputValidate');
            getUsernameInput3 = getUsernameInput3.toLowerCase();

            // split the words by spaces (" ")
            var arr = getUsernameInput3.split(" ");
            // bad words to look for, keep this array in lowercase
            var badWords = ["2g1c", "2 girls 1 cup", "acrotomophilia", "alabama hot pocket", "alaskan pipeline", "anal", "anilingus", "anus", "apeshit", "arsehole", "ass", "asshole", "assmunch", "auto erotic", "autoerotic", "fucker", "babeland", "baby batter", "baby juice", "ball gag", "ball gravy", "ball kicking", "ball licking", "ball sack", "ball sucking", "bangbros", "bangbus", "bareback", "barely legal", "barenaked", "bastard", "bastardo", "bastinado", "bbw", "bdsm", "beaner", "beaners", "beaver cleaver", "beaver lips", "beastiality", "bestiality", "big black", "big breasts", "big knockers", "big tits", "bimbos", "birdlock", "bitch", "bitches", "black cock", "blonde action", "blonde on blonde action", "blowjob", "blow job", "blow your load", "blue waffle", "blumpkin", "bollocks", "bondage", "boner", "boob", "boobs", "booty call", "brown showers", "brunette action", "bukkake", "bulldyke", "bullet vibe", "bullshit", "bung hole", "bunghole", "busty", "butt", "buttcheeks", "butthole", "camel toe", "camgirl", "camslut", "camwhore", "carpet muncher", "carpetmuncher", "chocolate rosebuds", "cialis", "circlejerk", "cleveland steamer", "clit", "clitoris", "clover clamps", "clusterfuck", "cock", "cocks", "coprolagnia", "coprophilia", "cornhole", "coon", "coons", "creampie", "cum", "cumming", "cumshot", "cumshots", "cunnilingus", "cunt", "darkie", "date rape", "daterape", "deep throat", "deepthroat", "dendrophilia", "dick", "dildo", "dingleberry", "dingleberries", "dirty pillows", "dirty sanchez", "doggie style", "doggiestyle", "doggy style", "doggystyle", "dog style", "dolcett", "domination", "dominatrix", "dommes", "donkey punch", "double dong", "double penetration", "dp action", "dry hump", "dvda", "eat my ass", "ecchi", "ejaculation", "erotic", "erotism", "escort", "eunuch", "fag", "faggot", "fecal", "felch", "fellatio", "feltch", "female squirting", "femdom", "figging", "fingerbang", "fingering", "fisting", "foot fetish", "footjob", "frotting", "fuck", "fuck buttons", "fuckin", "fucking", "fucktards", "fudge packer", "fudgepacker", "futanari", "gangbang", "gang bang", "gay sex", "genitals", "giant cock", "girl on", "girl on top", "girls gone wild", "goatcx", "goatse", "god damn", "gokkun", "golden shower", "goodpoop", "goo girl", "goregasm", "grope", "group sex", "g-spot", "guro", "hand job", "handjob", "hard core", "hardcore", "hentai", "homoerotic", "honkey", "hooker", "horny", "hot carl", "hot chick", "how to kill", "how to murder", "huge fat", "humping", "incest", "intercourse", "jack off", "jail bait", "jailbait", "jelly donut", "jerk off", "jigaboo", "jiggaboo", "jiggerboo", "jizz", "juggs", "kike", "kinbaku", "kinkster", "kinky", "knobbing", "leather restraint", "leather straight jacket", "lemon party", "livesex", "lolita", "lovemaking", "make me come", "male squirting", "masturbate", "masturbating", "masturbation", "menage a trois", "milf", "missionary position", "mong", "motherfucker", "mound of venus", "mr hands", "muff diver", "muffdiving", "nambla", "nawashi", "negro", "neonazi", "nigga", "nigger", "nig nog", "nimphomania", "nipple", "nipples", "nsfw", "nsfw images", "nude", "nudity", "nutten", "nympho", "nymphomania", "octopussy", "omorashi", "one cup two girls", "one guy one jar", "orgasm", "orgy", "paedophile", "paki", "panties", "panty", "pedobear", "pedophile", "pegging", "penis", "phone sex", "piece of shit", "pikey", "pissing", "piss pig", "pisspig", "playboy", "pleasure chest", "pole smoker", "ponyplay", "poof", "poon", "poontang", "punany", "poop chute", "poopchute", "porn", "porno", "pornography", "prince albert piercing", "pthc", "pubes", "pussy", "queaf", "queef", "quim", "raghead", "raging boner", "rape", "raping", "rapist", "rectum", "reverse cowgirl", "rimjob", "rimming", "rosy palm", "rosy palm and her 5 sisters", "rusty trombone", "sadism", "santorum", "scat", "schlong", "scissoring", "semen", "sex", "sexcam", "sexo", "sexy", "sexual", "sexually", "sexuality", "shaved beaver", "shaved pussy", "shemale", "shibari", "shit", "shitblimp", "shitty", "shota", "shrimping", "skeet", "slanteye", "slut", "s&m", "smut", "snatch", "snowballing", "sodomize", "sodomy", "spastic", "spic", "splooge", "splooge moose", "spooge", "spread legs", "spunk", "strap on", "strapon", "strappado", "strip club", "style doggy", "suck", "sucks", "suicide girls", "sultry women", "swastika", "swinger", "tainted love", "taste my", "tea bagging", "threesome", "throating", "thumbzilla", "tied up", "tight white", "tit", "tits", "titties", "titty", "tongue in a", "topless", "tosser", "towelhead", "tranny", "tribadism", "tub girl", "tubgirl", "tushy", "twat", "twink", "twinkie", "two girls one cup", "undressing", "upskirt", "urethra play", "urophilia", "vagina", "venus mound", "viagra", "vibrator", "violet wand", "vorarephilia", "voyeur", "voyeurweb", "voyuer", "vulva", "wank", "wanker", "wetback", "wet dream", "white power", "whore", "worldsex", "wrapping men", "wrinkled starfish", "xx", "xxx", "yaoi", "yellow showers", "yiffy", "zoophilia", "🖕", "f_u_c_k", "f-u-c-k"];

            // .toLowerCase will do the case insensitive match!
            var foundBadWords = arr.filter(el => badWords.includes(el));

            if (foundBadWords.length > 0) {
                getValidationMessage2.innerHTML = "No profanity please";
                submitScoreBtn.classList.add("disabled");
            } else {
                getValidationMessage2.innerHTML = "";
                submitScoreBtn.classList.remove("disabled");
            }
        }

        function checkPlayerRank() {
            const endGameMessage = document.querySelector('.endGameMessage');
            const getplayerRank = document.querySelector('#data').innerHTML;
            const convertRank = getplayerRank;
            if (convertRank == '1st' || convertRank == '2nd' || convertRank == '3rd' || convertRank == '4th' || convertRank == '5th' || convertRank == '6th' || convertRank == '7th' || convertRank == '8th' || convertRank == '9th' || convertRank == '10th')
                endGameMessage.innerHTML = 'New High Score';
        }

        // add ajax here
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "get_rank.php?q=" + score, true);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                var rank = data;
                var html = rank.toString();
                var userRank = document.getElementById("data");

                if (html === '1') html = rank + 'st';
                else if (html === '2') html = rank + 'nd';
                else if (html === '3') html = rank + 'rd';
                else if (html === '4') html = rank + 'th';
                else if (html === '5') html = rank + 'th';
                else if (html === '6') html = rank + 'th';
                else if (html === '7') html = rank + 'th';
                else if (html === '8') html = rank + 'th';
                else if (html === '9') html = rank + 'th';
                else if (html === '10') html = rank + 'th';
                else html = '#' + rank;

                userRank.innerHTML = html;
                checkPlayerRank();
            }
        };

        skipScoreBtn.addEventListener('click', skipScore);

        function skipScore() {
            window.scrollTo(0, 0);
            loadingModal.classList.add('active');
            document.querySelector('#dataTop10').innerHTML = '';

            setTimeout(function () {
                window.scrollTo(0, 0);
                gameOver.classList.add("active");
                submitScore.classList.remove('active');
                getTop10();
                loadingModal.classList.remove('active');
                glitchBlack.classList.add('active');
            }, 3000);

            setTimeout(function () {
                glitchBlack.classList.remove('active');
            }, 6000);
        }

        submitScoreBtn.addEventListener('click', sendScore);

        function sendScore() {
            window.scrollTo(0, 0);
            var playerName = document.getElementById('getUsername').value;
            var highScore = score;
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "add_score_to_leaderboard.php", true);
            var myFormData = new FormData();
            myFormData.append("playerName", playerName);
            myFormData.append("highScore", highScore);
            xhttp.send(myFormData);
            loadingModal.classList.add('active');

            setTimeout(function () {
                window.scrollTo(0, 0);
                submitScore.classList.remove('active');
                gameOver.classList.add("active");
                getTop10();
                submitScoreBtn.removeEventListener('click', sendScore);
                loadingModal.classList.remove('active');
                glitchBlack.classList.add('active');
            }, 3000);

            setTimeout(function () {
                glitchBlack.classList.remove('active');
            }, 6000);
        }
    }

    playAudioAlarm();
    playAudioScream();
    possessedOverlay.classList.add('active');
    var hideCoins = document.querySelectorAll(".coin");
    [].forEach.call(hideCoins, function (el) {
        el.classList.add("fadeout");
    });

    removeRemainingDoors();
    removeRemainingGifts();
    removeRemainingLocks();

    setTimeout(function () {
        playAudioCemetery();
    }, 3000);
}



// G e n e r a t e  G h o s t
function conjureGhost() {
    const doorCount = canvas.getElementsByClassName('door').length; //Get the number of doors on canvas

    if (doorCount > 0) {
        const selectRandomDoor = Math.floor(Math.random() * doorCount); //Select a random door in canvas

        const createGhost = document.createElement('div');
        createGhost.classList.add('ghost');
        createGhost.innerHTML = "<img src='./assets/start-ghost.png'/>";
        canvas.appendChild(createGhost);
        document.querySelector('.ghost').remove();
        getDoors[selectRandomDoor].appendChild(createGhost);//Append ghost to random door
        var selectTheRandomDoor = getDoors[selectRandomDoor];
        var selectTheRandomDoorClass = selectTheRandomDoor.classList;
        const randomCoin = ['0', '1', '2', '3', '4', '5', '6', '7'];
        const selectRandomCoin = Math.floor(Math.random() * randomCoin.length);

        //Leave a coin
        if (selectRandomCoin > 2 && selectRandomCoin < 6) {
            const createCoin = document.createElement('div');
            createCoin.classList.add('coin');
            createCoin.innerHTML = "<img src='./assets/coin.png'/>";
            canvas.appendChild(createCoin);
            getDoors[selectRandomDoor].appendChild(createCoin);//Append coin to random door
            getDoors[selectRandomDoor].classList.add('has-coin');
            createCoin.addEventListener('click', collectCoins);
        } else if (selectRandomCoin < 3) {
            setLock = setTimeout(function () {
                selectTheRandomDoorClass.add('is-locked');
                checkPowerUps();
                playAudioDoorLocked();
                checkLockedDoors();

                function checkLockedDoors() {
                    var doorLockedCount = canvas.getElementsByClassName('is-locked').length;
                    var getDoorCount = canvas.getElementsByClassName('door').length;

                    if (getDoorCount === doorLockedCount) {
                        if (coins < 1) {
                            endGame();
                            var possessedOverlay = document.getElementById('possessedOverlay');
                            possessedOverlay.innerHTML = "YOU'RE TRAPPED";
                        }
                    }
                }
            }, ghostAction);
        } else if (selectRandomCoin > 5) {
            randomGift();
        }

        getDoors[selectRandomDoor].classList.add('has-ghost'); //Give class to door with ghost

        //Collect Coins
        function collectCoins() {
            playAudioCoin();
            this.classList.add('coin-collected');
            coins += 1;
            getCoins();
            checkPowerUps();
            score += 10;
            getScore();
        }
    } else {
        //do nothing
    }
    checkPowerUps();
}



// N e w  r o u n d
function newRound() {
    checkPowerUps();
    cdpause();
    clearTimeout(setLock);

    // B o n u s  F l i p
    function bonusFlip() {
        playAudioCards();
        playAudioGypsy();
        controls.classList.add('ui-disabled');

        const createFader = document.createElement('div');
        createFader.classList.add('fadeoutOverlay');
        canvas.appendChild(createFader);

        const createFaderText = document.createElement('span');
        createFaderText.classList.add('ghost-trapped');
        createFaderText.innerHTML = `<h1>Room ${round + 1}</h1>`;
        createFader.appendChild(createFaderText);
        getRound(); //Round Count increase by 1

        //remove progress bar
        var progressbar = document.getElementById('progressbar');
        progressbar.remove();

        //Create bonus Wrapper
        const bonusWrapper = document.createElement('div');
        bonusWrapper.classList.add('bonusScreen');
        canvas.appendChild(bonusWrapper);

        bonusWrapper.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];

        //Add Clouds
        const createClouds = document.createElement('div');
        createClouds.classList.add('clouds');
        bonusWrapper.appendChild(createClouds);

        //Create bonus Title
        const bonusWrapperTitle = document.createElement('div');
        bonusWrapperTitle.classList.add('bonusTitle');
        bonusWrapperTitle.innerHTML = "<div class='screen-title font-smaller'>Choose fortune</div>";
        bonusWrapper.appendChild(bonusWrapperTitle);

        //Create bonus card wrapper
        const bonusCardWrapper = document.createElement('div');
        bonusCardWrapper.classList.add('bonusCardWrapper');
        bonusWrapper.appendChild(bonusCardWrapper);

        var tarrotCard = document.createElement('div');
        tarrotCard.classList.add('tarrotcard');

        const tarrotCoin = document.createElement('div');
        tarrotCoin.classList.add('coin-collected-tarot', 'tarrotCoin');
        tarrotCoin.innerHTML = '<img src="./assets/coin.png"/>';

        //Create bonus card hand
        const bonusCardHand = document.createElement('div');
        bonusCardHand.classList.add('tarot-hand');
        tarrotCard.appendChild(bonusCardHand);

        //Card colors
        var cardColors = ['#63b598', '#ce7d78', '#ea9e70', '#a48a9e', '#85a1a8', '#648177', '#3e6291', '#976094', '#3e3261', '#14a9ad', '#4ca2f9', '#889b69', '#d298e2', '#7b54b4', '#d2737d', '#756a43', '#966753', '#634891', '#79806e', '#6d9b6c', '#ac6550', '#9348af', '#3e8b63', '#c5a4fb', '#996635', '#9b4378', '#589c72', '#679b7c', '#545d88', '#2f7b99', '#a67564', '#618b57', '#809465', '#a1656a', '#6e5785', '#868d57', '#b3be94', '#559990', '#425e3c', '#566ca0', '#caa4aa', '#624f92', '#935b6d', '#916988', '#5c5184', '#8b8b5b', '#9e6d71', '#4a4e70', '#589b78', '#624c8d', '#9f69ad', '#568051', '#8a5747', '#8d504d', '#539397', '#814479', '#ca89a6', '#ba96ce', '#679c9d', '#a5a458', '#5d2c52', '#6c9c57', '#a0985b', '#65a4aa', '#70adb8', '#8da873', '#be608b', '#7f8658', '#3c7e91', '#a3668f', '#a56695', '#ee91e3', '#5e9e7f', '#6b5c97', '#5d558a', '#783f49', '#575074', '#6481a5', '#758054', '#b2b4f0', '#c3c89d', '#9c8d5a', '#6ea177', '#915f7d', '#608ea3', '#67964e', '#375577', '#779950', '#a56554', '#799246', '#4e546d', '#4c7045', '#986b53', '#9b5b62', '#983f7a', '#91537a', '#774d48', '#663f65', '#c79ed2', '#999e70', '#a55f67', '#898f5b', '#975894', '#4a9184', '#815178', '#64820f', '#425e80', '#799659', '#9c695a', '#748a47', '#455186', '#5c8653', '#986b53', '#9e5d65', '#983f7a', '#965a80', '#8a645e', '#70476f', '#c79ed2', '#a5aa7b', '#92565d', '#909665', '#8d578a', '#4d8379', '#88537d', '#808f56', '#7c8562', '#81654f', '#688d8b', '#6a8f77', '#9b8071', '#5d8862', '#aa798d', '#94a064', '#97567a', '#6f5d86', '#788353', '#865575', '#8ca083', '#77829e', '#7b4f80', '#8c9b6f', '#94835b', '#8ca86a', '#8b604f', '#646b99', '#9972aa', '#3f8473', '#978068', '#655381', '#885f99', '#635f6d'];

        //Card values
        var cardValues = ['0', '4', '1', '1', '2', '3'];

        for (var i = 0; i < 6; i++)
            bonusCardWrapper.appendChild(tarrotCard.cloneNode(true));

        var getTarrotCards = document.querySelectorAll('.tarrotcard');

        for (i = 0; i < getTarrotCards.length; i++) {
            getTarrotCards[i].style.backgroundColor = cardColors[Math.floor(Math.random() * cardColors.length)];
            getTarrotCards[i].onclick = function () {
                var chosenCard = cardValues[Math.floor(Math.random() * cardValues.length)];
                var varChosenCardNo = eval(chosenCard);
                var fetchTarrotCards = document.querySelectorAll('.tarrotcard');

                for (i = 0; i < fetchTarrotCards.length; i++)
                    fetchTarrotCards[i].classList.add('unselected');

                this.classList.remove('unselected');
                this.classList.add('selected');

                if (varChosenCardNo === 1) {
                    bonusWrapperTitle.innerHTML = "<div class='screen-title font-smaller'>Good fortune</div>";
                    playAudioGoodFortune();
                    this.appendChild(tarrotCoin.cloneNode(true));
                    playAudioCoin();
                    coins += 1;
                    getCoins();
                    score += 50;
                    getScore();
                } else if (varChosenCardNo === 2) {
                    bonusWrapperTitle.innerHTML = "<div class='screen-title font-smaller'>Good fortune</div>";
                    playAudioGoodFortune();
                    for (var i = 0; i < varChosenCardNo; i++) {
                        this.appendChild(tarrotCoin.cloneNode(true));
                        playAudioCoin();
                        coins += 1;
                        getCoins();
                        score += 100;
                        getScore();
                    }
                } else if (varChosenCardNo === 3) {
                    bonusWrapperTitle.innerHTML = "<div class='screen-title font-smaller'>Good fortune</div>";
                    playAudioGoodFortune();

                    for (var i = 0; i < varChosenCardNo; i++) {
                        this.appendChild(tarrotCoin.cloneNode(true));
                        playAudioCoin();
                        coins += 1;
                        getCoins();
                        score += 150;
                        getScore();
                    }

                } else if (varChosenCardNo === 4) {
                    bonusWrapperTitle.innerHTML = "<div class='screen-title font-smaller'>Bad fortune</div>";
                    playAudioBadFortune();

                    if (coins < 1) coins = 0;
                    else coins -= 1;

                    playAudioCoinMinus();
                    subtractCoins();
                    const getCoinImg = document.querySelector('.coins');
                    const insertCoinImg = document.createElement('div');
                    insertCoinImg.classList.add('coin-minus');
                    insertCoinImg.innerHTML = "<img src='./assets/coin.png'/>";
                    getCoinImg.appendChild(insertCoinImg);
                    getCoins();
                } else if (varChosenCardNo === 0) {
                    bonusWrapperTitle.innerHTML = "<div class='screen-title font-smaller'>Bad fortune</div>";
                    playAudioBadFortune();

                    if (coins < 3) coins = 0;
                    else coins -= 2;

                    subtractCoins();
                    const getCoinImg = document.querySelector('.coins');
                    const insertCoinImg = document.createElement('div');
                    insertCoinImg.classList.add('coin-minus');
                    insertCoinImg.innerHTML = "<img src='./assets/coin.png'/>";
                    getCoinImg.appendChild(insertCoinImg);
                    playAudioCoinMinus();
                } else {
                    //do nothing
                }

                setTimeout(function () {
                    continueNext();
                    score += 100;
                    getScore();

                }, 3000); // time before new round

                function continueNext() {
                    checkTimers();
                    cdreset();
                    countdown();
                    controls.classList.remove('ui-disabled');
                    createFader.remove();
                    getRandomBg.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];
                    const getBonusWrapper = document.querySelector('.bonusScreen');
                    getBonusWrapper.remove();
                    const progressBar = document.createElement('div');
                    progressBar.setAttribute("id", "progressbar");
                    const controlBar = document.querySelector('.controls');
                    controlBar.appendChild(progressBar);

                    createProgressbar('progressbar', '60s', function () {
                        endGame();
                    });

                    getInventoryThermal();
                    getInventoryCrystal();
                    getInventoryK2();
                    checkPowerUps();

                    var getExistingDoors = document.querySelectorAll(".opened");
                    var getLastDoor = document.querySelector(".door");
                    [].forEach.call(getExistingDoors, function (el) {
                        el.remove();
                    });
                    getLastDoor.remove();

                    makeDoors(); //Reset Doors
                    conjureGhost();

                }
            };
        }
    }
    bonusFlip();
}



// C h e c k  p o w e r u p s
function checkPowerUps() {

    if (inventoryThermalAmount > 0) {
        if (coins > 2) powerThermal.classList.remove('disabled-equipment');
        else powerThermal.classList.add('disabled-equipment');
    } else {
        powerThermal.classList.add('disabled-equipment');
    }

    if (inventoryCrystalAmount > 0) {
        if (coins > 0) powerCrystal.classList.remove('disabled-equipment');
        else powerCrystal.classList.add('disabled-equipment');
    } else {
        powerCrystal.classList.add('disabled-equipment');
    }
    if (inventoryK2Amount > 0) {
        if (coins > 1) powerK2.classList.remove('disabled-equipment');
        else powerK2.classList.add('disabled-equipment');
    } else {
        powerK2.classList.add('disabled-equipment');
    }

    if (coins > 0) powerKey.classList.remove('disabled-equipment');
    else powerKey.classList.add('disabled-equipment');

}

// P o w e r u p s
function powerUps() {
    powerThermal.addEventListener('click', useThermal);
    powerCrystal.addEventListener('click', useCrystal);
    powerK2.addEventListener('click', useK2);
    powerKey.addEventListener('click', useKey);
}

// T h e r m a l
function useThermal() {
    score += 100;
    coins -= 3;
    playAudioEquipmentThermal();
    getScore();
    subtractCoins();
    getInventoryThermal();

    var thermal = document.querySelectorAll('.emoji');
    var thermalParent = document.getElementsByClassName('door');
    var powerupOverlay = document.getElementById('powerupOverlay');

    for (var i = 0; i < doorAmount; i++) {
        thermal[i].classList.add("powerup-blink");
        powerupOverlay.classList.add('active');
    }

    setTimeout(function () {
        for (var i = 0; i < doorAmount; i++) {
            thermal[i].classList.remove('powerup-blink'); //remove powerup
            powerupOverlay.classList.remove('active');
        }
    }, 1000);

    for (i = 0; i < thermalParent.length; i++)
        thermalParent[i].classList.add("powerup-running");

    setTimeout(function () {
        for (i = 0; i < thermalParent.length; i++)
            thermalParent[i].classList.remove("powerup-running");
    }, 1000);
}



// C r y s t a l  b a l l
function useCrystal() {
    score += 50;
    coins -= 1;
    playAudioEquipmentCrystalball();
    getScore();
    subtractCoins();
    getInventoryCrystal();
    const doorCount = canvas.getElementsByClassName('door').length; //Get the number of doors on canvas

    if (doorCount > 0) {

        const selectRandomDoor1 = Math.floor(Math.random() * doorCount); //Select a random door in canvas
        const selectRandomDoor2 = Math.floor(Math.random() * doorCount); //Select a random door in canvas
        const selectGhostDoor = document.querySelector('.has-ghost');
        getDoors[selectRandomDoor1].classList.add('has-prediction');
        getDoors[selectRandomDoor2].classList.add('has-prediction');
        selectGhostDoor.classList.add('has-prediction');

        setTimeout(function () {
            var elems = document.querySelectorAll(".has-prediction");
            for (i = 0; i < elems.length; i++)
                elems[i].classList.remove("has-prediction");
        }, 2000);
    }
}



// K e y
function useKey() {
    score += 50;
    coins -= 1;
    playAudioDoorUnlock();
    getScore();
    subtractCoins();

    var getLockedDoors = document.querySelectorAll(".is-locked");
    [].forEach.call(getLockedDoors, function (el) {
        el.classList.remove("is-locked");
    });
    checkPowerUps();
}


// K 2 m e t e r
function useK2() {
    score += 70;
    coins -= 2;
    playAudioEquipmentK2();
    getScore();
    subtractCoins();
    getInventoryK2();

    const doorCount = canvas.getElementsByClassName('door').length; //Get the number of doors on canvas

    if (doorCount > 0) {
        const selectGhostDoor = document.querySelector('.has-ghost');
        var selectGhostDoorPrevious = selectGhostDoor.previousElementSibling;
        var selectGhostDoorNext = selectGhostDoor.nextElementSibling;
        selectGhostDoor.classList.add('k2-hot');

        if (selectGhostDoorPrevious)
            selectGhostDoorPrevious.classList.add('k2-hot');
        if (selectGhostDoorPrevious.previousElementSibling)
            selectGhostDoorPrevious.previousElementSibling.classList.add('k2-medium');
        if (selectGhostDoorPrevious.previousElementSibling.previousElementSibling)
            selectGhostDoorPrevious.previousElementSibling.previousElementSibling.classList.add('k2-low');

        if (selectGhostDoorNext)
            selectGhostDoorNext.classList.add('k2-hot');
        if (selectGhostDoorNext.nextElementSibling)
            selectGhostDoorNext.nextElementSibling.classList.add('k2-medium');
        if (selectGhostDoorNext.nextElementSibling.nextElementSibling)
            selectGhostDoorNext.nextElementSibling.nextElementSibling.classList.add('k2-low');

        setTimeout(function () {
            var elems = document.querySelectorAll(".k2-hot");
            [].forEach.call(elems, function (el) {
                el.classList.remove("k2-hot");
            });
        }, 3000);

        setTimeout(function () {
            var elems = document.querySelectorAll(".k2-medium");
            [].forEach.call(elems, function (el) {
                el.classList.remove("k2-medium");
            });
        }, 3000);

        setTimeout(function () {
            var elems = document.querySelectorAll(".k2-low");
            [].forEach.call(elems, function (el) {
                el.classList.remove("k2-low");
            });
        }, 3000);
    }
}



// R a n d o m  g i f t s
function randomGift() {

    const doorCount = canvas.getElementsByClassName('door').length; //Get the number of doors on canvas
    const gifts = ['Thermal', 'Crystal', 'K2'];
    const selectGift = Math.floor(Math.random() * gifts.length);

    if (doorCount > 0) {
        const selectRandomDoor = Math.floor(Math.random() * doorCount); //Select a random door in canvas

        if (selectGift === 0) {
            const createGiftThermal = document.createElement('div');
            createGiftThermal.classList.add('randomGiftItem', 'gift-thermal');
            createGiftThermal.innerHTML = "<img src='./assets/equipment-thermal.png'/>";
            createGiftThermal.addEventListener('click', collectGiftThermal);
            getDoors[selectRandomDoor].appendChild(createGiftThermal);

            function collectGiftThermal() {
                this.classList.add('gift-collected');
                useThermal();
                getScore();
                coins += 3;
                subtractCoins();
            }
        } else if (selectGift === 1) {
            const createGiftCrystal = document.createElement('div');
            createGiftCrystal.classList.add('randomGiftItem', 'gift-crystal');
            createGiftCrystal.innerHTML = "<img src='./assets/equipment-crystalball.png'/>";
            createGiftCrystal.addEventListener('click', collectGiftCrystal);
            getDoors[selectRandomDoor].appendChild(createGiftCrystal);

            function collectGiftCrystal() {
                this.classList.add('gift-collected');
                useCrystal();
                getScore();
                coins += 1;
                subtractCoins();
            }
        } else if (selectGift === 2) {
            const createGiftK2 = document.createElement('div');
            createGiftK2.classList.add('randomGiftItem', 'gift-k2');
            createGiftK2.innerHTML = "<img src='./assets/equipment-k2.png'/>";
            createGiftK2.addEventListener('click', collectGiftK2);
            getDoors[selectRandomDoor].appendChild(createGiftK2);

            function collectGiftK2() {
                this.classList.add('gift-collected');
                useK2();
                getScore();
                coins += 2;
                subtractCoins();
            }
        }
    }
}



/*
           R E S E T
*/
function resetGame() {

    speechCount();
    stopAudio();
    playAudioSelectBtnBack();

    controls.classList.remove('ui-disabled');
    gameOver.classList.toggle("active");
    canvas.classList.remove('active');
    controls.classList.remove('active');

    const endGameMessage = document.querySelector('.endGameMessage');
    endGameMessage.innerHTML = '';

    const startScreen = document.querySelector('.startScreen');
    startScreen.classList.add('active');

    const possessedOverlay = document.getElementById('possessedOverlay');
    possessedOverlay.innerHTML = "";
    possessedOverlay.classList.remove('active');

    if (document.contains(document.querySelector(".coin-minus")))
        document.querySelector(".coin-minus").remove();

    round = 0;
    score = 0;
    coins = 20;
    gameCountDown = 10;
    countDown = 0;
    inventoryThermalAmount = 999;
    inventoryCrystalAmount = 999;
    inventoryK2Amount = 999;
}