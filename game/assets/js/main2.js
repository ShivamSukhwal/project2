const gameState = {};

function preload() {
  this.load.image("background", "assets/images/thehouse.png");
  this.load.image("player", "assets/images/howl.png");
}

function create() {
  let bg = this.add.sprite(0, 0, "background");
  bg.setOrigin(0, 0);
  gameState.player = this.add.sprite(150, 200, "player");
  // Set cursor keys here!
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  // Update based on keypress here!
  if (gameState.cursors.right.isDown) {
    gameState.player.x += 5;
  }
  if (gameState.cursors.left.isDown) {
    gameState.player.x -= 5;
  }
  if (gameState.cursors.up.isDown) {
    gameState.player.y -= 5;
  }
  if (gameState.cursors.down.isDown) {
    gameState.player.y += 5;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 500,
  backgroundColor: "#5f2a55",
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);
