import React from "react";
import "./styles/App.css";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
