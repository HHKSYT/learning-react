import { useState } from "react";
import Button from "./Button";
import UserGreeting from "./Auth"; // renders first card if logged in
import Card from "./Card";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState([]); // list of extra cards
  const [cardCount, setCardCount] = useState(1); // to make each card unique

  const handleLoginToggle = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const handleAddCard = () => {
    const newCard = {
      id: cardCount,
      name: `Card #${cardCount}`,
      age: 10 + cardCount,
      info: "Extra card info",
    };

    setCards((prevCards) => [...prevCards, newCard]);
    setCardCount((prev) => prev + 1);
  };

  return (
    <div>
      <UserGreeting isLoggedIn={isLoggedIn} />

      {/* Login toggle button */}
      <Button onLoginToggle={handleLoginToggle} />

      {/* Button to add new cards */}
      <button onClick={handleAddCard} style={{ marginTop: "10px" }}>
        Add Card
      </button>

      {/* Render each card from cards array */}
      {cards.map((card) => (
        <Card key={card.id} name={card.name} age={card.age} info={card.info} />
      ))}
    </div>
  );
}

export default App;
