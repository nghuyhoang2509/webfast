import React from "react";
import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import MakeWeb from "./pages/MakeWeb";
import DashBoard from "./pages/DashBoard";

import AuthProvider from "./components/AuthProvider";

import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/" element={<DashBoard />} />
              <Route exact path="/design" element={<MakeWeb />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
