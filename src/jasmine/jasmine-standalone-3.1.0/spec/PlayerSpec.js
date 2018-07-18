describe("A Player ", function () {

  var player;
  var dealer;

  beforeEach(function () {
    let blackJack = new BlackJack(1);
    dealer = blackJack.dealer;
    player = dealer.players[0];
  });

  it("should have 0 cards before first hand is dealt", function () {

    let preDealtCardCount = player.cards.length;

    expect(preDealtCardCount).toBe(0);
  })

  it("should have 2 cards when first hand is dealt", function () {

    dealer.deal();

    let postDealtCardCount = player.cards.length;

    expect(postDealtCardCount).toBe(2);
  });

  it("should get a new card when player decides to hit", function () {

    dealer.deal();

    player.hit = true;

    dealer.deal();

    let playerCardCount = player.cards.length;

    expect(playerCardCount).toBe(3);
  });

  it("shouldn't get a new card when player decides to stay", function () {

    dealer.deal();

    player.hit = false;

    dealer.deal();

    let playerCardCount = player.cards.length;

    expect(playerCardCount).toBe(2);
  });
});