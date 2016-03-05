door1AddressX = 0;
door1AddressY = 0;
door2AddressX = 0;
door2AddressY = 0;

enteredBoy = 0;
portalCount = 0;
numTeddy = 0;

Crafty.c('Boy', { 
	speed: 3,
	direction: 1,
	init: function() {
		this.requires('Actor, boy, Gravity, Collision, SpriteAnimation')
		.reel('boy_walking_left',600,0,0,5)
		.reel('boy_walking_right', 600,0,1,5)
		.animate('boy_walking_right', -1)
		.attr({x: 0, y: 0, w: Game.map_grid.tile.width, h: Game.map_grid.tile.height})
		.gravity('Solid')
		.gravityConst(2)
		.switchOnGrounds()
		.collidePlayer()
		.collideEnemy()
		.collideHazard()
		.bind("EnterFrame", function() {
			//Move the enemy in the game loop
			//If he hits the left edge of the screen
			if (this.x < 0) {
				this.switchDirection();
			}
			//If he hits the right edge of the screen OR it's the last level and he hits the house
			if ((this.x > Crafty.viewport.width - this.w) || (levelID == 8 && this.x > Crafty.viewport.width - this.w - 150)) {
				if (numTeddy == 0) {
					//Go to the next room
					this.reachedEnd();
				}
				else {
					this.switchDirection();
				}
			}
			//Right
			if (this.direction == 1) {
				this.x += this.speed;
			}
			//left
			else {
				this.x -= this.speed;
			}
			if (enteredBoy == 1 && !this.hit('Player1') && !this.hit('Player2')) {
				//console.log('portal ready');
				enteredBoy = 0;
			}
		})
	},

	reachedEnd: function() {
		if (levelID == 1)
			Crafty.trigger('GoTo2', this);
		else if (levelID == 2)
			Crafty.trigger('GoTo3', this);
		else if (levelID == 3)
			Crafty.trigger('GoTo4', this);
		else if (levelID == 4)
			Crafty.trigger('GoTo5', this);
		else if (levelID == 5)
			Crafty.trigger('GoTo6', this);
		else if (levelID == 6)
			Crafty.trigger('GoTo7', this);
		else if (levelID == 7)
			Crafty.trigger('GoTo8', this);
		else if (levelID == 8) {
			Crafty.trigger('GoToEnd', this);
		}
	},
	switchDirection: function() {
		this.direction *= -1;
		if(this.direction == 1) {
			this.animate('boy_walking_right', -1);
		}
		else {
			this.animate('boy_walking_left', -1);
		}
	},
	collideHazard: function() {
		this.onHit('Hazard', this.boyDie)
		return this;
	},
	collideEnemy: function() {
		this.onHit('Enemy', this.boyDie)
		return this;
	},

	collidePlayer: function() {
	 	this.onHit('Player1', this.teleport1)
	 	this.onHit('Player2', this.teleport2)
	 	return this;
	},

	teleport1: function() {
		if (portalCount == 2 && enteredBoy == 0) {
			this.x = door2AddressX;
			this.y = door2AddressY+72;
			enteredBoy = 1;
			blop.play();
		}
	},

	teleport2: function() {
		if (portalCount == 2 && enteredBoy == 0) {
			this.x = door1AddressX;
			this.y = door1AddressY+72;
			enteredBoy = 1;
			blop.play();
		}
	},

	boyDie: function() {
		open1_count = 0;
		open2_count = 0;
		isOpen = false;
		isOpen2 = false;
		
		portalCount = 0;
		door1AddressX = 0;
		door1AddressY = 0;
		door2AddressX = 0;
		door2AddressY = 0;

		var w = Game.map_grid.width;
    	var h = Game.map_grid.height;

		if (levelID == 3) {
			player1.open = false;
			player2.open = false;
			player1.destroy()
			player2.destroy()
			//Crafty.trigger('GoTo4', this);
		    player1 = Crafty.e('Player1')
			.attr({x: 300, y: 1000})
			//Insures Climbing platforms do not cause clipping
			player1.antigravity();
			player1.gravity();
				
			player2 = Crafty.e('Player2')
				.attr({x: 160,  y:1000})
			//Insures Climbing platforms do not cause clipping
			player2.antigravity();
			player2.gravity();

			Crafty.e('Boy')
			.attr({x: 100, y:1000})

			//Delete the old teddy bears!!
			teddy1.destroy();
			teddy2.destroy();

			teddy1 = Crafty.e('teddyBears').at(9, h - 5);
			teddy2 = Crafty.e('teddyBears').at(w - 8, h - 3);

			numTeddy = 2;
		}
		if (levelID == 4) {
			player1.open = false;
			player2.open = false;
			player1.destroy()
			player2.destroy()
			//Crafty.trigger('GoTo4', this);
		    player1 = Crafty.e('Player1')
			.attr({x: 300, y: 1000})
			//Insures Climbing platforms do not cause clipping
			player1.antigravity();
			player1.gravity();
				
			player2 = Crafty.e('Player2')
				.attr({x: 160,  y:1000})
			//Insures Climbing platforms do not cause clipping
			player2.antigravity();
			player2.gravity();

			Crafty.e('Boy')
			.attr({x: 100, y:1000})

			//Delete the old teddy bears!!
			teddy1.destroy();
			teddy2.destroy();
			teddy3.destroy();

			teddy1 = Crafty.e('teddyBears').at(17, h - 7);
			teddy2 = Crafty.e('teddyBears').at(16, h - 12);
			teddy3 = Crafty.e('teddyBears').at(25, h - 10);

			numTeddy = 3;
		}
		if (levelID == 5) {
			player1.open = false;
			player2.open = false;
			player1.destroy()
			player2.destroy()
			//Crafty.trigger('GoTo4', this);
		    player1 = Crafty.e('Player1')
			.attr({x: 300, y: 650})
			//Insures Climbing platforms do not cause clipping
			player1.antigravity();
			player1.gravity();
				
			player2 = Crafty.e('Player2')
				.attr({x: 160,  y:650})
			//Insures Climbing platforms do not cause clipping
			player2.antigravity();
			player2.gravity();

			Crafty.e('Boy')
			.attr({x: 0, y:650})

			teddy1.destroy();
			teddy2.destroy();
			teddy3.destroy();

			teddy1 = Crafty.e('teddyBears').at(3, h - 4);
			teddy2 = Crafty.e('teddyBears').at(15, h - 4);
			teddy3 = Crafty.e('teddyBears').at(20, h - 4);

			numTeddy = 3;
		}
		//FOR THE BOYDEATH CONDITIONAL
        else if (levelID == 6) {
            player1.open = false;
            player2.open = false;
            player1.destroy()
            player2.destroy()
		    player1 = Crafty.e('Player1')
				.attr({x: 200, y: 950})
			//Insures Climbing platforms do not cause clipping
			player1.antigravity();
			player1.gravity();
				
			player2 = Crafty.e('Player2')
				.attr({x: 100,  y: 950})
			//Insures Climbing platforms do not cause clipping
			player2.antigravity();
			player2.gravity();

			boy = Crafty.e('Boy')
			.attr({x: 0, y:1100})

            teddy1.destroy();
            teddy2.destroy();

        	teddy1 = Crafty.e('teddyBears').at(13, h - 3);
        	teddy2 = Crafty.e('teddyBears').at(13, h - 9);

        	numTeddy = 2;
        }
        //FOR THE BOYDEATH CONDITIONAL
        else if (levelID == 7) {
            player1.open = false;
            player2.open = false;
            player1.destroy()
            player2.destroy()

            teddy1.destroy();
            teddy2.destroy();
            teddy3.destroy();

			// Teddies
        	teddy1 = Crafty.e('teddyBears').at(17, h - 12);
        	teddy2 = Crafty.e('teddyBears').at(13, h - 9);
        	teddy3 = Crafty.e('teddyBears').at(16, h - 6);

        	player1 = Crafty.e('Player1')
			.attr({x: 200, y: 700})
			//Insures Climbing platforms do not cause clipping
			player1.antigravity();
			player1.gravity();
				
			player2 = Crafty.e('Player2')
				.attr({x: 50,  y: 700})
			//Insures Climbing platforms do not cause clipping
			player2.antigravity();
			player2.gravity();

            Crafty.e('Boy')
            .attr({x: 120, y: 700})

            numTeddy = 3;
        }
        //FOR THE BOYDEATH CONDITIONAL
        else if (levelID == 8) {
            player1.open = false;
            player2.open = false;
            player1.destroy()
            player2.destroy()

            teddy1.destroy();
            teddy2.destroy();
            teddy3.destroy();

			// Teddies
       		teddy1 = Crafty.e('teddyBears').at(3,7);
       		teddy2 = Crafty.e('teddyBears').at(12,8);
       		teddy3 = Crafty.e('teddyBears').at(20,7);

        	
		    player1 = Crafty.e('Player1')
				.attr({x: 200, y: 1000})
			//Insures Climbing platforms do not cause clipping
			player1.antigravity();
			player1.gravity();
				
			player2 = Crafty.e('Player2')
				.attr({x: 50,  y: 1000})
			//Insures Climbing platforms do not cause clipping
			player2.antigravity();
			player2.gravity();

			boy = Crafty.e('Boy')
			.attr({x: 20, y: 1000})

            numTeddy = 3;
        }
		this.destroy();
	},

	// Registers a stop-movement function to be called when
	// this entity hits an entity with the "Ground" component
	switchOnGrounds: function() {
		this.onHit('Solid', this.switchDirection);
		return this;
	}
})
