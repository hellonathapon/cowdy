import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import * as S from "./styled";
import { Header, Chat } from "./components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login, Home } from "./pages";

export interface Message {
  text: string;
  timeStamp: Date;
  owner: boolean;
  type: string;
}

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
