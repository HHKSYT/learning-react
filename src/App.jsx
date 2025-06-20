import { useState } from "react";
import UserGreeting from "./UserGreeting.jsx";
import Button from './Button.jsx';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const handleLoginToggle = () => {
    setisLoggedIn(prev => !prev)
  };
  return (
    <>
      <UserGreeting isLoggedIn={isLoggedIn} />;
      <Button onLoginToggle={handleLoginToggle} />;
    </>
  );
}

export default App;
