var score = 0;
var userKeys = 0;
var keys = [];
var userClickedKey;
var i = 0;

function keyListener() {
    $(document).on("keydown", function() {
        $(".simon__subtitle").css("animation", "none");
        $(".simon__subtitle").text("score: " + score);
        playKey();
        mouseListener();
        $(document).off("keydown");
    });
}

function mouseListener() {
    $(".simon__box").on("mousedown", function(event) {
        userClickedKey = event.target.className.split(" ")[0];
        if(userClickedKey == keys[i]) {
            switchIt(i);
            i++;
            userKeys++;
            if(userKeys == keys.length) {
                playKey();
                i = 0;
                userKeys = 0;
                score++
                $(".simon__subtitle").text("score: " + score);
            }
        } else{
            $("body").css("background-color", "red");
            setTimeout(clearBG, 100);
            $(".simon__subtitle").text("Oops, wrong button!");
            setTimeout(function() {
                location.reload();
            }, 2000)
        }
    })
}

function randomizer() {
    let allKeys = ["simon__green", "simon__red", "simon__yellow", "simon__blue"];
    let randomNumber = Math.floor(Math.random() * 4);
    return allKeys[randomNumber]
}

function setNoneShadow(theKey) {
    $(".simon__" + theKey).css("box-shadow", "none");
}

function clearBG() {
    $("body").css("background-color", "#071c3a");
}

function switchIt(i) {
    switch(keys[i]) {
        case "simon__green":
            let audio1 = new Audio("sounds/sound1.mp3");
            $(".simon__green").css("box-shadow", "0 0 30px 5px #fff");
            audio1.play();
            setTimeout(function() {
                setNoneShadow("green");
            }, 300);
            break;
        case "simon__red":
            let audio2 = new Audio("sounds/sound2.mp3");
            $(".simon__red").css("box-shadow", "0 0 30px 5px #fff");
            audio2.play();
            setTimeout(function() {
                setNoneShadow("red");
            }, 300);
            break;
        case "simon__yellow":
            let audio3 = new Audio("sounds/sound3.mp3");
            $(".simon__yellow").css("box-shadow", "0 0 30px 5px #fff");
            audio3.play();
            setTimeout(function() {
                setNoneShadow("yellow");
            }, 300);
            break;
        case "simon__blue":
            let audio4 = new Audio("sounds/sound4.mp3");
            $(".simon__blue").css("box-shadow", "0 0 30px 5px #fff");
            audio4.play();
            setTimeout(function() {
                setNoneShadow("blue");
            }, 300);
            break;
    }
}

function playKey() {
    let selectedKey = randomizer();
    keys.push(selectedKey);
    setTimeout(function() {
        switchIt(keys.length - 1);
    }, 600);
}

keyListener();