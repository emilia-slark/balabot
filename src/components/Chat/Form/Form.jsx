import "./Form.scss";

export default function Form({ onSubmit, children }) {
  return (
    <form className="chat__form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
