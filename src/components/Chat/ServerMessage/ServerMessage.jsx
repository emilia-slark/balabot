import "./ServerMessage.scss";

export default function ServerMessage({ children }) {
  return (
    <div className="chat__message-wrapper">
      <span className="chat__message-server">{children}</span>
    </div>
  );
}
