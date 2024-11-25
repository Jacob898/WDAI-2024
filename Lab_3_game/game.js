const canvas = document.getElementById("game-canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

// UI Elements

const fullHeartImg = new Image();
fullHeartImg.src = "images/full_heart.png";
const emptyHeartImg = new Image();
emptyHeartImg.src = "images/empty_heart.png";
const zombieImg = new Image();
zombieImg.src = "images/walkingdead.png";
const crosshairImg = new Image();
crosshairImg.src = "images/aim.png";
const sadMusic = new Audio();
sadMusic.src = "sound/sad-music.mp3";

// Game Variables
let score = 100;
let lives = 3;
let gameRunning = false;
let zombies = [];
let crosshairPos = { x: 0, y: 0};

//Game constants
const heartSize = 50;
const zombieSize = { width: 200, height: 312 };
const crosshairSize = 200;

// Random function
const getRandom = (min, max) => Math.random() * (max - min) + min;


// Zombie Logic
function spawnZombie() {
    let modifier = getRandom(0.5, 1);

    const zombie = {
        x: canvas.width,
        y: getRandom(canvas.height - zombieSize.height*modifier,zombieSize.height),
        speed: getRandom(2, 10),
        animationFrame: 0,
        width: zombieSize.width * modifier,
        height: zombieSize.height * modifier,
    };
    zombies.push(zombie);

}

function animateZombie() {
    zombies.forEach((zombie) => {
        zombie.animationFrame += 1;
        zombie.animationFrame %= 10;
    })
}

function moveZombies() {
    // Move Zombies
    zombies.forEach((zombie, index) => {
        zombie.x -= zombie.speed;

        // Check if zombie passed
        if (zombie.x + zombieSize.width < 0) {
            zombies.splice(index, 1);
            lives--;

            if (lives <= 0) {
                stopGame();
            }
        }
    });
}


// Draw Everything
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Zombies
    zombies.forEach((zombie) => {
        ctx.drawImage(
            zombieImg,
            zombie.animationFrame * 200,
            0,
            200,
            312,
            zombie.x,
            zombie.y,
            zombie.width,
            zombie.height
        );
    });

    // Draw Hearts
    for (let i = 0; i < 3; i++) {
        if (i < lives) {
            heartImg = fullHeartImg;
        } else {
            heartImg = emptyHeartImg;
        }

        ctx.drawImage(
            heartImg,
            10 + i*(heartSize+10),
            10,
            heartSize,
            heartSize,
        )
    }

    //Draw pointTracker
    ctx.font = '50px Comic Sans MS';
    ctx.fillStyle = "white";
    ctx.fillText(
        "0".repeat(5-score.toString().length) + score,
        canvas.width - 150,
        50
    )

    // Draw Crosshair
    ctx.drawImage(
        crosshairImg,
        crosshairPos.x - crosshairSize / 2,
        crosshairPos.y - crosshairSize / 2,
        crosshairSize,
        crosshairSize
    );
}

// Main Game Loop
function gameLoop() {
    if (gameRunning) {
        draw();
        moveZombies();
        requestAnimationFrame(gameLoop);
        if (score <= 0) {
            stopGame();
        }
    }
}

// Start Game
function startGame() {
    score = 100;
    lives = 3;
    zombies = [];
    gameRunning = true;

    // Start spawning zombies
    setInterval(spawnZombie, 1000);
    setInterval(animateZombie, 100);
    gameLoop();
}

// Stop Game
function stopGame() {
    draw()
    sadMusic.play()
    gameRunning = false;
    resetContainer.style.display = "flex";
    body.style.cursor = "pointer";
    totalScore.innerHTML = score;
}

// Shooting
canvas.addEventListener("click", (e) => {
    if (!gameRunning) return;

    const x = crosshairPos.x;
    const y = crosshairPos.y;
    let hit = false;

    zombies.forEach((zombie, index) => {
        if (
            x >= zombie.x &&
            x <= zombie.x + zombieSize.width &&
            y >= zombie.y &&
            y <= zombie.y + zombieSize.height
        ) {
            zombies.splice(index, 1);
            score += 20;
            hit = true;
        }
    });
    if (!hit) {
        score -= 5;
    }
});

// Cursor Movement
canvas.addEventListener("mousemove", (e) => {
    crosshairPos.x = e.offsetX;
    crosshairPos.y = e.offsetY;
});

// Start Screen
startContainer=document.getElementById("game-start-container");
startButton=document.getElementById("start-button");
body=document.querySelector("body");

startButton.addEventListener("click", () => {
    startContainer.style.display = "none";
    body.style.cursor = "none";
    startGame();
});

// Reset screen
resetContainer=document.getElementById("game-reset-container");
reset_Button=document.getElementById("reset-button");
totalScore=document.getElementById("total-score");

reset_Button.addEventListener("click", () => {
    resetContainer.style.display = "none";
    body.style.cursor = "none";
    sadMusic.pause();
    startGame();
});

