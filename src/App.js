import React from "react";
import "./App.css";
import Sidebar from "./Components/SideBar/Sidebar";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* SideBar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
