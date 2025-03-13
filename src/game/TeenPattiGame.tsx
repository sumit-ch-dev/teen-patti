import { useState } from "react";

// declare types for suits and values
type Suit = "♠" | "♥" | "♦" | "♣";
type Value =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

// declare card type
type Card = {
  suit: Suit;
  value: Value;
};

// declare deck type

type Deck = Card[];

export default function TeenPattiGame() {
  // Declare Suits and Values
  const suits: Suit[] = ["♠", "♥", "♦", "♣"];
  const values: Value[] = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  // Generate Deck
  const generateDeck = () => {
    const deck: Deck = [];
    for (const suit of suits) {
      for (const value of values) {
        deck.push({ suit, value });
      }
    }
    return deck;
  };

  // Shuffle Deck
  const shuffleDeck = (deck: Deck) => {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Distribute Cards
  const dealCards = (shuffledDeck: Deck) => {
    return [shuffledDeck.slice(0, 3), shuffledDeck.slice(3, 6)];
  };

  const [deck, setDeck] = useState(shuffleDeck(generateDeck()));
  const [players, setPlayers] = useState(dealCards(deck));

  const shuffleAndDeal = () => {
    const newDeck = shuffleDeck(generateDeck());
    setDeck(newDeck);
    setPlayers(dealCards(newDeck));
  };

  const Card = ({ suit, value }: Card) => (
    <div className="w-12 h-16 bg-white rounded-lg flex items-center justify-center border-2 border-black text-black font-bold">
      {value} {suit}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-700 p-4">
      {/* Game Table */}
      <div className="relative w-full max-w-3xl bg-green-800 border-4 border-yellow-500 rounded-lg p-4 grid grid-cols-3 grid-rows-3 gap-4 items-center justify-center">
        <h2 className="col-span-3 text-white text-xl font-bold text-center">
          Teen Patti Table
        </h2>

        {/* Player Areas */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 text-white p-2 rounded-lg">Player 1</div>
          <div className="flex space-x-2 mt-2">
            {players[0].map((card, index) => (
              <Card key={index} suit={card.suit} value={card.value} />
            ))}
          </div>
        </div>

        <div></div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-800 text-white p-2 rounded-lg">Player 2</div>
          <div className="flex space-x-2 mt-2">
            {players[1].map((card, index) => (
              <Card key={index} suit={card.suit} value={card.value} />
            ))}
          </div>
        </div>

        {/* Center Pot */}
        <div className="col-span-3 flex items-center justify-center">
          <div className="bg-yellow-500 text-black font-bold p-2 rounded-lg">
            Pot: 0 Chips
          </div>
        </div>
      </div>

      {/* Shuffle & Deal Button */}
      <button
        onClick={shuffleAndDeal}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Shuffle & Deal
      </button>
    </div>
  );
}
