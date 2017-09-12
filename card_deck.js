class Deck
{
  constuctor()
  {
    this.deck=[]
  }
  setDeck()
  {
    this.deck=[];
    var nums=[2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"];
    var suits=["Spades","Hearts","Clubs","Diamonds"];
    for (let suit in suits)
    {
      for(let num in nums)
      {
        let holder=(nums[num] +" of "+suits[suit]);
        this.deck.push(holder);
      }
    }
    return this;
  }
  shuffleDeck()
  {
    for(let i=0;i<this.deck.length;i++)
    {
      let x=(Math.floor(Math.random()*52));
      let holder=this.deck[i];
      this.deck[i]=this.deck[x];
      this.deck[x]=holder;
    }
    return this;
  }
  deal()
  {
    return this.deck.pop();
  }
}


class Player
{
  constructor(name)
  {
    this.name=name;
    this.hand=[];
  }
  draw(deck)
  {
    this.hand.push(deck.deal());
    return this;
  }
  discard()
  {
    this.hand.pop();
    return this;
  }
}

var deck1=new Deck();
deck1.setDeck();
deck1.shuffleDeck();
var scott=new Player("Scott");
scott.draw(deck1);
scott.draw(deck1);
console.log(scott.hand)
