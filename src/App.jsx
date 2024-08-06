import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Header from "./components/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";

// Creamos la función
const App = () => {
  return (
    <div className="app">
      <Header /> {/* llamamos al header */}
      <Routes>
        {/*Añadimos las rutas*/}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:title" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
