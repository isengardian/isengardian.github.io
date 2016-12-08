var leftBoundary = -29;
var rightBoundary = 29;
var topBoundary = -36;
var bottomBoundary = 36;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var controls = new THREE.OrbitControls(camera, renderer.domElement);
var endPoint = -36;
var passNum = 0;
var level = 1;
var lives = 5;
var score = 0;
var passObj = $('#pass');
var levelObj = $('#level');
var livesObj = $('#lives');
var scoreObj = $('#score');
var levelRate = 1.0;

var ambient = new THREE.AmbientLight(0xffffff, 0.1);
var light = new THREE.SpotLight(0xffffff, 1);

var texture = new THREE.TextureLoader().load("assets/playGround.png");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

var matFloor = new THREE.MeshPhongMaterial({map: texture});
var geoFloor = new THREE.BoxGeometry(60, 1, 80);
var mshFloor = new THREE.Mesh(geoFloor, matFloor);

function initScene() {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    camera.position.set(0, 60, 0);

    light.position.set(60, 100, -10);
    light.castShadow = true;
    light.angle = Math.PI / 4;
    light.penumbra = 0.05;
    light.decay = 1;
    // light.distance = 200;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 200;
    var lightHelper = new THREE.SpotLightHelper(light, 1);

    mshFloor.receiveShadow = true;
    mshFloor.position.set(0, -0.05, 0);

    scene.add(camera);
    scene.add(mshFloor);
    scene.add(ambient);
    scene.add(light);
    addFrog();
    addCars();
    addLogs();
    // scene.add(lightHelper);
    scene.add(new THREE.AxisHelper(10));

    renderer.setSize(window.innerWidth, window.innerHeight);
    enableControl();
    document.body.appendChild(renderer.domElement);
    $('canvas').append('<p>Lives: <span>5</span></p><p>Lives: <span>5</span></p>');
}

function enableControl() {
    // controls.addEventListener('change', render);
    controls.minDistance = 20;
    controls.maxDistance = 80;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enablePan = false;
    controls.update();
    window.addEventListener('resize', onResize, false);

    $(document).keydown(function (e) {
        if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
            e.preventDefault();
        }
        if (e.keyCode == 38) {
            up();
        } else if (e.keyCode == 40) {
            down();
        } else if (e.keyCode == 37) {
            left();
        } else if (e.keyCode == 39) {
            right();
        }
    });
}

function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = (window.innerWidth / window.innerHeight);
    camera.updateProjectionMatrix();
}

var frog;
var respawnPos = [0, 1, 36];
var best = respawnPos[2];
function addFrog() {
    var geometry = new THREE.BoxGeometry(3, 1, 3);
    var material = new THREE.MeshPhongMaterial({color: 0x228B22});
    frog = new THREE.Mesh(geometry, material);
    frog.size = [3, 3];
    frog.castShadow = true;
    frog.position.set(respawnPos[0], respawnPos[1], respawnPos[2]);
    scene.add(frog);
}

var vertical = 8;
function up() {
    console.log('up');
    if (frog.position.z - vertical < topBoundary) return;
    if (frog.position.z - vertical == endPoint) {
        win();
        return;
    }
    frog.position.z -= vertical;
    if (frog.position.z < best) {
        best = frog.position.z;
        score += 10;
        scoreObj.text(score);
    }

    play('hop');
}

function down() {
    if (frog.position.z + vertical > bottomBoundary) return;
    frog.position.z += vertical;
    play('hop');
}

var parallel = 2;
function left() {
    if (frog.position.x - parallel < leftBoundary) return;
    frog.position.x -= parallel;
    play('hop');
}

function right() {
    if (frog.position.x + parallel > rightBoundary) return;
    frog.position.x += parallel;
    play('hop');
}

function resetFrog() {
    frog.position.set(respawnPos[0], respawnPos[1], respawnPos[2]);
}

var truckSize = [8, 3, 3.5];
var carSize = [6, 2, 3.5];
var cadillac = new THREE.TextureLoader().load("assets/cadillac.jpg");
var audi = new THREE.TextureLoader().load("assets/audi.jpg");
var cool = new THREE.TextureLoader().load("assets/cool.jpg");
var carTexture = [cadillac, audi, cool];
var cars = [];
var carNum = [3, 2, 3, 1];
function addCars() {
    var firstRow = 4.3;
    var firstColumn = 25;
    var globalHeight = 2.5;
    var normalSpeed = 0.1;
    var fastSpeed = 0.35;
    var movingDir = -1;
    var offset = 8;
    var ifCross = false;
    for (var i in carNum) {
        var num = carNum[i];
        var first = firstColumn - i * 5;
        var speed = normalSpeed * Math.random() * 2 + 0.1;
        for (var j = 0; j < num; ++j) {
            var size;
            if (num == 1) {
                size = carSize;
            } else {
                size = truckSize;
            }
            var geometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
            var material = new THREE.MeshPhongMaterial({map: carTexture[parseInt(Math.random() * carTexture.length)]});
            var car = new THREE.Mesh(geometry, material);
            car.castShadow = true;
            car.position.set(first, globalHeight, firstRow);
            car.speed = (num == 1 ? fastSpeed : speed) * movingDir;
            car.size = [size[0], size[2]];
            scene.add(car);
            cars.push(car);
            first -= 10 + (Math.random() * 15);
        }
        movingDir *= -1;
        firstRow += offset;
        ifCross = !ifCross;
    }
}

function animateCars() {
    for (var i in cars) {
        var car = cars[i];
        if (car.position.x + car.speed > rightBoundary) {
            car.position.x = leftBoundary - car.speed;
        } else if (car.position.x + car.speed < leftBoundary) {
            car.position.x = rightBoundary - car.speed;
        }
        car.position.x += car.speed * levelRate;
    }
    collision();
}

var logTexture = new THREE.TextureLoader().load("assets/log.png");
logTexture.wrapS = THREE.ClampToEdgeWrapping;
logTexture.wrapT = THREE.ClampToEdgeWrapping;
var logPos = [
    [[-20, 0.5, -28], [0, 0.5, -28], [19, 0.51, -28]],
    [[-14, 0.5, -20], [13, 0.5, -20]],
    [[-22, 0.5, -12], [-3, 0.5, -12], [20, 0.5, -12]]
];
var logSize = [
    [[3, 3, 10], [3, 3, 8], [3, 3, 14]],
    [[3, 3, 20], [3, 3, 14]],
    [[3, 3, 8], [3, 3, 12], [3, 3, 10]]
];
var logSpeed = [0.1, -0.14, 0.12];
var logs = [];
function addLogs() {
    var material = new THREE.MeshPhongMaterial({map: logTexture});
    for (var i in logPos) {
        var pos = logPos[i];
        var sizes = logSize[i];
        var speed = logSpeed[i];
        for (var j in pos) {
            var geometry = new THREE.CylinderBufferGeometry(sizes[j][0], sizes[j][1], sizes[j][2]);
            var log = new THREE.Mesh(geometry, material);
            log.castShadow = true;
            log.position.set(pos[j][0], pos[j][1], pos[j][2]);
            log.speed = speed;
            log.rotation.z = Math.PI / 2;
            log.size = [sizes[j][2], sizes[j][0]];
            scene.add(log);
            logs.push(log)
        }
    }
}

function animateLogs() {
    for (var i in logs) {
        var log = logs[i];
        if (log.position.x + log.speed > rightBoundary) {
            log.position.x = leftBoundary - log.speed;
        } else if (log.position.x + log.speed < leftBoundary) {
            log.position.x = rightBoundary - log.speed;
        }
        log.position.x += log.speed * levelRate;
    }
    drop();
}

function collision() {
    var frogLeft = frog.position.x - frog.size[0] / 2;
    var frogRight = frog.position.x + frog.size[0] / 2;
    var frogHead = frog.position.z + frog.size[1] / 2;
    var frogTail = frog.position.z - frog.size[1] / 2;
    for (var i in cars) {
        var car = cars[i];
        var carLeft = car.position.x - car.size[0] / 2;
        var carRight = car.position.x + car.size[0] / 2;
        var carTop = car.position.z + car.size[1] / 2;
        var carBottom = car.position.z - car.size[1] / 2;
        if (frogLeft <= carRight && frogRight >= carLeft && frogHead >= carBottom && frogTail <= carTop) {
            play('squash');
            resetFrog();
            --lives;
            livesObj.text(lives);
            break;
        }
    }
}

function drop() {
    if (frog.position.z > -12 || frog.position.z < -28) return;
    var amendment = 1.5;
    var frogLeft = frog.position.x - frog.size[0] / 2;
    var frogRight = frog.position.x + frog.size[0] / 2;
    var frogHead = frog.position.z - frog.size[1] / 2;
    var frogTail = frog.position.z + frog.size[1] / 2;
    var dead = true;
    for (var i in logs) {
        var log = logs[i];
        if (log.position.z != frog.position.z) continue;
        var logLeft = log.position.x - log.size[0] / 2;
        var logRight = log.position.x + log.size[0] / 2;
        var logTop = log.position.z - log.size[1] / 2;
        var logBottom = log.position.z + log.size[1] / 2;
        if (frogLeft <= logRight - amendment && frogRight >= logLeft + amendment && frogHead >= logTop - amendment && frogTail <= logBottom + amendment) {
            console.log(frogHead, frogTail);
            console.log(logTop, logBottom);
            console.log(log.position.z);
            console.log(frog.position.z);
            frog.position.x += log.speed * levelRate;
            frog.position.y = 3.5;
            dead = false;
        }
    }
    if (dead) {
        play('plunk');
        resetFrog();
        --lives;
        livesObj.text(lives);
    }
}

function playBackgroundMusic() {
    var bgm = document.createElement('audio');
    bgm.setAttribute('src', 'audio/background.mp3');
    bgm.setAttribute('loop', 'true');
    // bgm.play();
    // bgm.pause();
}

function play(name) {
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'audio/' + name + '.wav');
    audio.play();
}

function render() {
    requestAnimFrame(render);
    if (lives == 0) {
        if (confirm('Game Over, Your Final Score is ' + score + '. Try Again?')) {
            passNum = 0;
            level = 1;
            lives = 5;
            score = 0;
            passObj.text(passNum);
            levelObj.text(level);
            livesObj.text(lives);
            scoreObj.text(score);
        }
    }
    animate();
    renderer.render(scene, camera);
}

function win() {
    ++passNum;
    passObj.text();
    if (passNum == 5) {
        ++level;
        levelRate += level * 0.1;
        levelObj.text(level);
        passNum = 0;
    }
    score += 50;
    best = respawnPos[2];
    scoreObj.text(score);
    passObj.text(passNum);
    resetFrog();
}

function animate() {
    frog.position.y = respawnPos[1];
    animateCars();
    animateLogs();
}

initScene();
playBackgroundMusic();
render();
