import "./error.css";

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <h3>{message}</h3>
    </div>
  );
};

export default Error;
