import { useParams } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const { title } = useParams();
  return (
    <div className="contact">
      <h1>{title}</h1> {/*Esto es lo que se envia al app.jsx*/}
    </div>
  );
};

export default Contact;
