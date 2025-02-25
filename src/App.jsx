import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPage from "./components/ChatPage";
import CharacterSelectionPage from "./components/CharacterSelectionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterSelectionPage />} />
        <Route path="/chat/:characterId" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
