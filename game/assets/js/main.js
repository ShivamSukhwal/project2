let gameScene = new Phaser.Scene("Game");

gameScene.preload = function() {
  this.load.image("background", "assets/images/thehouse.png");
  this.load.image("player", "assets/images/howl.png");
};

gameScene.create = function() {
  let bg = this.add.sprite(0, 0, "background");

  bg.setOrigin(0, 0);

  let Player = this.add.sprite(50, 180, "player");
  Player.depth = 1;

  gameScene.cursors = this.input.keyboard.createCursorKeys();
};

gameScene.update = function() {
  // Update based on keypress here!
  if (gameScene.cursors.right.isDown) {
    gameScene.player.x += 5;
  }
  if (gameScene.cursors.left.isDown) {
    gameScene.player.x -= 5;
  }
  if (gameScene.cursors.up.isDown) {
    gameScene.player.y -= 5;
  }
  if (gameScene.cursors.down.isDown) {
    gameScene.player.y += 5;
  }
};
let config = {
  type: Phaser.AUTO,
  width: 652,
  height: 360,
  scene: gameScene
};

let game = new Phaser.Game(config);
