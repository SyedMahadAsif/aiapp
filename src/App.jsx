import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPage from "./components/ChatPage";
import CharacterSelectionPage from "./components/CharacterSelectionPage";
import SplashScreen from "./components/SplashScreen";
import ExplorePage from "./components/ExplorePage";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/selectcharacter" element={<CharacterSelectionPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/about" element={<About />} />

        <Route path="/chat/:characterId" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
