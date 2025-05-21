import "./UserMessage.scss";

export default function UserMessage({ children }) {
  return (
    <div className="chat__message-wrapper">
      <span className="chat__message-user">{children}</span>
    </div>
  );
}