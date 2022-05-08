var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sprite1 = createSprite(250, 200, 10, 400);
var sprite2 = createSprite(150, 300, 10, 450);
var sprite3 = createSprite(50, 200, 150, 30);
var sprite4 = createSprite(80, 150, 130,30);
var sprite5 = createSprite(80, 250, 130,30);
var sprite6 = createSprite(50, 100, 150,30);
var sprite7 = createSprite(260, 160, 20, 20);
var sprite8 = createSprite(400, 130, 20, 20);
var sprite9 = createSprite(260, 100,20,20);
var sprite0 = createSprite(400, 190,20,20);
var sprite10 = createSprite(10, 390, 10, 10);
var sprite = createSprite(330, 330, 110, 15);
var sprite17 = createSprite(400,400, 30,30);
var spritec = createSprite(200, 200, 70, 70);
var sprited = createSprite(200, 200, 70, 70);

var score = 0;
var scora = 0;
sprite0.velocityX= 5;
sprite9.velocityX= 5;
sprite8.velocityX= 5;
sprite7.velocityX= 5;
var startx=20, starty=20, angle=40, increment=5, radius=10;



createEdgeSprites();
function draw() {
  
  background("green");
  
  drawSprites();
  textSize(18);
  text(score,25,25);
   text(scora, 25,50);
   angle=angle+increment;
sprite.rotation;  
  sprite.rotation=60-angle;
spritec.rotation=60-angle;
sprited.rotation=90-angle;

  sprite0.bounceOff(edges);
  sprite0.bounceOff(sprite1);
  sprite9.bounceOff(edges);
  sprite9.bounceOff(sprite1);
  sprite8.bounceOff(edges);
  sprite8.bounceOff(sprite1);
  sprite7.bounceOff(edges);
  sprite7.bounceOff(sprite1);
  sprite10.bounceOff(sprite1);
  sprite10.bounceOff(sprite2);
  sprite10.bounceOff(sprite3);
  sprite10.bounceOff(sprite4);
  sprite10.bounceOff(sprite5);
  sprite10.bounceOff(sprite6);
  sprite10.bounceOff(sprite17);

  sprite10.bounceOff(edges);
  
  
  
  if (keyDown("w")) {
    
    sprite10.y = sprite10.y + -5;
    
  }
  if (keyDown("s")) {
    sprite10.y = sprite10.y + 5;
    
  }
  
   if (keyDown("a")) {
    sprite10.x = sprite10.x + -5;
    
  }
   if (keyDown("d")) {
    sprite10.x= sprite10.x + 5;
    
  }
   if (sprite10.isTouching(sprite3)) {
    sprite10.y = 325;
    sprite10.x =75;
    score = score+1;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
  if (sprite10.isTouching(sprite4)) {
    sprite10.y = 325;
    sprite10.x =75;
    score = score+1;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
  if (sprite10.isTouching(sprite5)) {
    sprite10.y = 325;
    sprite10.x =75;
    score = score+1;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
  if (sprite10.isTouching(sprite6)) {
    sprite10.y = 325;
    sprite10.x =75;
    score = score+1;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
  if (sprite10.isTouching(sprite1)) {
    sprite10.y = 325;
    sprite10.x =75;
    score = score+1;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
  if (sprite10.isTouching(sprite2)) {
    sprite10.y = 325;
    sprite10.x =75;
    score = score+1;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
   if (sprite10.isTouching(sprited)) {
    sprite10.y = 05;
    sprite10.x =395;
    scora = scora +25;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
   if (sprite10.isTouching(sprite7)) {
    sprite10.y = 325;
    sprite10.x =75;
    score = score+1;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
    if (sprite10.isTouching(sprite8)) {
    sprite10.y = 325;
    sprite10.x =75;
    score = score+1;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
    if (sprite10.isTouching(sprite9)) {
    sprite10.y = 325;
    sprite10.x =75;
    score = score+1;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
    if (sprite10.isTouching(sprite0)) {
    sprite10.y = 325;
    sprite10.x =75;
    score = score+1;
    playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  }
   
  
  if (sprite10.isTouching(sprite)) {
    sprite10.y = 325;
    sprite10.x =75;
    score = score+10;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
   if (sprite10.isTouching(sprite17)) {
    sprite10.y = 325;
    sprite10.x =75;
    scora = scora+50;
     playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  
  }
  }
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
