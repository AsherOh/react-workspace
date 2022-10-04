import { useState, useEffect } from "react";
import AppRouter from "./components/AppRouter";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeContext.Provider value={isLoggedIn}>
      <div className="App">
        <button>Clicked</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
