import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Send } from "lucide-react";
import { hammad } from "../assets/export";
import { characters } from "./characters";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

// const characters = [
//   {
//     id: "1",
//     name: "Hammad Ul Haq",
//     description: "Hi I am Hammad, Senior Web Developer Hehe.",
//     profilePic: hammad,
//     instruction:
//       "Har jawab Roman Urdu mein do aur ek dostana lekin kabhi kabhi rukha ya ghussa lead developer ban kar jawab do. Har conversation ke baad hansna zaroori hai, funny aur witty ho. Tumhara naam Hammad hai.",
//   },
// ];

const ChatPage = () => {
  const { characterId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  useEffect(() => {
    const character = characters.find((char) => char.id === characterId);
    setSelectedCharacter(character);
  }, [characterId]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek/deepseek-chat:free",
            messages: [
              { role: "system", content: selectedCharacter.instruction },
              ...messages,
              newMessage,
            ],
          }),
        }
      );

      const data = await response.json();
      const botReply =
        data?.choices?.[0]?.message?.content || "I couldn't process that.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: botReply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error fetching response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      {/* Chat Header */}
      {selectedCharacter && (
        <div className="flex items-center space-x-4 p-4 bg-gray-800 border-b border-gray-700">
          <button onClick={handleBack} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 5l-7 7 7 7" />
            </svg>
          </button>
          <img
            src={selectedCharacter.profilePic}
            alt={selectedCharacter.name}
            className="w-14 h-14 object-cover rounded-full border-2 border-blue-500"
          />
          <div>
            <h2 className="text-2xl font-semibold">{selectedCharacter.name}</h2>
            <p className="text-sm text-gray-400">
              {selectedCharacter.description}
            </p>
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 p-6 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 mb-4 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <img
              src={
                msg.role === "user"
                  ? "https://via.assets.so/album.png?id=8&q=95&w=360&h=360&fit=fill"
                  : selectedCharacter?.profilePic
              }
              alt={msg.role === "user" ? "User" : selectedCharacter?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div
              className={`px-4 py-3 rounded-lg max-w-xs ${
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              <p>{msg.content}</p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-start justify-start mb-4 animate-pulse">
            <div className="flex items-center space-x-3">
              <img
                src={selectedCharacter?.profilePic}
                alt={selectedCharacter?.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="px-4 py-3 rounded-lg max-w-xs bg-gray-700 text-white">
                <p>Typing...</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="p-4 flex items-center border-t border-gray-700">
        <input
          type="text"
          className="flex-1 p-4 rounded-full bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="ml-4 p-4 bg-purple-500 rounded-full hover:bg-purple-500 transition duration-300"
          onClick={sendMessage}
          disabled={loading}
        >
          <Send className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
