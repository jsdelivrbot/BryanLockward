var Ninja = function Ninja(name)
{
	this.name = name;
	this.health = 100;
	var speed = 3;
	var strength = 3;

	this.showStats = function()
  {
		console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
		return this;
	}
}

Ninja.prototype.sayName = function()
{
	console.log("My name is " + this.name);
	return this;
}

Ninja.prototype.drinkSake = function()
{
	this.health += 10;
	return this;
}
Ninja.prototype.punch= function(punchee)
{
  if(punchee instanceof Ninja)
  {
    punchee.health-=5;
    console.log(this.name +" just punched "+punchee.name +" and lost 5 health");
  }
  else
  {
    console.log("Not a Ninja");
  }
  return this;
}
Ninja.prototype.kick= function(kickee)
{
  if(kickee instanceof Ninja)
  {
    kickee.health-=15;
    console.log(this.name +" just kicked "+kickee.name +" and lost 15 health");
  }
  else
  {
    console.log("Not a ninja");
    return this
  }
}

var new_ninja = new Ninja("Bryan");
var new_ninja2 = new Ninja("Steve");
new_ninja2.kick(new_ninja);
new_ninja.showStats();
new_ninja.punch(new_ninja2);
new_ninja2.showStats();
