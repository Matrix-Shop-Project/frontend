import "../../sass/Chat.scss";
import io from "socket.io-client";
import Chat from "./Chat";
import { useState } from "react";
import { useUser } from "../../Context/UserContext";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const socket = io.connect("https://matrixshop-chat-app.herokuapp.com/", {
  withCredentials: true,
});

function ChatApp() {
  const token = useUser();
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

          {token.user ? (<>
            <FormGroup>
              <h3>Suport Chat</h3>
              <span>Hi! {token.user.name}</span>
              <hr />
              <FormControlLabel
                control={<Checkbox
                  onChange={() => {
                    setUsername(token.user.name);
                  }}
                />}
                label="Ich stimme den AGB und der Datenschutzerkl√§rung zu"
              />
              <div>
                <button type='submit' onClick={joinRoom} value="submit">Ask Suport</button>
              </div>
            </FormGroup>
          </>) : (<>

            <FormGroup>
              <h3>Suport Chat</h3>
              <hr />
              <FormControlLabel
                control={<Checkbox
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />}
                label="Ich stimme den AGB und der Datenschutzerkl√§rung zu"
              />
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }} />
                <button onClick={joinRoom}>Ask Suport</button>
              </div>
            </FormGroup>
          </>)}

          {/* <input
            type="text"
            placeholder="Room ID..."
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          /> */}
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default ChatApp;
