import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";
import Country from "./components/country";
import HomePage from "./components/home";
import Profile from "./components/profile";
import Book from "./components/book";
import Done from "./components/done";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/country" element={<Country />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/1" element={<Profile />} />
        <Route path="/book" element={<Book />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </div>
  );
}

export default App;
