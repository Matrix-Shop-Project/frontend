import "../../sass/Chat.scss";
import io from "socket.io-client";
import Chat from "./Chat";
import { useState } from "react";




const socket = io.connect("http://vens.selfhost.co:5000");




function ChatApp() {
  const [username, setUsername] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [room, setRoom] = useState(1);
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="ChatApp">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Suport Chat</h3>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {/* <input
            type="text"
            placeholder="Room ID..."
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          /> */}
          <button onClick={joinRoom}>Ask Suport</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default ChatApp;
