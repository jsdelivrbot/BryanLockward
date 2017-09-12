class Ninja {
		constructor(name){
			this.name = name;
			this.speed = 3;
			this.strength = 3;
			this.health = 100;
		}

		sayName(){
			console.log(`My ninja name is ${this.name}`);
		}

		showStats(){
			console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
		}

		drinkSake(){
			this.health += 10;
			return this;
		}

	}

	class Sensei extends Ninja {
		constructor(name){
			super(name);
			this.speed = 10;
			this.strength = 10;
			this.wisdom = 10;
			this.health = 200;
		}

		speakWisdom(){
			super.drinkSake();
			console.log("Sweep the leg");
		}

		showStats(){
			console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
		}
	}

	let super_sensei = new Sensei("Ralph Macchio");
	super_sensei.speakWisdom();
	super_sensei.showStats();
