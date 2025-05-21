// import { useState } from "react";
import UserMessage from "./components/Chat/UserMessage/UserMessage";
import ServerMessage from "./components/Chat/ServerMessage/ServerMessage";
import Form from "./components/Chat/Form/Form";
import "./App.scss";
import "./components/Chat/Chat.scss";
import sendIcon from "./assets/sendIcon.svg";

function App() {
  // const [messages, setMessages] = useState([]);

  const messages = [
    {
      content: "Сообщение пользователя",
      role: "user",
    },
    {
      content: "Сообщение сервера",
      role: "agent",
    },
  ];

  return (
    <div className="App">
      <section className="chat-threads__container">
        <h2>Лист бесед</h2>
        <ol>
          <li>Беседа про котиков</li>
          <li>Беседа про собачек</li>
          <li>Беседа про хомячков</li>
        </ol>
      </section>
      <section className="main-container">
        <h1>Balabot AI</h1>
        <div className="chat-wrapper">
          <UserMessage>{messages[0].content}</UserMessage>
          <ServerMessage>{messages[1].content}</ServerMessage>
          {/* {messages.map((msg, index) => {
            msg.role === "agent" ? (
              <ServerMessage>{msg.content}</ServerMessage>
            ) : (
              <UserMessage>{msg.content}</UserMessage>
            );
          })} */}
        </div>
        <Form>
          <input type="text" placeholder="Нужно ли мыть кошку?"></input>
          <button>
            <img src={sendIcon} alt="Отправить сообщение"></img>
          </button>
        </Form>
      </section>
    </div>
  );
}

export default App;
