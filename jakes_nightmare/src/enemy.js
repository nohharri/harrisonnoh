door1AddressX = 0;
door1AddressY = 0;
door2AddressX = 0;
door2AddressY = 0;

enteredEnemy = 0;
portalCount = 0;

Crafty.c('Enemy', { 
	speed: 2,
	direction: -1,
	init: function() {
		this.requires('Actor, enemy, Gravity, Collision, SpriteAnimation')
		.attr({x: 0, y: 0, w: Game.map_grid.tile.width, h:Game.map_grid.tile.height})
		.gravity('Solid')
		.gravityConst(.3)
		.reel('enemy_left',400,0,0,3)
		.reel('enemy_right' ,400,0,1,3)
		.animate('enemy_right',-1)
		.switchOnSolids()
		.collideHazard()
		.collideBoundary()
		.bind("EnterFrame", function() {
			//Move the enemy in the game loop
			//If it hits the edge of the screen
			if (this.x > Crafty.viewport.width - this.w || this.x < 0){
				//console.log("OH HAI")
				//Switch directions
				this.switchDirection();
			}
			//Right
			if (this.direction == 1) {
				this.x += this.speed;
			}
			//left
			else {
				this.x -= this.speed;
			}
		})
	},

	setDirection: function(dir) {
		this.direction = dir;
	},
	setEnemyEntered: function(val) {
		this.enteredEnemy = val;
	},
	switchDirection: function() {
		this.direction *= -1;
		if(this.direction == 1)
			this.animate('enemy_right', -1);
		else
			this.animate('enemy_left', -1);
	},
	collideBoundary: function() {
		this.onHit('Boundary', this.switchDirection)
		return this;
	},

	collideHazard: function() {
		this.onHit('Hazard', this.enemyDie)
		return this;
	},

	enemyDie: function() {
		this.destroy()
	},
	// Registers a stop-movement function to be called when
	// this entity hits an entity with the "Solfid" component
	switchOnSolids: function() {
		this.onHit('Solid', this.switchDirection);
		return this;
	}
})
