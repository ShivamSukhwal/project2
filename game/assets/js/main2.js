let gameScene = new Phaser.Scene("Game");

gameScene.init = function() {
  this.stats = {
    health: 100,
    happiness: 100
  };
};

gameScene.preload = function() {
  this.load.image("yard", "assets/images/home1.png");
  this.load.image("apple", "assets/images/apple.png");
  this.load.image("candy", "assets/images/candy.png");
  this.load.image("toy", "assets/images/rubber_duck.png");

  this.load.image("pet", "assets/images/howl.png");
};

gameScene.create = function() {
  let bg = this.add.sprite(0, 0, "yard");
  bg.setOrigin(0, 0);

  this.pet = this.add.sprite(320, 345, "pet", 0);

  this.appleBT = this.add.sprite(245, 360, "apple").setScale(0.6);
  this.candyBT = this.add.sprite(245, 410, "candy").setScale(0.6);
  this.toyBT = this.add.sprite(245, 310, "toy").setScale(0.6);
};

let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: gameScene,
  title: "Your Virtual Pet",
  pixelArt: false,
  backgroundColor: "ffffff"
};

let game = new Phaser.Game(config);
