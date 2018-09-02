describe("A Player ", function () {

  var player;
  var dealer;

  beforeEach(function () {
    let factory = new BlackJackFactory();
    let blackJack = factory.create();
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

    dealer.cards = [new Card(2, 2), new Card(2, 2)];

    dealer.deal();

    let playerCardCount = dealer.cards.length;

    expect(playerCardCount).toBe(3);
  });

  it("shouldn't get a new card when player decides to stay", function () {

    dealer.deal();

    player.hit = false;

    dealer.deal();

    let playerCardCount = player.cards.length;

    expect(playerCardCount).toBe(2);
  });

  it("should return 21 when a player has an ace and a face card", function () {

    let highestFaceCard = 12;
    let lowestFaceCard = 10;
    let faceCard = Math.floor(Math.random() * (highestFaceCard - lowestFaceCard + 1)) + lowestFaceCard;

    let highestSuit = 3;
    let lowestSuit = 0;
    let randomSuit = Math.floor(Math.random() * (highestSuit - lowestSuit + 1)) + lowestSuit

    player.cards = [new Card(randomSuit, 0), new Card(randomSuit, faceCard)]

    expectPlayerScoreToBe(player, 21);
  });

  it("should return 21 when a player has an ace and a 10", function () {

    player.cards = [new Card(0, 0), new Card(0, 9)];

    expectPlayerScoreToBe(player, 21);
  });

  it("should return 21 when a player has 2 face cards and an ace", function () {

    player.cards = [new Card(0, 9), new Card(1, 10), new Card(2, 0)];

    expectPlayerScoreToBe(player, 21);
  });

  it("should return 21 when a player has cards equaling 20 and an ace", function () {

    player.cards = [new Card(0, 4), new Card(0, 5), new Card(1, 8), new Card(1, 0)];

    expectPlayerScoreToBe(player, 21);
  });
});

function expectPlayerScoreToBe(player, expectedScore) {
  var playerScore = player.score;
  expect(playerScore).toBe(expectedScore);
}